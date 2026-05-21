//@ts-expect-error: Will be resolved by wrangler build
import { handleCdnCgiImageRequest, handleImageRequest } from "./cloudflare/images.js";
//@ts-expect-error: Will be resolved by wrangler build
import { runWithCloudflareRequestContext } from "./cloudflare/init.js";
//@ts-expect-error: Will be resolved by wrangler build
import { maybeGetSkewProtectionResponse } from "./cloudflare/skew-protection.js";
// @ts-expect-error: Will be resolved by wrangler build
import { handler as middlewareHandler } from "./middleware/handler.mjs";
//@ts-expect-error: Will be resolved by wrangler build
export { DOQueueHandler } from "./.build/durable-objects/queue.js";
//@ts-expect-error: Will be resolved by wrangler build
export { DOShardedTagCache } from "./.build/durable-objects/sharded-tag-cache.js";
//@ts-expect-error: Will be resolved by wrangler build
export { BucketCachePurge } from "./.build/durable-objects/bucket-cache-purge.js";
export default {
    async fetch(request, env, ctx) {
        return runWithCloudflareRequestContext(request, env, ctx, async () => {
            const response = maybeGetSkewProtectionResponse(request);
            if (response) {
                return response;
            }
            const url = new URL(request.url);
            // Serve images in development.
            // Note: "/cdn-cgi/image/..." requests do not reach production workers.
            if (url.pathname.startsWith("/cdn-cgi/image/")) {
                return handleCdnCgiImageRequest(url, env);
            }
            // Fallback for the Next default image loader.
            if (url.pathname ===
                `${globalThis.__NEXT_BASE_PATH__}/_next/image${globalThis.__TRAILING_SLASH__ ? "/" : ""}`) {
                return await handleImageRequest(url, request.headers, env);
            }
            // - `Request`s are handled by the Next server
            
            // Try to serve static HTML files from assets first
            // This handles SSG pre-rendered pages that were copied to assets
            // Only try for paths that don't have a file extension (i.e., page routes)
            if (!url.pathname.includes('.')) {
                try {
                    // Build the asset path: /blog/api-design-principles -> /blog/api-design-principles/index.html
                    let assetPath = url.pathname;
                    if (assetPath === '/' || assetPath === '') {
                        assetPath = '/index.html';
                    } else {
                        assetPath = assetPath.endsWith('/') ? assetPath + 'index.html' : assetPath + '/index.html';
                    }
                    
                    // Use env.ASSETS.fetch with a Request object
                    const assetRequest = new Request('https://fake-host' + assetPath, {
                        method: 'GET',
                        headers: request.headers,
                    });
                    const assetResponse = await env.ASSETS.fetch(assetRequest);
                    if (assetResponse.status === 200) {
                        const headers = new Headers(assetResponse.headers);
                        if (!headers.has('Content-Type')) {
                            headers.set('Content-Type', 'text/html');
                        }
                        return new Response(assetResponse.body, {
                            status: 200,
                            headers,
                        });
                    }
                } catch (e) {
                    // ASSETS.fetch failed, fall through to middleware
                }
            }

            const reqOrResp = await middlewareHandler(request, env, ctx);
            if (reqOrResp instanceof Response) {
                return reqOrResp;
            }
            // @ts-expect-error: resolved by wrangler build
            const { handler } = await import("./server-functions/default/handler.mjs");
            return handler(reqOrResp, env, ctx, request.signal);
        });
    },
};

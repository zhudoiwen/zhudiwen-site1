"use client";

import * as React from "react";

export type Theme = "light" | "dark" | "system";

export interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

// 使用稳定的上下文创建，避免HMR时重新创建导致上下文丢失
const ThemeProviderContext = React.createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

// 显示上下文名称，便于调试
ThemeProviderContext.displayName = "ThemeProviderContext";

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  // 使用useRef存储可变状态，避免闭包问题
  const themeRef = React.useRef<Theme>(defaultTheme);
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);

  // 系统主题监听
  React.useEffect(() => {
    if (!enableSystem) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleSystemThemeChange = () => {
      if (themeRef.current === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(systemTheme);
      }
    };

    // 添加监听
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [enableSystem]);

  // 初始化主题
  React.useEffect(() => {
    const root = document.documentElement;
    try {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      
      if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
        themeRef.current = savedTheme;
        setThemeState(savedTheme);
      } else if (defaultTheme === "system" && enableSystem) {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
        themeRef.current = "system";
        setThemeState("system");
      } else {
        themeRef.current = defaultTheme;
        setThemeState(defaultTheme);
      }
    } catch (e) {
      //  localStorage不可用时降级处理
      themeRef.current = defaultTheme;
      setThemeState(defaultTheme);
    }
  }, [defaultTheme, enableSystem]);

  // 主题变更时更新DOM
  React.useEffect(() => {
    const root = document.documentElement;
    
    if (disableTransitionOnChange) {
      root.classList.add("disable-transitions");
      window.requestAnimationFrame(() => {
        root.classList.remove("disable-transitions");
      });
    }

    if (attribute === "class") {
      root.classList.remove("light", "dark");
      if (theme === "system" && enableSystem) {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
        root.classList.add(systemTheme);
      } else {
        root.classList.add(theme);
      }
    } else {
      root.setAttribute(attribute, theme);
    }

    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // 忽略localStorage写入错误
    }
    
    themeRef.current = theme;
  }, [theme, attribute, enableSystem, disableTransitionOnChange]);

  // 稳定的setTheme回调，不会在重新渲染时改变
  const setTheme = React.useCallback((newTheme: Theme) => {
    if (!["light", "dark", "system"].includes(newTheme)) {
      newTheme = "system";
    }
    themeRef.current = newTheme;
    setThemeState(newTheme);
  }, []);

  // 稳定的上下文值，只有在必要时才更新
  const contextValue = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  );

  return (
    <ThemeProviderContext.Provider value={contextValue}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

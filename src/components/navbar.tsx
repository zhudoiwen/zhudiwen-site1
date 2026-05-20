"use client";

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/core/dock';
import { DATA } from '@/data/resume';
import { useTheme } from "@/components/theme-provider";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  
  const navItems = [
    ...DATA.navbar,
    ...Object.entries(DATA.contact.social)
      .filter(([_, social]) => social.navbar)
      .map(([_, social]) => ({
        href: social.url,
        icon: social.icon,
        label: social.name
      }))
  ];

  const iconColor = theme === "dark" ? "text-white/80" : "text-gray-800/80";

  return (
    <div className='fixed bottom-6 left-1/2 max-w-full -translate-x-1/2 z-50 px-4'>
      <Dock>
        {navItems.map((item, idx) => (
          <DockItem
            key={idx}
            href={item.href}
          >
            <DockLabel>{item.label}</DockLabel>
            <DockIcon>
              <item.icon className={`h-full w-full ${iconColor}`} />
            </DockIcon>
          </DockItem>
        ))}
        <DockItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <DockLabel>主题</DockLabel>
          <DockIcon>
            {theme === "dark" ? (
              <SunIcon className={`h-full w-full ${iconColor}`} />
            ) : (
              <MoonIcon className={`h-full w-full ${iconColor}`} />
            )}
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket, Terminal, Library, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Getting Started",
    href: "/",
    icon: Rocket,
  },
  {
    title: "CLI Usage",
    href: "/cli",
    icon: Terminal,
  },
  {
    title: "Python Library",
    href: "/library",
    icon: Library,
  },
  {
    title: "API Reference",
    href: "/api-reference",
    icon: BookOpen,
  },
];

export function SideNavBar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block md:w-64 border-r border-border">
      <div className="h-full py-6 pr-6 pl-4 lg:py-8">
        <div className="w-full">
          <div className="pb-4 mb-4 border-b border-border">
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Documentation</h4>
            <div className="px-2 text-xs text-muted-foreground">v1.0.0</div>
          </div>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "group flex w-full items-center rounded-md border border-transparent px-2 py-2 hover:bg-muted hover:text-foreground",
                    isActive
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}

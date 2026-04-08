"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { Pin } from "lucide-react";

const tabs = [
  { name: "Summary", href: "/projects/summary" },
  { name: "Board", href: "/projects/board" },
  { name: "Calendar", href: "/projects/calendar" },
  { name: "Timeline", href: "/projects/timeline" },
  { name: "Issues", href: "/projects/issues" },
  { name: "Reports", href: "/projects/reports" },
  { name: "Project settings", href: "/projects/settings" },
];

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectTab = tabs.some(tab => pathname.startsWith(tab.href));

  // If it's a completely overridden page like List, Details, or Create, we don't render the layout shell
  // We just render children because they have their own comprehensive Sidebar/Header to prevent duplication.
  const isCustomFullPage = pathname.includes('/list') || pathname.includes('/create') || pathname.match(/\/projects\/[A-Za-z0-9-]+$/);

  if (isCustomFullPage && !pathname.includes('/summary') && !pathname.includes('/board')) {
     return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans selection:bg-blue-500/30">
      <Sidebar />
      
      <div className="flex flex-1 flex-col lg:pl-60">
        <Header />
        
        <main className="flex-1 flex flex-col bg-zinc-50">
          {/* Project Title and Header Area */}
          {isProjectTab && (
            <div className="px-6 py-4 border-b border-zinc-200 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 text-lg">
                  🚋
                </div>
                <h1 className="text-xl font-bold text-zinc-900">The Next Big Thing</h1>
                <Pin className="h-4 w-4 text-zinc-400 cursor-pointer hover:text-zinc-600" />
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                  <Link
                    key={tab.name}
                    href={tab.href}
                    className={cn(
                      "text-sm font-medium pb-2 border-b-2 transition-all whitespace-nowrap",
                      pathname === tab.href 
                        ? "border-blue-600 text-blue-600" 
                        : "border-transparent text-zinc-500 hover:text-zinc-800"
                    )}
                  >
                    {tab.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex-1 flex flex-col">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  LayoutDashboard,
  BarChart2,
  ChevronRight,
  Plus,
  Settings,
  HelpCircle,
  BookMarked,
  Layers,
  Users2,
  Timer,
  Home,
  Star,
  Target,
  Hash,
  Bell,
  FileText,
  Compass,
  Box,
  LayoutGrid,
  MoreHorizontal
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Projects", icon: BookMarked, href: "/projects" },
  { label: "CAB Meeting", icon: Users2, href: "/cab" },
  { label: "Reports", icon: BarChart2, href: "/reports/dashboard" },
];

const adminItems = [
  { label: "User Management", icon: Users2, href: "/admin/users" },
  { label: "Audit Trail", icon: FileText, href: "/admin/audit" },
  { label: "Notifications", icon: Bell, href: "/settings/notifications" },
];


export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 border-r border-zinc-200 bg-white lg:block">
      <div className="flex h-full flex-col">
        {/* Logo Section */}
        <div className="flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white font-bold text-lg">
              T
            </div>
            <span className="font-bold text-zinc-900 tracking-tight text-xl uppercase">Ticketing</span>
          </Link>
        </div>

        <ScrollArea className="flex-1">
          <div className="space-y-6 py-4 px-3">
            {/* User Profile / Main Nav */}
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-600">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://media.licdn.com/dms/image/v2/D5635AQErDDFPKsG-kA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1679738576014?e=1776225600&v=beta&t=7TRT9dgIUX9WxA_8X2IOTse5lOwoQSTopJvgpujy4eg" />
                  <AvatarFallback>CH</AvatarFallback>
                </Avatar>
                Idrus Afandi
                <MoreHorizontal className="ml-auto h-4 w-4 text-zinc-400 opacity-0 group-hover:opacity-100" />
              </div>
              
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-full justify-start gap-3 px-3 text-sm font-medium h-9 transition-all",
                    pathname === item.href
                      ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                      : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"
                  )}
                >
                  <item.icon className={cn("h-4 w-4", pathname === item.href ? "text-blue-600" : "text-zinc-400")} />
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-0.5 border-t border-zinc-100 pt-4">
               <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                 Administration
               </div>
               {adminItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-full justify-start gap-3 px-3 text-sm font-medium h-9 transition-all",
                    pathname === item.href
                      ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                      : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"
                  )}
                >
                  <item.icon className={cn("h-4 w-4", pathname === item.href ? "text-blue-600" : "text-zinc-400")} />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </ScrollArea>

        {/* Settings and Help */}
        <div className="border-t border-zinc-100 p-4 space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-3 px-3 text-[10px] font-bold uppercase tracking-wider h-8 text-zinc-400 hover:text-zinc-950">
             Customise sidebar
          </Button>
        </div>
      </div>
    </aside>
  );
}

"use client";

import { 
  Search, 
  Bell, 
  Settings, 
  HelpCircle,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="flex h-14 w-full items-center justify-between border-b border-zinc-200 bg-white px-6 shrink-0 z-30">
      {/* Left Section: Search */}
      <div className="flex flex-1 items-center max-w-md">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 group-focus-within/field:text-blue-500 transition-colors" />
          <Input 
            placeholder="Search tasks, people, or documents..." 
            className="h-9 w-full rounded-md border-zinc-200 bg-zinc-50/50 pl-10 text-xs font-medium focus-visible:ring-blue-500/20 focus-visible:border-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-1.5 ml-4">
        <Button className="h-8 bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold px-3 hidden sm:flex">
          <Plus className="h-4 w-4" /> Create
        </Button>
        
        <div className="h-6 w-px bg-zinc-200 mx-2 hidden sm:block" />
        
        <Button variant="ghost" size="icon" className="h-9 w-9 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg">
          <Bell className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="icon" className="h-9 w-9 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg">
          <Settings className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="icon" className="h-9 w-9 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg">
          <HelpCircle className="h-5 w-5" />
        </Button>

        <Avatar className="h-8 w-8 ml-2 cursor-pointer hover:ring-2 ring-zinc-100 transition-all">
          <AvatarImage src="https://media.licdn.com/dms/image/v2/D5635AQErDDFPKsG-kA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1679738576014?e=1776225600&v=beta&t=7TRT9dgIUX9WxA_8X2IOTse5lOwoQSTopJvgpujy4eg" />
          <AvatarFallback>IA</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

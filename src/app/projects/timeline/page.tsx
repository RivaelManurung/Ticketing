"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Search, 
  Settings2,
  Calendar as CalendarIcon,
  Clock,
  Layout,
  CheckSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const timelineData = [
  { id: "TBT-1", title: "Project Inception", start: 0, end: 1, type: "epic", status: "done" },
  { id: "TBT-2", title: "User Research Phase", start: 0.5, end: 2.5, type: "task", status: "done" },
  { id: "TBT-4", title: "Information Architecture", start: 2, end: 4, type: "task", status: "in-progress" },
  { id: "TBT-5", title: "Visual Design System", start: 3.5, end: 7, type: "epic", status: "todo" },
  { id: "TBT-7", title: "Frontend Implementation", start: 6, end: 10, type: "task", status: "todo" },
  { id: "TBT-9", title: "Launch & SEO", start: 9.5, end: 11, type: "task", status: "todo" },
];

export default function TimelinePage() {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden">
      
      {/* Timeline Controls */}
      <div className="px-6 py-3 flex items-center justify-between border-b border-zinc-100 bg-zinc-50/20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg">
             <Button variant="ghost" size="sm" className="h-7 text-xs font-bold bg-white shadow-sm hover:bg-white px-3">Months</Button>
             <Button variant="ghost" size="sm" className="h-7 text-xs font-bold text-zinc-500 hover:text-zinc-800 px-3">Weeks</Button>
          </div>
          <div className="h-4 w-px bg-zinc-200" />
          <div className="flex items-center gap-2">
             <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronLeft className="h-4 w-4" />
             </Button>
             <span className="text-sm font-bold text-zinc-900">2024</span>
             <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronRight className="h-4 w-4" />
             </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
           <Button variant="ghost" size="sm" className="h-8 text-xs font-bold text-zinc-500 gap-2">
              <Settings2 className="h-3.5 w-3.5" /> View settings
           </Button>
           <Button className="h-8 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold gap-2">
              <Plus className="h-3.5 w-3.5" /> Create
           </Button>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="flex-1 flex flex-col overflow-auto custom-scrollbar">
        
        {/* Header Grid */}
        <div className="flex min-w-[1200px] border-b border-zinc-100 sticky top-0 bg-white z-10">
           <div className="w-64 border-r border-zinc-100 p-4 text-[10px] font-bold text-zinc-400 uppercase tracking-wider bg-white">
              Issue
           </div>
           <div className="flex-1 flex">
              {months.map(m => (
                <div key={m} className="flex-1 border-r border-zinc-50 p-4 text-center text-xs font-bold text-zinc-500 bg-zinc-50/30">
                   {m}
                </div>
              ))}
           </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col min-w-[1200px]">
           {timelineData.map((item) => (
             <div key={item.id} className="flex group hover:bg-zinc-50 transition-colors border-b border-zinc-50">
                <div className="w-64 border-r border-zinc-100 p-3 flex items-center gap-3 bg-white group-hover:bg-zinc-50 transition-colors sticky left-0 z-10">
                   {item.type === 'epic' ? (
                     <Layout className="h-4 w-4 text-purple-500 shrink-0" />
                   ) : (
                     <CheckSquare className="h-4 w-4 text-blue-500 shrink-0" />
                   )}
                   <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-zinc-900 truncate">{item.title}</span>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">{item.id}</span>
                   </div>
                </div>
                
                <div className="flex-1 relative h-14 flex items-center">
                   {/* Background grid lines */}
                   <div className="absolute inset-0 flex pointer-events-none">
                      {months.map((_, i) => (
                        <div key={i} className="flex-1 border-r border-zinc-100/50" />
                      ))}
                   </div>
                   
                   {/* Timeline Bar */}
                   <div 
                      className={cn(
                        "absolute h-7 rounded-sm shadow-sm flex items-center px-3 cursor-pointer transition-all hover:scale-[1.02] active:scale-100",
                        item.type === 'epic' ? "bg-purple-100 border-l-4 border-purple-500" : "bg-blue-50 border-l-4 border-blue-500",
                        item.status === 'done' && "opacity-60"
                      )}
                      style={{ 
                        left: `${(item.start / 12) * 100}%`,
                        width: `${((item.end - item.start) / 12) * 100}%`
                      }}
                   >
                      <span className={cn(
                        "text-[10px] font-bold truncate",
                        item.type === 'epic' ? "text-purple-700" : "text-blue-700"
                      )}>
                        {item.title}
                      </span>
                      {item.status === 'done' && (
                        <CheckSquare className="h-3 w-3 ml-auto text-green-600 shrink-0" />
                      )}
                   </div>
                </div>
             </div>
           ))}
           
           {/* Empty row for adding */}
           <div className="flex min-w-[1200px] hover:bg-zinc-50 cursor-pointer">
              <div className="w-64 border-r border-zinc-100 p-4 flex items-center gap-2 text-zinc-400 hover:text-blue-600 transition-colors">
                 <Plus className="h-4 w-4" />
                 <span className="text-xs font-bold">Create issue</span>
              </div>
              <div className="flex-1" />
           </div>
        </div>

      </div>
    </div>
  );
}

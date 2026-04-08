"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const dateRange = Array.from({ length: 35 }, (_, i) => i - 4); // Mock dates around current month

const events = {
  10: { title: "Sprint Planning", type: "meeting", color: "bg-blue-100 text-blue-700" },
  12: { title: "TBT-1 Due", type: "task", color: "bg-orange-100 text-orange-700" },
  15: { title: "Design Review", type: "review", color: "bg-purple-100 text-purple-700" },
  22: { title: "Stakeholder Demo", type: "meeting", color: "bg-green-100 text-green-700" },
};

export default function CalendarPage() {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden">
      {/* Calendar Controls */}
      <div className="px-6 py-3 flex items-center justify-between border-b border-zinc-100 bg-zinc-50/20">
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2">
             <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronLeft className="h-4 w-4" />
             </Button>
             <span className="text-sm font-bold text-zinc-900">June 2024</span>
             <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronRight className="h-4 w-4" />
             </Button>
          </div>
          <Button variant="outline" size="sm" className="h-8 text-xs font-bold border-zinc-200">Today</Button>
        </div>
        <div className="flex items-center gap-2">
           <Button className="h-8 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold gap-2">
              <Plus className="h-4 w-4" /> Add event
           </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-7 border-b border-zinc-100">
           {days.map(day => (
             <div key={day} className="py-2 text-center text-[10px] font-bold text-zinc-400 tracking-widest">{day}</div>
           ))}
        </div>
        <div className="grid grid-cols-7 h-full">
           {dateRange.map((date, i) => (
             <div key={i} className="min-h-[120px] border-r border-b border-zinc-50 p-2 hover:bg-zinc-50/50 transition-colors group relative">
                <span className={cn(
                    "text-xs font-bold",
                    date <= 0 || date > 30 ? "text-zinc-300" : "text-zinc-600",
                    date === 14 && "bg-blue-600 text-white h-6 w-6 rounded-full flex items-center justify-center -mt-1 -ml-1"
                )}>
                  {date <= 0 ? date + 31 : date > 30 ? date - 30 : date}
                </span>
                
                {date > 0 && date <= 30 && events[date as keyof typeof events] && (
                    <div className={cn(
                        "mt-2 p-1.5 rounded text-[10px] font-bold shadow-sm cursor-pointer hover:brightness-95 transition-all truncate",
                        events[date as keyof typeof events].color
                    )}>
                        {events[date as keyof typeof events].title}
                    </div>
                )}
                
                <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 h-6 w-6 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
                   <Plus className="h-3 w-3 text-zinc-400" />
                </button>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

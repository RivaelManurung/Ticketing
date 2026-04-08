"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  TrendingUp, 
  Users2, 
  Calendar as CalendarIcon,
  MessageSquare,
  ArrowUpRight
} from "lucide-react";

export default function SummaryPage() {
  return (
    <div className="flex-1 overflow-auto p-6 lg:p-10 bg-zinc-50/30">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Welcome Section */}
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-zinc-900">Project Summary</h2>
          <p className="text-sm text-zinc-500">Overview of "The Next Big Thing" progress and team activity.</p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-zinc-200 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Total Issues</span>
                <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Clock className="h-4 w-4" />
                </div>
              </div>
              <p className="text-3xl font-bold text-zinc-900">124</p>
              <div className="mt-2 flex items-center gap-1 text-[10px] text-green-600 font-bold">
                <TrendingUp className="h-3 w-3" /> +12% from last week
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-zinc-200 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Completed</span>
                <div className="h-8 w-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
              </div>
              <p className="text-3xl font-bold text-zinc-900">86</p>
              <p className="mt-2 text-[10px] text-zinc-400 font-medium">69% completion rate</p>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Active Sprints</span>
                <div className="h-8 w-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <CalendarIcon className="h-4 w-4" />
                </div>
              </div>
              <p className="text-3xl font-bold text-zinc-900">1</p>
              <p className="mt-2 text-[10px] text-zinc-400 font-medium">Ending in 4 days</p>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Total Members</span>
                <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Users2 className="h-4 w-4" />
                </div>
              </div>
              <p className="text-3xl font-bold text-zinc-900">14</p>
              <div className="mt-2 flex -space-x-1.5">
                 {[1,2,3,4].map(i => (
                   <Avatar key={i} className="h-5 w-5 border border-white">
                     <AvatarImage src={`https://i.pravatar.cc/150?u=${i+20}`} />
                   </Avatar>
                 ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Recent Activity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Recent Activity</h3>
              <Button variant="ghost" size="sm" className="text-xs text-blue-600 font-bold hover:bg-blue-50">View all</Button>
            </div>
            
            <Card className="border-zinc-200 shadow-sm overflow-hidden">
               <div className="divide-y divide-zinc-100">
                  {[
                    { user: "Sarah Chen", action: "moved", target: "TBT-42", detail: "to DONE", time: "2h ago", icon: <CheckCircle2 className="h-3 w-3 text-green-500" /> },
                    { user: "Alex Wong", action: "created", target: "TBT-112", detail: "Fix login bug", time: "4h ago", icon: <AlertCircle className="h-3 w-3 text-red-500" /> },
                    { user: "Elena Gilbert", action: "commented on", target: "TBT-88", detail: "Needs more design context", time: "Yesterday", icon: <MessageSquare className="h-3 w-3 text-blue-500" /> },
                    { user: "Jenson Williams", action: "updated", target: "TBT-12", detail: "Changed priority to High", time: "2 days ago", icon: <ArrowUpRight className="h-3 w-3 text-orange-500" /> },
                  ].map((act, i) => (
                    <div key={i} className="p-4 flex gap-3 hover:bg-zinc-50 transition-colors cursor-pointer group">
                       <Avatar className="h-8 w-8 shrink-0">
                          <AvatarFallback className="text-[10px] font-bold">{act.user[0]}</AvatarFallback>
                       </Avatar>
                       <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-sm font-bold text-zinc-900">{act.user}</span>
                            <span className="text-sm text-zinc-500">{act.action}</span>
                            <span className="text-sm font-bold text-blue-600 hover:underline">{act.target}</span>
                            <span className="text-sm text-zinc-500">: {act.detail}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                             <div className="flex items-center gap-1">
                                {act.icon}
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Activity</span>
                             </div>
                             <span className="text-[10px] text-zinc-300">•</span>
                             <span className="text-[10px] text-zinc-400 font-medium">{act.time}</span>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </Card>
          </div>

          {/* Issue Breakdown */}
          <div className="space-y-4">
             <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Statistics</h3>
             <Card className="border-zinc-200 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs font-bold text-zinc-900">Priority Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-zinc-600">Highest</span>
                        <span className="text-zinc-400">12</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: '15%' }} />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-zinc-600">High</span>
                        <span className="text-zinc-400">45</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 rounded-full" style={{ width: '40%' }} />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-zinc-600">Medium</span>
                        <span className="text-zinc-400">62</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '55%' }} />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-zinc-600">Low</span>
                        <span className="text-zinc-400">15</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '10%' }} />
                      </div>
                   </div>
                </CardContent>
             </Card>

             <Card className="border-zinc-200 shadow-sm bg-blue-600 text-white overflow-hidden relative group">
                <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
                <CardHeader>
                   <CardTitle className="text-xs font-bold uppercase tracking-wider opacity-80">Pro Tip</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-sm font-medium leading-relaxed">Use the **shortcuts** tab to link external documentation and resources for your team.</p>
                   <Button variant="outline" size="sm" className="mt-4 bg-white/20 border-white/30 text-white hover:bg-white/30 h-7 text-[10px] font-bold">Try it now</Button>
                </CardContent>
             </Card>
          </div>

        </div>

      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";

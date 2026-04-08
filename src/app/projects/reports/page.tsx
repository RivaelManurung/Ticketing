"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart2, 
  LineChart, 
  PieChart, 
  Settings2, 
  Download,
  Users,
  Timer,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReportsPage() {
  return (
    <div className="flex-1 overflow-auto p-6 lg:p-10 bg-zinc-50/10">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="flex items-center justify-between">
           <div className="space-y-1">
              <h2 className="text-xl font-bold text-zinc-900">Project Reports</h2>
              <p className="text-sm text-zinc-500 font-medium">Track performance, throughput, and agility metrics.</p>
           </div>
           <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-9 gap-2 border-zinc-200 text-zinc-600">
                 <Download className="h-4 w-4" /> Export
              </Button>
              <Button variant="outline" size="sm" className="h-9 gap-2 border-zinc-200 text-zinc-600">
                 <Settings2 className="h-4 w-4" /> Configure
              </Button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             { title: "Velocity Chart", desc: "Track work completed across sprints.", icon: <LineChart className="h-5 w-5" />, color: "bg-blue-50 text-blue-600" },
             { title: "Burnup Chart", desc: "Progress of work towards a release date.", icon: <TrendingUp className="h-5 w-5" />, color: "bg-green-50 text-green-600" },
             { title: "Burndown Chart", desc: "Work remaining in a current sprint.", icon: <Timer className="h-5 w-5" />, color: "bg-orange-50 text-orange-600" },
             { title: "Cumulative Flow", desc: "Bottlenecks in the workflow process.", icon: <BarChart2 className="h-5 w-5" />, color: "bg-purple-50 text-purple-600" },
             { title: "Pie Chart Report", desc: "Issues breakdown by any field.", icon: <PieChart className="h-5 w-5" />, color: "bg-amber-50 text-amber-600" },
             { title: "Sprint Report", desc: "Issues completed in each sprint.", icon: <CheckCircle className="h-5 w-5" />, color: "bg-teal-50 text-teal-600" },
           ].map((report, i) => (
             <Card key={i} className="border-zinc-200 hover:shadow-lg transition-all cursor-pointer group">
                <CardHeader className="flex flex-row items-start justify-between">
                   <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center shadow-sm", report.color)}>
                      {report.icon}
                   </div>
                </CardHeader>
                <CardContent className="space-y-2">
                   <CardTitle className="text-sm font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">{report.title}</CardTitle>
                   <p className="text-xs text-zinc-500 leading-relaxed font-medium">{report.desc}</p>
                </CardContent>
             </Card>
           ))}
        </div>

        {/* Highlight Section */}
        <Card className="border-zinc-200 shadow-sm overflow-hidden bg-white">
           <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-zinc-100">
              <div className="p-8 space-y-2 text-center">
                 <p className="text-3xl font-bold text-blue-600">92%</p>
                 <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Sprint Velocity</p>
              </div>
              <div className="p-8 space-y-2 text-center">
                 <p className="text-3xl font-bold text-green-600">4.2d</p>
                 <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Avg Cycle Time</p>
              </div>
              <div className="p-8 space-y-2 text-center">
                 <p className="text-3xl font-bold text-amber-600">8</p>
                 <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Blockers Resolved</p>
              </div>
           </div>
        </Card>

      </div>
    </div>
  );
}

import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Filter, 
  TrendingUp, 
  TrendingDown,
  Target,
  Clock,
  PieChart as PieChartIcon
} from "lucide-react";
import dynamic from "next/dynamic";

const DynamicPieChart = dynamic(() => import("recharts").then(m => m.PieChart), { ssr: false });
const DynamicPie = dynamic(() => import("recharts").then(m => m.Pie), { ssr: false });
const DynamicCell = dynamic(() => import("recharts").then(m => m.Cell), { ssr: false });
const DynamicResponsiveContainer = dynamic(() => import("recharts").then(m => m.ResponsiveContainer), { ssr: false });
const DynamicTooltip = dynamic(() => import("recharts").then(m => m.Tooltip), { ssr: false });
const DynamicBarChart = dynamic(() => import("recharts").then(m => m.BarChart), { ssr: false });
const DynamicBar = dynamic(() => import("recharts").then(m => m.Bar), { ssr: false });
const DynamicXAxis = dynamic(() => import("recharts").then(m => m.XAxis), { ssr: false });
const DynamicYAxis = dynamic(() => import("recharts").then(m => m.YAxis), { ssr: false });
const DynamicCartesianGrid = dynamic(() => import("recharts").then(m => m.CartesianGrid), { ssr: false });

const systemDistribution = [
  { name: "Core Banking", value: 400, color: "#2563eb" },
  { name: "Mobile App", value: 300, color: "#0ea5e9" },
  { name: "ATM Network", value: 200, color: "#8b5cf6" },
  { name: "Internal", value: 100, color: "#94a3b8" },
];

const slaComplianceData = [
  { name: 'Week 1', compliance: 95 },
  { name: 'Week 2', compliance: 98 },
  { name: 'Week 3', compliance: 92 },
  { name: 'Week 4', compliance: 99 },
];

export default function ReportingDashboardPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans selection:bg-blue-500/30">
      <Sidebar />
      <div className="flex flex-1 flex-col lg:pl-60">
        <Header />
        <main className="flex-1 space-y-6 p-6 lg:p-10">
          
          <div className="flex items-center justify-between mb-2">
             <div>
               <h1 className="text-2xl font-bold text-zinc-900">Executive Report</h1>
               <p className="text-sm text-zinc-500">Live operational metrics and SLA compliance overview.</p>
             </div>
             <div className="flex items-center gap-2">
               <Button variant="outline" className="gap-2 font-bold bg-white"><Filter className="h-4 w-4" /> Period: This Month</Button>
               <Button className="bg-black hover:bg-zinc-800 text-white gap-2 font-bold shadow-sm">
                  <Download className="h-4 w-4" /> Export Report
               </Button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <Card className="border-zinc-200 shadow-sm bg-white">
                <CardContent className="p-5">
                   <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600"><Target className="h-5 w-5" /></div>
                      <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded"><TrendingUp className="h-3 w-3 mr-1" /> +2.4%</span>
                   </div>
                   <p className="text-3xl font-black text-zinc-900">96.8%</p>
                   <p className="text-xs font-bold text-zinc-400 mt-1 uppercase tracking-wider">SLA Compliance Rate</p>
                </CardContent>
             </Card>
             
             <Card className="border-zinc-200 shadow-sm bg-white">
                <CardContent className="p-5">
                   <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600"><Clock className="h-5 w-5" /></div>
                      <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded"><TrendingDown className="h-3 w-3 mr-1" /> -1.2hrs</span>
                   </div>
                   <p className="text-3xl font-black text-zinc-900">4.5h</p>
                   <p className="text-xs font-bold text-zinc-400 mt-1 uppercase tracking-wider">Avg Resolution Time</p>
                </CardContent>
             </Card>

             <Card className="border-zinc-200 shadow-sm bg-white">
                <CardContent className="p-5">
                   <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600"><TrendingUp className="h-5 w-5" /></div>
                      <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded"><TrendingUp className="h-3 w-3 mr-1" /> +14</span>
                   </div>
                   <p className="text-3xl font-black text-zinc-900">1,245</p>
                   <p className="text-xs font-bold text-zinc-400 mt-1 uppercase tracking-wider">Total Tickets Handled</p>
                </CardContent>
             </Card>

             <Card className="border-zinc-200 shadow-sm bg-white border-b-4 border-b-red-500">
                <CardContent className="p-5">
                   <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600"><Target className="h-5 w-5" /></div>
                   </div>
                   <p className="text-3xl font-black text-red-600">8</p>
                   <p className="text-xs font-bold text-red-400 mt-1 uppercase tracking-wider">Overdue SLA Tickets</p>
                </CardContent>
             </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
             {/* Category Distribution */}
             <Card className="border-zinc-200 shadow-sm">
                <CardHeader className="border-b border-zinc-100 bg-zinc-50/50 py-4">
                   <CardTitle className="text-sm font-bold text-zinc-900 flex items-center gap-2"><PieChartIcon className="h-4 w-4 text-blue-500" /> Ticket Volume by System</CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex flex-col items-center justify-center">
                   <div className="h-[250px] w-full">
                      <DynamicResponsiveContainer width="100%" height="100%">
                         <DynamicPieChart>
                            <DynamicPie
                               data={systemDistribution}
                               innerRadius={70}
                               outerRadius={100}
                               paddingAngle={5}
                               dataKey="value"
                            >
                               {systemDistribution.map((entry, index) => (
                               <DynamicCell key={`cell-${index}`} fill={entry.color} />
                               ))}
                            </DynamicPie>
                            <DynamicTooltip />
                         </DynamicPieChart>
                      </DynamicResponsiveContainer>
                   </div>
                   <div className="flex flex-wrap items-center justify-center gap-4 mt-6 w-full px-4">
                      {systemDistribution.map(s => (
                         <div key={s.name} className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: s.color }} />
                            <span className="text-xs font-semibold text-zinc-700">{s.name}</span>
                         </div>
                      ))}
                   </div>
                </CardContent>
             </Card>

             {/* SLA Compliance Chart */}
             <Card className="border-zinc-200 shadow-sm">
                <CardHeader className="border-b border-zinc-100 bg-zinc-50/50 py-4">
                   <CardTitle className="text-sm font-bold text-zinc-900 flex items-center gap-2"><Target className="h-4 w-4 text-green-500" /> Weekly SLA Compliance</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                   <div className="h-[250px] w-full">
                      <DynamicResponsiveContainer width="100%" height="100%">
                         <DynamicBarChart data={slaComplianceData}>
                            <DynamicCartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                            <DynamicXAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717a' }} dy={10} />
                            <DynamicYAxis hide />
                            <DynamicTooltip cursor={{ fill: '#f4f4f5' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                            <DynamicBar dataKey="compliance" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
                         </DynamicBarChart>
                      </DynamicResponsiveContainer>
                   </div>
                   <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between px-2">
                       <p className="text-xs text-zinc-500 font-medium">Compliance target is strictly <strong className="text-zinc-900">95%</strong></p>
                       <Button variant="ghost" size="sm" className="h-7 text-xs font-bold text-blue-600">View Data Table</Button>
                   </div>
                </CardContent>
             </Card>
          </div>

        </main>
      </div>
    </div>
  );
}

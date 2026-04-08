"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  MoreHorizontal, 
  ArrowUpRight, 
  ChevronDown, 
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
  ExternalLink,
  Timer,
  FileText,
  Search,
  Calendar as CalendarIcon,
  CircleDot
} from "lucide-react";
import dynamic from "next/dynamic";

const DynamicLineChart = dynamic(() => import("recharts").then(m => m.LineChart), { ssr: false });
const DynamicLine = dynamic(() => import("recharts").then(m => m.Line), { ssr: false });
const DynamicXAxis = dynamic(() => import("recharts").then(m => m.XAxis), { ssr: false });
const DynamicYAxis = dynamic(() => import("recharts").then(m => m.YAxis), { ssr: false });
const DynamicTooltip = dynamic(() => import("recharts").then(m => m.Tooltip), { ssr: false });
const DynamicResponsiveContainer = dynamic(() => import("recharts").then(m => m.ResponsiveContainer), { ssr: false });

const volumeData = [
  { name: 'Week 1', tickets: 45 },
  { name: 'Week 2', tickets: 52 },
  { name: 'Week 3', tickets: 38 },
  { name: 'Week 4', tickets: 65 },
  { name: 'Week 5', tickets: 48 },
];

const assignedIssues = [
  { key: "CR-2024-0012", summary: "Upgrade core banking database to PostgreSQL 16", priority: "Critical", status: "In Progress", sla: "2h 15m left", slaStatus: "warning" },
  { key: "BUG-2024-0105", summary: "Mobile App timeout error on high load", priority: "High", status: "To Do", sla: "1d 4h left", slaStatus: "safe" },
  { key: "REQ-2024-0042", summary: "Access request for staging environment", priority: "Medium", status: "Review", sla: "3d left", slaStatus: "safe" },
];

const pendingApprovals = [
  { key: "CR-2024-0045", summary: "Firewall rule update for ATM network", author: "Sarah Chen", date: "Today", type: "Security" },
  { key: "CR-2024-0050", summary: "New promotion banner deployment", author: "Marketing Team", date: "Yesterday", type: "Deployment" },
];

const calendarEvents = [
  { date: "15 Jun", time: "14:00", title: "CAB Weekly Meeting", type: "cab" },
  { date: "18 Jun", time: "00:00", title: "Core Banking Maintenance Window", type: "maintenance" },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans selection:bg-blue-500/30">
      <Sidebar />
      <div className="flex flex-1 flex-col lg:pl-60">
        <Header />
        <main className="flex-1 space-y-6 p-6 lg:p-10">
          
          <div className="flex items-center justify-between">
             <div>
               <h1 className="text-2xl font-bold text-zinc-900">IT Service Management</h1>
               <p className="text-sm text-zinc-500">Overview of ticketing operations and service level agreements.</p>
             </div>
             <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold shadow-sm">
                <Plus className="h-4 w-4" /> Create Ticket
             </Button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-zinc-200 shadow-sm border-l-4 border-l-blue-500">
               <CardContent className="p-4 flex items-center justify-between">
                  <div>
                     <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Open Tickets</p>
                     <p className="text-2xl font-bold text-zinc-900">124</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                     <CircleDot className="h-5 w-5" />
                  </div>
               </CardContent>
            </Card>
            <Card className="border-zinc-200 shadow-sm border-l-4 border-l-amber-500">
               <CardContent className="p-4 flex items-center justify-between">
                  <div>
                     <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">In Progress</p>
                     <p className="text-2xl font-bold text-zinc-900">45</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                     <Clock className="h-5 w-5" />
                  </div>
               </CardContent>
            </Card>
            <Card className="border-zinc-200 shadow-sm border-l-4 border-l-green-500">
               <CardContent className="p-4 flex items-center justify-between">
                  <div>
                     <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Closed (Week)</p>
                     <p className="text-2xl font-bold text-zinc-900">286</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                     <CheckCircle2 className="h-5 w-5" />
                  </div>
               </CardContent>
            </Card>
            <Card className="border-zinc-200 shadow-sm border-l-4 border-l-red-500 bg-red-50/10">
               <CardContent className="p-4 flex items-center justify-between">
                  <div>
                     <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Overdue SLA</p>
                     <p className="text-2xl font-bold text-red-600">12</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                     <AlertCircle className="h-5 w-5" />
                  </div>
               </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* Chart & Shortcuts */}
             <div className="lg:col-span-2 space-y-6">
                <Card className="border-zinc-200 shadow-sm">
                   <CardHeader className="pb-2 border-b border-zinc-100">
                      <CardTitle className="text-sm font-bold text-zinc-900">Ticket Volume Trends</CardTitle>
                   </CardHeader>
                   <CardContent className="pt-4 h-[250px]">
                      <DynamicResponsiveContainer width="100%" height="100%">
                         <DynamicLineChart data={volumeData}>
                           <DynamicXAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                           <DynamicYAxis fontSize={10} tickLine={false} axisLine={false} />
                           <DynamicTooltip />
                           <DynamicLine type="monotone" dataKey="tickets" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                         </DynamicLineChart>
                      </DynamicResponsiveContainer>
                   </CardContent>
                </Card>

                {/* My Tasks with SLA */}
                <Card className="border-zinc-200 shadow-sm">
                   <CardHeader className="border-b border-zinc-100 bg-zinc-50/50 flex flex-row items-center justify-between py-3">
                      <CardTitle className="text-sm font-bold text-zinc-900">My Tasks</CardTitle>
                      <Button variant="ghost" size="sm" className="h-7 text-[10px] font-bold text-blue-600">View all</Button>
                   </CardHeader>
                   <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent">
                            <TableHead className="text-[10px] h-8 font-bold text-zinc-400 uppercase">Ticket</TableHead>
                            <TableHead className="text-[10px] h-8 font-bold text-zinc-400 uppercase">Summary</TableHead>
                            <TableHead className="text-[10px] h-8 font-bold text-zinc-400 uppercase text-center">Priority</TableHead>
                            <TableHead className="text-[10px] h-8 font-bold text-zinc-400 uppercase text-right px-4">SLA Time Left</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {assignedIssues.map((issue) => (
                            <TableRow key={issue.key} className="hover:bg-zinc-50/50 cursor-pointer">
                              <TableCell className="text-xs font-bold text-blue-600">{issue.key}</TableCell>
                              <TableCell className="text-xs font-medium text-zinc-900 max-w-xs ">{issue.summary}</TableCell>
                              <TableCell className="text-center">
                                 {issue.priority === "Critical" ? <Badge className="bg-red-100 text-red-700 text-[9px] shadow-none hover:bg-red-100 uppercase border-none">Critical</Badge> : 
                                  issue.priority === "High" ? <Badge className="bg-orange-100 text-orange-700 text-[9px] shadow-none hover:bg-orange-100 uppercase border-none">High</Badge> :
                                  <Badge className="bg-zinc-100 text-zinc-700 text-[9px] shadow-none hover:bg-zinc-100 uppercase border-none">Medium</Badge>
                                 }
                              </TableCell>
                              <TableCell className="text-right px-4">
                                 <div className={cn("inline-flex items-center gap-1 text-[11px] font-bold", issue.slaStatus === 'warning' ? "text-red-600" : "text-zinc-500")}>
                                    <Timer className="h-3.5 w-3.5" />
                                    {issue.sla}
                                 </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                   </CardContent>
                </Card>
             </div>

             {/* Right Column */}
             <div className="space-y-6">
                
                {/* Shortcuts */}
                <Card className="border-zinc-200 shadow-sm bg-blue-600 text-white">
                   <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-bold opacity-90">Quick Shortcuts</CardTitle>
                   </CardHeader>
                   <CardContent className="space-y-2">
                      <Button variant="secondary" className="w-full justify-start gap-3 bg-white/10 hover:bg-white/20 text-white border-none shadow-none h-9">
                         <Plus className="h-4 w-4" /> Create Change Request
                      </Button>
                      <Button variant="secondary" className="w-full justify-start gap-3 bg-white/10 hover:bg-white/20 text-white border-none shadow-none h-9">
                         <Search className="h-4 w-4" /> Global Ticket Search
                      </Button>
                      <Button variant="secondary" className="w-full justify-start gap-3 bg-white/10 hover:bg-white/20 text-white border-none shadow-none h-9">
                         <FileText className="h-4 w-4" /> Print Daily Report
                      </Button>
                   </CardContent>
                </Card>

                {/* Pending Approvals */}
                <Card className="border-zinc-200 shadow-sm">
                   <CardHeader className="flex flex-row items-center justify-between border-b border-zinc-100 py-3">
                      <CardTitle className="text-sm font-bold text-zinc-900">Pending Approvals</CardTitle>
                      <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 shadow-none border-none text-[10px]">2 Requires Review</Badge>
                   </CardHeader>
                   <CardContent className="p-0 divide-y divide-zinc-100">
                      {pendingApprovals.map((app) => (
                        <div key={app.key} className="p-4 hover:bg-zinc-50 transition-colors cursor-pointer group">
                           <div className="flex items-start justify-between mb-1">
                              <span className="text-xs font-bold text-blue-600 group-hover:underline">{app.key}</span>
                              <span className="text-[10px] text-zinc-400">{app.date}</span>
                           </div>
                           <p className="text-xs font-semibold text-zinc-900 leading-snug mb-2">{app.summary}</p>
                           <div className="flex justify-between items-center">
                              <div className="flex items-center gap-1.5">
                                 <Avatar className="h-5 w-5">
                                    <AvatarFallback className="text-[8px] bg-zinc-200">{app.author[0]}</AvatarFallback>
                                 </Avatar>
                                 <span className="text-[10px] font-medium text-zinc-500">{app.author}</span>
                              </div>
                              <Button size="sm" className="h-6 text-[10px] px-2">Review</Button>
                           </div>
                        </div>
                      ))}
                   </CardContent>
                </Card>

                {/* Maintenance Calendar widget */}
                <Card className="border-zinc-200 shadow-sm">
                   <CardHeader className="flex flex-row items-center gap-2 border-b border-zinc-100 py-3">
                      <CalendarIcon className="h-4 w-4 text-zinc-500" />
                      <CardTitle className="text-sm font-bold text-zinc-900">Upcoming Calendar</CardTitle>
                   </CardHeader>
                   <CardContent className="p-0 divide-y divide-zinc-100">
                      {calendarEvents.map((ev, i) => (
                        <div key={i} className="flex items-center justify-between p-3 px-4 hover:bg-zinc-50 cursor-pointer">
                           <div className="flex items-center gap-3">
                              <div className="text-center rounded bg-zinc-50 border border-zinc-100 px-2 py-1 min-w-[50px]">
                                 <p className="text-[9px] font-bold text-zinc-400 uppercase leading-none">{ev.date.split(' ')[1]}</p>
                                 <p className="text-lg font-bold text-zinc-900 leading-none mt-0.5">{ev.date.split(' ')[0]}</p>
                              </div>
                              <div>
                                 <p className="text-xs font-bold text-zinc-900">{ev.title}</p>
                                 <p className="text-[10px] font-medium text-zinc-500 mt-0.5">Time: {ev.time}</p>
                              </div>
                           </div>
                        </div>
                      ))}
                   </CardContent>
                </Card>

             </div>
          </div>

        </main>
      </div>
    </div>
  );
}

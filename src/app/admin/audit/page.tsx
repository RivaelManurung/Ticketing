"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Search, 
  Filter, 
  Download,
  TerminalSquare,
  ShieldCheck,
  Calendar as CalendarIcon
} from "lucide-react";

const auditLogs = [
  { id: "LOG-01", time: "2024-06-18 10:15:32", user: "Idrus Afandi", ip: "192.168.1.104", action: "UPDATE_STATUS", target: "CR-2024-0042", oldVal: "WAITING CAB", newVal: "APPROVED" },
  { id: "LOG-02", time: "2024-06-18 09:42:11", user: "Sarah Chen", ip: "10.0.0.52", action: "ADD_COMMENT", target: "CR-2024-0045", oldVal: "-", newVal: "Proceeding with rollback" },
  { id: "LOG-03", time: "2024-06-17 18:22:00", user: "Michael Wong", ip: "10.0.0.88", action: "CREATE_TICKET", target: "CR-2024-0048", oldVal: "-", newVal: "Draft created" },
  { id: "LOG-04", time: "2024-06-17 14:10:05", user: "System", ip: "127.0.0.1", action: "ESCALATE_SLA", target: "BUG-2024-0105", oldVal: "High", newVal: "Critical" },
  { id: "LOG-05", time: "2024-06-17 08:30:12", user: "Idrus Afandi", ip: "192.168.1.104", action: "LOGIN_SUCCESS", target: "Auth Service", oldVal: "-", newVal: "Session Started" },
];

export default function AuditTrailPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans selection:bg-blue-500/30">
      <Sidebar />
      <div className="flex flex-1 flex-col lg:pl-60">
        <Header />
        <main className="flex-1 space-y-6 p-6 lg:p-10">
          
          <div className="flex items-center justify-between">
             <div>
               <h1 className="text-2xl font-bold text-zinc-900">Security Audit Trail</h1>
               <p className="text-sm text-zinc-500 mt-1">Immutable system logs for all platform activities. Compliant with OJK / BI standards.</p>
             </div>
             <Button className="bg-black hover:bg-zinc-800 text-white gap-2 font-bold shadow-sm">
                <Download className="h-4 w-4" /> Export CSV Log
             </Button>
          </div>

          <Card className="border-zinc-200 shadow-sm overflow-hidden bg-white">
             <div className="p-4 border-b border-zinc-100 flex items-center justify-between gap-4 bg-zinc-50/50 flex-wrap">
                <div className="flex gap-2 w-full md:w-auto">
                   <div className="relative w-64 shrink-0">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                     <Input placeholder="Search logs by IP, User, ID..." className="h-9 pl-9 border-zinc-200 focus-visible:ring-blue-500 text-xs" />
                   </div>
                   <div className="relative w-40 shrink-0">
                     <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                     <Input type="date" className="h-9 pl-9 border-zinc-200 focus-visible:ring-blue-500 text-xs text-zinc-500" />
                   </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2 font-bold text-zinc-600 border-zinc-200 h-9 shrink-0">
                   <Filter className="h-4 w-4" /> Advanced Filter
                </Button>
             </div>
             
             <CardContent className="p-0">
                <div className="overflow-x-auto">
                   <Table className="whitespace-nowrap">
                      <TableHeader className="bg-zinc-50">
                         <TableRow className="hover:bg-transparent border-zinc-100">
                            <TableHead className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider py-4 px-6 w-32">Timestamp</TableHead>
                            <TableHead className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider py-4 px-6">User & IP</TableHead>
                            <TableHead className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider py-4 px-6">Reference</TableHead>
                            <TableHead className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider py-4 px-6">Action / Event</TableHead>
                            <TableHead className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider py-4 px-6">Metadata Change</TableHead>
                         </TableRow>
                      </TableHeader>
                      <TableBody className="font-mono">
                        {auditLogs.map((log) => (
                          <TableRow key={log.id} className="hover:bg-zinc-50/80 transition-colors border-zinc-100 cursor-pointer group">
                             <TableCell className="px-6 py-4 text-xs font-semibold text-zinc-600">
                                {log.time}
                             </TableCell>
                             <TableCell className="px-6 py-4">
                                <p className="text-xs font-bold text-zinc-900 font-sans leading-tight">{log.user}</p>
                                <p className="text-[10px] text-zinc-400 flex items-center gap-1 mt-1">IP: {log.ip}</p>
                             </TableCell>
                             <TableCell className="px-6 py-4">
                                <span className="text-xs font-bold text-blue-600 hover:underline">{log.target}</span>
                             </TableCell>
                             <TableCell className="px-6 py-4">
                                <Badge variant="outline" className={`border-zinc-200 text-[9px] font-bold tracking-wider px-2 shadow-none uppercase
                                  ${log.action.includes('UPDATE') ? 'text-blue-600 bg-blue-50' : 
                                    log.action.includes('DELETE') ? 'text-red-600 bg-red-50' : 
                                    log.action.includes('LOGIN') ? 'text-green-600 bg-green-50' : 
                                    'text-zinc-600 bg-zinc-50'}`}>
                                  {log.action}
                                </Badge>
                             </TableCell>
                             <TableCell className="px-6 py-4">
                                <div className="p-2 bg-zinc-50 border border-zinc-100 rounded text-[10px] font-medium text-zinc-600 flex items-center gap-2 w-max max-w-[300px] overflow-hidden text-ellipsis">
                                   <TerminalSquare className="h-3 w-3 shrink-0 text-zinc-400" />
                                   {log.oldVal !== '-' && <span className="text-red-400 font-bold line-through">{log.oldVal}</span>}
                                   {log.oldVal !== '-' && <span className="text-zinc-300">→</span>}
                                   <span className="text-green-600 font-bold">{log.newVal}</span>
                                </div>
                             </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                   </Table>
                </div>
                <div className="bg-zinc-50 p-4 flex items-center justify-between border-t border-zinc-100">
                   <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400">
                      <ShieldCheck className="h-4 w-4 text-green-500" /> Logs integrity verified
                   </div>
                   <div className="text-xs font-semibold text-zinc-500">Showing 1-5 of 1245 logs</div>
                </div>
             </CardContent>
          </Card>

        </main>
      </div>
    </div>
  );
}

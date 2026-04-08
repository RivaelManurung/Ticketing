"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TicketStatusBadge } from "@/components/ui/ticket-status-badge";
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
  Plus, 
  MoreHorizontal, 
  Layout,
  CheckSquare,
  Users2,
  Share2,
  Filter,
  Square,
  ArrowUpRight,
  ChevronDown,
  Download
} from "lucide-react";
import Link from "next/link";

const tickets = [
  { id: "CR-2024-0142", summary: "Upgrade Core Banking PostgreSQL Instance to v16", status: "IN REVIEW" as const, assignee: "Sarah Chen", avatar: "https://i.pravatar.cc/150?u=sarah", dueDate: "Oct 28, 2026", priority: "Critical" },
  { id: "CR-2024-0045", summary: "Firewall rule update for ATM network", status: "WAITING CAB" as const, assignee: "System Sec", avatar: "https://i.pravatar.cc/150?u=donald", dueDate: "Oct 29, 2026", priority: "High" },
  { id: "BUG-2024-0105", summary: "Mobile App timeout error on high load", status: "SUBMITTED" as const, assignee: "Michael Wong", avatar: "https://i.pravatar.cc/150?u=michael", dueDate: "Nov 02, 2026", priority: "High" },
  { id: "REQ-2024-0042", summary: "Access request for staging environment", status: "APPROVED" as const, assignee: "Grace Harris", avatar: "https://i.pravatar.cc/150?u=grace", dueDate: "Nov 05, 2026", priority: "Medium" },
  { id: "CR-2024-0120", summary: "Deploy new ML Fraud Detection Model", status: "SCHEDULED" as const, assignee: "Data Team", avatar: "https://i.pravatar.cc/150?u=fran", dueDate: "Nov 15, 2026", priority: "Critical" },
  { id: "CR-2024-0010", summary: "Patch Log4j Vulnerability on Internal HRIS", status: "IMPLEMENTED" as const, assignee: "Idrus Afandi", avatar: "https://media.licdn.com/dms/image/v2/D5635AQErDDFPKsG-kA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1679738576014?e=1776225600&v=beta&t=7TRT9dgIUX9WxA_8X2IOTse5lOwoQSTopJvgpujy4eg", dueDate: "Oct 01, 2026", priority: "Critical" },
  { id: "REQ-2024-0015", summary: "Create engaging content for new product launch", status: "CLOSED" as const, assignee: "Donald Craig", avatar: "https://i.pravatar.cc/150?u=donald2", dueDate: "Sep 20, 2026", priority: "Low" },
];

export default function TicketListPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selected.length === tickets.length) {
      setSelected([]);
    } else {
      setSelected(tickets.map(t => t.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans selection:bg-blue-500/30">
      <Sidebar />
      <div className="flex flex-1 flex-col lg:pl-60">
        <Header />
        
        {/* Toolbar */}
        <div className="px-6 lg:px-10 py-4 flex items-center justify-between border-b border-zinc-200 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-zinc-900 hidden sm:block mr-4">All Tickets</h1>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input 
                placeholder="Search ticket summary, ID..." 
                className="h-9 pl-9 text-xs border-zinc-200 focus-visible:ring-blue-500 bg-zinc-50/50"
              />
            </div>
            
            {selected.length > 0 && (
               <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-bold border-none">{selected.length} selected</Badge>
                  <Button size="sm" variant="outline" className="h-8 text-xs font-bold border-zinc-200 text-zinc-600 bg-white">Bulk Approve</Button>
                  <Button size="sm" variant="outline" className="h-8 text-xs font-bold border-zinc-200 text-zinc-600 bg-white">Reassign</Button>
               </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-9 gap-2 text-xs font-bold text-zinc-600 hidden sm:flex">
              <Download className="h-4 w-4" /> Export
            </Button>
            <Button variant="outline" size="sm" className="h-9 gap-2 text-xs font-bold text-zinc-600 bg-white shadow-sm border-zinc-200">
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <Link href="/projects/create">
               <Button size="sm" className="h-9 gap-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                 <Plus className="h-4 w-4" /> New Ticket
               </Button>
            </Link>
          </div>
        </div>

        {/* Table Area */}
        <main className="flex-1 overflow-auto bg-zinc-50 p-6 lg:p-10">
          <div className="border border-zinc-200 rounded-xl overflow-hidden shadow-sm bg-white">
             <Table>
               <TableHeader className="bg-zinc-50 border-b border-zinc-200">
                 <TableRow className="hover:bg-transparent">
                   <TableHead className="w-12 px-4 text-center">
                     <button onClick={toggleSelectAll} className="p-1 focus:outline-none">
                        <Square className={`h-4 w-4 ${selected.length === tickets.length ? 'text-blue-500 fill-blue-500' : 'text-zinc-300'}`} />
                     </button>
                   </TableHead>
                   <TableHead className="w-28 text-[10px] font-bold text-zinc-400 uppercase tracking-widest py-3">Ticket ID</TableHead>
                   <TableHead className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest py-3">Summary</TableHead>
                   <TableHead className="w-32 text-[10px] font-bold text-zinc-400 uppercase tracking-widest py-3 text-center">Priority</TableHead>
                   <TableHead className="w-40 text-[10px] font-bold text-zinc-400 uppercase tracking-widest py-3 text-center">Status</TableHead>
                   <TableHead className="w-48 text-[10px] font-bold text-zinc-400 uppercase tracking-widest py-3">Assignee</TableHead>
                   <TableHead className="w-32 text-[10px] font-bold text-zinc-400 uppercase tracking-widest py-3 text-right pr-6">Deadline</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 {tickets.map((ticket) => (
                   <TableRow key={ticket.id} className="group border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                     <TableCell className="px-4 text-center">
                       <button onClick={() => toggleSelect(ticket.id)} className="p-1 focus:outline-none">
                          <Square className={`h-4 w-4 ${selected.includes(ticket.id) ? 'text-blue-500 fill-blue-500' : 'text-zinc-300 group-hover:text-zinc-400'}`} />
                       </button>
                     </TableCell>
                     <TableCell className="py-4">
                        <Link href={`/projects/${ticket.id}`} className="text-xs font-extrabold text-blue-600 hover:text-blue-800 hover:underline">
                          {ticket.id}
                        </Link>
                     </TableCell>
                     <TableCell className="py-4">
                        <Link href={`/projects/${ticket.id}`} className="text-sm font-semibold text-zinc-900 line-clamp-1 group-hover:text-blue-700 transition-colors">
                          {ticket.summary}
                        </Link>
                     </TableCell>
                     <TableCell className="py-4 text-center">
                        <Badge className={`bg-transparent uppercase shadow-none border-none text-[9px] font-extrabold pb-0.5
                          ${ticket.priority === 'Critical' ? 'text-red-600' : 
                            ticket.priority === 'High' ? 'text-orange-600' : 
                            ticket.priority === 'Medium' ? 'text-amber-600' : 
                            'text-zinc-500'}`}>
                           {ticket.priority}
                        </Badge>
                     </TableCell>
                     <TableCell className="py-4 text-center">
                       <TicketStatusBadge status={ticket.status} className="shadow-sm" />
                     </TableCell>
                     <TableCell className="py-4">
                       <div className="flex items-center gap-2">
                         <Avatar className="h-6 w-6 border-zinc-200">
                           <AvatarImage src={ticket.avatar} />
                           <AvatarFallback className="text-[10px] font-bold bg-zinc-100">{ticket.assignee[0]}</AvatarFallback>
                         </Avatar>
                         <span className="text-xs font-semibold text-zinc-700">{ticket.assignee}</span>
                       </div>
                     </TableCell>
                     <TableCell className="py-4 text-right pr-6">
                       <span className="text-xs font-medium text-zinc-500">{ticket.dueDate}</span>
                     </TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
          </div>
          
          <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 font-medium">
             <div>Showing 1-{tickets.length} of {tickets.length} total tickets.</div>
             <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="h-7 border border-zinc-200 bg-white" disabled>Previous</Button>
                <Button variant="ghost" size="sm" className="h-7 border border-zinc-200 bg-white" disabled>Next</Button>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}

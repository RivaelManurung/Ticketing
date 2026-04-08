"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { TicketStatusBadge } from "@/components/ui/ticket-status-badge";
import { 
  ArrowLeft,
  Calendar,
  Clock,
  ShieldCheck,
  AlertCircle,
  FileText,
  MessageSquare,
  History,
  GitMerge,
  ListTodo,
  CheckCircle2,
  XOctagon,
  Download,
  MoreVertical,
  Paperclip,
  Share2,
  Users
} from "lucide-react";
import Link from "next/link";

const ticketData = {
  id: "CR-2024-0142",
  title: "Upgrade Core Banking PostgreSQL Instance to v16",
  status: "IN REVIEW" as const,
  priority: "Critical",
  risk: "High",
  category: "Change Request",
  system: "Core Banking",
  creator: { name: "Idrus Afandi", role: "Maker (Infra)", avatar: "https://media.licdn.com/dms/image/v2/D5635AQErDDFPKsG-kA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1679738576014?e=1776225600&v=beta&t=7TRT9dgIUX9WxA_8X2IOTse5lOwoQSTopJvgpujy4eg" },
  assignee: { name: "Sarah Chen", role: "Checker (Manager)", avatar: "https://i.pravatar.cc/150?u=sarah" },
  dates: {
    created: "Oct 24, 2026 - 09:30 AM",
    target: "Oct 28, 2026",
    maintenance: "00:00 - 04:00 AM"
  },
  sla: "4h 15m remaining",
  description: `The current PostgreSQL instance running the core banking database is nearing end-of-life (v12). This change request outlines the procedure to upgrade the instance to v16 to benefit from improved query parallelism and logical replication features.
  
Impact Analysis:
This requires a full system shutdown during the maintenance window. ATM networks and mobile banking will be diverted to read-only replica mode.`,
  rollback: `1. Stop application traffic.
2. Demote the new v16 master.
3. Promote the v12 replica back to master.
4. Verify checksums and restart application endpoints.`,
};

export default function TicketDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("description");
  const actualId = params.id ? params.id.toUpperCase() : ticketData.id;

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans selection:bg-blue-500/30">
      <Sidebar />
      <div className="flex flex-1 flex-col lg:pl-60">
        <Header />
        
        {/* Sub-header Context Bar */}
        <div className="bg-white border-b border-zinc-200 px-6 lg:px-10 py-3 flex items-center justify-between sticky top-0 z-10">
           <div className="flex items-center gap-4">
              <Link href="/projects/list">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-zinc-900 border border-zinc-200">
                   <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                 <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{ticketData.category}</span>
                 <span className="w-1 h-1 rounded-full bg-zinc-300" />
                 <span className="text-xs font-bold text-blue-600">{actualId}</span>
              </div>
           </div>
           
           <div className="flex items-center gap-2">
              <Button variant="outline" className="h-8 gap-2 font-bold text-zinc-600 bg-white shadow-sm text-xs">
                 <Share2 className="h-3 w-3" /> Share
              </Button>
              <Button variant="outline" className="h-8 gap-2 font-bold text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 bg-white shadow-sm text-xs">
                 <XOctagon className="h-3 w-3" /> Reject
              </Button>
              <Button className="h-8 gap-2 font-bold bg-green-600 hover:bg-green-700 text-white shadow-sm text-xs">
                 <CheckCircle2 className="h-3 w-3" /> Approve Request
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                 <MoreVertical className="h-4 w-4 text-zinc-400" />
              </Button>
           </div>
        </div>

        <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area (Left - 2cols) */}
          <div className="lg:col-span-2 space-y-6">
             
             {/* Title & Status */}
             <div>
                <h1 className="text-2xl font-bold text-zinc-900 leading-tight mb-3">{ticketData.title}</h1>
                <div className="flex flex-wrap items-center gap-3">
                   <TicketStatusBadge status={ticketData.status} />
                   <Badge className="bg-red-100 text-red-700 hover:bg-red-100 uppercase border-none text-[10px] font-bold shadow-none leading-none pt-1">
                      {ticketData.priority} Priority
                   </Badge>
                   <Badge variant="outline" className="border-orange-200 text-orange-700 uppercase text-[10px] bg-orange-50 font-bold shadow-none leading-none pt-1">
                      {ticketData.risk} Risk
                   </Badge>
                </div>
             </div>

             {/* Tab Navigation */}
             <div className="flex items-center gap-2 border-b border-zinc-200 overflow-x-auto custom-scrollbar pt-4">
                {[
                  { id: 'description', label: 'Details', icon: FileText },
                  { id: 'approval', label: 'Approval Flow', icon: GitMerge },
                  { id: 'tasks', label: 'Checklist', icon: ListTodo },
                  { id: 'comments', label: 'Comments', icon: MessageSquare },
                  { id: 'audit', label: 'Audit Log', icon: History },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === t.id 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-zinc-500 hover:text-zinc-900 hover:border-zinc-300'
                    }`}
                  >
                    <t.icon className="h-4 w-4" /> {t.label}
                  </button>
                ))}
             </div>

             {/* Tab Content */}
             <div className="min-h-[400px]">
               
               {activeTab === 'description' && (
                 <div className="space-y-8 animate-in fade-in duration-300">
                    <section>
                       <h3 className="text-sm font-bold text-zinc-900 mb-3 border-b border-zinc-100 pb-2">Description & Justification</h3>
                       <div className="prose prose-sm prose-zinc max-w-none text-zinc-700 whitespace-pre-wrap leading-relaxed">
                          {ticketData.description}
                       </div>
                    </section>
                    
                    <section>
                       <h3 className="text-sm font-bold text-zinc-900 mb-3 border-b border-zinc-100 pb-2 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" /> Rollback Plan
                       </h3>
                       <div className="bg-orange-50/50 border border-orange-100 rounded-lg p-4 font-mono text-xs text-orange-900 whitespace-pre-wrap leading-relaxed">
                          {ticketData.rollback}
                       </div>
                    </section>

                    <section>
                       <h3 className="text-sm font-bold text-zinc-900 mb-3 border-b border-zinc-100 pb-2 flex items-center justify-between">
                          <span>Attached Documents</span>
                          <Button variant="ghost" size="sm" className="h-6 text-[10px] text-blue-600 font-bold p-0">Upload New</Button>
                       </h3>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="border border-zinc-200 rounded-lg p-3 flex items-start gap-3 bg-white group hover:border-blue-300 transition-colors cursor-pointer shadow-sm">
                             <div className="h-10 w-10 bg-red-50 text-red-600 rounded flex items-center justify-center shrink-0">
                                <FileText className="h-5 w-5" />
                             </div>
                             <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-zinc-900 truncate">BRD_Upgrade_v16_Final.pdf</p>
                                <p className="text-[10px] text-zinc-500 mt-0.5">2.4 MB • Uploaded by Idrus</p>
                             </div>
                             <Download className="h-3 w-3 text-zinc-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                          </div>
                       </div>
                    </section>
                 </div>
               )}

               {activeTab === 'approval' && (
                 <div className="animate-in fade-in duration-300">
                    <h3 className="text-sm font-bold text-zinc-900 mb-6">Master Verification Workflow</h3>
                    
                    <div className="relative border-l-2 border-zinc-200 ml-4 space-y-10 pb-4">
                       
                       {/* Step 1: Maker */}
                       <div className="relative pl-8">
                          <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-green-500 border-4 border-white flex items-center justify-center shadow-sm">
                             <CheckCircle2 className="h-3 w-3 text-white" />
                          </div>
                          <div>
                             <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Step 1: Maker Submission</p>
                             <div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm">
                                <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-3">
                                      <Avatar className="h-8 w-8">
                                         <AvatarImage src={ticketData.creator.avatar} />
                                         <AvatarFallback>IA</AvatarFallback>
                                      </Avatar>
                                      <div>
                                         <p className="text-sm font-bold text-zinc-900">{ticketData.creator.name}</p>
                                         <p className="text-[10px] text-zinc-500">{ticketData.creator.role}</p>
                                      </div>
                                   </div>
                                   <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none shadow-none font-bold text-[10px]">Submitted</Badge>
                                </div>
                                <p className="text-xs text-zinc-600 mt-3 pt-3 border-t border-zinc-100 italic bg-zinc-50 p-2 rounded">
                                  "All documentation attached. Ready for checker review."
                                </p>
                             </div>
                          </div>
                       </div>

                       {/* Step 2: Checker (ACTIVE) */}
                       <div className="relative pl-8">
                          <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center animate-pulse shadow-sm">
                             <div className="h-1.5 w-1.5 rounded-full bg-white" />
                          </div>
                          <div>
                             <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1 flex items-center gap-2">Step 2: Checker Review <Badge className="h-4 text-[9px] px-1 bg-blue-100 text-blue-700">CURRENT</Badge></p>
                             <div className="bg-white border-2 border-blue-200 rounded-lg p-4 shadow-lg shadow-blue-500/5">
                                <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-3">
                                      <Avatar className="h-8 w-8">
                                         <AvatarImage src={ticketData.assignee.avatar} />
                                         <AvatarFallback>SC</AvatarFallback>
                                      </Avatar>
                                      <div>
                                         <p className="text-sm font-bold text-zinc-900">{ticketData.assignee.name}</p>
                                         <p className="text-[10px] text-zinc-500">{ticketData.assignee.role}</p>
                                      </div>
                                   </div>
                                   <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 font-bold text-[10px] shadow-none">Pending Action</Badge>
                                </div>
                                
                                {/* Quick Action Form for current step */}
                                <div className="mt-4 pt-4 border-t border-zinc-100 space-y-3">
                                   <Textarea placeholder="Add mandatory verification notes before approving/rejecting..." className="min-h-[80px] text-xs resize-none" />
                                   <div className="flex gap-2 justify-end">
                                      <Button variant="outline" size="sm" className="font-bold text-red-600 border-red-200 hover:bg-red-50 text-xs h-8">Reject back to Maker</Button>
                                      <Button size="sm" className="font-bold bg-green-600 hover:bg-green-700 text-white text-xs h-8">Verify & Forward to CAB</Button>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>

                       {/* Step 3: CAB (PENDING) */}
                       <div className="relative pl-8 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                          <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-zinc-200 border-4 border-white shadow-sm" />
                          <div>
                             <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Step 3: CAB Approval</p>
                             <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4">
                                <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-3">
                                      <div className="h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center"><Users className="h-4 w-4 text-zinc-500" /></div>
                                      <div>
                                         <p className="text-sm font-bold text-zinc-900">Change Advisory Board</p>
                                         <p className="text-[10px] text-zinc-500">Group Level Approval</p>
                                      </div>
                                   </div>
                                   <Badge variant="outline" className="text-zinc-500 border-zinc-200 bg-white font-bold text-[10px] shadow-none">Awaiting Target</Badge>
                                </div>
                             </div>
                          </div>
                       </div>

                    </div>
                 </div>
               )}

               {activeTab === 'comments' && (
                 <div className="animate-in fade-in duration-300 space-y-6">
                    <div className="bg-white border text-sm border-zinc-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
                       <Textarea placeholder="Type a message or use @ to mention someone..." className="min-h-[100px] border-none focus-visible:ring-0 rounded-none resize-none p-4" />
                       <div className="bg-zinc-50 p-2 flex items-center justify-between border-t border-zinc-100">
                          <div className="flex gap-1">
                             <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400"><Paperclip className="h-4 w-4" /></Button>
                             <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 font-bold px-0">@</Button>
                          </div>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-8 text-xs">Send Comment</Button>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <div className="flex gap-4">
                          <Avatar className="h-8 w-8 shrink-0"><AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-bold">SC</AvatarFallback></Avatar>
                          <div className="flex-1 space-y-1">
                             <div className="flex gap-2 items-baseline">
                                <span className="font-bold text-sm text-zinc-900">Sarah Chen</span>
                                <span className="text-[10px] text-zinc-400">10 mins ago</span>
                             </div>
                             <div className="p-3 bg-zinc-50 rounded-r-xl rounded-bl-xl border border-zinc-100 text-sm text-zinc-700 shadow-sm inline-block">
                                Hey <span className="text-blue-600 font-bold bg-blue-50 px-1 rounded cursor-pointer">@Idrus</span>, the BRD doc looks solid but can we clarify step 2 on the rollback plan regarding replica promotion timeline?
                             </div>
                          </div>
                       </div>
                       
                       <div className="flex gap-4">
                          <Avatar className="h-8 w-8 shrink-0">
                            <AvatarImage src={ticketData.creator.avatar} />
                            <AvatarFallback className="text-xs font-bold">IA</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                             <div className="flex gap-2 items-baseline">
                                <span className="font-bold text-sm text-zinc-900">Idrus Afandi</span>
                                <Badge className="h-4 px-1 text-[8px] bg-zinc-200 text-zinc-600 hover:bg-zinc-200 border-none shadow-none uppercase font-bold">Author</Badge>
                                <span className="text-[10px] text-zinc-400">Just now</span>
                             </div>
                             <div className="p-3 bg-blue-50 rounded-r-xl rounded-bl-xl border border-blue-100 text-sm text-zinc-800 shadow-sm inline-block">
                                Good point. I'll update the document to explicitly state a 15-minute sync buffer before full promotion. Revising it now.
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
               )}

             </div>

          </div>

          {/* Right Column: Metadata Panel */}
          <div className="space-y-6">
             <Card className="border-zinc-200 shadow-sm bg-white">
                <CardHeader className="py-4 border-b border-zinc-100 bg-zinc-50/50">
                   <CardTitle className="text-xs font-bold uppercase tracking-wider text-zinc-400">Assignment & SLA</CardTitle>
                </CardHeader>
                <CardContent className="p-5 space-y-5">
                   
                   <div>
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Current Assignee</p>
                      <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 bg-white shadow-sm hover:border-blue-400 cursor-pointer transition-colors">
                         <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                               <AvatarImage src={ticketData.assignee.avatar} />
                               <AvatarFallback>SC</AvatarFallback>
                            </Avatar>
                            <div>
                               <p className="text-xs font-bold text-zinc-900">{ticketData.assignee.name}</p>
                               <p className="text-[10px] text-zinc-500">{ticketData.assignee.role}</p>
                            </div>
                         </div>
                         <Button variant="ghost" size="sm" className="h-6 text-[10px] text-blue-600 font-bold px-2">Change</Button>
                      </div>
                   </div>

                   <div>
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Reporter / Maker</p>
                      <div className="flex items-center gap-3">
                         <Avatar className="h-6 w-6">
                            <AvatarImage src={ticketData.creator.avatar} />
                            <AvatarFallback>IA</AvatarFallback>
                         </Avatar>
                         <p className="text-xs font-semibold text-zinc-700">{ticketData.creator.name}</p>
                      </div>
                   </div>

                   <div className="p-3 bg-amber-50 rounded-lg border border-amber-100 flex items-start gap-3">
                      <Clock className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                      <div>
                         <p className="text-xs font-bold text-amber-800">SLA Timer Active</p>
                         <p className="text-[10px] text-amber-700/80 font-medium mt-0.5">{ticketData.sla} to complete Review phase.</p>
                      </div>
                   </div>
                </CardContent>
             </Card>

             <Card className="border-zinc-200 shadow-sm bg-white">
                <CardHeader className="py-4 border-b border-zinc-100 bg-zinc-50/50">
                   <CardTitle className="text-xs font-bold uppercase tracking-wider text-zinc-400">Properties</CardTitle>
                </CardHeader>
                <CardContent className="p-5 space-y-4">
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-500 font-medium text-xs">Affected System</span>
                      <span className="font-bold text-zinc-900 text-xs">{ticketData.system}</span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-500 font-medium text-xs">Compliance Tag</span>
                      <Badge className="bg-zinc-100 hover:bg-zinc-100 text-zinc-600 text-[9px] shadow-none border-none py-0">OJK-M12</Badge>
                   </div>
                   <div className="pt-4 border-t border-zinc-100 space-y-3">
                      <div>
                         <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Created Date</p>
                         <p className="text-xs font-semibold text-zinc-700 mt-0.5 flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {ticketData.dates.created}</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Target Date</p>
                         <p className="text-xs font-semibold text-zinc-700 mt-0.5 flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {ticketData.dates.target}</p>
                      </div>
                      <div className="p-2 bg-zinc-50 rounded border border-zinc-100">
                         <p className="text-[10px] font-bold text-zinc-500">Maintenance Window</p>
                         <p className="text-xs font-bold text-zinc-900 font-mono mt-0.5">{ticketData.dates.maintenance}</p>
                      </div>
                   </div>
                </CardContent>
             </Card>
          </div>

        </main>
      </div>
    </div>
  );
}

"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  XOctagon, 
  ThumbsUp, 
  ThumbsDown,
  MinusCircle,
  Video,
  FileText
} from "lucide-react";

const cabAgenda = [
  { id: "CR-2024-0042", title: "Migrate DC Server to Cloud AWS", proponent: "Infra Team", status: "WAITING CAB", risk: "High", votes: { approve: 2, reject: 0, defer: 0 } },
  { id: "CR-2024-0045", title: "Firewall rule update for ATM network", proponent: "Security Team", status: "WAITING CAB", risk: "Medium", votes: { approve: 1, reject: 1, defer: 1 } },
  { id: "CR-2024-0048", title: "Deploy new ML Fraud Detection Model", proponent: "Data Team", status: "WAITING CAB", risk: "Critical", votes: { approve: 0, reject: 0, defer: 0 } },
];

export default function CABMeetingPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans selection:bg-blue-500/30">
      <Sidebar />
      <div className="flex flex-1 flex-col lg:pl-60">
        <Header />
        <main className="flex-1 space-y-6 p-6 lg:p-10">
          
          <div className="flex items-center justify-between mb-2">
             <div>
               <h1 className="text-2xl font-bold text-zinc-900">CAB Meeting Room</h1>
               <p className="text-sm text-zinc-500">Live review and voting portal for Change Advisory Board members.</p>
             </div>
             <div className="flex items-center gap-2">
               <Button variant="outline" className="gap-2 font-bold bg-white"><FileText className="h-4 w-4" /> Download MoM</Button>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold shadow-sm">
                  <Video className="h-4 w-4" /> Join Zoom Meeting
               </Button>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* Left Column: Meeting Details */}
             <div className="space-y-6">
                <Card className="border-zinc-200 shadow-sm">
                   <CardHeader className="bg-zinc-50/50 border-b border-zinc-100">
                      <div className="flex items-center justify-between">
                         <CardTitle className="text-sm font-bold uppercase tracking-wider text-zinc-400">Meeting Details</CardTitle>
                         <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-2 py-0.5 animate-pulse">IN PROGRESS</Badge>
                      </div>
                   </CardHeader>
                   <CardContent className="p-4 space-y-4">
                      <div>
                         <p className="text-sm font-bold text-zinc-900">Weekly CAB Review - Q2 W3</p>
                         <div className="flex items-center gap-4 mt-2 text-xs font-semibold text-zinc-500">
                            <span className="flex items-center gap-1.5"><CalendarIcon className="h-3.5 w-3.5 text-blue-500"/> 18 June 2024</span>
                            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-amber-500"/> 14:00 - 15:30</span>
                         </div>
                      </div>
                      <div className="border-t border-zinc-100 pt-4">
                         <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Attendance (5/7)</p>
                         <div className="flex flex-wrap gap-2">
                            {['IT Sec', 'Infra', 'App Dev', 'QA', 'Business'].map(dept => (
                               <Badge key={dept} variant="outline" className="border-zinc-200 text-zinc-600 bg-white">
                                  <CheckCircle2 className="h-3 w-3 text-green-500 mr-1.5" />
                                  {dept}
                               </Badge>
                            ))}
                         </div>
                      </div>
                   </CardContent>
                </Card>

                <Card className="border-zinc-200 shadow-sm bg-blue-50/50">
                   <CardHeader>
                      <CardTitle className="text-sm font-bold text-blue-900">Your Action Required</CardTitle>
                      <CardDescription className="text-blue-700/70 text-xs">You have 3 tickets pending your vote in this session.</CardDescription>
                   </CardHeader>
                </Card>
             </div>

             {/* Right Column: Agenda & Voting */}
             <div className="lg:col-span-2 space-y-4">
                {cabAgenda.map((ticket, index) => (
                   <Card key={ticket.id} className={`border-zinc-200 shadow-sm transition-all ${index === 1 ? 'ring-2 ring-blue-500 bg-blue-50/10' : ''}`}>
                      <CardHeader className="pb-3 border-b border-zinc-100 flex flex-row items-start justify-between">
                         <div>
                            <div className="flex items-center gap-2 mb-1">
                               <span className="text-xs font-extrabold text-blue-600">{ticket.id}</span>
                               <Badge className="bg-zinc-100 text-zinc-600 hover:bg-zinc-100 border-none font-bold uppercase text-[9px]">{ticket.risk} Risk</Badge>
                               {index === 1 && <span className="text-[10px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded uppercase animate-pulse">Currently Discussing</span>}
                            </div>
                            <CardTitle className="text-lg font-bold text-zinc-900">{ticket.title}</CardTitle>
                            <p className="text-xs font-medium text-zinc-500 mt-1">Proponent: {ticket.proponent}</p>
                         </div>
                         <Button variant="outline" size="sm" className="h-8 text-xs font-bold">View Detail</Button>
                      </CardHeader>
                      
                      <CardContent className="p-4 bg-zinc-50/30 flex flex-col md:flex-row items-center gap-4 justify-between">
                         
                         {/* Live Voting Results */}
                         <div className="flex gap-4 w-full md:w-auto">
                            <div className="flex flex-col items-center p-2 rounded-lg bg-green-50 min-w-[70px]">
                               <span className="text-[10px] font-bold text-green-700 uppercase">Approve</span>
                               <span className="text-xl font-black text-green-700">{ticket.votes.approve}</span>
                            </div>
                            <div className="flex flex-col items-center p-2 rounded-lg bg-red-50 min-w-[70px]">
                               <span className="text-[10px] font-bold text-red-700 uppercase">Reject</span>
                               <span className="text-xl font-black text-red-700">{ticket.votes.reject}</span>
                            </div>
                            <div className="flex flex-col items-center p-2 rounded-lg bg-zinc-100 min-w-[70px]">
                               <span className="text-[10px] font-bold text-zinc-600 uppercase">Defer</span>
                               <span className="text-xl font-black text-zinc-700">{ticket.votes.defer}</span>
                            </div>
                         </div>

                         {/* Voting Actions */}
                         <div className="flex gap-2 w-full md:w-auto justify-end border-t md:border-t-0 md:border-l border-zinc-200 pt-4 md:pt-0 md:pl-4">
                            <Button className="h-10 w-10 p-0 rounded-full bg-white border-2 border-zinc-200 text-green-600 hover:bg-green-50 hover:border-green-500 transition-colors" title="Vote Approve">
                               <ThumbsUp className="h-5 w-5" />
                            </Button>
                            <Button className="h-10 w-10 p-0 rounded-full bg-white border-2 border-zinc-200 text-red-600 hover:bg-red-50 hover:border-red-500 transition-colors" title="Vote Reject">
                               <ThumbsDown className="h-5 w-5" />
                            </Button>
                            <Button className="h-10 w-10 p-0 rounded-full bg-white border-2 border-zinc-200 text-zinc-500 hover:bg-zinc-100 hover:border-zinc-400 transition-colors" title="Vote Defer">
                               <MinusCircle className="h-5 w-5" />
                            </Button>
                         </div>

                      </CardContent>
                   </Card>
                ))}
             </div>
          </div>

        </main>
      </div>
    </div>
  );
}

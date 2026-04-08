"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, FileText, ChevronRight, Hash, Clock, Star } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function PagesTab() {
  return (
    <div className="flex-1 flex flex-col bg-white">
       {/* Search Bar */}
       <div className="px-6 py-4 flex items-center justify-between border-b border-zinc-100">
          <div className="relative w-80">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
             <Input placeholder="Search project documentation..." className="h-9 pl-10 text-xs border-zinc-200" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold h-9">
              <Plus className="h-4 w-4" /> New page
          </Button>
       </div>

       <div className="flex-1 flex overflow-hidden">
          {/* Tree Navigation */}
          <div className="w-64 border-r border-zinc-100 p-4 space-y-6 hidden md:block">
             <div className="space-y-2">
                <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider ml-2">Recent Pages</h3>
                <div className="space-y-1">
                   {["Product Spec V1", "API Documentation", "Meeting Notes"].map(p => (
                     <div key={p} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-zinc-50 cursor-pointer text-xs font-medium text-zinc-600">
                        <FileText className="h-3.5 w-3.5 text-zinc-400" /> {p}
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="space-y-2">
                <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider ml-2">Collections</h3>
                <div className="space-y-1">
                   {["Engineering", "Design", "Marketing", "Legal"].map(c => (
                     <div key={c} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-zinc-50 cursor-pointer text-xs font-medium text-zinc-600">
                        <Hash className="h-3.5 w-3.5 text-zinc-400" /> {c}
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Main List */}
          <div className="flex-1 p-6 lg:p-10 bg-zinc-50/20 overflow-auto">
             <h2 className="text-xl font-bold text-zinc-900 mb-6">All Pages</h2>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[
                  { title: "Technical Architecture Overview", desc: "System diagram and component breakdown.", time: "Updated 2h ago" },
                  { title: "OAuth 2.0 Integration Guide", desc: "Steps to implement Google and Github login.", time: "Updated 1d ago" },
                  { title: "Q3 Design Roadmap", desc: "Key milestones for the design team.", time: "Updated 3d ago" },
                  { title: "Infrastructure Cost Analysis", desc: "Monthly spend on AWS and Vercel.", time: "Updated 1w ago" },
                ].map((page, i) => (
                  <Card key={i} className="border-zinc-200 hover:shadow-md transition-all cursor-pointer group">
                     <CardContent className="p-5 flex gap-4">
                        <div className="h-10 w-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                           <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                           <div className="flex items-center justify-between mb-1">
                              <h4 className="text-sm font-bold text-zinc-900 group-hover:text-blue-600">{page.title}</h4>
                              <Star className="h-3 w-3 text-zinc-200 group-hover:text-zinc-400" />
                           </div>
                           <p className="text-xs text-zinc-500 line-clamp-1 mb-3">{page.desc}</p>
                           <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400">
                              <Clock className="h-3 w-3" /> {page.time}
                           </div>
                        </div>
                     </CardContent>
                  </Card>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Send, MoreHorizontal, Settings2 } from "lucide-react";

export default function FormsPage() {
  return (
    <div className="flex-1 flex flex-col p-6 lg:p-10 bg-zinc-50/30">
       <div className="max-w-4xl mx-auto w-full space-y-6">
          <div className="flex items-center justify-between">
             <div className="space-y-1">
                <h2 className="text-xl font-bold text-zinc-900">Project Forms</h2>
                <p className="text-xs text-zinc-500 font-medium">Create and manage intake forms for project requests.</p>
             </div>
             <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold h-9">
                <Plus className="h-4 w-4" /> Create form
             </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <Card className="border-zinc-200 hover:border-blue-400 transition-colors cursor-pointer group">
                <CardHeader className="flex flex-row items-start justify-between">
                   <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <FileText className="h-5 w-5" />
                   </div>
                   <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="h-4 w-4" />
                   </Button>
                </CardHeader>
                <CardContent className="space-y-2">
                   <CardTitle className="text-sm font-bold text-zinc-900">Bug Report Intake</CardTitle>
                   <p className="text-xs text-zinc-500 leading-relaxed">Standard form for external testers to report bugs to the board.</p>
                   <div className="pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400">
                         <Send className="h-3 w-3" /> 148 submissions
                      </div>
                      <span className="text-[10px] font-extrabold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">Active</span>
                   </div>
                </CardContent>
             </Card>

             <Card className="border-zinc-200 border-dashed bg-transparent hover:bg-white transition-all flex flex-col items-center justify-center p-8 gap-3">
                <div className="h-12 w-12 rounded-full bg-zinc-100 flex items-center justify-center">
                   <Plus className="h-6 w-6 text-zinc-400" />
                </div>
                <div className="text-center">
                   <p className="text-sm font-bold text-zinc-900">New Template</p>
                   <p className="text-[10px] text-zinc-400 font-medium">Start from a blank canvas</p>
                </div>
             </Card>
          </div>
       </div>
    </div>
  );
}

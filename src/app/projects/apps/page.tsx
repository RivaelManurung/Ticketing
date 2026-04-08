"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Code2, MessageCircle, PenTool, Database, Zap, MoreHorizontal, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const apps = [
  { name: "GitHub", desc: "Sync commits and PRs to Jira issues.", icon: <Code2 className="h-6 w-6" />, status: "connected" },
  { name: "Slack", desc: "Get project notifications in Slack.", icon: <MessageCircle className="h-6 w-6" />, status: "connected" },
  { name: "Figma", desc: "Embed design files and prototypes.", icon: <PenTool className="h-6 w-6" />, status: "not-connected" },
  { name: "Sentry", desc: "Track errors and link to issues.", icon: <Zap className="h-6 w-6 text-purple-600" />, status: "not-connected" },
  { name: "CircleCI", desc: "View build and deployment status.", icon: <Database className="h-6 w-6 text-zinc-600" />, status: "not-connected" },
];

export default function AppsPage() {
  return (
    <div className="flex-1 p-6 lg:p-10 bg-zinc-50/10 overflow-auto">
       <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="flex items-center justify-between">
             <div className="space-y-1">
                <h2 className="text-xl font-bold text-zinc-900">Apps & Integrations</h2>
                <p className="text-sm text-zinc-500 font-medium">Extend your project capabilities with third-party tools.</p>
             </div>
             <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold h-9">
                Explore Marketplace <ExternalLink className="h-4 w-4" />
             </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {apps.map((app, i) => (
               <Card key={i} className="border-zinc-200 hover:border-blue-300 transition-all cursor-pointer group">
                  <CardHeader className="flex flex-row items-start justify-between">
                     <div className="h-12 w-12 rounded-xl bg-white border border-zinc-100 flex items-center justify-center shadow-sm">
                        {app.icon}
                     </div>
                     <Badge variant={app.status === 'connected' ? "secondary" : "outline"} className={app.status === 'connected' ? "bg-green-50 text-green-700 border-none text-[10px] font-bold uppercase" : "text-zinc-400 border-zinc-200 text-[10px] font-bold uppercase"}>
                        {app.status === 'connected' ? 'Active' : 'Add'}
                     </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                     <CardTitle className="text-sm font-bold text-zinc-900">{app.name}</CardTitle>
                     <p className="text-xs text-zinc-500 leading-relaxed font-medium">{app.desc}</p>
                     <div className="pt-2">
                        <Button variant="ghost" size="sm" className="h-7 w-full text-[10px] font-bold bg-zinc-50 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                           {app.status === 'connected' ? 'Configure' : 'Connect App'}
                        </Button>
                     </div>
                  </CardContent>
               </Card>
             ))}
          </div>

       </div>
    </div>
  );
}

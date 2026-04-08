"use client";

import { Button } from "@/components/ui/button";
import { Plus, ExternalLink, Mail, Code2, MessageCircle, Globe, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const shortcuts = [
  { name: "Product Requirements", url: "confluence.com/tbt-specs", icon: <Globe className="h-4 w-4" /> },
  { name: "GitHub Repository", url: "github.com/org/tbt-app", icon: <Code2 className="h-4 w-4" /> },
  { name: "Team Slack Channel", url: "org.slack.com/archives/tbt", icon: <MessageCircle className="h-4 w-4" /> },
  { name: "Support Mailbox", url: "support@org.com", icon: <Mail className="h-4 w-4" /> },
];

export default function ShortcutsPage() {
  return (
    <div className="flex-1 p-6 lg:p-10 bg-zinc-50/10">
       <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
             <div className="space-y-1">
                <h2 className="text-xl font-bold text-zinc-900">Project Shortcuts</h2>
                <p className="text-xs text-zinc-500 font-medium">Add external links for quick team access.</p>
             </div>
             <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold h-9">
                <Plus className="h-4 w-4" /> Add shortcut
             </Button>
          </div>

          <div className="space-y-3">
             {shortcuts.map((s, i) => (
               <Card key={i} className="border-zinc-200 hover:border-blue-300 transition-colors group cursor-pointer">
                  <CardContent className="p-4 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="h-9 w-9 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                           {s.icon}
                        </div>
                        <div>
                           <p className="text-sm font-bold text-zinc-900">{s.name}</p>
                           <p className="text-xs text-zinc-400 font-medium">{s.url}</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-300 hover:text-blue-600">
                           <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-300 hover:text-zinc-600">
                           <MoreHorizontal className="h-4 w-4" />
                        </Button>
                     </div>
                  </CardContent>
               </Card>
             ))}
          </div>

          <Card className="border-zinc-200 border-dashed bg-transparent p-12 flex flex-col items-center justify-center gap-4">
             <div className="h-16 w-16 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 shadow-inner">
                <Plus className="h-8 w-8 text-zinc-300" />
             </div>
             <div className="text-center space-y-1">
                <p className="text-sm font-bold text-zinc-900">Add a new link</p>
                <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">External tools, documentation, or team resources that everyone should have access to.</p>
             </div>
          </Card>
       </div>
    </div>
  );
}

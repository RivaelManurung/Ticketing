"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Plus, GripVertical, AlertCircle, Layout, CheckSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Status = "todo" | "in-progress" | "review" | "done";

interface Issue {
  id: string;
  title: string;
  type: string;
  priority: string;
  status: Status;
  assignee: { name: string; avatar: string };
}

const COLUMNS: { id: Status; title: string }[] = [
  { id: "todo", title: "TO DO" },
  { id: "in-progress", title: "IN PROGRESS" },
  { id: "review", title: "IN REVIEW" },
  { id: "done", title: "DONE" }
];

const INITIAL_ISSUES: Issue[] = [
  { id: "TBT-1", title: "Create project brief and goals", type: "task", priority: "high", status: "todo", assignee: { name: "Alana", avatar: "https://i.pravatar.cc/150?u=alana" } },
  { id: "TBT-4", title: "Plan your website layout and IA", type: "task", priority: "medium", status: "in-progress", assignee: { name: "Grace", avatar: "https://i.pravatar.cc/150?u=grace" } },
  { id: "TBT-6", title: "Create prototype to test", type: "task", priority: "highest", status: "done", assignee: { name: "Hassana", avatar: "https://i.pravatar.cc/150?u=hassana" } },
  { id: "TBT-8", title: "Stakeholder feedback loop", type: "task", priority: "low", status: "review", assignee: { name: "Idrus", avatar: "https://media.licdn.com/dms/image/v2/D5635AQErDDFPKsG-kA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1679738576014?e=1776225600&v=beta&t=7TRT9dgIUX9WxA_8X2IOTse5lOwoQSTopJvgpujy4eg" } },
];

const TypeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "bug": return <AlertCircle className="h-4 w-4 text-red-500 fill-red-100" />;
    case "epic": return <Layout className="h-4 w-4 text-purple-500 fill-purple-100" />;
    case "task": 
    default: return <CheckSquare className="h-4 w-4 text-blue-500 fill-blue-100" />;
  }
};

export default function BoardPage() {
  const [issues, setIssues] = useState<Issue[]>(INITIAL_ISSUES);
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const onDragStart = (e: React.DragEvent, id: string) => {
    setDraggedId(id);
    e.dataTransfer.setData("issueId", id);
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const onDrop = (e: React.DragEvent, status: Status) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("issueId");
    
    setIssues(prev => prev.map(issue => 
      issue.id === id ? { ...issue, status } : issue
    ));
    setDraggedId(null);
  };

  return (
    <div className="flex-1 overflow-auto p-6 lg:px-10 bg-zinc-50/20">
      <div className="flex gap-4 h-full items-start min-w-max">
        {COLUMNS.map(column => {
          const columnIssues = issues.filter(i => i.status === column.id);
          
          return (
            <div 
              key={column.id} 
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, column.id)}
              className="flex flex-col w-[300px] shrink-0 max-h-full rounded-xl bg-zinc-100/50 border border-zinc-200 shadow-sm font-sans transition-colors"
            >
              <div className="p-3 pb-2 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-zinc-500 tracking-tight uppercase">{column.title}</span>
                    <Badge variant="secondary" className="h-4 px-1.5 min-w-[20px] justify-center bg-zinc-200 text-zinc-600 text-[10px] font-bold border-none">{columnIssues.length}</Badge>
                 </div>
                 <Button variant="ghost" size="icon" className="h-6 w-6 text-zinc-400 hover:text-zinc-900">
                    <MoreHorizontal className="h-4 w-4" />
                 </Button>
              </div>

              <div className="flex-1 overflow-y-auto min-h-[150px] p-2 space-y-2 custom-scrollbar">
                 {columnIssues.map((issue) => (
                   <div 
                     key={issue.id} 
                     draggable
                     onDragStart={(e) => onDragStart(e, issue.id)}
                     className={cn(
                        "bg-white p-3 rounded-lg border border-zinc-200 shadow-sm hover:border-blue-400 transition-all group cursor-grab active:cursor-grabbing",
                        draggedId === issue.id && "opacity-40 grayscale-[0.5] scale-95 border-blue-500 border-dashed"
                     )}
                   >
                      <div className="flex items-start justify-between gap-3">
                         <p className="text-xs font-semibold text-zinc-800 leading-relaxed mb-2 flex-1">{issue.title}</p>
                         <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <GripVertical className="h-3 w-3 text-zinc-300" />
                         </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                         <div className="flex items-center gap-2">
                            <TypeIcon type={issue.type} />
                            <span className="text-[10px] font-bold text-zinc-400">{issue.id}</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <Avatar className="h-5 w-5 border border-zinc-100 shadow-sm">
                               <AvatarImage src={issue.assignee.avatar} />
                               <AvatarFallback className="text-[8px]">{issue.assignee.name[0]}</AvatarFallback>
                            </Avatar>
                         </div>
                      </div>
                   </div>
                 ))}
                 
                 {columnIssues.length === 0 && (
                    <div className="h-24 border-2 border-dashed border-zinc-200 rounded-lg flex items-center justify-center text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
                       Drop here
                    </div>
                 )}

                 <Button variant="ghost" className="w-full justify-start gap-2 h-9 text-zinc-500 hover:text-zinc-900 text-xs font-bold px-3 hover:bg-zinc-200/50 mt-2">
                    <Plus className="h-4 w-4" />
                    Create issue
                 </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

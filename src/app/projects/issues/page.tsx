"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Plus, 
  CheckSquare,
  Filter,
  ArrowUpDown,
  MoreVertical,
  Layout,
  AlertCircle
} from "lucide-react";

const issues = [
  { id: "TBT-1", summary: "Create project brief and goals", status: "TO DO", assignee: "Alana Song", priority: "High", type: "task" },
  { id: "TBT-2", summary: "Carry out user research", status: "DRAFTING", assignee: "Donald Craig", priority: "Medium", type: "task" },
  { id: "TBT-3", summary: "Synthesise insights and play back", status: "IN REVIEW", assignee: "Jie Yan", priority: "High", type: "task" },
  { id: "TBT-4", summary: "Plan your website layout", status: "IN PROGRESS", assignee: "Grace Harris", priority: "Highest", type: "task" },
  { id: "TBT-5", summary: "Design system dark mode", status: "TO DO", assignee: "Sarah Chen", priority: "Medium", type: "bug" },
  { id: "TBT-6", summary: "API Authentication setup", status: "DONE", assignee: "Alex Wong", priority: "Highest", type: "task" },
  { id: "TBT-7", summary: "Marketing assets for rollout", status: "TO DO", assignee: "Unassigned", priority: "Low", type: "task" },
];

export default function IssuesPage() {
  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Search and Filters */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-zinc-100">
        <div className="flex items-center gap-3">
           <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input placeholder="Search issues..." className="h-9 pl-10 text-xs border-zinc-200" />
           </div>
           <Button variant="outline" size="sm" className="h-9 gap-2 text-xs font-bold border-zinc-200 text-zinc-600">
              <Filter className="h-3.5 w-3.5" /> Filters
           </Button>
        </div>
        <div className="flex items-center gap-2">
           <Button className="h-9 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold gap-2">
              <Plus className="h-4 w-4" /> Create issue
           </Button>
        </div>
      </div>

      {/* Issues Table */}
      <div className="flex-1 overflow-auto px-6">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-zinc-200">
              <TableHead className="w-16 text-xs font-bold text-zinc-400 uppercase">T</TableHead>
              <TableHead className="w-24 text-xs font-bold text-zinc-400 uppercase">Key</TableHead>
              <TableHead className="text-xs font-bold text-zinc-400 uppercase">Summary</TableHead>
              <TableHead className="w-32 text-xs font-bold text-zinc-400 uppercase">Status</TableHead>
              <TableHead className="w-32 text-xs font-bold text-zinc-400 uppercase">Priority</TableHead>
              <TableHead className="w-48 text-xs font-bold text-zinc-400 uppercase">Assignee</TableHead>
              <TableHead className="w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issues.map((issue) => (
              <TableRow key={issue.id} className="group hover:bg-zinc-50 transition-colors border-b border-zinc-50 cursor-pointer">
                <TableCell>
                  {issue.type === 'bug' ? (
                     <AlertCircle className="h-4 w-4 text-red-500 fill-red-50" />
                  ) : (
                     <CheckSquare className="h-4 w-4 text-blue-500 fill-blue-50" />
                   )}
                </TableCell>
                <TableCell className="text-xs font-bold text-zinc-400 group-hover:text-blue-600">
                   {issue.id}
                </TableCell>
                <TableCell className="text-sm font-medium text-zinc-900">
                   {issue.summary}
                </TableCell>
                <TableCell>
                   <Badge className={cn(
                        "rounded px-1.5 py-0.5 text-[10px] font-bold border-none",
                        issue.status === "DONE" ? "bg-green-100 text-green-700" : 
                        issue.status === "TO DO" ? "bg-zinc-100 text-zinc-600" :
                        "bg-blue-100 text-blue-700 font-extrabold"
                      )}>
                        {issue.status}
                      </Badge>
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                     <span className={cn(
                       "h-2 w-2 rounded-full",
                       issue.priority === 'Highest' ? "bg-red-500" : 
                       issue.priority === 'High' ? "bg-orange-500" : 
                       "bg-green-500"
                     )} />
                     <span className="text-[11px] font-bold text-zinc-600">{issue.priority}</span>
                   </div>
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                         <AvatarFallback className="text-[9px] font-bold bg-zinc-100">{issue.assignee[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs font-semibold text-zinc-700">{issue.assignee}</span>
                   </div>
                </TableCell>
                <TableCell>
                   <MoreVertical className="h-4 w-4 text-zinc-300 opacity-0 group-hover:opacity-100" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  ChevronDown, 
  Grid2X2,
  Calendar,
  ArrowRight,
  Target,
  Circle,
  Hash,
  Users2
} from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const goals = [
  {
    id: 1,
    title: "Partnership expansion: Expand our network of marketing partners",
    status: "ON TRACK",
    statusScore: "0.7",
    progress: 25,
    targetDate: "Jun",
    owner: "https://i.pravatar.cc/150?u=1",
    lastUpdate: "1 day ago",
  },
  {
    id: 2,
    title: "Partner identification and outreach",
    status: "ON TRACK",
    statusScore: "0.7",
    progress: 25,
    targetDate: "Jun",
    owner: "https://i.pravatar.cc/150?u=2",
    lastUpdate: "3 weeks ago",
  },
  {
    id: 3,
    title: "Successfully onboard and integrate 500 new marketplace partners",
    status: "ON TRACK",
    statusScore: "0.7",
    progress: 25,
    targetDate: "Jun",
    owner: "https://i.pravatar.cc/150?u=3",
    lastUpdate: "3 weeks ago",
  },
  {
    id: 4,
    title: "Strengthen partner relationships: Create and roll out a new program",
    status: "AT RISK",
    statusScore: "0.5",
    progress: 25,
    targetDate: "Jun",
    owner: "https://i.pravatar.cc/150?u=4",
    lastUpdate: "4 days ago",
  },
  {
    id: 5,
    title: "Identify and reach out to 800 potential marketplace partners",
    status: "ON TRACK",
    statusScore: "0.7",
    progress: 75,
    targetDate: "May 2024",
    owner: "https://i.pravatar.cc/150?u=5",
    lastUpdate: "5 hours ago",
  },
  {
    id: 6,
    title: "Awareness and promotion - Launch a comprehensive partner campaign",
    status: "ON TRACK",
    statusScore: "0.7",
    progress: 50,
    targetDate: "Jul - Sep",
    owner: "https://i.pravatar.cc/150?u=6",
    lastUpdate: "29 mins ago",
  },
  {
    id: 7,
    title: "Upgrade to React 18",
    status: "ON TRACK",
    statusScore: "0.7",
    progress: 50,
    targetDate: "Jun 2024",
    owner: "https://i.pravatar.cc/150?u=7",
    lastUpdate: "1 month ago",
  },
  {
    id: 8,
    title: "Increase social impact: Grow Idea Thread charitable donations by 20%",
    status: "ON TRACK",
    statusScore: "0.7",
    progress: 75,
    targetDate: "Jun",
    owner: "https://i.pravatar.cc/150?u=8",
    lastUpdate: "3 weeks ago",
  },
  {
    id: 9,
    title: "[KR2] 879 Cloud Migration Campaigns",
    status: "ON TRACK",
    statusScore: "0.7",
    progress: 25,
    targetDate: "Jun",
    owner: "https://i.pravatar.cc/150?u=9",
    lastUpdate: "2 weeks ago",
  },
  {
    id: 10,
    title: "[KR2] 72% Cloud Choice Rate",
    status: "ON TRACK",
    statusScore: "0.7",
    progress: 50,
    targetDate: "Jun",
    owner: "https://i.pravatar.cc/150?u=10",
    lastUpdate: "3 weeks ago",
  },
  {
    id: 11,
    title: "Increase sales: Increase sales by 350% YOY for children's category",
    status: "OFF TRACK",
    statusScore: "0.2",
    progress: 10,
    targetDate: "Jun",
    owner: "https://i.pravatar.cc/150?u=11",
    lastUpdate: "3 weeks ago",
  },
];

export default function GoalsPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black font-sans selection:bg-blue-500/30">
      <Sidebar />
      
      <div className="flex flex-1 flex-col lg:pl-60">
        <Header />
        
        <main className="flex-1 bg-white">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
            <h1 className="text-2xl font-semibold text-zinc-900">Goals</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
              <Button className="h-8 bg-blue-600 hover:bg-blue-700 text-white gap-2">
                <Plus className="h-4 w-4" /> Create
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-6 border-b border-zinc-200">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-transparent h-12 gap-6 rounded-none p-0">
                <TabsTrigger 
                  value="all" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 h-12"
                >
                  All goals
                </TabsTrigger>
                <TabsTrigger 
                  value="my" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 h-12"
                >
                  My goals
                </TabsTrigger>
                <TabsTrigger 
                  value="add" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 h-12"
                >
                  Add view
                </TabsTrigger>
                <TabsTrigger 
                  value="more" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 h-12 text-zinc-500"
                >
                  More views <ChevronDown className="ml-1 h-3 w-3" />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Filters & Search */}
          <div className="px-6 py-4 space-y-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input 
                placeholder="Search goals" 
                className="pl-10 h-10 border-zinc-200 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center gap-2 flex-wrap">
              <Button variant="ghost" size="sm" className="h-8 gap-2 border border-zinc-200 text-zinc-600">
                <Hash className="h-4 w-4" /> Filter by topic
              </Button>
              <Button variant="ghost" size="sm" className="h-8 gap-2 border border-zinc-200 text-zinc-600">
                <Circle className="h-4 w-4" /> Status
              </Button>
              <Button variant="ghost" size="sm" className="h-8 gap-2 border border-zinc-200 text-zinc-600">
                <Avatar className="h-4 w-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-[8px]">O</AvatarFallback>
                </Avatar> 
                Owner
              </Button>
              <Button variant="ghost" size="sm" className="h-8 gap-2 border border-zinc-200 text-zinc-600">
                <Users2 className="h-4 w-4" /> Team
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 border border-zinc-200">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Statistics Header */}
          <div className="px-6 py-2 flex items-center justify-between">
            <div className="text-sm font-bold text-zinc-900">
              3,214 Goals
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 text-xs font-medium text-zinc-500 gap-1">
                    Sort by follower count <ArrowRight className="h-3 w-3 rotate-90" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <Grid2X2 className="h-4 w-4" />
                </Button>
            </div>
          </div>

          {/* Goals Table */}
          <div className="flex-1 overflow-auto px-6 pb-10">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-zinc-200">
                  <TableHead className="w-10"></TableHead>
                  <TableHead className="text-xs font-bold text-zinc-500 uppercase">Goal</TableHead>
                  <TableHead className="text-xs font-bold text-zinc-500 uppercase">Status</TableHead>
                  <TableHead className="text-xs font-bold text-zinc-500 uppercase">Progress</TableHead>
                  <TableHead className="text-xs font-bold text-zinc-500 uppercase">Target date</TableHead>
                  <TableHead className="text-xs font-bold text-zinc-500 uppercase">Owner</TableHead>
                  <TableHead className="text-xs font-bold text-zinc-500 uppercase">Last update</TableHead>
                  <TableHead className="w-20"></TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {goals.map((goal) => (
                  <TableRow key={goal.id} className="group border-zinc-100">
                    <TableCell>
                      <ArrowRight className="h-4 w-4 text-zinc-400 -rotate-90 group-hover:text-zinc-600 cursor-pointer" />
                    </TableCell>
                    <TableCell className="max-w-md">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-full border bg-white shadow-sm",
                            goal.status === "ON TRACK" ? "text-green-600" : goal.status === "AT RISK" ? "text-amber-600" : "text-rose-600"
                        )}>
                            <Target className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium text-zinc-900 line-clamp-1">{goal.title}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5">
                        <Badge className={cn(
                            "rounded px-1.5 py-0.5 text-[10px] font-bold shadow-none",
                            goal.status === "ON TRACK" 
                                ? "bg-green-100 text-green-700 hover:bg-green-100" 
                                : goal.status === "AT RISK"
                                ? "bg-amber-100 text-amber-700 hover:bg-amber-100"
                                : "bg-rose-100 text-rose-700 hover:bg-rose-100"
                        )}>
                            {goal.status} {goal.statusScore}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="min-w-[120px]">
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                            <div 
                                className={cn(
                                    "h-full rounded-full",
                                    goal.status === "ON TRACK" ? "bg-blue-600" : goal.status === "AT RISK" ? "bg-amber-500" : "bg-rose-500"
                                )} 
                                style={{ width: `${goal.progress}%` }} 
                            />
                        </div>
                        <span className="text-[11px] font-medium text-zinc-400">{goal.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <Calendar className="h-3.5 w-3.5" />
                        {goal.targetDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Avatar className="h-7 w-7">
                        <AvatarImage src={goal.owner} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="text-xs text-zinc-500 whitespace-nowrap">
                      {goal.lastUpdate}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="h-7 text-xs font-bold border-zinc-200 text-zinc-600 hover:bg-zinc-50">
                        Follow
                      </Button>
                    </TableCell>
                    <TableCell>
                      <MoreHorizontal className="h-4 w-4 text-zinc-400 cursor-pointer opacity-0 group-hover:opacity-100" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
}

"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Filter, 
  Plus, 
  MoreVertical,
  ShieldAlert,
  UserCheck,
  UserX,
  Mail
} from "lucide-react";

const usersData = [
  { id: 1, name: "Idrus Afandi", email: "idrus.afandi@bank.com", department: "IT Security", role: "Super Admin", status: "Active", scope: "All Systems", avatar: "https://media.licdn.com/dms/image/v2/D5635AQErDDFPKsG-kA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1679738576014?e=1776225600&v=beta&t=7TRT9dgIUX9WxA_8X2IOTse5lOwoQSTopJvgpujy4eg" },
  { id: 2, name: "Sarah Chen", email: "sarah.chen@bank.com", department: "IT Operations", role: "Manager (Approver)", status: "Active", scope: "Core Banking", avatar: "https://i.pravatar.cc/150?u=sarah" },
  { id: 3, name: "Michael Wong", email: "m.wong@bank.com", department: "Digital Dev", role: "Maker", status: "Active", scope: "Mobile App", avatar: "https://i.pravatar.cc/150?u=michael" },
  { id: 4, name: "David Kumar", email: "d.kumar@bank.com", department: "Compliance", role: "Viewer", status: "Inactive", scope: "Reporting Only", avatar: "https://i.pravatar.cc/150?u=david" },
  { id: 5, name: "Elena Gilbert", email: "elena.g@bank.com", department: "QA", role: "Checker", status: "Active", scope: "ATM Network", avatar: "https://i.pravatar.cc/150?u=elena" },
];

export default function UserManagementPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans selection:bg-blue-500/30">
      <Sidebar />
      <div className="flex flex-1 flex-col lg:pl-60">
        <Header />
        <main className="flex-1 space-y-6 p-6 lg:p-10">
          
          <div className="flex items-center justify-between">
             <div>
               <h1 className="text-2xl font-bold text-zinc-900">User Management</h1>
               <p className="text-sm text-zinc-500 mt-1">Manage platform access, roles, and functional scopes.</p>
             </div>
             <Button className="bg-zinc-900 hover:bg-zinc-800 text-white gap-2 font-bold shadow-sm">
                <Plus className="h-4 w-4" /> Add New User
             </Button>
          </div>

          <Card className="border-zinc-200 shadow-sm overflow-hidden bg-white">
             <div className="p-4 border-b border-zinc-100 flex items-center justify-between gap-4 bg-zinc-50/50">
                <div className="relative w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <Input placeholder="Search user by name, email, or role..." className="h-9 pl-9 border-zinc-200 focus-visible:ring-blue-500" />
                </div>
                <Button variant="outline" size="sm" className="gap-2 font-bold text-zinc-600 border-zinc-200 h-9">
                   <Filter className="h-4 w-4" /> Filters
                </Button>
             </div>
             
             <CardContent className="p-0">
                <Table>
                   <TableHeader className="bg-white">
                      <TableRow className="hover:bg-transparent border-zinc-100">
                         <TableHead className="text-xs font-bold text-zinc-400 uppercase tracking-wider py-4 px-6">User</TableHead>
                         <TableHead className="text-xs font-bold text-zinc-400 uppercase tracking-wider py-4 px-6">Department</TableHead>
                         <TableHead className="text-xs font-bold text-zinc-400 uppercase tracking-wider py-4 px-6">Role / Scope</TableHead>
                         <TableHead className="text-xs font-bold text-zinc-400 uppercase tracking-wider text-center py-4 px-6">Status</TableHead>
                         <TableHead className="w-10 pr-6"></TableHead>
                      </TableRow>
                   </TableHeader>
                   <TableBody>
                     {usersData.map((user) => (
                       <TableRow key={user.id} className="hover:bg-zinc-50/80 transition-colors border-zinc-100 cursor-pointer">
                          <TableCell className="px-6 py-4">
                             <div className="flex items-center gap-4">
                                <Avatar className="h-10 w-10 border border-zinc-200">
                                   <AvatarImage src={user.avatar} />
                                   <AvatarFallback className="text-xs font-bold bg-zinc-100">{user.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                   <p className="font-bold text-zinc-900 leading-tight">{user.name}</p>
                                   <p className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5"><Mail className="h-3 w-3" /> {user.email}</p>
                                </div>
                             </div>
                          </TableCell>
                          <TableCell className="px-6 py-4">
                             <span className="text-sm font-semibold text-zinc-700">{user.department}</span>
                          </TableCell>
                          <TableCell className="px-6 py-4">
                             <div>
                                <Badge variant="outline" className={`border-none px-2 py-0.5 text-xs ${
                                  user.role === 'Super Admin' ? 'bg-purple-100 text-purple-700' :
                                  user.role.includes('Manager') ? 'bg-blue-100 text-blue-700' :
                                  'bg-zinc-100 text-zinc-700'
                                }`}>
                                   {user.role === 'Super Admin' && <ShieldAlert className="h-3 w-3 mr-1" />}
                                   {user.role}
                                </Badge>
                                <p className="text-[10px] uppercase font-bold text-zinc-400 mt-2 tracking-wider">{user.scope}</p>
                             </div>
                          </TableCell>
                          <TableCell className="px-6 py-4 text-center">
                             {user.status === 'Active' ? (
                               <Badge className="bg-green-50 text-green-700 hover:bg-green-50 border border-green-200 shadow-none font-bold gap-1"><UserCheck className="h-3 w-3" /> Active</Badge>
                             ) : (
                               <Badge className="bg-red-50 text-red-700 hover:bg-red-50 border border-red-200 shadow-none font-bold gap-1"><UserX className="h-3 w-3" /> Inactive</Badge>
                             )}
                          </TableCell>
                          <TableCell className="pr-6 text-right">
                             <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-zinc-900">
                                <MoreVertical className="h-4 w-4" />
                             </Button>
                          </TableCell>
                       </TableRow>
                     ))}
                   </TableBody>
                </Table>
             </CardContent>
          </Card>

        </main>
      </div>
    </div>
  );
}

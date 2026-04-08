"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Settings2, 
  Trash2, 
  User, 
  Lock, 
  Bell, 
  Globe, 
  Save,
  AlertTriangle
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex-1 p-6 lg:p-10 bg-zinc-50/10 overflow-auto">
       <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="flex items-center justify-between">
             <div className="space-y-1">
                <h2 className="text-xl font-bold text-zinc-900">Project Settings</h2>
                <p className="text-sm text-zinc-500 font-medium">Manage project details, access, and configurations.</p>
             </div>
             <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold h-9">
                <Save className="h-4 w-4" /> Save changes
             </Button>
          </div>

          <div className="space-y-6">
             {/* General Details */}
             <Card className="border-zinc-200">
                <CardHeader className="border-b border-zinc-100 bg-zinc-50/50">
                   <div className="flex items-center gap-2">
                      <Settings2 className="h-4 w-4 text-zinc-500" />
                      <CardTitle className="text-xs font-bold uppercase tracking-wider text-zinc-600">General Details</CardTitle>
                   </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-zinc-700">Project Name</label>
                         <Input defaultValue="The Next Big Thing" className="h-10 text-sm border-zinc-200" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-zinc-700">Project Key</label>
                         <Input defaultValue="TBT" className="h-10 text-sm border-zinc-200" maxLength={5} />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-700">Description</label>
                      <Textarea 
                        defaultValue="Enterprise-grade platform for managing the upcoming release lifecycle and stakeholder collaboration."
                        className="min-h-[100px] text-sm border-zinc-200" 
                      />
                   </div>
                </CardContent>
             </Card>

             {/* Permissions */}
             <Card className="border-zinc-200">
                <CardHeader className="border-b border-zinc-100 bg-zinc-50/50">
                   <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-zinc-500" />
                      <CardTitle className="text-xs font-bold uppercase tracking-wider text-zinc-600">Permissions & Access</CardTitle>
                   </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                   <div className="flex items-center justify-between">
                      <div className="space-y-1">
                         <p className="text-sm font-bold text-zinc-900">Project Visibility</p>
                         <p className="text-xs text-zinc-500">Only people with access can view this project.</p>
                      </div>
                      <Badge className="bg-blue-50 text-blue-700 border-none font-bold">PRIVATE</Badge>
                   </div>
                   <div className="flex items-center justify-between border-t border-zinc-50 pt-4">
                      <div className="space-y-1">
                         <p className="text-sm font-bold text-zinc-900">Invitations</p>
                         <p className="text-xs text-zinc-500">Allow project leads to invite new members.</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs font-bold border-zinc-200">Manage</Button>
                   </div>
                </CardContent>
             </Card>

             {/* Danger Zone */}
             <Card className="border-red-200 bg-red-50/30 overflow-hidden">
                <CardHeader className="border-b border-red-100">
                   <div className="flex items-center gap-2 text-red-600">
                      <AlertTriangle className="h-4 w-4" />
                      <CardTitle className="text-xs font-bold uppercase tracking-wider">Danger Zone</CardTitle>
                   </div>
                </CardHeader>
                <CardContent className="p-6">
                   <div className="flex items-center justify-between">
                      <div className="space-y-1">
                         <p className="text-sm font-bold text-zinc-900">Delete Project</p>
                         <p className="text-xs text-zinc-500">Once deleted, there is no going back. Please be certain.</p>
                      </div>
                      <Button variant="destructive" size="sm" className="h-9 gap-2 font-bold shadow-sm">
                         <Trash2 className="h-4 w-4" /> Delete Project
                      </Button>
                   </div>
                </CardContent>
             </Card>
          </div>

       </div>
    </div>
  );
}

"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  Mail, 
  MessageSquare,
  Smartphone
} from "lucide-react";

export default function NotificationSettingsPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans selection:bg-blue-500/30">
      <Sidebar />
      <div className="flex flex-1 flex-col lg:pl-60">
        <Header />
        <main className="flex-1 space-y-6 p-6 lg:p-10 max-w-5xl mx-auto w-full">
          
          <div className="mb-6 border-b border-zinc-200 pb-4">
             <h1 className="text-2xl font-bold text-zinc-900">Notification Preferences</h1>
             <p className="text-sm text-zinc-500 mt-1">Manage delivery channels and triggers for your alerts.</p>
          </div>

          <Card className="border-zinc-200 shadow-sm overflow-hidden">
             <CardHeader className="bg-zinc-50/50 border-b border-zinc-100">
                <CardTitle className="text-sm font-bold text-zinc-800">Alert Channels</CardTitle>
             </CardHeader>
             <CardContent className="p-0 divide-y divide-zinc-100">
                
                <div className="p-5 flex items-start justify-between">
                   <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                         <Bell className="h-5 w-5" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-zinc-900">In-App Notifications</p>
                         <p className="text-xs text-zinc-500 mt-1 max-w-md leading-relaxed">Receive alerts inside the web portal (top-right bell icon). This cannot be fully disabled for critical system alerts.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="relative inline-flex h-5 w-9 cursor-pointer items-center rounded-full bg-blue-600 transition-colors">
                         <span className="inline-block h-4 w-4 translate-x-4 transform rounded-full bg-white transition-transform" />
                      </div>
                   </div>
                </div>

                <div className="p-5 flex items-start justify-between">
                   <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                         <Mail className="h-5 w-5" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-zinc-900">Email Notifications</p>
                         <p className="text-xs text-zinc-500 mt-1 max-w-md leading-relaxed">Alerts sent to idrus.afandi@company.com.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="relative inline-flex h-5 w-9 cursor-pointer items-center rounded-full bg-blue-600 transition-colors">
                         <span className="inline-block h-4 w-4 translate-x-4 transform rounded-full bg-white transition-transform" />
                      </div>
                   </div>
                </div>

                <div className="p-5 flex items-start justify-between">
                   <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                         <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-zinc-900">WhatsApp / Telegram</p>
                         <p className="text-xs text-zinc-500 mt-1 max-w-md leading-relaxed">Instant messaging alerts for high-priority items. Requires Bot integration.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                       <div className="relative inline-flex h-5 w-9 cursor-pointer items-center rounded-full bg-zinc-200 transition-colors">
                         <span className="inline-block h-4 w-4 translate-x-1 transform rounded-full bg-white transition-transform shadow-sm" />
                       </div>
                   </div>
                </div>

             </CardContent>
          </Card>

          <Card className="border-zinc-200 shadow-sm mt-6">
             <CardHeader className="bg-zinc-50/50 border-b border-zinc-100">
                <CardTitle className="text-sm font-bold text-zinc-800">Event Triggers</CardTitle>
                <CardDescription className="text-xs">Select which events should trigger a notification across your active channels.</CardDescription>
             </CardHeader>
             <CardContent className="p-0">
                 <table className="w-full text-left">
                    <thead className="bg-zinc-50/20 text-xs font-bold text-zinc-400 uppercase border-b border-zinc-100">
                       <tr>
                          <th className="py-3 px-5 font-bold">Event Type</th>
                          <th className="py-3 px-5 text-center w-24">In-App</th>
                          <th className="py-3 px-5 text-center w-24">Email</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                       <tr className="hover:bg-zinc-50/50 transition-colors">
                          <td className="py-3 px-5 text-sm font-semibold text-zinc-700">Ticket assigned to me</td>
                          <td className="py-3 px-5 text-center"><input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" /></td>
                          <td className="py-3 px-5 text-center"><input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" /></td>
                       </tr>
                       <tr className="hover:bg-zinc-50/50 transition-colors">
                          <td className="py-3 px-5 text-sm font-semibold text-zinc-700">Pending my approval</td>
                          <td className="py-3 px-5 text-center"><input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" /></td>
                          <td className="py-3 px-5 text-center"><input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" /></td>
                       </tr>
                       <tr className="hover:bg-zinc-50/50 transition-colors">
                          <td className="py-3 px-5 text-sm font-semibold text-zinc-700">SLA Warning ( &lt; 2 hours)</td>
                          <td className="py-3 px-5 text-center"><input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" /></td>
                          <td className="py-3 px-5 text-center"><input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" /></td>
                       </tr>
                       <tr className="hover:bg-zinc-50/50 transition-colors">
                          <td className="py-3 px-5 text-sm font-semibold text-zinc-700">Mentioned in a comment</td>
                          <td className="py-3 px-5 text-center"><input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" /></td>
                          <td className="py-3 px-5 text-center"><input type="checkbox" className="h-4 w-4 accent-blue-600" /></td>
                       </tr>
                    </tbody>
                 </table>
             </CardContent>
             <div className="bg-zinc-50 p-4 flex justify-end gap-3 border-t border-zinc-100">
                <Button variant="outline" className="font-bold border-zinc-200">Cancel</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold">Save Preferences</Button>
             </div>
          </Card>

        </main>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  CheckCircle2, 
  ChevronRight, 
  AlertCircle,
  FileText,
  Upload,
  Calendar as CalendarIcon
} from "lucide-react";

export default function CreateTicketPage() {
  const [step, setStep] = useState(1);

  const steps = [
    { id: 1, title: "Basic Info" },
    { id: 2, title: "Risk & Priority" },
    { id: 3, title: "Schedule & Docs" },
    { id: 4, title: "Review" },
  ];

  return (
    <div className="flex-1 overflow-auto bg-zinc-50/30 p-6 lg:p-10">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8">
           <h1 className="text-2xl font-bold text-zinc-900">Create Change Request</h1>
           <p className="text-sm text-zinc-500 mt-1">Submit a new CR or IT Service ticket through the automated wizard.</p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-8 relative">
           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-zinc-100 -z-10 rounded-full" />
           <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 -z-10 rounded-full transition-all duration-500" style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }} />
           
           {steps.map((s) => (
             <div key={s.id} className="flex flex-col items-center gap-2 bg-zinc-50/30">
                <div className={`h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors bg-white ${step >= s.id ? 'border-blue-600 text-blue-600' : 'border-zinc-200 text-zinc-400'}`}>
                   {step > s.id ? <CheckCircle2 className="h-5 w-5" /> : s.id}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${step >= s.id ? 'text-zinc-900' : 'text-zinc-400'}`}>{s.title}</span>
             </div>
           ))}
        </div>

        {/* Step Content */}
        <Card className="border-zinc-200 shadow-sm overflow-hidden bg-white">
          <CardContent className="p-8">
            
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in">
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-zinc-700">Ticket Title / Summary</label>
                       <Input placeholder="e.g. Upgrade Core Banking DB to v16" className="h-10 border-zinc-200" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-zinc-700">Category</label>
                          <select className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                             <option>Change Request</option>
                             <option>Bug Fix</option>
                             <option>Enhancement</option>
                             <option>Patch</option>
                          </select>
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-zinc-700">Affected System</label>
                          <select className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                             <option>Core Banking</option>
                             <option>Mobile Banking</option>
                             <option>ATM Network</option>
                             <option>Internal HRIS</option>
                          </select>
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-xs font-bold text-zinc-700">Detailed Description</label>
                       <Textarea placeholder="Explain the change in detail..." className="min-h-[120px] border-zinc-200" />
                    </div>
                 </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-zinc-700">Priority Level</label>
                       <select className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 border-red-200 text-red-700 font-medium">
                          <option>Critical</option>
                          <option>High</option>
                          <option>Medium</option>
                          <option>Low</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-zinc-700">Risk Assessment</label>
                       <select className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 border-amber-200 text-amber-700 font-medium">
                          <option>High Risk</option>
                          <option>Medium Risk</option>
                          <option>Low Risk</option>
                       </select>
                    </div>
                 </div>
                 
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-700">Business Impact (If not implemented)</label>
                    <Textarea placeholder="What happens if we do nothing?" className="min-h-[80px] border-zinc-200" />
                 </div>
                 
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-700">Rollback Plan</label>
                    <Textarea placeholder="Steps to revert changes if implementation fails..." className="min-h-[80px] border-zinc-200" />
                 </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-zinc-700">Target Implementation Date</label>
                       <div className="relative">
                          <CalendarIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                          <Input type="date" className="h-10 pl-10 border-zinc-200" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-zinc-700">Maintenance Window</label>
                       <div className="flex items-center gap-2">
                          <Input type="time" defaultValue="00:00" className="h-10 border-zinc-200" />
                          <span className="text-xs text-zinc-400 font-bold">to</span>
                          <Input type="time" defaultValue="04:00" className="h-10 border-zinc-200" />
                       </div>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-700">Supporting Documents (BRD, TSD)</label>
                    <div className="border-2 border-dashed border-zinc-200 rounded-lg p-8 flex flex-col items-center justify-center gap-3 bg-zinc-50/50 hover:bg-zinc-50 transition-colors cursor-pointer">
                       <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                          <Upload className="h-5 w-5" />
                       </div>
                       <div className="text-center">
                          <p className="text-sm font-bold text-zinc-700">Click to upload or drag and drop</p>
                          <p className="text-xs text-zinc-400">PDF, DOCX, XLSX up to 10MB</p>
                       </div>
                    </div>
                 </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 animate-in fade-in">
                 <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 text-blue-800">
                    <AlertCircle className="h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                       <p className="text-sm font-bold">Review Before Submission</p>
                       <p className="text-xs opacity-80 mt-1">Please ensure all details are correct. Upon submission, this ticket will be routed to the Maker-Checker workflow.</p>
                    </div>
                 </div>

                 <div className="border border-zinc-200 rounded-lg divide-y divide-zinc-100">
                    <div className="p-4 flex items-start gap-4">
                       <FileText className="h-5 w-5 text-zinc-400" />
                       <div>
                          <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Basic Info</p>
                          <p className="text-sm font-semibold text-zinc-900">Upgrade Core Banking DB to v16</p>
                          <p className="text-xs text-zinc-500 mt-1">Change Request • Core Banking</p>
                       </div>
                    </div>
                    <div className="p-4 flex items-start gap-4">
                       <AlertCircle className="h-5 w-5 text-zinc-400" />
                       <div>
                          <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Risk & Priority</p>
                          <p className="text-sm font-semibold text-red-600">Critical Priority • High Risk</p>
                       </div>
                    </div>
                    <div className="p-4 flex items-start gap-4">
                       <CalendarIcon className="h-5 w-5 text-zinc-400" />
                       <div>
                          <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Schedule</p>
                          <p className="text-sm font-semibold text-zinc-900">18 June 2024</p>
                          <p className="text-xs text-zinc-500 mt-1">Window: 00:00 to 04:00</p>
                       </div>
                    </div>
                 </div>
              </div>
            )}

          </CardContent>
          <div className="p-4 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between">
             <Button 
               variant="outline" 
               onClick={() => setStep(step - 1)} 
               disabled={step === 1}
               className="font-bold border-zinc-200 text-zinc-600"
             >
               Back
             </Button>
             
             {step < 4 ? (
               <Button 
                 onClick={() => setStep(step + 1)}
                 className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold gap-2"
               >
                 Continue <ChevronRight className="h-4 w-4" />
               </Button>
             ) : (
               <Button 
                 className="bg-blue-600 hover:bg-blue-700 text-white font-bold gap-2"
               >
                 Submit Ticket <CheckCircle2 className="h-4 w-4" />
               </Button>
             )}
          </div>
        </Card>

      </div>
    </div>
  );
}

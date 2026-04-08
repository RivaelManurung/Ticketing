"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import {  
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  KeyRound,
  RefreshCw
} from "lucide-react";

type LoginStep = 'credentials' | 'otp' | 'forgot_password';
type AuthMethod = 'ldap' | 'local';

export default function LoginPage() {
  const [step, setStep] = useState<LoginStep>('credentials');
  const [authMethod, setAuthMethod] = useState<AuthMethod>('ldap');
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp'); // Simulate advancing to MFA
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#f7f8f9] dark:bg-black font-sans selection:bg-blue-500/20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] dark:bg-blue-900/10" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-teal-100/50 rounded-full blur-[120px] dark:bg-teal-900/10" />
      </div>

      <div className="relative z-10 w-full max-w-[420px] px-6">
        {/* Logo Branding */}
        <div className="flex flex-col items-center mb-10">
          <div className="h-14 w-14 bg-black dark:bg-white rounded-[16px] flex items-center justify-center shadow-xl shadow-black/10 mb-4 transition-transform hover:scale-105 duration-300">
             <div className="text-white dark:text-black font-extrabold text-2xl italic">T</div>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white uppercase">Ticketing</h2>
          <p className="text-zinc-500 text-sm font-medium text-center mt-1">Change Request & ITSM Portal</p>
        </div>

        <Card className="border-zinc-200/60 dark:border-white/10 dark:bg-zinc-900/80 bg-white/80 backdrop-blur-xl shadow-2xl shadow-black/5 rounded-[24px] overflow-hidden transition-all duration-500">
          
          {step === 'credentials' && (
            <form onSubmit={handleLoginSubmit}>
              <CardHeader className="space-y-1 pb-6">
                <CardTitle className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white text-center">Sign In</CardTitle>
                <CardDescription className="text-zinc-500 font-medium text-center">
                  Use your corporate credentials to access the system.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Auth Method Toggle */}
                <div className="flex p-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                  <Button 
                    type="button"
                    variant="ghost" 
                    onClick={() => setAuthMethod('ldap')}
                    className={cn("flex-1 h-8 text-xs font-bold rounded-md transition-all shadow-none", authMethod === 'ldap' ? "bg-white text-blue-600 shadow-sm" : "text-zinc-500 hover:text-zinc-900")}
                  >
                    SSO / LDAP
                  </Button>
                  <Button 
                    type="button"
                    variant="ghost" 
                    onClick={() => setAuthMethod('local')}
                    className={cn("flex-1 h-8 text-xs font-bold rounded-md transition-all shadow-none", authMethod === 'local' ? "bg-white text-blue-600 shadow-sm" : "text-zinc-500 hover:text-zinc-900")}
                  >
                    Local Account
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                      {authMethod === 'ldap' ? 'Corporate Username / NIK' : 'Email Address'}
                    </label>
                    <div className="relative group/field">
                      {authMethod === 'ldap' ? (
                        <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 group-focus-within/field:text-blue-500 transition-colors" />
                      ) : (
                        <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 group-focus-within/field:text-blue-500 transition-colors" />
                      )}
                      <Input 
                        required
                        type={authMethod === 'ldap' ? 'text' : 'email'} 
                        placeholder={authMethod === 'ldap' ? 'e.g. 12345678' : 'name@company.com'} 
                        className="h-12 bg-zinc-50/50 border-zinc-200 outline-none focus-visible:ring-blue-500/20 focus-visible:border-blue-500 pl-11 rounded-lg font-medium transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                      <label className="text-[13px] font-bold text-zinc-700 dark:text-zinc-300">Password</label>
                      <button type="button" onClick={() => setStep('forgot_password')} className="text-[12px] font-bold text-blue-600 hover:text-blue-700 hover:underline">Forgot?</button>
                    </div>
                    <div className="relative group/field">
                      <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 group-focus-within/field:text-blue-500 transition-colors" />
                      <Input 
                        required
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        className="h-12 bg-zinc-50/50 border-zinc-200 outline-none focus-visible:ring-blue-500/20 focus-visible:border-blue-500 pl-11 pr-11 rounded-lg font-medium transition-all"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold gap-2 text-sm transition-all group active:scale-[0.98]">
                  Login Subsystem
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </form>
          )}

          {step === 'otp' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <CardHeader className="space-y-1 pb-6 text-center">
                 <div className="mx-auto h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                 </div>
                 <CardTitle className="text-xl font-bold tracking-tight text-zinc-900">Two-Factor Auth</CardTitle>
                 <CardDescription className="text-zinc-500 font-medium">
                   Enter the 6-digit code sent to your registered authenticator app or email.
                 </CardDescription>
               </CardHeader>
               <CardContent className="space-y-6 pb-8">
                 <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Input key={i} className="h-12 w-10 text-center text-lg font-bold rounded-lg border-zinc-200 focus-visible:ring-blue-500 focus-visible:border-blue-500" maxLength={1} />
                    ))}
                 </div>
                 <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold gap-2">
                    Verify & Authenticate
                 </Button>
                 <div className="text-center">
                    <button type="button" onClick={() => setStep('credentials')} className="text-xs font-bold text-zinc-400 hover:text-zinc-600 transition-colors">
                      Back to login
                    </button>
                 </div>
               </CardContent>
            </div>
          )}

          {step === 'forgot_password' && (
            <div className="animate-in fade-in zoom-in-95 duration-300">
               <CardHeader className="space-y-1 pb-6">
                 <CardTitle className="text-xl font-bold tracking-tight text-zinc-900 text-center">Reset Password</CardTitle>
                 <CardDescription className="text-zinc-500 font-medium text-center">
                   Enter your registered email. We'll send you instructions to reset your password.
                 </CardDescription>
               </CardHeader>
               <CardContent className="space-y-6 pb-8">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-zinc-700 ml-1">Email Address</label>
                    <div className="relative group/field">
                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 group-focus-within/field:text-blue-500 transition-colors" />
                      <Input placeholder="name@company.com" className="h-12 bg-zinc-50/50 border-zinc-200 pl-11 rounded-lg font-medium" />
                    </div>
                  </div>
                  <Button className="w-full h-12 bg-black hover:bg-zinc-800 text-white rounded-lg font-bold gap-2">
                     <KeyRound className="h-4 w-4" /> Send Reset Link
                  </Button>
                  <div className="text-center">
                    <button type="button" onClick={() => setStep('credentials')} className="text-xs font-bold text-zinc-500 hover:text-zinc-900 transition-colors">
                      ← Back to login
                    </button>
                 </div>
               </CardContent>
            </div>
          )}
        </Card>

        {/* Bottom trust footer */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-zinc-400">
           <div className="flex items-center gap-6">
             <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Bank-Grade Security</span>
             </div>
             <div className="flex items-center gap-1.5">
                <RefreshCw className="h-4 w-4" />
                <span className="text-[10px] font-bold uppercase tracking-tighter">OJK Compliant</span>
             </div>
           </div>
        </div>

        <p className="mt-8 text-center text-[10px] text-zinc-400 font-medium leading-relaxed">
          &copy; 2026 Internal IT Services. All rights reserved. <br/>
          Unauthorized access is strictly prohibited and logged.
        </p>
      </div>
    </div>
  );
}

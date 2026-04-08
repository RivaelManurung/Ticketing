"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/projects/list");
  }, [router]);

  return (
    <div className="flex flex-1 items-center justify-center bg-white p-20">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        <p className="text-sm font-medium text-zinc-500">Loading project data...</p>
      </div>
    </div>
  );
}
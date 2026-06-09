'use client';

import { useState } from 'react';
import { EditorNavbar } from '@/components/editor/editor-navbar';
import { ProjectSidebar } from '@/components/editor/project-sidebar';

export default function EditorLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Navbar */}
      <EditorNavbar
        sidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Sidebar */}
      <ProjectSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="pt-16 w-full h-screen bg-neutral-950">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-neutral-400">
            <p className="text-lg font-medium mb-2">Editor Canvas</p>
            <p className="text-sm text-neutral-500">
              Main editor content will go here
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

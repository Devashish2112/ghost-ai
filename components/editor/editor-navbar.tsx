'use client';

import { PanelLeftOpen, PanelLeftClose } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

interface EditorNavbarProps {
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export function EditorNavbar({ sidebarOpen, onSidebarToggle }: EditorNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-4 bg-neutral-950 border-b border-neutral-800">
      {/* Left Section */}
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onSidebarToggle}
          className="hover:bg-neutral-800"
          aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {sidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Center Section */}
      <div className="flex-1 flex justify-center" />

      {/* Right Section */}
      <div className="flex items-center">
        <UserButton />
      </div>
    </nav>
  );
}

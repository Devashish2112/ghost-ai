'use client';

import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-screen w-64 bg-neutral-950 border-r border-neutral-800 flex flex-col transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-neutral-800">
          <h2 className="text-lg font-semibold">Projects</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-neutral-800"
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex-1 overflow-hidden flex flex-col px-4 pt-4">
          <Tabs defaultValue="my-projects" className="flex flex-col h-full">
            <TabsList className="grid w-full grid-cols-2 bg-neutral-900">
              <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>

            {/* My Projects Tab */}
            <TabsContent value="my-projects" className="flex-1 flex flex-col">
              <div className="flex-1 flex items-center justify-center text-neutral-400">
                <div className="text-center">
                  <p className="text-sm">No projects yet</p>
                  <p className="text-xs text-neutral-500">
                    Create a new project to get started
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Shared Tab */}
            <TabsContent value="shared" className="flex-1 flex flex-col">
              <div className="flex-1 flex items-center justify-center text-neutral-400">
                <div className="text-center">
                  <p className="text-sm">No shared projects</p>
                  <p className="text-xs text-neutral-500">
                    Projects shared with you will appear here
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* New Project Button */}
        <div className="px-4 py-4 border-t border-neutral-800">
          <Button className="w-full" variant="default">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}

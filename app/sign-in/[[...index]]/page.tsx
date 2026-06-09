import { SignIn } from "@clerk/nextjs";
import { Zap, Share2, FileText } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="flex h-screen bg-bg-base font-sans">
      {/* Left Panel - Features */}
      <div className="w-1/2 flex flex-col justify-between p-12 border-r border-border-default">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent-primary rounded-lg" />
          <span className="text-xl font-semibold text-text-primary">Ghost AI</span>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-text-primary leading-tight mb-6">
            Design systems at the speed of thought.
          </h1>
          <p className="text-text-secondary text-base leading-relaxed mb-12">
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>

          {/* Features List */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-5 h-5 rounded border border-accent-primary flex items-center justify-center">
                <Zap className="w-3 h-3 text-accent-primary" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-1">
                  AI Architecture Generation
                </h3>
                <p className="text-text-secondary text-sm">
                  Describe your system, AI maps it to nodes and edges on a live canvas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-5 h-5 rounded border border-accent-primary flex items-center justify-center">
                <Share2 className="w-3 h-3 text-accent-primary" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-1">
                  Real-time Collaboration
                </h3>
                <p className="text-text-secondary text-sm">
                  Live cursors, presence indicators, and shared node editing across your team.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-5 h-5 rounded border border-accent-primary flex items-center justify-center">
                <FileText className="w-3 h-3 text-accent-primary" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-1">
                  Instant Spec Generation
                </h3>
                <p className="text-text-secondary text-sm">
                  Export a complete Markdown technical spec directly from the canvas graph.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-text-faint text-sm">
          © 2026 Ghost AI. All rights reserved.
        </p>
      </div>

      {/* Right Panel - Sign In Form */}
      <div className="w-1/2 flex items-center justify-center p-12 bg-bg-subtle">
        <div className="w-full max-w-sm">
          <SignIn />
        </div>
      </div>
    </div>
  );
}


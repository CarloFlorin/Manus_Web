/* Design: Terminal Brutalism - Reusable page template with sections */

import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  sections?: Section[];
}

interface Section {
  id: string;
  title: string;
  content: ReactNode;
}

export default function PageTemplate({
  title,
  subtitle,
  children,
  sections,
}: PageTemplateProps) {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8 lg:mb-12 pb-6 lg:pb-8 border-b-2 border-border">
        <h1 className="text-2xl lg:text-4xl font-bold text-accent mb-3 lg:mb-4 break-words">{title}</h1>
        {subtitle && (
          <p className="text-base lg:text-lg text-foreground/70">{subtitle}</p>
        )}
      </div>

      {/* Main Content */}
      {children && <div className="mb-8 lg:mb-12">{children}</div>}

      {/* Sections */}
      {sections && sections.length > 0 && (
        <div className="space-y-8 lg:space-y-12">
          {sections.map((section, idx) => (
            <section key={section.id} className="scroll-mt-20" id={section.id}>
              <div className="mb-4 lg:mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-accent flex items-center gap-2 break-words">
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                  {section.title}
                </h2>
              </div>
              <div className="terminal-window p-4 lg:p-6 bg-card/50 overflow-x-auto">{section.content}</div>
              {idx < sections.length - 1 && (
                <div className="text-center text-muted-foreground text-xs lg:text-sm my-6 lg:my-8 font-mono overflow-x-auto">
                  ─────────────────────────────────────
                </div>
              )}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

/* Content Components */

export function ContentBlock({ children }: { children: ReactNode }) {
  return <div className="prose prose-invert max-w-none text-foreground/80 text-sm lg:text-base">{children}</div>;
}

export function CodeBlock({
  code,
  language = "bash",
}: {
  code: string;
  language?: string;
}) {
  return (
    <pre className="bg-background border-l-4 border-l-accent p-3 lg:p-4 overflow-x-auto mb-4 text-xs lg:text-sm">
      <code className={`language-${language} text-foreground/80`}>
        {code}
      </code>
    </pre>
  );
}

export function CheatSheet({
  items,
}: {
  items: Array<{ command: string; description: string }>;
}) {
  return (
    <div className="space-y-2 lg:space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="border-l-2 border-accent pl-3 lg:pl-4 py-2">
          <code className="text-accent font-bold text-xs lg:text-sm break-all">{item.command}</code>
          <p className="text-xs lg:text-sm text-foreground/70 mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function WikiBox({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="bg-card/30 border-2 border-muted p-3 lg:p-4 mb-3 lg:mb-4">
      <h4 className="font-bold text-accent mb-2 text-sm lg:text-base break-words">{title}</h4>
      <p className="text-xs lg:text-sm text-foreground/70">{content}</p>
    </div>
  );
}

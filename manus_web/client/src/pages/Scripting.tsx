import PageTemplate, { ContentBlock, CodeBlock } from "@/components/PageTemplate";

export default function Scripting() {
  return (
    <PageTemplate
      title="Scripting (Bash & Python)"
      subtitle="Automatisierung durch Scripting"
      sections={[
        {
          id: "intro",
          title: "Warum Scripting?",
          content: (
            <ContentBlock>
              <p>Scripting ermöglicht die Automatisierung von wiederholten Aufgaben und ist ein Kernbestandteil von DevOps.</p>
            </ContentBlock>
          ),
        },
        {
          id: "bash-beispiel",
          title: "Bash-Beispiel",
          content: (
            <CodeBlock
              code={`#!/bin/bash
# Einfaches Backup-Script
SOURCE="/home/user/data"
DEST="/backup"
DATE=$(date +%Y%m%d)

tar -czf $DEST/backup_$DATE.tar.gz $SOURCE
echo "Backup erstellt: backup_$DATE.tar.gz"`}
              language="bash"
            />
          ),
        },
      ]}
    />
  );
}

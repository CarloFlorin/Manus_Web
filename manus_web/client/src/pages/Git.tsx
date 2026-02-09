import PageTemplate, { ContentBlock, CheatSheet } from "@/components/PageTemplate";

export default function Git() {
  return (
    <PageTemplate
      title="Git & Versionskontrolle"
      subtitle="Meistern Sie die Versionskontrolle mit Git"
      sections={[
        {
          id: "intro",
          title: "Was ist Git?",
          content: (
            <ContentBlock>
              <p>Git ist ein verteiltes Versionskontrollsystem, das die Zusammenarbeit ermöglicht und die Codehistorie verwaltet.</p>
            </ContentBlock>
          ),
        },
        {
          id: "cheatsheet",
          title: "Git Cheat-Sheet",
          content: (
            <CheatSheet
              items={[
                { command: "git init", description: "Neues Repository initialisieren" },
                { command: "git clone <url>", description: "Repository klonen" },
                { command: "git add .", description: "Alle Änderungen zum Staging hinzufügen" },
                { command: "git commit -m 'msg'", description: "Änderungen committen" },
                { command: "git push origin main", description: "Änderungen pushen" },
                { command: "git pull origin main", description: "Änderungen pullen" },
                { command: "git branch -a", description: "Alle Branches anzeigen" },
                { command: "git checkout -b feature", description: "Neuen Branch erstellen" },
                { command: "git merge feature", description: "Branch mergen" },
                { command: "git log --oneline", description: "Commit-Historie anzeigen" },
              ]}
            />
          ),
        },
      ]}
    />
  );
}

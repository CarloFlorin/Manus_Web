import PageTemplate, { ContentBlock, CodeBlock, CheatSheet, WikiBox } from "@/components/PageTemplate";

export default function Linux() {
  return (
    <PageTemplate
      title="Linux-Grundlagen"
      subtitle="Die Basis für DevOps - Beherrsche das Linux-Betriebssystem"
      sections={[
        {
          id: "warum-linux",
          title: "Warum Linux?",
          content: (
            <ContentBlock>
              <p className="mb-4">
                Linux ist das Rückgrat moderner DevOps-Infrastruktur. Die meisten Server, Container und Cloud-Instanzen laufen auf Linux.
              </p>
              <div className="space-y-3">
                <WikiBox
                  title="Open Source"
                  content="Linux ist kostenlos und quelloffen - perfekt für Unternehmen und Entwickler."
                />
                <WikiBox
                  title="Stabilität"
                  content="Linux-Systeme können jahrelang ohne Neustart laufen."
                />
                <WikiBox
                  title="Sicherheit"
                  content="Robuste Berechtigungssysteme und regelmäßige Sicherheitsupdates."
                />
              </div>
            </ContentBlock>
          ),
        },
        {
          id: "befehle",
          title: "Wichtige Befehle",
          content: (
            <ContentBlock>
              <p className="mb-4">Grundlegende Linux-Befehle, die Sie kennen müssen:</p>
              <CheatSheet
                items={[
                  { command: "ls -la", description: "Dateien und Verzeichnisse auflisten" },
                  { command: "cd /path", description: "Verzeichnis wechseln" },
                  { command: "pwd", description: "Aktuelles Verzeichnis anzeigen" },
                  { command: "mkdir dir", description: "Neues Verzeichnis erstellen" },
                  { command: "cp -r source dest", description: "Datei/Verzeichnis kopieren" },
                  { command: "mv source dest", description: "Datei verschieben" },
                  { command: "rm -rf dir", description: "Datei/Verzeichnis löschen" },
                  { command: "cat file", description: "Dateiinhalt anzeigen" },
                  { command: "grep pattern file", description: "Text suchen" },
                  { command: "chmod 755 file", description: "Berechtigungen ändern" },
                  { command: "ps aux", description: "Laufende Prozesse anzeigen" },
                  { command: "top", description: "System-Ressourcen überwachen" },
                  { command: "sudo command", description: "Befehl als Root ausführen" },
                ]}
              />
            </ContentBlock>
          ),
        },
        {
          id: "netzwerk",
          title: "Netzwerk-Befehle",
          content: (
            <ContentBlock>
              <CheatSheet
                items={[
                  { command: "ifconfig", description: "Netzwerk-Interfaces anzeigen" },
                  { command: "ip addr show", description: "IP-Adressen anzeigen" },
                  { command: "ping host", description: "Host erreichbar?" },
                  { command: "netstat -tlnp", description: "Offene Ports anzeigen" },
                  { command: "curl https://example.com", description: "HTTP-Request senden" },
                  { command: "ssh user@host", description: "SSH-Verbindung" },
                ]}
              />
            </ContentBlock>
          ),
        },
      ]}
    />
  );
}

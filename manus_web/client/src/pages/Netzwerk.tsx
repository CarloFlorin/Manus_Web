import PageTemplate, { ContentBlock, WikiBox } from "@/components/PageTemplate";

export default function Netzwerk() {
  return (
    <PageTemplate
      title="Netzwerk-Grundlagen"
      subtitle="Verstehen Sie die Grundlagen von Netzwerken und Internet-Protokollen"
      sections={[
        {
          id: "intro",
          title: "Netzwerk-Grundlagen",
          content: (
            <ContentBlock>
              <p className="mb-4">Netzwerk-Kenntnisse sind essentiell für DevOps-Profis.</p>
              <WikiBox
                title="OSI-Modell"
                content="Das OSI-Modell beschreibt 7 Schichten der Netzwerk-Kommunikation: Physical, Data Link, Network, Transport, Session, Presentation, Application."
              />
            </ContentBlock>
          ),
        },
      ]}
    />
  );
}

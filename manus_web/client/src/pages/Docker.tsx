import PageTemplate, { ContentBlock, CodeBlock, CheatSheet } from "@/components/PageTemplate";

export default function Docker() {
  return (
    <PageTemplate
      title="Docker & Containerisierung"
      subtitle="Container - Die Zukunft der Anwendungsbereitstellung"
      sections={[
        {
          id: "intro",
          title: "Was ist Docker?",
          content: (
            <ContentBlock>
              <p>Docker ermöglicht es, Anwendungen in Containern zu verpacken - isolierte, portable Umgebungen.</p>
            </ContentBlock>
          ),
        },
        {
          id: "cheatsheet",
          title: "Docker Befehle",
          content: (
            <CheatSheet
              items={[
                { command: "docker build -t image .", description: "Image bauen" },
                { command: "docker run -d image", description: "Container starten" },
                { command: "docker ps", description: "Laufende Container anzeigen" },
                { command: "docker logs container", description: "Container-Logs anzeigen" },
                { command: "docker push image", description: "Image pushen" },
                { command: "docker pull image", description: "Image pullen" },
              ]}
            />
          ),
        },
      ]}
    />
  );
}

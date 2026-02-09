import PageTemplate, { ContentBlock, WikiBox } from "@/components/PageTemplate";

export default function Einfuehrung() {
  return (
    <PageTemplate
      title="Einführung in DevOps"
      subtitle="Verstehen Sie die Philosophie und Prinzipien hinter DevOps"
      sections={[
        {
          id: "was-ist-devops",
          title: "Was ist DevOps?",
          content: (
            <ContentBlock>
              <p className="mb-4">
                DevOps ist eine Kultur, Bewegung und ein Set von Praktiken, die die Zusammenarbeit zwischen Softwareentwicklung (Dev) und IT-Betrieb (Ops) verbessert. Das Ziel ist es, Softwareprodukte schneller und zuverlässiger bereitzustellen.
              </p>
              <WikiBox
                title="DevOps Definition"
                content="DevOps kombiniert Softwareentwicklung und IT-Betrieb, um den gesamten Softwareentwicklungs-Lebenszyklus zu automatisieren und zu optimieren."
              />
            </ContentBlock>
          ),
        },
        {
          id: "devops-lifecycle",
          title: "Der DevOps Lifecycle",
          content: (
            <ContentBlock>
              <p className="mb-4">Der DevOps-Prozess folgt einem kontinuierlichen Zyklus:</p>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-accent">1. PLAN</div>
                <div className="text-foreground/70">Anforderungen sammeln und Planung</div>
                <div className="text-accent mt-3">2. CODE</div>
                <div className="text-foreground/70">Entwicklung und Versionskontrolle</div>
                <div className="text-accent mt-3">3. BUILD</div>
                <div className="text-foreground/70">Kompilierung und Artefakt-Erstellung</div>
                <div className="text-accent mt-3">4. TEST</div>
                <div className="text-foreground/70">Automatisierte Tests und QA</div>
                <div className="text-accent mt-3">5. RELEASE</div>
                <div className="text-foreground/70">Vorbereitung für Produktion</div>
                <div className="text-accent mt-3">6. DEPLOY</div>
                <div className="text-foreground/70">Automatisierte Bereitstellung</div>
                <div className="text-accent mt-3">7. OPERATE</div>
                <div className="text-foreground/70">Betrieb und Verwaltung</div>
                <div className="text-accent mt-3">8. MONITOR</div>
                <div className="text-foreground/70">Überwachung und Feedback</div>
              </div>
            </ContentBlock>
          ),
        },
        {
          id: "kernprinzipien",
          title: "Kernprinzipien",
          content: (
            <ContentBlock>
              <div className="space-y-4">
                <WikiBox
                  title="🔄 Automatisierung"
                  content="Automatisierung von wiederholten Aufgaben spart Zeit und reduziert Fehler."
                />
                <WikiBox
                  title="🔗 Zusammenarbeit"
                  content="Dev und Ops arbeiten zusammen statt gegeneinander."
                />
                <WikiBox
                  title="📊 Kontinuierliche Verbesserung"
                  content="Ständiges Feedback und Optimierung des Prozesses."
                />
                <WikiBox
                  title="⚡ Schnelles Feedback"
                  content="Probleme werden früh erkannt und behoben."
                />
              </div>
            </ContentBlock>
          ),
        },
      ]}
    />
  );
}

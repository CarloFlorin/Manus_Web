import PageTemplate, { ContentBlock, WikiBox } from "@/components/PageTemplate";

export default function Kubernetes() {
  return (
    <PageTemplate
      title="Kubernetes"
      subtitle="Container-Orchestrierung auf Enterprise-Niveau"
      sections={[
        {
          id: "intro",
          title: "Was ist Kubernetes?",
          content: (
            <ContentBlock>
              <p>Kubernetes (K8s) automatisiert Deployment, Skalierung und Management von containerisierten Anwendungen.</p>
            </ContentBlock>
          ),
        },
        {
          id: "konzepte",
          title: "Wichtige Konzepte",
          content: (
            <ContentBlock>
              <WikiBox title="Pods" content="Kleinste deploybare Einheit in Kubernetes" />
              <WikiBox title="Services" content="Netzwerk-Abstraktion für Pod-Zugriff" />
              <WikiBox title="Deployments" content="Verwaltung von Pod-Replicas" />
            </ContentBlock>
          ),
        },
      ]}
    />
  );
}

import PageTemplate, { ContentBlock, WikiBox } from "@/components/PageTemplate";

export default function Projekte() {
  return (
    <PageTemplate
      title="Praktische Projekte"
      subtitle="Real-World Szenarien zum Hands-On Lernen"
      sections={[
        {
          id: "projekt1",
          title: "Projekt 1: Web-App mit CI/CD",
          content: (
            <ContentBlock>
              <WikiBox
                title="Ziel"
                content="End-to-End Pipeline für eine Web-Anwendung erstellen"
              />
              <WikiBox
                title="Technologien"
                content="Git, Docker, GitHub Actions, AWS EC2"
              />
            </ContentBlock>
          ),
        },
        {
          id: "projekt2",
          title: "Projekt 2: Kubernetes Microservices",
          content: (
            <ContentBlock>
              <WikiBox
                title="Ziel"
                content="Multi-Service-Anwendung in Kubernetes deployen"
              />
              <WikiBox
                title="Technologien"
                content="Docker, Kubernetes, Helm, Prometheus, Grafana"
              />
            </ContentBlock>
          ),
        },
        {
          id: "projekt3",
          title: "Projekt 3: Infrastructure as Code",
          content: (
            <ContentBlock>
              <WikiBox
                title="Ziel"
                content="Komplette Infrastruktur automatisiert provisionieren"
              />
              <WikiBox
                title="Technologien"
                content="Terraform, Ansible, AWS/Azure, Git"
              />
            </ContentBlock>
          ),
        },
      ]}
    />
  );
}

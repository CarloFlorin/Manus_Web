import PageTemplate, { ContentBlock, WikiBox, CodeBlock } from "@/components/PageTemplate";

export default function CICD() {
  return (
    <PageTemplate
      title="CI/CD - Continuous Integration & Deployment"
      subtitle="Automatisierte Pipelines für schnellere Releases"
      sections={[
        {
          id: "intro",
          title: "Was ist CI/CD?",
          content: (
            <ContentBlock>
              <WikiBox
                title="Continuous Integration"
                content="Code-Änderungen werden regelmäßig integriert, automatisch gebaut und getestet."
              />
              <WikiBox
                title="Continuous Deployment"
                content="Getesteter Code wird automatisch in Produktion bereitgestellt."
              />
            </ContentBlock>
          ),
        },
        {
          id: "tools",
          title: "CI/CD Tools",
          content: (
            <ContentBlock>
              <div className="space-y-3">
                <WikiBox title="Jenkins" content="Open-Source Automation Server" />
                <WikiBox title="GitHub Actions" content="Integriert in GitHub" />
                <WikiBox title="GitLab CI/CD" content="Teil von GitLab" />
              </div>
            </ContentBlock>
          ),
        },
      ]}
    />
  );
}

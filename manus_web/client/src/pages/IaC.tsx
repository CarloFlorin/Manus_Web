import PageTemplate, { ContentBlock, WikiBox, CodeBlock } from "@/components/PageTemplate";

export default function IaC() {
  return (
    <PageTemplate
      title="Infrastructure as Code"
      subtitle="Infrastruktur als Code - Versioniert, wiederholbar, automatisiert"
      sections={[
        {
          id: "intro",
          title: "Was ist IaC?",
          content: (
            <ContentBlock>
              <p>Infrastructure as Code ermöglicht es, Infrastruktur durch Code zu definieren und zu verwalten.</p>
            </ContentBlock>
          ),
        },
        {
          id: "tools",
          title: "IaC Tools",
          content: (
            <ContentBlock>
              <WikiBox title="Terraform" content="Deklarative IaC für Multi-Cloud" />
              <WikiBox title="Ansible" content="Agentless Configuration Management" />
              <WikiBox title="CloudFormation" content="AWS-native IaC" />
            </ContentBlock>
          ),
        },
      ]}
    />
  );
}

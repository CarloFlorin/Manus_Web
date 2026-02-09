import PageTemplate, { ContentBlock, WikiBox } from "@/components/PageTemplate";

export default function Cloud() {
  return (
    <PageTemplate
      title="Cloud-Plattformen"
      subtitle="AWS, Azure, GCP - Die großen Cloud-Provider"
      sections={[
        {
          id: "intro",
          title: "Cloud Computing",
          content: (
            <ContentBlock>
              <p>Cloud-Plattformen bieten skalierbare, flexible Infrastruktur ohne physische Hardware.</p>
            </ContentBlock>
          ),
        },
        {
          id: "provider",
          title: "Cloud-Provider",
          content: (
            <ContentBlock>
              <WikiBox title="AWS" content="Amazon Web Services - Marktführer" />
              <WikiBox title="Azure" content="Microsoft Azure - Enterprise-fokussiert" />
              <WikiBox title="GCP" content="Google Cloud Platform - Daten-fokussiert" />
            </ContentBlock>
          ),
        },
      ]}
    />
  );
}

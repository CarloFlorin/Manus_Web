import PageTemplate, { ContentBlock, WikiBox } from "@/components/PageTemplate";

export default function Ressourcen() {
  return (
    <PageTemplate
      title="Ressourcen & Weiterführendes"
      subtitle="Kuratierte Links und Empfehlungen"
      sections={[
        {
          id: "plattformen",
          title: "Online-Plattformen",
          content: (
            <ContentBlock>
              <WikiBox title="A Cloud Guru" content="Umfassende DevOps-Kurse" />
              <WikiBox title="Udemy" "https://www.udemy.com/" content="DevOps und Cloud-Kurse" />
              <WikiBox title="Pluralsight" content="Professionelle Trainings" />
              <WikiBox title="KodeKloud" content="Kubernetes und Docker Labs" />
            </ContentBlock>
          ),
        },
        {
          id: "dokumentation",
          title: "Offizielle Dokumentation",
          content: (
            <ContentBlock>
              <WikiBox title="Kubernetes Docs" content="kubernetes.io" />
              <WikiBox title="Docker Docs" content="docs.docker.com" />
              <WikiBox title="Terraform Docs" content="terraform.io/docs" />
              <WikiBox title="AWS Docs" content="docs.aws.amazon.com" />
            </ContentBlock>
          ),
        },
        {
          id: "zertifizierungen",
          title: "Zertifizierungen",
          content: (
            <ContentBlock>
              <WikiBox title="AWS DevOps Engineer" content="Professional-Level Zertifizierung" />
              <WikiBox title="CKA" content="Certified Kubernetes Administrator" />
              <WikiBox title="Docker Certified Associate" content="Docker-Zertifizierung" />
              <WikiBox title="Terraform Associate" content="HashiCorp Zertifizierung" />
            </ContentBlock>
          ),
        },
      ]}
    />
  );
}

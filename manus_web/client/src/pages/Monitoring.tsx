import PageTemplate, { ContentBlock, WikiBox } from "@/components/PageTemplate";

export default function Monitoring() {
  return (
    <PageTemplate
      title="Monitoring & Logging"
      subtitle="Observability - Einblick in Ihre Systeme"
      sections={[
        {
          id: "intro",
          title: "Warum Monitoring?",
          content: (
            <ContentBlock>
              <p>Monitoring ermöglicht es, Systemgesundheit zu überwachen und Probleme früh zu erkennen.</p>
            </ContentBlock>
          ),
        },
        {
          id: "tools",
          title: "Monitoring Tools",
          content: (
            <ContentBlock>
              <WikiBox title="Prometheus" content="Metriken-Sammlung und Alerting" />
              <WikiBox title="Grafana" content="Visualisierung von Metriken" />
              <WikiBox title="ELK Stack" content="Elasticsearch, Logstash, Kibana" />
            </ContentBlock>
          ),
        },
      ]}
    />
  );
}

/* Design: Terminal Brutalism - Hero section with DevOps overview - Mobile optimized */

import { Link } from "wouter";
import { ArrowRight, BookOpen, Code2, Server, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mb-12 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div>
            <div className="mb-6">
              <div className="text-xs lg:text-sm text-muted-foreground mb-2 overflow-x-auto">
                $ cat /dev/devops
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-accent mb-4 leading-tight">
                DevOps
                <br />
                Lernplattform
              </h1>
              <p className="text-base lg:text-lg text-foreground/80 mb-6">
                Meistern Sie die Kunst der modernen Infrastruktur-Automatisierung.
                Von Linux-Grundlagen bis zu Kubernetes-Orchestrierung.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/einfuehrung">
                <button className="w-full sm:w-auto px-6 py-3 bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2">
                  Jetzt Starten
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/ressourcen">
                <button className="w-full sm:w-auto px-6 py-3 border-2 border-accent text-accent hover:bg-accent/10 transition-all font-bold">
                  Ressourcen
                </button>
              </Link>
            </div>
          </div>

          <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/VwA5967XK1VyQX2WVvlK8t/sandbox/vh8x1DhRP6Y5RoOF9cyynq-img-1_1770661027000_na1fn_ZGV2b3BzLWhlcm8tdGVybWluYWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVndBNTk2N1hLMVZ5UVgyV1Z2bEs4dC9zYW5kYm94L3ZoOHgxRGhSUDZZNVJvT0Y5Y3l5bnEtaW1nLTFfMTc3MDY2MTAyNzAwMF9uYTFmbl9aR1YyYjNCekxXaGxjbTh0ZEdWeWJXbHVZV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RE5mABgw1qIQxIFxrPN1PXoxbbLXHnjvO2VdDX9N8EZb9U5P~GzdStNf4rxpUxe-zKtcfuZpwkKthWpOz1fEKoq3uNDtUO3pfb3Bp9-SQwc9rY51nne4FMuOdMRg0EcC3MNE1igESe~BYgM8URXgVNo7SLfxaN8eL83HG4hDOw0~wnA9PeGNsSMQOuyLK~stiWMY5my0FJWP8OMBTVwgV18mncKw4DSa3pjjFlGYaWU7hlRMFTuL4oA8YzgFPX3Z-XnalfcMBt5lmIWv4fq085telFRixxz3KyUsLt0QZxuuP-9HhJ8vIXOksZ~wi2WNP72~YyAuzaI8BhfoBDt62g__"
              alt="DevOps Terminal Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ASCII Divider */}
      <div className="text-center text-muted-foreground text-xs lg:text-sm mb-12 lg:mb-16 font-mono overflow-x-auto">
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      </div>

      {/* Learning Paths */}
      <section className="mb-12 lg:mb-16">
        <h2 className="text-2xl lg:text-3xl font-bold text-accent mb-6 lg:mb-8">Lernpfade</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {learningPaths.map((path, idx) => (
            <Link key={idx} href={path.href}>
              <div className="terminal-window p-4 lg:p-6 hover:border-accent transition-all cursor-pointer group h-full">
                <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                  <div className="text-accent text-xl lg:text-2xl">{path.icon}</div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base lg:text-lg text-foreground group-hover:text-accent transition-colors break-words">
                      {path.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {path.duration}
                    </p>
                  </div>
                </div>
                <p className="text-xs lg:text-sm text-foreground/70 mb-3 lg:mb-4 line-clamp-2">{path.description}</p>
                <div className="text-xs text-accent flex items-center gap-2">
                  Mehr <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ASCII Divider */}
      <div className="text-center text-muted-foreground text-xs lg:text-sm mb-12 lg:mb-16 font-mono overflow-x-auto">
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      </div>

      {/* Features */}
      <section>
        <h2 className="text-2xl lg:text-3xl font-bold text-accent mb-6 lg:mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="terminal-window p-4 lg:p-6 border-l-4 border-l-accent"
            >
              <div className="flex items-start gap-3 lg:gap-4">
                <div className="text-accent text-xl lg:text-2xl mt-1 flex-shrink-0">{feature.icon}</div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base lg:text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-foreground/70">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const learningPaths = [
  {
    title: "Fundamentale Bausteine",
    duration: "Woche 1-8",
    description: "Linux, Git, Netzwerk und Scripting - Die Grundlagen für DevOps.",
    href: "/linux",
    icon: "🔧",
  },
  {
    title: "CI/CD & Automation",
    duration: "Woche 9-12",
    description: "Jenkins, GitHub Actions, GitLab CI - Automatisierte Pipelines.",
    href: "/cicd",
    icon: "⚙️",
  },
  {
    title: "Containerisierung",
    duration: "Woche 13-16",
    description: "Docker und Container-Orchestrierung mit praktischen Beispielen.",
    href: "/docker",
    icon: "📦",
  },
  {
    title: "Kubernetes",
    duration: "Woche 17-22",
    description: "Container-Orchestrierung auf Enterprise-Niveau.",
    href: "/kubernetes",
    icon: "⛵",
  },
  {
    title: "Infrastructure as Code",
    duration: "Woche 23-26",
    description: "Terraform und Ansible - Infrastruktur als Code.",
    href: "/iac",
    icon: "🏗️",
  },
  {
    title: "Cloud & Monitoring",
    duration: "Woche 27-34",
    description: "AWS, Azure, GCP und Prometheus/Grafana Monitoring.",
    href: "/cloud",
    icon: "☁️",
  },
];

const features = [
  {
    title: "Umfassende Dokumentation",
    description:
      "Detaillierte Erklärungen zu jedem DevOps-Thema mit praktischen Beispielen.",
    icon: "📚",
  },
  {
    title: "Cheat-Sheets",
    description:
      "Schnelle Referenzen und Befehls-Übersichten für alle wichtigen Tools.",
    icon: "📋",
  },
  {
    title: "Praktische Projekte",
    description:
      "Real-World Szenarien und Projekte zum Hands-On Lernen.",
    icon: "🚀",
  },
  {
    title: "Wiki & Ressourcen",
    description:
      "Kuratierte Links zu Dokumentationen, Tutorials und Community-Ressourcen.",
    icon: "🔗",
  },
];

import type { LucideIcon } from "lucide-react";
import {
  Shield,
  Cpu,
  Network,
  Home,
  ArrowRight,
  Lock,
  Zap
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};


const features: Feature[] = [
  {
    icon: Shield,
    title: "Security-first",
    description:
      "A connected-home ecosystem designed with security, privacy and control as core principles."
  },
  {
    icon: Network,
    title: "Universal JSON bus",
    description:
      "A common data structure to make devices, services and automations communicate clearly."
  },
  {
    icon: Cpu,
    title: "Local intelligence",
    description:
      "Smart-home logic focused on local processing before relying on external cloud services."
  },
  {
    icon: Home,
    title: "IoT core",
    description:
      "The first objective is to build the central IoT layer for connected homes."
  }
];

const roadmap = [
  "Project ideation",
  "Technical choices",
  "Core architecture",
  "IoT prototype",
  "Security hardening"
];

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
            <Zap size={22} />
          </div>
          <span className="text-xl font-bold tracking-tight">Jabfy</span>
        </div>

        <a
          href="https://github.com/jabfy-corp"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-900"
        >
          <span className="text-base">↗</span>
          GitHub
        </a>
      </nav>

      <section className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Early-stage smart-home ecosystem
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Secure intelligence for connected homes.
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
            Jabfy is a project focused on IoT, cybersecurity, local automation
            and universal data interoperability for smart-home systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#vision"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Discover the project
              <ArrowRight size={18} />
            </a>

            <a
              href="#roadmap"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:bg-slate-900"
            >
              View roadmap
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl">
          <div className="mb-6 flex items-center gap-3">
            <Lock className="text-cyan-400" />
            <h2 className="text-2xl font-bold">Core principles</h2>
          </div>

          <div className="space-y-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <Icon size={28} className="mb-3 text-cyan-400" />
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Vision
          </p>

          <h2 className="mb-6 text-4xl font-bold">
            A universal layer for smart-home automation.
          </h2>

          <p className="text-lg leading-8 text-slate-300">
            The long-term goal is to create a secure ecosystem where connected
            devices can exchange structured data through a universal JSON-based
            communication bus. The project starts with the IoT core before
            expanding later to services such as calendars, emails and external
            integrations.
          </p>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Roadmap
        </p>

        <h2 className="mb-10 text-4xl font-bold">Current direction</h2>

        <div className="grid gap-4 md:grid-cols-5">
          {roadmap.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                {index + 1}
              </span>
              <p className="font-medium text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Jabfy Corp. Built for secure connected-home experimentation.
      </footer>
    </main>
  );
}

export default App;
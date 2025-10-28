import { Rocket, Shield, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    title: 'Blazing Fast',
    desc: 'Vite-powered dev server and instant HMR for a joyful workflow.',
    icon: Zap,
  },
  {
    title: 'Beautiful by Default',
    desc: 'Preconfigured Tailwind and thoughtful design tokens out of the box.',
    icon: Sparkles,
  },
  {
    title: 'Secure & Robust',
    desc: 'Battle-tested conventions and best practices built-in.',
    icon: Shield,
  },
  {
    title: 'Launch Ready',
    desc: 'Production-grade tooling to ship with confidence.',
    icon: Rocket,
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Everything you need</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Opinionated defaults that help you move fast without compromising on quality.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 shadow-sm hover:shadow transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

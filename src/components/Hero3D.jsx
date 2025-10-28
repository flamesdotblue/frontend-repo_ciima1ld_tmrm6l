import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] w-full">
        <Spline
          scene="https://prod.spline.design/oTQMph9We4nYk15g/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-neutral-950 dark:via-neutral-950/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="pointer-events-none mx-auto max-w-4xl px-6 text-center">
            <h1 className="pointer-events-auto text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Launch Beautiful Experiences
            </h1>
            <p className="pointer-events-auto mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              Build, preview, and ship polished apps with a delightful developer workflow.
            </p>
            <div className="pointer-events-auto mt-8 flex items-center justify-center gap-4">
              <a href="#get-started" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-500 transition-colors">
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-5 py-3 font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Rocket, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <Rocket className="h-5 w-5 text-indigo-600" />
          <span>Vibe Launch</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
          <a href="#get-started" className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-white font-medium shadow hover:bg-indigo-500 transition-colors">Get Started</a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-neutral-200/60 dark:border-neutral-800/60">
          <div className="px-4 py-3 space-y-2">
            <a href="#features" className="block px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">Features</a>
            <a href="#pricing" className="block px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">Pricing</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">Contact</a>
            <a href="#get-started" className="block px-2 py-2 rounded bg-indigo-600 text-white text-center">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}

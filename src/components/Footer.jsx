export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Vibe Launch. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Privacy</a>
          <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Terms</a>
          <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
}

import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import FeaturesGrid from './components/FeaturesGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero3D />
        <FeaturesGrid />
        <section id="get-started" className="py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-10 bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg">
              <h3 className="text-3xl font-bold">Ready to build something great?</h3>
              <p className="mt-3 text-indigo-100">Spin up your next idea and ship with confidence.</p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <a href="#" className="inline-flex items-center rounded-md bg-white text-indigo-700 px-5 py-3 font-semibold shadow hover:bg-indigo-50 transition-colors">Create Project</a>
                <a href="#features" className="inline-flex items-center rounded-md bg-white/10 text-white px-5 py-3 font-semibold ring-1 ring-inset ring-white/30 hover:bg-white/20 transition-colors">Explore Features</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

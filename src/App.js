import React from "react"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Deploy Instantly with One Click
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          A modern platform to automate deployments for your team and organization.
        </p>
        <div className="mt-6">
          <button className="bg-white text-black text-lg px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
            <div className="text-purple-500 text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Instant Deploys</h3>
            <p className="text-gray-400 text-sm">
              Push to Git and your project is live — automatically.
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
            <div className="text-blue-400 text-3xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2">Easy Config</h3>
            <p className="text-gray-400 text-sm">
              Configure environments, build commands, and routing with ease.
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
            <div className="text-green-400 text-3xl mb-4">🌎</div>
            <h3 className="text-xl font-semibold mb-2">Global CDN</h3>
            <p className="text-gray-400 text-sm">
              Served from the edge — fast and secure for everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500">
        © 2025 Acetians. Built with React & TailwindCSS.
      </footer>
    </div>
  )
}

export default App

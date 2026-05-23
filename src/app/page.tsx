import { ArrowRight, Code, Rocket, FileCheck, Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          apikeyscanner
        </h1>
        <p className="text-2xl font-medium text-foreground/80">
          Local secret leak detection for developers.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-[700px]">
          A lightweight Python library and CLI tool for detecting exposed API keys, passwords, tokens, and insecure secrets before deployment. Maintain high-trust security by scanning your local codebase automatically.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/cli"
            className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-sm font-medium shadow hover:bg-foreground/90 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a
            href="https://github.com/devxyasir/apikeyscanner"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-muted transition-colors text-foreground"
          >
            <Code className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </div>
      </section>

      {/* Terminal Preview */}
      <section>
        <div className="rounded-lg overflow-hidden border border-border bg-[#000000] shadow-sm max-w-[700px]">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[#333333] bg-[#0a0a0a]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="mx-auto text-xs text-[#888888] font-mono">bash — apikeyscanner</div>
          </div>
          <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto text-[#f8f8f2]">
            <div className="flex gap-3 mb-2">
              <span className="text-[#a6e22e]">$</span>
              <span>apikeyscanner scan .</span>
            </div>
            <div className="text-[#888888] mb-4 italic">Scanning local workspace...</div>
            <div className="space-y-4">
              <div className="border-l-2 border-[#f92672] pl-3">
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-[#f92672] text-[10px] tracking-wider">[HIGH RISK]</span>
                  <span className="text-[#888888] text-xs">src/auth/config.py:12</span>
                </div>
                <div>Pattern: <span className="text-[#f92672] font-semibold">AWS_SECRET_ACCESS_KEY</span> detected.</div>
              </div>
              <div className="border-l-2 border-[#fd971f] pl-3">
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-[#fd971f] text-[10px] tracking-wider">[MEDIUM RISK]</span>
                  <span className="text-[#888888] text-xs">.env.example:4</span>
                </div>
                <div>Pattern: <span className="text-[#fd971f] font-semibold">POSTGRES_PASSWORD</span> detected.</div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-[#f92672]">
              <span className="font-bold">Scan Failed: 2 secrets identified. Deployment blocked.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="p-6 rounded-lg border border-border bg-card text-card-foreground">
          <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-4 text-foreground">
            <Rocket className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Pre-commit ready</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Integrated hooks to scan staged changes before they ever hit your local git history.
          </p>
        </div>
        <div className="p-6 rounded-lg border border-border bg-card text-card-foreground">
          <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-4 text-foreground">
            <Search className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-lg mb-2">100+ patterns</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Vast library of regex and entropy checks for major cloud providers, SaaS APIs, and databases.
          </p>
        </div>
        <div className="p-6 rounded-lg border border-border bg-card text-card-foreground">
          <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-4 text-foreground">
            <FileCheck className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-lg mb-2">CI/CD optimized</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Zero-dependency installation makes it perfect for GitHub Actions, GitLab CI, and Jenkins.
          </p>
        </div>
      </section>

      {/* Example Callout */}
      <div className="border-l-4 border-foreground bg-muted p-6 rounded-r-lg mt-8">
        <div className="flex gap-4">
          <div className="flex-shrink-0 pt-1">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-foreground font-bold text-xs">i</div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Local First Security</h4>
            <p className="text-sm text-muted-foreground">
              Scanning occurs locally on your machine. Your source code and identified secrets never leave your filesystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

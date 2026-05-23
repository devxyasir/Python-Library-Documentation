export default function CliUsage() {
  return (
    <div className="flex flex-col gap-10 pb-12">
      <section>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          CLI Usage
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-[700px]">
          The fastest way to scan your projects is using the command-line interface. It's built for speed and easily integrates into your terminal workflows.
        </p>
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Basic Commands</h2>
        <p className="text-muted-foreground">Scan your current project, specific files, or whole directories.</p>
        
        <div className="rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm overflow-x-auto">
          <div className="text-muted-foreground mb-2"># Scan the current project</div>
          <div className="text-foreground font-medium mb-4">apikeyscanner scan .</div>

          <div className="text-muted-foreground mb-2"># Scan a specific file</div>
          <div className="text-foreground font-medium mb-4">apikeyscanner scan ./config.py</div>

          <div className="text-muted-foreground mb-2"># Scan a directory</div>
          <div className="text-foreground font-medium mb-4">apikeyscanner scan ./src</div>
        </div>
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Filtering & Options</h2>
        
        <div className="rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm overflow-x-auto">
          <div className="text-muted-foreground mb-2"># Only show HIGH severity findings</div>
          <div className="text-foreground font-medium mb-4">apikeyscanner scan . --severity HIGH</div>

          <div className="text-muted-foreground mb-2"># Ignore specific directories (e.g. node_modules, venv)</div>
          <div className="text-foreground font-medium mb-4">apikeyscanner scan . --ignore "node_modules venv"</div>
          
          <div className="text-muted-foreground mb-2"># Save a JSON report</div>
          <div className="text-foreground font-medium mb-4">apikeyscanner scan . --output reports/report.json</div>

          <div className="text-muted-foreground mb-2"># Print raw JSON output (great for CI/CD pipelines)</div>
          <div className="text-foreground font-medium mb-4">apikeyscanner scan . --json</div>
        </div>
      </section>
      
      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">CI/CD Example</h2>
        <p className="text-muted-foreground">You can chain the command to fail your build if any high-risk secrets are found.</p>
        
        <div className="rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm overflow-x-auto">
          <div className="text-foreground font-medium">apikeyscanner scan . --severity HIGH --json && echo "Safe" || echo "SECRETS FOUND"</div>
        </div>
      </section>
    </div>
  );
}

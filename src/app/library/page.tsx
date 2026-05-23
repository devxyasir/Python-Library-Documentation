import { ArrowRight, Code, List, Terminal, FileCode2 } from "lucide-react";

export default function PythonLibrary() {
  return (
    <div className="flex flex-col gap-10 pb-12">
      <section>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          Python Library Guide
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-[700px]">
          <code>apikeyscanner</code> is designed from the ground up to be a robust, importable Python library. This guide explains every function and parameter you need to build custom security pipelines, hook into web backends, or script custom checks.
        </p>
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Code className="h-6 w-6 text-muted-foreground" />
          The Main Function: <code>scan()</code>
        </h2>
        <p className="text-muted-foreground">
          The entire scanning engine is exposed through a single, powerful function: <code>scan()</code>. 
          When you call this function, the scanner resolves the target path, recursively collects files, applies over 100+ detection patterns, and returns a rich <code>ScanResult</code> object.
        </p>

        <div className="rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground">
{`import apikeyscanner as aks

# The scan function signature
result = aks.scan(
    path=".",                        # 1. The target to scan
    severity=["HIGH", "MEDIUM"],     # 2. Filter severities (optional)
    ignore=["tests", "mocks"],       # 3. Custom ignores (optional)
    recursive=True,                  # 4. Search recursively (default: True)
    verbose=False                    # 5. Enable debug logs (default: False)
)`}
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border border-border p-4 rounded-md bg-card">
            <h3 className="font-semibold mb-2">1. <code>path</code> (str or Path)</h3>
            <p className="text-sm text-muted-foreground">
              The target you want to scan. This can be a single file (<code>"config.py"</code>), a specific directory (<code>"src/"</code>), or the current working directory (<code>"."</code>).
            </p>
          </div>
          <div className="border border-border p-4 rounded-md bg-card">
            <h3 className="font-semibold mb-2">2. <code>severity</code> (list[str])</h3>
            <p className="text-sm text-muted-foreground">
              A list of severity levels to filter by. Options are <code>"HIGH"</code>, <code>"MEDIUM"</code>, and <code>"LOW"</code>. If left as <code>None</code>, it returns all findings.
            </p>
          </div>
          <div className="border border-border p-4 rounded-md bg-card">
            <h3 className="font-semibold mb-2">3. <code>ignore</code> (list[str])</h3>
            <p className="text-sm text-muted-foreground">
              A list of directory names to skip. The scanner already ignores common folders (like <code>.git</code>, <code>node_modules</code>, <code>venv</code>), but you can add custom ones here.
            </p>
          </div>
          <div className="border border-border p-4 rounded-md bg-card">
            <h3 className="font-semibold mb-2">4. <code>recursive</code> & <code>verbose</code></h3>
            <p className="text-sm text-muted-foreground">
              <code>recursive</code> controls if it searches inside sub-folders. <code>verbose</code> enables detailed logging to standard output.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <FileCode2 className="h-6 w-6 text-muted-foreground" />
          Example: Line-by-Line Code Breakdown
        </h2>
        <p className="text-muted-foreground">
          Let's look at a practical example of writing a custom security script that fails if it finds HIGH-risk secrets, but simply warns for MEDIUM-risk secrets.
        </p>

        <div className="rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm overflow-x-auto space-y-2">
          <div className="text-muted-foreground"># 1. Import the library</div>
          <div className="text-foreground">import sys</div>
          <div className="text-foreground font-medium mb-4">import apikeyscanner as aks</div>

          <div className="text-muted-foreground"># 2. Run the scan on the src directory, ignoring test files</div>
          <div className="text-foreground font-medium">result = aks.scan(</div>
          <div className="text-foreground font-medium">    path="./src",</div>
          <div className="text-foreground font-medium">    ignore=["tests", "fixtures"]</div>
          <div className="text-foreground font-medium mb-4">)</div>

          <div className="text-muted-foreground"># 3. The result object gives you direct access to counts</div>
          <div className="text-foreground">print(f"Scanned {'{result.scanned_files}'} files.")</div>
          <div className="text-foreground mb-4">print(f"Found {'{result.total_findings}'} total secrets.")</div>

          <div className="text-muted-foreground"># 4. We can iterate over the findings list</div>
          <div className="text-foreground">for finding in result.findings:</div>
          <div className="text-foreground">    if finding.severity == "MEDIUM":</div>
          <div className="text-foreground">        # You get exact file paths, line numbers, and the masked secret!</div>
          <div className="text-foreground mb-4">        print(f"⚠️ Warning: {'{finding.type}'} in {'{finding.file}'} on line {'{finding.line}'}")</div>

          <div className="text-muted-foreground"># 5. Use the helper properties for easy boolean checks</div>
          <div className="text-foreground">if result.has_high_risk:</div>
          <div className="text-foreground">    print(f"❌ FAILED: {'{result.high_count}'} critical secrets detected!")</div>
          <div className="text-foreground">    result.save_json("failed_scan.json") # Save a report</div>
          <div className="text-foreground">    sys.exit(1) # Block the pipeline</div>
          <div className="text-foreground">else:</div>
          <div className="text-foreground">    print("✅ Passed: No critical secrets found.")</div>
          <div className="text-foreground">    sys.exit(0)</div>
        </div>
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Terminal className="h-6 w-6 text-muted-foreground" />
          Real-World: FastAPI Integration
        </h2>
        <p className="text-muted-foreground">
          You can embed <code>apikeyscanner</code> directly into your web backend. For example, you could create a webhook that scans incoming PR code before allowing it to merge.
        </p>

        <div className="rounded-lg border border-border bg-[#000000] p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-[#f8f8f2]">
{`from fastapi import FastAPI, HTTPException
import apikeyscanner as aks

app = FastAPI()

@app.post("/security/scan-repo")
def scan_project(repo_path: str):
    # Scan the provided path, but only care about HIGH severity
    result = aks.scan(
        path=repo_path,
        severity=["HIGH"], 
    )

    if result.has_high_risk:
        # result.findings is a list of Finding objects.
        # We can easily convert them to dictionaries to return as JSON!
        raise HTTPException(
            status_code=403,
            detail={
                "message": "Deployment blocked. Secrets detected.",
                "findings": [finding.to_dict() for finding in result.findings],
            }
        )

    # result.summary provides a great quick-overview dict
    return {
        "message": "Safe to deploy.",
        "summary": result.summary
    }`}
          </pre>
        </div>
      </section>
    </div>
  );
}

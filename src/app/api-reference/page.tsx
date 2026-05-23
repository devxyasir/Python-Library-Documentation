import { ListTree, BookOpen, AlertCircle } from "lucide-react";

export default function ApiReference() {
  return (
    <div className="flex flex-col gap-10 pb-12">
      <section>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          API Reference
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-[700px]">
          A complete, detailed reference of the <code>apikeyscanner</code> Python objects. 
          When you run <code>aks.scan()</code>, it returns a <code>ScanResult</code> which contains a list of <code>Finding</code> objects.
        </p>
      </section>

      {/* ScanResult Section */}
      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-muted-foreground" />
          The <code>ScanResult</code> Object
        </h2>
        <p className="text-muted-foreground">
          This is the main object returned by the scan. It holds all metadata about the scan execution, along with the actual secrets found.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse border border-border rounded-lg overflow-hidden">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">Property / Method</th>
                <th scope="col" className="px-6 py-3 font-medium">Type</th>
                <th scope="col" className="px-6 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {/* Core Attributes */}
              <tr className="border-b border-border hover:bg-muted/30">
                <td className="px-6 py-4 font-semibold font-mono text-foreground">.findings</td>
                <td className="px-6 py-4 font-mono text-xs text-muted-foreground">list[Finding]</td>
                <td className="px-6 py-4 text-muted-foreground">The actual list of secrets found. Empty if the scan was clean.</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30">
                <td className="px-6 py-4 font-semibold font-mono text-foreground">.target</td>
                <td className="px-6 py-4 font-mono text-xs text-muted-foreground">str</td>
                <td className="px-6 py-4 text-muted-foreground">The original path string that was scanned.</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30">
                <td className="px-6 py-4 font-semibold font-mono text-foreground">.scan_mode</td>
                <td className="px-6 py-4 font-mono text-xs text-muted-foreground">str</td>
                <td className="px-6 py-4 text-muted-foreground">Returns <code>"file"</code>, <code>"directory"</code>, or <code>"project"</code> based on what was scanned.</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30">
                <td className="px-6 py-4 font-semibold font-mono text-foreground">.scanned_files / .skipped_files</td>
                <td className="px-6 py-4 font-mono text-xs text-muted-foreground">int</td>
                <td className="px-6 py-4 text-muted-foreground">Counts of how many files were successfully scanned vs skipped (e.g., binaries, ignored dirs).</td>
              </tr>
              
              {/* Helper Booleans */}
              <tr className="border-b border-border hover:bg-muted/30">
                <td className="px-6 py-4 font-semibold font-mono text-foreground text-blue-500">.has_high_risk</td>
                <td className="px-6 py-4 font-mono text-xs text-muted-foreground">bool</td>
                <td className="px-6 py-4 text-muted-foreground"><strong>(Helper)</strong> True if any HIGH severity secrets were found. Perfect for CI/CD checks.</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30">
                <td className="px-6 py-4 font-semibold font-mono text-foreground text-blue-500">.has_findings / .is_clean</td>
                <td className="px-6 py-4 font-mono text-xs text-muted-foreground">bool</td>
                <td className="px-6 py-4 text-muted-foreground"><strong>(Helper)</strong> Easy booleans to check if the scan found anything at all.</td>
              </tr>
              
              {/* Counts */}
              <tr className="border-b border-border hover:bg-muted/30">
                <td className="px-6 py-4 font-semibold font-mono text-foreground">.total_findings / .high_count / .medium_count</td>
                <td className="px-6 py-4 font-mono text-xs text-muted-foreground">int</td>
                <td className="px-6 py-4 text-muted-foreground">Numerical counts of the findings grouped by severity.</td>
              </tr>

              {/* Methods */}
              <tr className="border-b border-border hover:bg-muted/30 bg-muted/10">
                <td className="px-6 py-4 font-semibold font-mono text-foreground text-green-500">.to_dict() / .to_json()</td>
                <td className="px-6 py-4 font-mono text-xs text-muted-foreground">dict / str</td>
                <td className="px-6 py-4 text-muted-foreground"><strong>(Method)</strong> Serializes the entire result, including all findings, into a dictionary or JSON string.</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 bg-muted/10">
                <td className="px-6 py-4 font-semibold font-mono text-foreground text-green-500">.save_json(path)</td>
                <td className="px-6 py-4 font-mono text-xs text-muted-foreground">None</td>
                <td className="px-6 py-4 text-muted-foreground"><strong>(Method)</strong> Saves the JSON report to the given file path. Automatically creates parent directories if needed.</td>
              </tr>
              <tr className="hover:bg-muted/30 bg-muted/10">
                <td className="px-6 py-4 font-semibold font-mono text-foreground text-green-500">.filter_by_severity(list)</td>
                <td className="px-6 py-4 font-mono text-xs text-muted-foreground">ScanResult</td>
                <td className="px-6 py-4 text-muted-foreground"><strong>(Method)</strong> Returns a brand new <code>ScanResult</code> containing only the requested severities.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Finding Section */}
      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <ListTree className="h-6 w-6 text-muted-foreground" />
          The <code>Finding</code> Object
        </h2>
        <p className="text-muted-foreground">
          Every item inside <code>result.findings</code> is a <code>Finding</code> object. It contains the exact location and context of the leaked secret.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-border p-4 rounded-md bg-card">
            <h3 className="font-semibold font-mono text-sm mb-1 text-foreground">.severity <span className="text-xs font-sans font-normal text-muted-foreground">(str)</span></h3>
            <p className="text-sm text-muted-foreground">The risk level: <code>"HIGH"</code>, <code>"MEDIUM"</code>, or <code>"LOW"</code>.</p>
          </div>
          <div className="border border-border p-4 rounded-md bg-card">
            <h3 className="font-semibold font-mono text-sm mb-1 text-foreground">.type <span className="text-xs font-sans font-normal text-muted-foreground">(str)</span></h3>
            <p className="text-sm text-muted-foreground">The name of the detected pattern (e.g. <code>"AWS Access Key"</code> or <code>"Generic Password"</code>).</p>
          </div>
          <div className="border border-border p-4 rounded-md bg-card">
            <h3 className="font-semibold font-mono text-sm mb-1 text-foreground">.file <span className="text-xs font-sans font-normal text-muted-foreground">(str)</span></h3>
            <p className="text-sm text-muted-foreground">The relative path to the file where the secret was found.</p>
          </div>
          <div className="border border-border p-4 rounded-md bg-card">
            <h3 className="font-semibold font-mono text-sm mb-1 text-foreground">.line <span className="text-xs font-sans font-normal text-muted-foreground">(int)</span></h3>
            <p className="text-sm text-muted-foreground">The exact 1-indexed line number in the file.</p>
          </div>
          <div className="border border-border p-4 rounded-md bg-card md:col-span-2">
            <h3 className="font-semibold font-mono text-sm mb-1 text-foreground">.match <span className="text-xs font-sans font-normal text-muted-foreground">(str)</span></h3>
            <p className="text-sm text-muted-foreground">The matched string, <strong>automatically masked</strong> to prevent logging raw secrets. (e.g., <code>AKIA****************</code>).</p>
          </div>
        </div>
      </section>

      {/* Severities */}
      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <AlertCircle className="h-6 w-6 text-muted-foreground" />
          Severity Levels Explained
        </h2>
        <div className="rounded-lg border border-border divide-y divide-border overflow-hidden">
          <div className="p-4 bg-muted/10">
            <div className="font-bold text-foreground mb-1">HIGH Risk</div>
            <div className="text-sm text-muted-foreground">
              Critical secrets like AWS Keys, Stripe Secrets, Database Passwords, or Private SSH Keys. 
              <strong>Action:</strong> Rotate these immediately. Do not deploy.
            </div>
          </div>
          <div className="p-4 bg-muted/10">
            <div className="font-bold text-foreground mb-1">MEDIUM Risk</div>
            <div className="text-sm text-muted-foreground">
              Personal Access Tokens, Webhooks, or URLs with embedded basic auth. 
              <strong>Action:</strong> Review these. They should be moved to Environment Variables.
            </div>
          </div>
          <div className="p-4 bg-muted/10">
            <div className="font-bold text-foreground mb-1">LOW Risk</div>
            <div className="text-sm text-muted-foreground">
              Generic endpoints, internal IP addresses, or potential configuration leaks. 
              <strong>Action:</strong> Informational. Verify if they belong in source control.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export function ReferencePanel() {
  return (
    <div className="rounded-xl bg-card border border-border shadow-sm p-6 animate-fade-in">
      <h2 className="text-lg font-semibold mb-2">References</h2>
      <div className="space-y-4">
        <ReferenceCard
          name="Dilum Bandara PhD"
          desc="Senior Research Scientist, CSIRO Data61"
          contact="dilum.bandara@csiro.au | +61 294 905 898, +61 433 915 729"
        />
        <ReferenceCard
          name="Nimsara Fernando"
          desc="Software Engineer, WSO2"
          contact="nimsara@wso2.com | +94716180388"
        />
      </div>
    </div>
  );
}

function ReferenceCard({ name, desc, contact }: { name: string; desc: string; contact: string }) {
  return (
    <div className="border rounded-lg px-4 py-3 bg-muted/60">
      <div className="font-bold">{name}</div>
      <div className="text-xs text-muted-foreground">{desc}</div>
      <div className="text-xs mt-1">{contact}</div>
    </div>
  );
}

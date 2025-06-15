
export function CertificationsList() {
  return (
    <div className="rounded-xl bg-card border border-border shadow-sm p-6 animate-fade-in space-y-3">
      <h2 className="text-lg font-semibold mb-2">Certifications & More</h2>
      <ul className="flex flex-wrap gap-2 text-xs">
        <li className="bg-accent px-2 py-0.5 rounded">IEEEXtreme 15.0 (Country rank 19)</li>
        <li className="bg-accent px-2 py-0.5 rounded">Machine Learning (Coursera)</li>
        <li className="bg-accent px-2 py-0.5 rounded">Blockchain Basics (Coursera)</li>
        {/* Add more certifications here */}
      </ul>
      <div>
        <span className="font-medium text-xs">Website:</span>{" "}
        <a
          href="https://www.sanduninduwara.xyz"
          className="underline text-primary hover:text-blue-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.sanduninduwara.xyz
        </a>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="bg-accent px-2 py-0.5 rounded text-xs">Badminton</span>
        <span className="bg-accent px-2 py-0.5 rounded text-xs">Cricket</span>
        <span className="bg-accent px-2 py-0.5 rounded text-xs">Drawing</span>
        <span className="bg-accent px-2 py-0.5 rounded text-xs">Painting</span>
        <span className="bg-accent px-2 py-0.5 rounded text-xs">Traveling</span>
        <span className="bg-accent px-2 py-0.5 rounded text-xs">Hiking</span>
        <span className="bg-accent px-2 py-0.5 rounded text-xs">Crypto Market</span>
      </div>
    </div>
  );
}


const LANGUAGES = [
  "JavaScript", "TypeScript", "Java", "Python"
];
const WEB = [
   "NodeJS", "SpringBoot", "GraphQL", "ReactJS", "NextJS", "Tailwind CSS", "Git", "Kafka", "Docker", "Redis"
];
const DATABASES = [
  "PostgreSQL", "MongoDB", "MySQL", "Firestore"
];
const SOFT = [
  "Problem solving", "Designing", "Project Management", "Client Management", "Collaborative working"
];
const LANGS = ["English", "Sinhala"];

export function SkillsGrid() {
  return (
    <div className="rounded-xl bg-card border border-border shadow-sm p-8 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillCategory label="Programming" items={LANGUAGES} />
        <SkillCategory label="Web & Tools" items={WEB} />
        <SkillCategory label="Databases" items={DATABASES} />
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <SkillBadgeGroup label="Soft Skills" items={SOFT} />
        <SkillBadgeGroup label="Languages" items={LANGS} />
      </div>
    </div>
  );
}

function SkillCategory({ label, items }: { label: string, items: string[] }) {
  return (
    <div>
      <h3 className="font-medium text-foreground mb-2">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <span
            key={item}
            className="inline-block bg-muted px-3 py-1 rounded border text-xs text-muted-foreground hover:scale-105 transition-transform"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillBadgeGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <span className="font-medium text-xs">{label}:</span>
      {items.map(i => (
        <span key={i} className="ml-1 bg-accent px-2 py-0.5 rounded text-xs">{i}</span>
      ))}
    </div>
  );
}

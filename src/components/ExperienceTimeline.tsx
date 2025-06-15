export function ExperienceTimeline() {
  return (
    <div className="rounded-xl bg-card border border-border shadow-sm p-8 animate-fade-in space-y-8">
      <h2 className="text-xl font-semibold mb-6">Experience</h2>

      {/* Sysco Labs */}
      <ExperienceCard
        role="Software Engineer"
        company="Sysco Labs"
        time="June 2024 – Present"
        type="Full-time"
        details="Sysco Labs is one of the world's largest broadline food distributors. Our
team is responsible for handling backend pricing-related tasks on
Sysco Shop, which is their main e-commerce website. Stack: SpringBoot, NodeJS, GraphQL, PostgreSQL, Kafka."
      />

      {/* Freelance */}
      <ExperienceCard
        role="Web Development Freelance"
        company="Freelance"
        time="Jan 2023 – Present"
        type="Part-time"
        details="Full Stack Developer (long- and short-term, contract based). Project management, client communication. Stack: NextJS, ReactJS, TypeScript, Zustand, Keycloak, Tailwind, NodeJS, SpringBoot, MongoDB, PostgreSQL."
      />

      {/* HashBaze */}
      <ExperienceCard
        role="Software Engineer"
        company="HashBaze"
        time="Oct 2023 – Jan 2024"
        type="Part-time"
        details="Backend development and real-time chat implementation for an online
class conducting platform. Stack: NodeJs, Express, MongoDB, SocketIO.
Frontend implementation for an online computer product-selling website.
Stack: NextJs, Tailwind CSS, TypeScript
"
      />

      {/* WSO2 */}
      <ExperienceCard
        role="Software Engineer Intern"
        company="WSO2"
        time="Jan 2023 – Jun 2023"
        type="Internship"
        details="Designed and implemented service endpoints and the DAO layer for
the Consent Management project within the Open Banking team. Stack: Ballerina, Java, PostgreSQL, Docker."
      />
    </div>
  );
}

function ExperienceCard({
  role,
  company,
  time,
  details,
  type,
}: {
  role: string;
  company: string;
  time: string;
  details: string;
  type: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
      <div className="w-full md:w-44 shrink-0 text-muted-foreground md:text-right">
        <div className="font-semibold text-foreground">{role}</div>
        <div className="text-sm">{company}</div>
        <div className="text-xs italic">{type}</div>
        <div className="text-xs">{time}</div>
      </div>
      <div className="flex-1 border-l md:border-l-0 md:border-t border-border pl-4 md:pl-0 md:pt-4 mt-2 md:mt-0">
        <div className="text-[0.98rem] text-muted-foreground">{details}</div>
      </div>
    </div>
  );
}

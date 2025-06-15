import { ContactPanel } from "@/components/ContactPanel";
import { BioCard } from "@/components/BioCard";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ReferencePanel } from "@/components/ReferencePanel";
import { CertificationsList } from "@/components/CertificationsList";
import { ProfileImageSection } from "@/components/ProfileImageSection";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* Hero/Header */}
      <header className="w-full border-b border-border py-8 px-8 md:px-20 flex flex-col md:flex-row items-start md:items-center md:justify-between bg-gradient-to-br from-white to-slate-100">
        <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
          <ProfileImageSection />
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Sandun Induwara</h1>
            <p className="text-lg text-muted-foreground">S O F T W A R E &nbsp; E N G I N E E R I N G</p>
            <p className="mt-2 text-base max-w-2xl text-muted-foreground">
              I'm a Software Engineer passionate about learning and building with the latest technologies, strong in design & teamwork. <br />
              <span className="text-xs font-medium opacity-70">
                B.Sc. Eng (Hons) in Computer Science – University of Moratuwa, Sri Lanka
              </span>
            </p>
          </div>
          <ContactPanel />
        </div>
      </header>
      {/* Content Grid */}
      <main className="w-full px-4 md:px-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
        <section className="col-span-1 md:col-span-2 space-y-8">
          <BioCard />
          <SkillsGrid />
          <ExperienceTimeline />
          <ProjectShowcase />
        </section>
        <aside className="col-span-1 space-y-8">
          <ReferencePanel />
          <CertificationsList />
        </aside>
      </main>
      <footer className="w-full py-6 text-center text-xs text-muted-foreground border-t border-border mt-16">
        &copy; {new Date().getFullYear()} Sandun Induwara &mdash; Portfolio
      </footer>
    </div>
  );
}

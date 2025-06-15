
import { Linkedin, Mail, Phone, Github } from "lucide-react";

export function ContactPanel() {
  return (
    <div className="flex flex-row md:flex-col gap-4 md:gap-2 mt-4 md:mt-0">
      <a
        href="https://www.linkedin.com/in/sandun-induwara/"
        className="group inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 hover:bg-accent animate-fade-in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="w-5 h-5 text-blue-700 group-hover:text-blue-800 transition-colors" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href="mailto:sanduninduwara1@gmail.com"
        className="group inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 hover:bg-accent animate-fade-in"
      >
        <Mail className="w-5 h-5 text-red-600 group-hover:text-red-700 transition-colors" />
        <span className="sr-only">Email</span>
      </a>
      {/* <a
        href="tel:+94766763114"
        className="group inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 hover:bg-accent animate-fade-in"
      >
        <Phone className="w-5 h-5 text-green-700 group-hover:text-green-800 transition-colors" />
        <span className="sr-only">Phone</span>
      </a> */}
      <a
        href="https://github.com/sanduninduwara"
        className="group inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 hover:bg-accent animate-fade-in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" />
        <span className="sr-only">GitHub</span>
      </a>
    </div>
  );
}

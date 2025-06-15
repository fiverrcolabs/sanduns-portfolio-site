
export function BioCard() {
  return (
    <div className="rounded-xl shadow-md bg-card border border-border p-8 flex flex-col md:flex-row gap-8 animate-fade-in">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-[1.05rem] text-muted-foreground">
          I'm a Software Engineer with a smart working personality and a passion for computer science.
          I thrive on learning new technologies, enjoy design challenges, and work confidently within teams.
          <br /><br />
          {/* <span className="font-semibold">Interests:</span> Badminton, Cricket, Drawing, Painting, Hiking, Crypto */}
        </p>
      </div>
      <div className="flex-shrink-0 w-full md:w-[260px] space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Education</h3>
          <ul className="text-sm text-muted-foreground mt-1">
            <li>
              <span className="font-medium text-foreground">B.Sc. Engineering (Hons)</span><br />
              Computer Science & Engineering<br />
              University of Moratuwa, Sri Lanka<br />
              <span className="text-xs">2020 – 2024</span><br />
              <span className="text-xs font-semibold">GPA: 3.82 (First Class)</span>
            </li>
            {/* <li className="mt-4">
              <span className="font-medium text-foreground">G.C.E. A/L (Physical Science Stream)</span><br />
              Ananda College Chilaw<br />
              <span className="text-xs">3A passes | Z-Score: 2.022</span><br />
              <span className="text-xs">2005 – 2018</span>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
  logo: string;
}

// You can update and add as many experiences you would like
// If you want to have the current badge, please add the (date - Current) to activate
export const experiences: Experience[] = [
  {
    title: "Teaching Assistant",
    company: "Virginia Commonwealth University",
    logo: "/company-logos/logo-2.png",
    date: " Sep 2024 – Dec 2024",
    description:
      " C Programming TA: Assisted students in C programming labs, providing guidance on debugging, data strctures, and algorithm implementation.\n– Engineering 101 TA (Electrical & CS): Helped students with foundational concepts in circuits, theremin,Arduino, and basic principles.",
  },
  {
    title: "Software Engineering Intern",
    company: "All Tenders",
    logo: "/company-logos/logo-2.png",
    date: " Mar 2022 – Mar 2022",
    description:
      " Updated the version of the website built using PHP and hosted it on AWS cloud using SSH.",
  },
  {
    title: "Software Engineer Intern",
    company: "All Tenders",
    logo: "/company-logos/logo-3.png",
    date: "Sep 2021 – Sep 2021",
    description:
      " Developed a crawler to automate the download of files of tenders from the government website Karnataka e-Procurement in a team of 2 people.",
  },
  {
    title: "Vice-President ",
    company: "Computer Science Club",
    logo: "/company-logos/logo-3.png",
    date: "Oct 2021 – Mar 2022",
    description:
      " Coordinated and led a team of 7 people, managing event planning, logistics, task delegation, and communication to successfully organize the fest.",
  },
];

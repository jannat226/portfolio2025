// interface Experience {
//   title: string;
//   company: string;
//   date: string;
//   description: string;
//   logo: string;
// }

// // You can update and add as many experiences you would like
// // If you want to have the current badge, please add the (date - Current) to activate
// export const experiences: Experience[] = [
//   {
//     title: "Research Assistant",
//     company: "Natural Language Processing Lab, Virginia Commonwealth University",
//     logo: "/company-logos/logo-1.png",
//     date: "Jan 2025 – Present",
//     description:
//       "Preprocessed large-scale NLP datasets using Python to generate clean, tokenized, and structured inputs for model training.\n Contributed to a relationship extraction model using PyTorch, supporting architecture design, training, and implementation.\nApplied TorchMetrics for postprocessing and evaluation, ensuring accurate performance benchmarking on NLP-specific metrics.",
//   },
//   {
//     title: "Teaching Assistant",
//     company: "Virginia Commonwealth University",
//     logo: "/company-logos/logo-1.png",
//     date: " Sep 2024 – Dec 2024",
//     description:
//       " C Programming TA: Assisted students in C programming labs, providing guidance on debugging, data strctures, and algorithm implementation.\n– Engineering 101 TA (Electrical & CS): Helped students with foundational concepts in circuits, theremin,Arduino, and basic principles.",
//   },
//   {
//     title: "Software Engineering Intern",
//     company: "All Tenders",
//     logo: "/company-logos/logo-2.png",
//     date: " Mar 2022 – Mar 2022",
//     description:
//       " Updated the version of the website built using PHP and hosted it on AWS cloud using SSH.",
//   },
//   {
//     title: "Software Engineer Intern",
//     company: "All Tenders",
//     logo: "/company-logos/logo-2.png",
//     date: "Sep 2021 – Sep 2021",
//     description:
//       " Developed a crawler to automate the download of files of tenders from the government website Karnataka e-Procurement in a team of 2 people.",
//   },
//   // {
//   //   title: "Vice-President ",
//   //   company: "Computer Science Club",
//   //   logo: "/company-logos/logo-3.png",
//   //   date: "Oct 2021 – Mar 2022",
//   //   description:
//   //     " Coordinated and led a team of 7 people, managing event planning, logistics, task delegation, and communication to successfully organize the fest.",
//   // },
// ];
interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
  logo: string;
}

export const experiences: Experience[] = [
  {
    title: "Research Assistant",
    company: "Natural Language Processing Lab, Virginia Commonwealth University",
    logo: "/company-logos/logo-1.png",
    date: "Jan 2025 – Present",
    description: [
      "Preprocessed 10,000+ biomedical abstracts using Python for clean, tokenized inputs, boosting model efficiency by 30%.",
      "Contributed to a relation extraction model using PyTorch, improving F1-score by 12% through architecture refinement and training.",
      "Used TorchMetrics to automate evaluation across 18 relation classes, reducing manual validation time by 50%."
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Virginia Commonwealth University",
    logo: "/company-logos/logo-1.png",
    date: "Sep 2024 – Dec 2024",
    description: [
      "Mentored 20+ students weekly in C programming labs, guiding them in debugging, data structures, and algorithmic thinking.",
      "Supported 20+ first-year students in Engineering 101 with fundamentals in Arduino, circuit theory, and theremin projects."
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Raceme Tenders LLP",
    logo: "/company-logos/logo-2.png",
    date: "Mar 2022 – Mar 2022",
    description: [
      "Upgraded legacy PHP codebase for 5+ modules and successfully deployed to AWS via SSH, reducing server downtime by 20%."
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Raceme Tenders LLP",
    logo: "/company-logos/logo-2.png",
    date: "Sep 2021 – Sep 2021",
    description: [
      "Built an automated Python crawler with Selenium to extract 1000+ tenders from the Karnataka e-Procurement portal in collaboration with one teammate."
    ],
  },
];

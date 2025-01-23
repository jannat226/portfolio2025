interface Projects {
  name: string;
  href: string;
  description: string;
  date: string;
  stack: string[];
}

//You can add as many tech stack icons here
export const techIcons: { [key: string]: string } = {
  "Next.js": "/Icons/next.svg",
  "React.js": "/Icons/react.svg",
  Typescript: "/Icons/typescript.svg",
  "Node.js": "/Icons/node.svg",
  PostgreSQL: "/Icons/PostgreSQL.svg",
  Firebase: "/Icons/firebase.svg",
  Python: "/Icons/python.svg",
  Javascript: "/Icons/javascript.svg",
};

// You can update and add as many experiences you would like
export const projects: Projects[] = [
  {
    name: "RideShare",
    href: "https://github.com/jannat226/ridesharee",
    description:
      "Applied user interface to book a ride with nearby drivers who want to share their cab and vice versa, both working synchronously.\n Utilized Open Street Maps API for location-based services.\nPresented the project at the International Conference on Engineering Advancements and Sustainable \nDevelopment at Ramaiah College.",
    date: "May 2022",
    //The array will show the list based on how it is typed, ensure what the techIcon text is is exactly the same as you have it in this stack array
    stack: ["Next.js", "React.js", "Typescript", "Node.js"],
  },
  {
    name: "Crawler",
    href: "https://bitbucket.org/jannatjiya/karnataka_eprocurement/src/main/tender_test/test_tender.py",
    description:
      "Implemented automation to download all tenders from a website to a local device.\n Used the Python framework Selenium",
    date: "May 2023",
    stack: [
      "Selenium ",
      "Firebase",
      "Python",
    ],
  }
];

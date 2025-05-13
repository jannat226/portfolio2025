interface Projects {
    name: string;
    href: string;
    description: string;
    date: string;
    stack: string[];
  }
  
  //You can add as many tech stack icons here
// You can add as many tech stack icons here
export const techIcons: { [key: string]: string } = {
    // 🚀 Web Development
    "Next.js": "/Icons/next.svg",
    "React.js": "/Icons/react.svg",
    "Node.js": "/Icons/node.svg",
    "Express.js": "/Icons/express-color.svg",
    // "TypeScript": "/Icons/typescript.svg",
    "JavaScript": "/Icons/javascript.svg",
    // "Redux": "/Icons/redux.svg",
    "Tailwind CSS": "/Icons/tailwindcss-color.svg",
    // "Bootstrap": "/Icons/bootstrap.svg",
    "HTML5": "/Icons/html.svg",
    "CSS3": "/Icons/css.svg",
    // "SASS": "/Icons/sass.svg",
  
    // ⚙️ Backend & Databases
    // "Go": "/Icons/go.svg",
    // "Kotlin": "/Icons/kotlin.svg",
    "PostgreSQL": "/Icons/postgres.png",
    "MongoDB": "/Icons/mongodb-color.svg",
    "Firebase": "/Icons/firebase.svg",
    "MySQL": "/Icons/mysql-color.svg",
    // "GraphQL": "/Icons/graphql.svg",
    // "Docker": "/Icons/docker.svg",
    // "Kubernetes": "/Icons/kubernetes.svg",
  
    // 🤖 Machine Learning & AI
    "Python": "/Icons/python-color.svg",
    "TensorFlow": "/Icons/tensorflow-color.svg",
    "PyTorch": "/Icons/pytorch.png",
    "Scikit-Learn": "/Icons/scikitlearn-color.svg",
    // "OpenCV": "/Icons/opencv.svg",
    // "Keras": "/Icons/keras.svg",
    "Hugging Face": "/Icons/huggingface-color.svg",
  
    // 📊 Data Science & Analytics
    "Pandas": "/Icons/pandas-color.svg",
    // "NumPy": "/Icons/numpy.svg",
    // "Matplotlib": "/Icons/matplotlib.svg",
    // "Seaborn": "/Icons/seaborn.svg",
    // "R": "/Icons/r.svg",
    // "Apache Spark": "/Icons/spark.svg",
  
    // 🛠 Developer Tools
    // "Git": "/Icons/git.svg",
    "GitHub": "/Icons/github-color.svg",
    "Postman": "/Icons/postman-color.svg",
    // "VS Code": "/Icons/vscode.svg",
    // "Android Studio": "/Icons/androidstudio.svg",
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
  
  
  
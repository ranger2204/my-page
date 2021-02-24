import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  personal_details = {
    Education: [
      {
        degree: "Master of Technology in Information Technology",
        institute:
          "National Insititute of Technology Karnataka, Surathkal, Mangalore",
        year: "2014 - 16",
        marks: "8.22 CGPA"
      },
      {
        degree: "Bachelor of Technology in Computer Science & Engineering",
        institute: "TKM College of Engineering Karikode, Kollam, Kerala",
        year: "2009 - 13",
        marks: "8.33 CGPA"
      }
    ]
  };

  projects = {
    Academic: [
      {
        name: "Video Data Hiding for Managing Privacy Information",
        tags: ["C++", "OpenCV", "Image Processing"]
      },
      {
        name: "Trend Detection over the Twitter Stream",
        tags: ["Python", "Qt", "Sklearn", "NLTK"]
      },
      {
        name: "E Learning System Based on Affective Computing",
        tags: ["C++", "CUDA", "OpenCV"]
      },
      {
        name:
          "Optimal Task Allocation for Maximizing Reliability in Distributed Real-time Systems",
        tags: ["Python", "Qt", "Networking", "Distributed Processing"]
      },
      // {
      //   name: "Text Clustering Using Statistical and Semantic Data",
      //   tags: ["Python", "Qt", "Sklearn", "NLTK", "Document Clustering"]
      // },
      {
        name:
          "Super-pixel Based Constrained Parametric Min-Cuts for Automatic Object Segmentation",
        tags: ["C++", "Python", "Sklearn", "Image Processing"]
      }
    ],
    Organization: [
      {
        name: "Break Attribute Prediction using Machine Learning",
        details: [
          "Application that auto tags break attributes",
          "Knowledge gathered from historic data and daily user actions",
          "Performance evaluation and daily user reports",
          "Based on microservice architecture",
          "Angular dashboard"
        ],
        // details:
        //   "An automated system which helps users in predicting attributes of breaks and learn based on day to day user corrections.\
        //  A classic example of a multiclass classification problem. Performance of the system is evaluated and reported daily. Designed based on microservice architecture,\
        //  this application has a centralized dashboard.\
        //  ",
        tags: [
          "Python",
          "Autosys",
          "Sklearn",
          "Matplotlib",
          "Pandas",
          "Classification",
          "Angular"
        ]
      },
      {
        name: "Tabular/Form Data Extraction from PDFs (OCR - Tesseract)",
        details: [
          "System capable of extracting tabular/form data from PDFs",
          "Build using pattern matching concepts and OCR",
          "Configuration driven and Angular UI",
          "Distributed processing using containers"
        ],
        tags: [
          "Python",
          "Numpy",
          "FLASK",
          "OpenCV",
          "Pandas",
          "Distributed Processing"
        ]
      },
      {
        name: "Break Group Prediction using Clustering",
        details: [
          "Cluster proposal system that helps user to group transactions",
          "Works on custom hybrid algorithm - KNN & ACO",
          "Angular UI for performance evaluation & monitoring"
        ],
        // details:
        //   "A cluster suggestion system which works based on semi supervised learning techniques and swarm intelligence\
        //  for cluster optimization.",
        tags: [
          "Python",
          "Angular",
          "Sklearn",
          "FLASK",
          "DASK",
          "HighCharts",
          "Pandas",
          "Clustering"
        ]
      },
      {
        name: "Search Result Optimization using NLP",
        details: [
          "An addon to optimize search results",
          "Extensive use of StanfordNLP language models"
        ],
        // details:
        //   "An addon feature that analyses search keywords and  optimizes search results using StanfordNLP langugae models for an inhouse search engine.",
        tags: ["Core JAVA", "Distributed Processing", "Angular", "NLP"]
      }
    ]
  };

  achievements = [
    "2nd Rank in American Express Hackathon (inter college, 2015)",
    "1st Rank in IBM Codeathon conducted at NITK, Surathkal (2016)",
    "Morgan Stanley Innovation Award (2017)",
    "Morgan Stanley Global Technology Award (2018)",
    "Morgan Stanley GRIT Award (2019)"
  ];

  about_me =
    "A believer of simplicity, a die-hard fan of Ironman \
  and developer who wouldn’t mind to push his limits.\
  Programming is my passion and profession. Love concepts more than syntax. Rapid prototyping is my USP. Curious about gadgets,\
  thrilled to drive cars and a semi advanced badminton player.";

  interests = [
    "Distributed Systems",
    "Parallelization",
    "ML & AI",
    "NLP",
    "Computer Vision",
    "Data Visualization",
    "Security",
    "Badminton",
    "Driving",
    "Music",
    "Gaming",
    "Football"
  ];

  skills = {
    Languages: [
      { name: "Python", value: 10 },
      { name: "Core JAVA", value: 6 },
      { name: "C++", value: 6 },
      { name: "JavaScript", value: 7 },
      { name: "TypeScript", value: 5 },
      { name: "SQL", value: 6 },
      { name: "HTML", value: 6 },
      { name: "CSS", value: 6 }
    ],

    Frameworks: [
      { name: "Angular", value: 6 },
      { name: "Celery", value: 6 },
      { name: "Sklearn", value: 9 },
      { name: "Pandas", value: 7 },
      { name: "Numpy", value: 7 },
      { name: "OpenCV", value: 8 },
      { name: "DASK", value: 5 },
      { name: "Bootstrap", value: 8 },
      { name: "FLASK", value: 8 },
      { name: "Autosys", value: 9 },
      { name: "MSSQL", value: 8 },
      { name: "REDIS", value: 5 },
      { name: "DB2", value: 8 },
      { name: "IBM MQ", value: 7 },
      { name: "CPS", value: 6 },
      { name: "Matplotlib", value: 6 },
      { name: "HighCharts", value: 5 },
      { name: "Docker", value: 6 },
      { name: "Apache Kafka", value: 6 }
    ],
    Concepts: [
      { name: "REST", value: 8 },
      { name: "Image Processing", value: 6 },
      { name: "Machine Learning", value: 7 },
      { name: "Data Compression", value: 6 },
      { name: "Microservices", value: 7 },
      { name: "GIT", value: 9 },
      { name: "Perforce", value: 9 },
      { name: "Distributed Processing", value: 8 }
    ]
  };

  skill_deps = Object.keys(this.skills);
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  personal_details = {
    'Education': [
        {'degree': 'Master of Technology in Information Technology', 
        'institute':'National Insititute of Technology Karnataka, Surathkal, Mangalore', 
        'year': '2014 - 16',
        'marks': '8.22 CGPA'},
        {'degree':'Bachelor of Technology in Computer Science & Engineering', 
        'institute':'TKM College of Engineering Karikode, Kollam', 
        'year':'2009 - 13',
        'marks': '8.33 CGPA'}
      ]
  }

  projects = {
    'Academic': [
      {'name': 'Video Data Hiding for Managing Privacy Information', 'tags' : ['C++', 'OpenCV', 'Image Processing']},
      {'name': 'Trend Detection over the Twitter Stream', 'tags': ['Python', 'Qt', 'Sklearn', 'NLTK']},
      {'name': 'E Learning System Based on Affective Computing', 'tags': ['C++','CUDA', 'OpenCV']},
      {'name': 'Optimal Task Allocation for Maximizing Reliability in Distributed Real-time Systems', 'tags':['Python','Qt', 'Networking','Distributed Processing']},
      {'name': 'Text Clustering Using Statistical and Semantic Data', 'tags': ['Python','Qt','Sklearn','NLTK', 'Document Clustering']},
      {'name': 'Super-pixel Based Constrained Parametric Min-Cuts for Automatic Object Segmentation', 'tags': ['C++','Python','Sklearn', 'Image Processing']}
    ],
    'Organization': [
      {
        'name': "Break Attribute Prediction using Machine Learning", 
        'details': "An automated system which helps users in predicting attributes of breaks and learn based on day to day user corrections.\
         A classic example of a multiclass classification problem. Performance of the system is evaluated and reported daily",
        'tags': ["Python", "Autosys", "Sklearn", "Matplotlib", "Pandas", "Classification", "Angular"]
      },
      {
        'name': "Tabular Data Extraction from PDFs (OCR - Tesseract)",
        'details': "A system capable of recognising and extracting tabular information from pdfs preserving the structure.\
         Accomplished using pattern matching techniques with distributed processing in containers.",
        'tags': ["Python", "Numpy", "FLASK", "OpenCV", "Pandas", "Distributed Processing"]
      },
      {
        'name': "Break Group Prediction using Clustering (KNN & ACO)",
        'details': "A cluster suggestion system which works based on semi supervised learning techniques and swarm intelligence\
         for cluster optimization.",
        'tags': ["Python", "Angular", "Sklearn", "FLASK", "HighCharts", "Pandas", "Clustering"]

      }
    ]
  }

  achievements = [
    "2nd Rank in American Express Hackathon (inter college, 2015)",
    "1st Rank in IBM Codeathon conducted in NITK, Surathkal (2016)",
    "Morgan Stanley Innovation Award (2017)",
    "Morgan Stanley Global Technology Award (2018)"
  ]

  about_me="A believer of simplicity, a die-hard fan of Ironman  and developer who wouldn’t mind to push his limits.\
  Programming is my passion and profession. Love concepts more than syntax. Rapid prototyping is my USP. Curious about gadgets,\
  thrilled to drive cars and a semi advanced badminton player."

  interests = [
    "ML & AI", "NLP", "Computer Vision", "Parallelization", "Distributed Systems", "Virtualization", "Security", "Badminton", "Driving", "Music", "Gaming"
  ]

  skills = {
    "Languages": [
      {'name':"Python", 'value': 10},
      {'name':"Core JAVA", 'value': 6},
      {'name':"C++", 'value': 6},
      {'name':"JavaScript", 'value': 5},
      {'name':"TypeScript", 'value': 5},
      {'name':"SQL", 'value': 6},
      {'name':"HTML", 'value': 6},
      {'name':"CSS", 'value': 6}
    ],

    "Frameworks": [
      {'name':"Angular", 'value': 6},
      {'name':"Sklearn", 'value': 9},
      {'name':"Pandas", 'value': 7},
      {'name':"Numpy", 'value': 7},
      {'name':"OpenCV", 'value': 8},
      {'name':"DASK", 'value': 5},
      {'name':"Bootstrap", 'value': 8},
      {'name':"FLASK", 'value': 8},
      {'name':"Autosys", 'value': 9},
      {'name':"MSSQL", 'value': 8},
      {'name':"REDIS", 'value': 5},
      {'name':"DB2", 'value': 8},
      {'name':"MQ", 'value': 7},
      {'name':"CPS", 'value': 6},
      {'name':"HighCharts", 'value': 5},
      {'name':"Docker", 'value': 6}
    ],
    'Concepts': [
      {'name':'REST', 'value': 8}, 
      {'name':'Image Processing', 'value': 6}, 
      {'name':'Machine Learning', 'value': 7}, 
      {'name':'Data Compression', 'value': 6}, 
      {'name':'Microservices', 'value': 7},
      {'name': 'Distributed Processing', 'value': 8},
      {'name':'GIT', 'value': 9},
      {'name':'Perforce', 'value': 9}
    ]
  }

  skill_deps = Object.keys(this.skills)
}

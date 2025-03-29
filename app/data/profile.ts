import { Profile } from '../types/profile';

export const profile: Profile = {
  name: "Parth Jariwala",
  title: "Software Engineer",
  location: "Surat, Gujarat, India",
  about: "Skilled Software Engineer specializing in Java, Spring, AWS and microservices. Passionate about crafting robust backend systems and elegant APIs that solve real-world problems.",
  experience: [
    {
      title: "Software Engineer II",
      company: "Joveo",
      duration: "Jan 2024 - Present",
      description: "Team Leadership, Mentoring and various technical skills.",
      location: "Surat, Gujarat, India (Remote)"
    },
    {
      title: "Software Engineer",
      company: "Joveo",
      duration: "Apr 2022 - Dec 2023",
      description: "Working with Jenkins, Amazon Web Services (AWS) and other technologies.",
      location: "Surat, Gujarat, India (Remote)"
    },
    {
      title: "Software Engineer",
      company: "Jeavio",
      duration: "Jun 2020 - Mar 2022",
      description: "Worked on SevOne NMS (Network monitoring system). Built APIs to store and retrieve data, which are used by NMS users or SevOne solutions. These APIs are written in Java Spring.",
      location: "Vadodara, Gujarat, India"
    },
    {
      title: "Associate Software Engineer",
      company: "Jeavio",
      duration: "May 2019 - May 2020",
      description: "Data Structures focused role.",
      location: "Vadodara, Gujarat, India"
    },
    {
      title: "Intern",
      company: "Jeavio",
      duration: "Dec 2018 - Mar 2019",
      description: "Internship experience in software development.",
      location: "Vadodara, Gujarat, India"
    }
  ],
  education: [
    {
      degree: "BTech - Bachelor of Technology, Information Technology",
      university: "Dharmsinh Desai University",
      duration: "2015 - 2019",
    }
  ],
  skills: [
    { name: "Java", highlighted: true },
    { name: "Spring Framework", highlighted: false },
    { name: "Spring Boot", highlighted: true },
    { name: "Microservices", highlighted: true },
    { name: "Data Structures", highlighted: false },
    { name: "Concurrency & Multithreading", highlighted: false },
    { name: "Design Patterns", highlighted: false },
    { name: "AWS", highlighted: true, expandable: true, services: [
      "AWS Lambda",
      "Amazon Simple Queue Service (SQS)",
      "Amazon Simple Notification Service (SNS)",
      "Amazon EC2",
      "Amazon S3",
      "AWS IAM",
      "Amazon ECR",
      "AWS Batch",
      "AWS Secrets Manager",
      "Amazon Cognito",
      "Amazon DynamoDB"
    ]},
    { name: "Docker", highlighted: false },
    { name: "DevOps", highlighted: false },
    { name: "Terraform", highlighted: false },
    { name: "Kubernetes", highlighted: true },
    { name: "Helm", highlighted: false },
    { name: "Jenkins", highlighted: false },
    { name: "Apache Kafka", highlighted: true },
    { name: "Event-Driven Architecture", highlighted: false },
    { name: "MongoDB", highlighted: false },
    { name: "Redis", highlighted: true },
    { name: "MySQL", highlighted: false },
    { name: "PostgreSQL", highlighted: true },
    { name: "Snowflake", highlighted: false },
    { name: "Sharding & Partitioning", highlighted: false },
    { name: "Systems Design", highlighted: true },
    { name: "Team Leadership", highlighted: false },
    { name: "Mentoring", highlighted: true },
    { name: "Code Reviews & Best Practices", highlighted: false },
    { name: "Git", highlighted: false }
  ],
  projects: [
    {
      title: "Software License Management",
      description: "Developed a Software License Management system using PHP, JavaScript, MySQL, HTML, CSS, and Bootstrap.",
      duration: "May 2018 - Dec 2019",
      association: "Dharmsinh Desai University",
      technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS", "Bootstrap"],
    },
    {
      title: "MCQ Android Application",
      description: "Created an Android application for multiple-choice questions.",
      duration: "Aug 2018 - Feb 2019",
      technologies: ["Android", "Java"],
    },
    {
      title: "Network Monitoring System",
      description: "Built APIs for SevOne NMS to store and retrieve monitoring data for network systems.",
      duration: "Jun 2020 - Mar 2022",
      technologies: ["Java", "Spring", "RESTful APIs"],
    }
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/parth-jariwala/",
    github: "https://github.com/jariwala-parth",
    instagram: "https://www.instagram.com/theparthjariwala/"
  }
}; 
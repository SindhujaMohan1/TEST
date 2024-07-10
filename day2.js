resume = {
    "name": "John Doe",
    "contact": {
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "address": "1234 Main St, Anytown, Anystate, 12345"
    },
    "summary": "Experienced software engineer with a strong background in developing scalable web applications and working with cross-functional teams.",
    "education": [],
    "experience": [],
    "skills": [],
    "certifications": [],
    "projects": []
  }
  
  education_entries = [
    {"institution": "Anytown University", "degree": "Bachelor of Science in Computer Science", "graduationYear": 2020}
  ]
  
  experience_entries = [
    {
      "company": "Tech Solutions Inc.",
      "position": "Software Engineer",
      "startDate": "2021-01",
      "endDate": "Present",
      "responsibilities": [
        "Developed and maintained web applications using JavaScript, React, and Node.js.",
        "Collaborated with designers and product managers to implement new features.",
        "Optimized application performance, reducing load times by 20%."
      ]
    },
    {
      "company": "Web Innovations LLC",
      "position": "Junior Developer",
      "startDate": "2020-06",
      "endDate": "2020-12",
      "responsibilities": [
        "Assisted in the development of e-commerce websites using HTML, CSS, and PHP.",
        "Conducted testing and debugging to ensure code quality.",
        "Participated in code reviews and team meetings."
      ]
    }
  ]
  
  skills = ["JavaScript", "React", "Node.js", "HTML", "CSS", "PHP", "Git", "Agile methodologies"]
  
  certifications = [
    {"name": "Certified JavaScript Developer", "issuer": "Tech Certification Board", "year": 2021}
  ]
  
  projects = [
    {
      "name": "E-commerce Website",
      "description": "Developed a full-stack e-commerce website using React and Node.js, featuring user authentication, product listings, and a shopping cart.",
      "url": "https://github.com/johndoe/ecommerce-website"
    }
  ]
  
  for entry in education_entries:
    resume["education"].append(entry)
  
  for entry in experience_entries:
    resume["experience"].append(entry)
  
  for skill in skills:
    resume["skills"].append(skill)
  
  for certification in certifications:
    resume["certifications"].append(certification)
  
  for project in projects:
    resume["projects"].append(project)
  
  print(resume)
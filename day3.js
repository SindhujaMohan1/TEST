import json
from collections.abc import Mapping, Sequence

def compare_json(obj1, obj2):
    if isinstance(obj1, Mapping) and isinstance(obj2, Mapping):
        return (obj1.keys() == obj2.keys() and
                all(compare_json(obj1[key], obj2[key]) for key in obj1))
    elif isinstance(obj1, Sequence) and isinstance(obj2, Sequence) and not isinstance(obj1, str):
        return (len(obj1) == len(obj2) and
                all(any(compare_json(item1, item2) for item2 in obj2) for item1 in obj1))
    else:
        return obj1 == obj2

# Example usage
json1 = '''
{
  "name": "John Doe",
  "contact": {
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "address": "1234 Main St, Anytown, Anystate, 12345"
  },
  "summary": "Experienced software engineer with a strong background in developing scalable web applications and working with cross-functional teams.",
  "education": [
    {
      "institution": "Anytown University",
      "degree": "Bachelor of Science in Computer Science",
      "graduationYear": 2020
    }
  ],
  "experience": [
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
  ],
  "skills": [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "PHP",
    "Git",
    "Agile methodologies"
  ],
  "certifications": [
    {
      "name": "Certified JavaScript Developer",
      "issuer": "Tech Certification Board",
      "year": 2021
    }
  ],
  "projects": [
    {
      "name": "E-commerce Website",
      "description": "Developed a full-stack e-commerce website using React and Node.js, featuring user authentication, product listings, and a shopping cart.",
      "url": "https://github.com/johndoe/ecommerce-website"
    }
  ]
}
'''

json2 = '''
{
  "contact": {
    "phone": "+1234567890",
    "email": "john.doe@example.com",
    "address": "1234 Main St, Anytown, Anystate, 12345"
  },
  "summary": "Experienced software engineer with a strong background in developing scalable web applications and working with cross-functional teams.",
  "name": "John Doe",
  "education": [
    {
      "graduationYear": 2020,
      "degree": "Bachelor of Science in Computer Science",
      "institution": "Anytown University"
    }
  ],
  "experience": [
    {
      "startDate": "2021-01",
      "endDate": "Present",
      "position": "Software Engineer",
      "company": "Tech Solutions Inc.",
      "responsibilities": [
        "Developed and maintained web applications using JavaScript, React, and Node.js.",
        "Collaborated with designers and product managers to implement new features.",
        "Optimized application performance, reducing load times by 20%."
      ]
    },
    {
      "company": "Web Innovations LLC",
      "startDate": "2020-06",
      "endDate": "2020-12",
      "position": "Junior Developer",
      "responsibilities": [
        "Participated in code reviews and team meetings.",
        "Assisted in the development of e-commerce websites using HTML, CSS, and PHP.",
        "Conducted testing and debugging to ensure code quality."
      ]
    }
  ],
  "skills": [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "PHP",
    "Git",
    "Agile methodologies"
  ],
  "certifications": [
    {
      "name": "Certified JavaScript Developer",
      "issuer": "Tech Certification Board",
      "year": 2021
    }
  ],
  "projects": [
    {
      "name": "E-commerce Website",
      "description": "Developed a full-stack e-commerce website using React and Node.js, featuring user authentication, product listings, and a shopping cart.",
      "url": "https://github.com/johndoe/ecommerce-website"
    }
  ]
}
'''

# Parse JSON strings into Python dictionaries
dict1 = json.loads(json1)
dict2 = json.loads(json2)

# Compare the dictionaries
result = compare_json(dict1, dict2)
print(f"The JSON objects are {'equal' if result else 'not equal'}.")
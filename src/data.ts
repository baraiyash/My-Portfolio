export const links = {
  github: 'https://github.com/baraiyash', linkedin: 'https://www.linkedin.com/in/baraiyash',
  leetcode: 'https://leetcode.com/u/baraiyash/', hackerrank: 'https://www.hackerrank.com/profile/yashbarai1111',
  codechef: 'https://www.codechef.com/users/baraiyash', codeforces: 'https://codeforces.com/profile/baraiyash',
}
export type Project = { title: string; sub: string; blurb: string; stack: string[]; repo: string; demo?: string }
export const projects: Project[] = [
  { title: 'RailEase', sub: 'CLI Railway Reservation System · Core Java, JDBC, MySQL', repo: 'https://github.com/baraiyash/Rail-Ease',
    blurb: 'CLI-based railway reservation system with train search, multi-passenger booking, PNR tracking, and cancellations, featuring layered architecture, secure password hashing, and automatic waitlist promotion.',
    stack: ['Core Java', 'JDBC', 'MySQL', 'Singleton pattern', 'Prepared statements', 'SHA-256'] },
  { title: 'API Rate Limiter', sub: 'Full-Stack MERN Application', repo: 'https://github.com/baraiyash/API-Rate-Limiter',
    blurb: 'MERN-based API rate limiter with configurable IP, domain, and user limits, a sliding-window counter, atomic MongoDB operations, JWT authentication, breach notifications, and 65 automated tests.',
    stack: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'JWT', 'Jest', 'Supertest'] },
  { title: 'Nexus University Management System', sub: 'Full-Stack Academic Platform · MERN Stack', repo: 'https://github.com/baraiyash/University-Management-System', demo: 'https://nexusuniversity.vercel.app/',
    blurb: 'MERN-based university management system with role-based access, secure authentication, and REST APIs supporting academic administration and CRUD operations across university management modules.',
    stack: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'JWT'] },
  { title: 'StockFlow', sub: 'Inventory Management System · ASP.NET Core', repo: 'https://github.com/baraiyash/Stock-Flow',
    blurb: 'Full-stack inventory management system for tracking products, warehouses, and stock movements, featuring JWT authentication, role-based authorization, and low-stock monitoring.',
    stack: ['ASP.NET Core Web API', 'C#', 'Entity Framework Core', 'SQL Server', 'React.js'] },
]
export type Skill = { g: string; i: string[] }
export const skills: Skill[] = [
  { g: 'Languages', i: ['Java', 'SQL', 'C#', 'JavaScript', 'Python'] },
  { g: 'Frameworks & Libraries', i: ['Spring Boot', 'Hibernate', 'JDBC', 'React.js', 'Node.js', 'Express.js', 'ASP.NET Core', 'Entity Framework Core', 'Tailwind CSS'] },
  { g: 'Databases', i: ['MySQL', 'SQL Server', 'MongoDB'] },
  { g: 'Cloud & Deployment', i: ['Azure', 'Vercel', 'Netlify', 'Render', 'Docker', 'Kubernetes'] },
  { g: 'Tools & Testing', i: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Jest', 'Supertest'] },
  { g: 'Backend Concepts & Architecture', i: ['Microservices', 'Apache Kafka', 'Singleton Pattern', 'Layered Architecture', 'REST APIs', 'Dependency Injection'] },
]
export const edu = [
  { s: 'Dharmsinh Desai University', deg: 'Master of Computer Applications (MCA)', n: 'Nadiad · Pursuing', y: '2025–2027', c: 'CPI: 7.36' },
  { s: 'Saurashtra University', deg: 'Bachelor of Computer Applications (BCA)', n: 'Smt. CZMG BCA College, Jamnagar', y: '2022–2025', c: 'CPI: 8.64', rank: 'College Rank 1' },
]
export const interests = ['Backend Development', 'System Design', 'Database Systems', 'Distributed Systems']
export const coursework = ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Software Engineering']
export type Cert = { t: string; o: string; d: string; img: string; href?: string; level?: string }
const hr = (t: string, img: string, level?: string): Cert => ({ t, level, img: `/certs/${img}.webp`, o: 'HackerRank skill certification', d: 'Jun 2026' })
export const certs: Cert[] = [
  hr('Java', 'java-basic', 'Basic'),
  { t: 'Java Course: Mastering the Fundamentals', o: 'Scaler Topics · course completion', d: 'Jun 2026', img: '/certs/scaler-java.webp' },
  hr('SQL', 'sql-basic', 'Basic'),
  { t: 'SQL for Beginners (MySQL and database design)', o: 'Scaler Topics · course completion', d: 'Jun 2026', img: '/certs/scaler-sql.webp' },
  hr('SQL', 'sql-intermediate', 'Intermediate'),
  { t: 'AWS Academy Cloud Foundations', o: 'AWS Academy · 20 hours', d: 'Mar 2024', img: '/certs/aws-cloud-foundations.webp', href: 'https://www.credly.com/go/TonW5VYu' },
  hr('Problem Solving', 'problem-solving', 'Intermediate'),
  hr('C#', 'csharp-basic', 'Basic'), hr('React', 'react-basic', 'Basic'),
  hr('Node', 'node-basic', 'Basic'), hr('Node.js', 'node-intermediate', 'Intermediate'),
  hr('Python', 'python-basic', 'Basic'),
]

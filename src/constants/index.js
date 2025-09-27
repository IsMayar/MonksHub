import {
  FinancialAcc,
  DigitalMarketing,
  UxResearch,
  Empower1a,
  Empower1b,
  Empower1c,
  Empower2a,
  Empower2b,
  ExpertiseExploreCourses,
  ExpertiseLearning,
  ExpertiseLeftEnd,
  ExpertiseRightEnd,
  TakeYourExpertiseLeft2,
  TakeYourExpertiseLeft1,
  ExpertiseSignUp,
  MonksHubLogo,
  LearnFrom,
  heroLeft,
  heroRight,
  arrowRight,
  UIUXDesign,
  marketing,
  development,
  popular,
  timeSpan,
  lectures,
  mentor1,
  mentor2,
  mentor3,
  mentor4,
  mentor5,
  mentor6,
  categories,
  developmentCourse,
  UIUX,
  marketingCourse,
  accounting,
  ProjectManagement,
  buildResume1,
  support,
  networking,
  WorldwideStudents,
  WhyChooseMonkshubBg,
} from "../assets/images";

// Navbar Constants
export const navbarLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Mentors", href: "/mentors" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const navbarLogo = MonksHubLogo;

export const navbarCTA = {
  label: "Get this Template",
  href: "#",
  classes: "px-6 py-4 bg-blue-300 border rounded-full",
};

// Hero Constants
export const mentorsData = [
  {
    id: 1,
    name: "Robert David",
    position: "UI/UX Designer",
    image: mentor1,
    courses: ["Figma", "Wordpress", "Notion"],
  },
  {
    id: 2,
    name: "John Doe",
    position: "Frontend Developer",
    image: mentor2,
    courses: ["React", "Tailwind", "Next.js"],
  },
  {
    id: 3,
    name: "Jane Smith",
    position: "UI/UX Designer",
    image: mentor3,
    courses: ["Figma", "Adobe", "Sketch"],
  },
  {
    id: 4,
    name: "Michael Lee",
    position: "Backend Developer",
    image: mentor4,
    courses: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 5,
    name: "Emily Clark",
    position: "Fullstack Developer",
    image: mentor5,
    courses: ["React", "Node.js", "GraphQL"],
  },
  {
    id: 6,
    name: "David Kim",
    position: "Mobile App Developer",
    image: mentor6,
    courses: ["Flutter", "Dart", "Firebase"],
  },
];

export const heroData = {
  header: {
    learnFromLogo: LearnFrom,
  },
  images: {
    left: heroLeft,
    right: heroRight,
  },
  icons: {
    arrowRight,
    popular,
    lectures,
    timeSpan,
  },
};

// Next Generation

export const mentorsText = {
  header: {
    title: "Meet the Next Generation of Masterful Mentors",
    subtitle:
      " Connect with the next wave of expert mentors, guiding you with fresh perspectives, innovative insights, and proven expertise.",
  },
};

export const DetailedMentorsData = [
  {
    id: 1,
    name: "Robert David",
    position: "UI/UX Designer",
    image: mentor1,
    courses: ["Figma", "Wordpress", "Notion"],
  },
  {
    id: 2,
    name: "John Doe",
    position: "Frontend Developer",
    image: mentor2,
    courses: ["React", "Tailwind", "Next.js"],
  },
  {
    id: 3,
    name: "Jane Smith",
    position: "UI/UX Designer",
    image: mentor3,
    courses: ["Figma", "Adobe", "Sketch"],
  },
  {
    id: 4,
    name: "Michael Lee",
    position: "Backend Developer",
    image: mentor4,
    courses: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 5,
    name: "Emily Clark",
    position: "Fullstack Developer",
    image: mentor5,
    courses: ["React", "Node.js", "GraphQL"],
  },
  {
    id: 6,
    name: "David Kim",
    position: "Mobile App Developer",
    image: mentor6,
    courses: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: 7,
    name: "Sophia Turner",
    position: "Product Designer",
    image: mentor4,
    courses: ["Figma", "InVision", "Prototyping"],
  },
  {
    id: 8,
    name: "James Wilson",
    position: "DevOps Engineer",
    image: mentor2,
    courses: ["AWS", "Docker", "Kubernetes"],
  },
];

// Home - Mentors Details
export const mentorsDetailedData = [
  {
    id: 1,
    name: "Ethan Samuel",
    role: "Developer",
    image: mentor1,
    socials: [FaTwitter, FaLinkedinIn, FaFacebookF],
    courses: 15,
    students: 500,
    biography:
      "Our mentors come from a wide range of industries such as technology, business, finance, marketing, and more...",
    mentoringExperience:
      "Beyond professional knowledge, our mentors have strong backgrounds in teaching and mentoring...",
    experience: "12+ years in UI/UX Design and Machine Learning",
    credentials:
      "Ph.D. in UX Research, Certified Machine Learning Professional",
    specialty: "Python, R, Deep Learning Models, Data Visualization",
    mentorshipApproach:
      "James believes in a hands-on learning style, guiding students through practical projects...",
    availableCourses: [
      {
        image: UIUXDesign,
        title: "UI/UX Design Mastery Through Expert Mentorship",
        duration: "2hr 38min",
        lectures: 20,
        mentorImage: UIUXDesign,
        mentorName: "Robert David",
        price: 150,
      },
      {
        image: ProjectManagement,
        title: "Python Programming from Zero to Hero",
        duration: "3hr 38min",
        lectures: 25,
        mentorImage: ProjectManagement,
        mentorName: "Ethan Samuel",
        price: 180,
      },
    ],
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "Data Scientist",
    image: mentor2,
    socials: [FaTwitter, FaLinkedinIn, FaFacebookF],
    courses: 12,
    students: 420,
    biography:
      "Sophia specializes in transforming complex data into actionable insights...",
    mentoringExperience:
      "She has mentored over 400 students in data analysis and machine learning projects...",
    experience: "10+ years in Data Science and Analytics",
    credentials: "M.Sc. in Data Science, Certified Analytics Professional",
    specialty: "Machine Learning, SQL, Python, Tableau",
    mentorshipApproach:
      "Sophia focuses on real-world applications, encouraging students to work on datasets...",
    availableCourses: [
      {
        image: developmentCourse,
        title: "Data Science Bootcamp",
        duration: "4hr 15min",
        lectures: 30,
        mentorImage: developmentCourse,
        mentorName: "Sophia Williams",
        price: 200,
      },
      {
        image: marketingCourse,
        title: "Python for Data Analysis",
        duration: "3hr 50min",
        lectures: 22,
        mentorImage: developmentCourse,
        mentorName: "Sophia Williams",
        price: 180,
      },
    ],
  },
  {
    id: 3,
    name: "Liam Johnson",
    role: "Marketing Expert",
    image: mentor3,
    socials: [FaTwitter, FaLinkedinIn, FaFacebookF],
    courses: 10,
    students: 350,
    biography:
      "Liam has extensive experience in digital marketing and brand management...",
    mentoringExperience:
      "He has guided startups and students to develop effective marketing strategies...",
    experience: "8+ years in Digital Marketing and Brand Strategy",
    credentials: "MBA in Marketing, Google Ads Certified",
    specialty: "SEO, Social Media, Content Marketing",
    mentorshipApproach:
      "Liam emphasizes hands-on projects and case studies to teach marketing strategies...",
    availableCourses: [
      {
        image: marketingCourse,
        title: "Digital Marketing Essentials",
        duration: "3hr 20min",
        lectures: 18,
        mentorImage: marketingCourse,
        mentorName: "Liam Johnson",
        price: 160,
      },
      {
        image: ProjectManagement,
        title: "Brand Strategy Fundamentals",
        duration: "2hr 45min",
        lectures: 15,
        mentorImage: ProjectManagement,
        mentorName: "Liam Johnson",
        price: 140,
      },
    ],
  },
  {
    id: 4,
    name: "Olivia Brown",
    role: "UI/UX Designer",
    image: mentor4,
    socials: [FaTwitter, FaLinkedinIn, FaFacebookF],
    courses: 14,
    students: 480,
    biography:
      "Olivia creates intuitive user experiences and beautiful interfaces...",
    mentoringExperience:
      "She has guided designers through portfolio-building projects and real client work...",
    experience: "11+ years in UI/UX and Product Design",
    credentials: "B.Des in Interaction Design, Adobe Certified Expert",
    specialty: "Figma, Adobe XD, User Research, Wireframing",
    mentorshipApproach:
      "Olivia combines theory and practice, guiding students through interactive projects...",
    availableCourses: [
      {
        image: UIUXDesign,
        title: "UI/UX Design for Beginners",
        duration: "3hr 10min",
        lectures: 25,
        mentorImage: UIUXDesign,
        mentorName: "Olivia Brown",
        price: 170,
      },
      {
        image: developmentCourse,
        title: "Advanced Wireframing Techniques",
        duration: "2hr 55min",
        lectures: 20,
        mentorImage: developmentCourse,
        mentorName: "Olivia Brown",
        price: 150,
      },
    ],
  },
  {
    id: 5,
    name: "Noah Davis",
    role: "Software Engineer",
    image: mentor5,
    socials: [FaTwitter, FaLinkedinIn, FaFacebookF],
    courses: 13,
    students: 470,
    biography:
      "Noah is passionate about building scalable applications and mentoring developers...",
    mentoringExperience:
      "He has helped junior developers master full-stack development projects...",
    experience: "9+ years in Full-Stack Development",
    credentials: "B.Sc in Computer Science, AWS Certified Developer",
    specialty: "React, Node.js, MongoDB",
    mentorshipApproach:
      "Noah encourages hands-on coding challenges and project-based learning...",
    availableCourses: [
      {
        image: ProjectManagement,
        title: "Full-Stack Web Development",
        duration: "4hr 0min",
        lectures: 28,
        mentorImage: ProjectManagement,
        mentorName: "Noah Davis",
        price: 190,
      },
      {
        image: developmentCourse,
        title: "Node.js & Express Fundamentals",
        duration: "3hr 30min",
        lectures: 22,
        mentorImage: developmentCourse,
        mentorName: "Noah Davis",
        price: 170,
      },
    ],
  },
  {
    id: 6,
    name: "Ava Martinez",
    role: "AI Specialist",
    image: mentor6,
    socials: [FaTwitter, FaLinkedinIn, FaFacebookF],
    courses: 11,
    students: 430,
    biography:
      "Ava has hands-on experience in AI and machine learning model deployment...",
    mentoringExperience:
      "She has mentored students on building predictive models and AI pipelines...",
    experience: "7+ years in Artificial Intelligence",
    credentials: "M.Sc in AI, TensorFlow Certified",
    specialty: "Python, TensorFlow, AI Models",
    mentorshipApproach:
      "Ava focuses on practical AI projects, guiding students from concept to deployment...",
    availableCourses: [
      {
        image: developmentCourse,
        title: "AI & Machine Learning Essentials",
        duration: "3hr 40min",
        lectures: 24,
        mentorImage: developmentCourse,
        mentorName: "Ava Martinez",
        price: 180,
      },
      {
        image: UIUXDesign,
        title: "Deep Learning with Python",
        duration: "4hr 10min",
        lectures: 30,
        mentorImage: UIUXDesign,
        mentorName: "Ava Martinez",
        price: 200,
      },
    ],
  },
  {
    id: 7,
    name: "William Garcia",
    role: "Product Manager",
    image: mentor1,
    socials: [FaTwitter, FaLinkedinIn, FaFacebookF],
    courses: 9,
    students: 390,
    biography:
      "William has led multiple product launches in tech companies globally...",
    mentoringExperience:
      "He coaches aspiring product managers in roadmap planning and agile methodologies...",
    experience: "10+ years in Product Management",
    credentials: "MBA in Product Management, Certified Scrum Master",
    specialty: "Agile, Scrum, Product Roadmap",
    mentorshipApproach:
      "William uses real-life case studies and practical exercises to teach product management...",
    availableCourses: [
      {
        image: ProjectManagement,
        title: "Product Management Fundamentals",
        duration: "3hr 25min",
        lectures: 20,
        mentorImage: ProjectManagement,
        mentorName: "William Garcia",
        price: 160,
      },
      {
        image: marketingCourse,
        title: "Agile & Scrum for Beginners",
        duration: "2hr 50min",
        lectures: 18,
        mentorImage: marketingCourse,
        mentorName: "William Garcia",
        price: 150,
      },
    ],
  },
  {
    id: 8,
    name: "Isabella Wilson",
    role: "Cybersecurity Expert",
    image: mentor2,
    socials: [FaTwitter, FaLinkedinIn, FaFacebookF],
    courses: 10,
    students: 410,
    biography:
      "Isabella specializes in protecting systems and data from cyber threats...",
    mentoringExperience:
      "She has trained professionals in cybersecurity best practices and ethical hacking...",
    experience: "8+ years in Cybersecurity",
    credentials: "Certified Ethical Hacker (CEH), CISSP",
    specialty: "Network Security, Ethical Hacking, Risk Assessment",
    mentorshipApproach:
      "Isabella combines theory and hands-on labs to help students understand security challenges...",
    availableCourses: [
      {
        image: developmentCourse,
        title: "Cybersecurity Basics",
        duration: "3hr 35min",
        lectures: 22,
        mentorImage: developmentCourse,
        mentorName: "Isabella Wilson",
        price: 170,
      },
      {
        image: UIUXDesign,
        title: "Ethical Hacking Essentials",
        duration: "4hr 5min",
        lectures: 26,
        mentorImage: UIUXDesign,
        mentorName: "Isabella Wilson",
        price: 190,
      },
    ],
  },
];

// Become in Demand
// Footer icons (for featured/other courses)
export const CourseFooterData = {
  icons: {
    popular,
    lectures,
    timeSpan,
  },
};

// Categories for buttons
export const categoriesData = [
  { id: 1, label: "All Categories", icon: categories },
  { id: 2, label: "Development", icon: developmentCourse },
  { id: 3, label: "UI/UX Design", icon: UIUX },
  { id: 4, label: "Popular", icon: popular },
  { id: 5, label: "Project Management", icon: ProjectManagement },
  { id: 6, label: "Accounting", icon: accounting },
  { id: 7, label: "Marketing", icon: marketingCourse },
];

// Featured course
export const featuredCourse = {
  category: "Development",
  isPopular: true,
  title: "Effective Stakeholder Engagement",
  description:
    "Gain UI design mastery with hands-on expert mentorship, refining your skills through personalized guidance and feedback.",
  image: UIUXDesign,
  lectures: 20,
  duration: "2hr 35min",
  price: "$160.00",
};

// Courses data (9 courses for 3 rows)
export const coursesData = [
  {
    id: 1,
    category: "Marketing",
    title: "Google Ads & Campaigns",
    image: marketing,
    duration: "3hr 35mins",
    lectures: 25,
    price: "$144.00",
  },
  {
    id: 2,
    category: "UI/UX Design",
    title: "Introduction to Design",
    image: UIUXDesign,
    duration: "3hr 35mins",
    lectures: 25,
    price: "$155.00",
  },
  {
    id: 3,
    category: "Development",
    title: "HTML, CSS & Beyond",
    image: development,
    duration: "3hr 35mins",
    lectures: 25,
    price: "$144.00",
  },
  {
    id: 4,
    category: "Marketing",
    title: "Advanced Campaign Strategies",
    image: marketing,
    duration: "4hr 10mins",
    lectures: 30,
    price: "$180.00",
  },
  {
    id: 5,
    category: "Development",
    title: "React & Redux Essentials",
    image: UxResearch,
    duration: "5hr 20mins",
    lectures: 35,
    price: "$220.00",
  },
  {
    id: 6,
    category: "UI/UX Design",
    title: "Figma & Prototyping",
    image: UIUXDesign,
    duration: "3hr 50mins",
    lectures: 28,
    price: "$165.00",
  },
  {
    id: 7,
    category: "Project Management",
    title: "Agile & Scrum Mastery",
    image: UIUXDesign,
    duration: "4hr 00mins",
    lectures: 32,
    price: "$200.00",
  },
  {
    id: 8,
    category: "Accounting",
    title: "Finance for Managers",
    image: FinancialAcc,
    duration: "3hr 45mins",
    lectures: 26,
    price: "$150.00",
  },
  {
    id: 9,
    category: "Development",
    title: "Node.js & Express",
    image: development,
    duration: "5hr 10mins",
    lectures: 34,
    price: "$210.00",
  },
];

// Successful Graduates Section
export const GraduatesData = [
  { img: mentor1, name: "John Doe", position: "Software Engineer" },
  { img: mentor2, name: "Jane Smith", position: "UI/UX Designer" },
  { img: mentor3, name: "Mike Johnson", position: "Fullstack Developer" },
  { img: mentor4, name: "Emily Davis", position: "Data Scientist" },
  { img: mentor5, name: "Sarah Wilson", position: "Product Manager" },
];

// FAQs Section
export const faqsData = [
  {
    question: "Can I Track My Assignments and Grades?",
    answer:
      "Yes, the LMS offers a “Gradebook” where students can view their grades, monitor feedback on assignments, and check upcoming due dates. Instructors can also post grades and comments for each submission.",
  },
  {
    question: "Does the LMS support video lessons and live classes?",
    answer:
      "Yes, the LMS offers a “Gradebook” where students can view their grades, monitor feedback on assignments, and check upcoming due dates. Instructors can also post grades and comments for each submission.",
  },
  {
    question: "How can I communicate with my instructor?",
    answer:
      "Yes, the LMS offers a “Gradebook” where students can view their grades, monitor feedback on assignments, and check upcoming due dates. Instructors can also post grades and comments for each submission.",
  },
  {
    question: "What support is available for students and instructors?",
    answer:
      "Yes, the LMS offers a “Gradebook” where students can view their grades, monitor feedback on assignments, and check upcoming due dates. Instructors can also post grades and comments for each submission.",
  },
  {
    question: "Are there interactive features for students?",
    answer:
      "Yes, the LMS offers a “Gradebook” where students can view their grades, monitor feedback on assignments, and check upcoming due dates.",
  },
];

// Empower Your Journey Section

export const cardsData = [
  {
    img: Empower1a,
    name: "Michael Steiner",
    time: "15 min",
    title: "Top marketing skills to boost your brand engagement and reach",
    desc: "Explore key marketing skills to increase brand engagement and reach, helping you connect with your audience and grow your business effectively.",
    big: true,
  },
  {
    img: Empower1b,
    name: "William H",
    time: "15 min",
    title: "Practical tips to develop UX skills that drive results",
  },
  {
    img: Empower1c,
    name: "Ethan S",
    time: "15 min",
    title: "Boost your career with these core UI Design skills",
  },
  {
    img: Empower2a,
    name: "James R",
    time: "15 min",
    title: "Essential skills for new and experienced developers",
  },
  {
    img: Empower2b,
    name: "James R",
    time: "15 min",
    title: "Top accounting skills for a data-driven world",
  },
];

// --------------------------------------------------------------------------------------
// Course Option starts bellow:

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const teamMembers = [
  {
    name: "Matthew Ryan",
    role: "Product Designer",
    img: mentor1,
    bg: "bg-pink-200",
    socials: [FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram],
  },
  {
    name: "Daniel Joseph",
    role: "Software Engineer",
    img: mentor2,
    bg: "bg-pink-100",
    socials: [FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram],
  },
  {
    name: "Adam Bennett",
    role: "Digital Marketer",
    img: mentor3,
    bg: "bg-yellow-100",
    socials: [FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram],
  },
  {
    name: "James Michael",
    role: "Digital Marketer",
    img: mentor4,
    bg: "bg-amber-50",
    socials: [FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram],
  },
];

// TestimonialCarousel

export const textTestimonials = [
  {
    name: "Samuel John",
    role: "UI/UX Designer",
    text: "This platform transformed my skills! Engaging courses, well-structured, with knowledgeable instructors who simplify complex topics. Covers essentials—highly recommended for growth!",
  },
  {
    name: "Maria Lopez",
    role: "Frontend Developer",
    text: "I love how the platform breaks down tough concepts into easy lessons. It really boosted my career.",
  },
  {
    name: "Emma Wilson",
    role: "Product Designer",
    text: "Amazing experience! The lessons are concise, practical, and easy to follow. My workflow improved instantly.",
  },
  {
    name: "Liam Smith",
    role: "React Developer",
    text: "The interactive projects and clear explanations helped me level up my coding skills fast.",
  },
];

export const imageTestimonials = [
  {
    name: "Robert David",
    role: "UX Designer",
    image: mentor1,
    isVideo: true,
  },
  {
    name: "Daniel Kim",
    role: "UI Designer",
    image: mentor2,
  },
  {
    name: "Sophia Lee",
    role: "Graphic Designer",
    image: mentor3,
  },
  {
    name: "James Brown",
    role: "Fullstack Developer",
    image: mentor4,
  },
];

// Mentor Courses Data
export const MentorsCoursesData = [
  { name: "Robert Jones", position: "UI/UX Designer", img: mentor1 },
  { name: "Emily Carter", position: "Frontend Developer", img: mentor2 },
  { name: "Michael Smith", position: "Backend Developer", img: mentor3 },
  { name: "Sophia Lee", position: "Project Manager", img: mentor4 },
  { name: "James Anderson", position: "Full Stack Developer", img: mentor5 },
  { name: "Olivia Brown", position: "Data Scientist", img: mentor6 },
  { name: "William Harris", position: "DevOps Engineer", img: mentor1 },
  { name: "Ava Martinez", position: "Mobile App Developer", img: mentor2 },
  { name: "Daniel Wilson", position: "AI Engineer", img: mentor3 },
  { name: "Mia Thompson", position: "Cloud Architect", img: mentor4 },
  { name: "Ethan Davis", position: "Security Specialist", img: mentor5 },
  { name: "Isabella White", position: "Product Designer", img: mentor6 },
];

// About us Achievemnts section

export const AchievementsData = [
  { value: "15,000+", label: "Graduate", color: "bg-orange-100" },
  { value: "1,25,000+", label: "Active User", color: "bg-yellow-100" },
  { value: "90%", label: "Course Complete Rate", color: "bg-teal-100" },
  { value: "9,000+", label: "Job Placement", color: "bg-pink-100" },
];

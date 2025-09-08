import {
  heroLeft,
  heroRight,
  LearnFrom,
  arrowRight,
  popular,
  lectures,
  timeSpan,
  mentor1,
  mentor2,
  mentor3,
  mentor4,
  mentor5,
  mentor6,
} from "./images_constants";

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
    title: "Building Futures Together By Empowering Minds",
    subtitle:
      "Join us in shaping a brighter future by nurturing potential, empowering minds, and fostering growth through education and collaboration.",
    learnFromLogo: LearnFrom,
    learnFromText: "Learn From the Top Experts",
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

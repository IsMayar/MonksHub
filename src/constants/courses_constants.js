import {
  UIUXDesign,
  marketing,
  development,
  popular,
} from "./images_constants";

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

export const coursesData = [
  {
    id: 1,
    category: "Marketing",
    title: "Google Adds & Campaigns",
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
];

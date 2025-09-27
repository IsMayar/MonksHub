import React from "react";
import { useParams } from "react-router-dom";
import { DetailedMentorsData } from "../../constants/index";
import MentorDetails from "./MentorDetails";
export default function MentorDetailsPage() {
  const { id } = useParams();
  const mentor = DetailedMentorsData.find((m) => m.id.toString() === id);

  if (!mentor) return <p className="text-center py-20">Mentor not found</p>;

  return <MentorDetails {...mentor} />;
}

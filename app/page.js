import Hero from "./sections/Hero";
import IndividualSteps from "./sections/IndividualSteps";
import MentorCarousal from "./sections/MentorCarousal";
import OrganizationSteps from "./sections/OrganizationSteps";
import WordDictionary from "./sections/WordDictionary";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <main className="my-16">
        <Hero />
        <MentorCarousal />
        <OrganizationSteps />
        <IndividualSteps />
        <WordDictionary />
      </main>
      <Footer />
    </div>
  );
}

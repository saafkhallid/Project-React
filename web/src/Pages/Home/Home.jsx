import React from "react";
import Navbar from "../../Navbar";
import Heroheader from "../../Heroheader";
import Newsletter from "../../Newsletter";
import LearnSections from "../../LearnSections";
import Lead from "../../lead";
import Boxes from "../../Boxes";
import Question from "../../Question";
import Instructors from "../../instructors";
import Footer from "../../Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroheader />
      <Newsletter />
      <Boxes />
      <LearnSections />
      <Lead />
      <Question />
      <Instructors />
      <Footer />
    </div>
  );
};

export default Home;

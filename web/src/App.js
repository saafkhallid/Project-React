import Navbar from "./Navbar";
import Heroheader from "./Heroheader";
import Newsletter from "./Newsletter";
import LearnSections from "./LearnSections";
import Lead from "./lead";
import Boxes from "./Boxes";
import Question from "./Question";
import Instructors from "./instructors";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Heroheader />
        <Newsletter />
        <Boxes />
        <LearnSections />
        <Lead />
        <Question />
        <Instructors />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

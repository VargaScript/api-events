import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carrousel from "./components/Carrousel/Carrousel";
import EventContainer from "./components/Events/EventContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Navbar />
      <Carrousel />
      <EventContainer />
      <Footer />
    </div>
  );
}

export default App;

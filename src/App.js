import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar title="TextUtils" />
      {/* <div className="container my-3">
        <TextForm heading="Enter The Text to analyse" />
      </div> */}
      <About />
    </>
  );
}

export default App;

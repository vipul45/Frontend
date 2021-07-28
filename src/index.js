import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import Header from "components/Header";
import Footer from "components/Footer";

const App = () => (
  <Router>
    <Header />
    <Routes />
    <Footer />
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

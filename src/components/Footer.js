import React from "react";
import "styles/footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <h1>Translater</h1>
      <h2> Copyright &copy; 2020 All Rights Reserved</h2>
      <div className="footer__links">
        <Link to="/terms">Legal Stuff</Link>
        <Link to="/policy">Privacy Policy</Link>
      </div>
    </footer>
  );
}

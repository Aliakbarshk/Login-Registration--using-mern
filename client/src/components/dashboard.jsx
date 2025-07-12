import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div
        className="bg-white p-5 rounded shadow text-center"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h1 className="mb-3 text-primary">👋 Welcome!</h1>
        <p className="lead mb-4">
          You’ve successfully logged in to your dashboard.
        </p>

        {/* 🔗 Social Links */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} color="#333" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} color="#0A66C2" />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope size={28} color="#BB001B" />
          </a>
        </div>

        <Link to="/register" className="btn btn-outline-primary">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import { BiSearchAlt2 } from "react-icons/bi";

export const Header = () => {
  return (
    <div>
      <a href="/home" className="netflix">
        LikeNetflix
      </a>
      <a href="/deatils">
        <BiSearchAlt2 style={{ fontSize: "270%", color: "white" }} />
      </a>
    </div>
  );
};

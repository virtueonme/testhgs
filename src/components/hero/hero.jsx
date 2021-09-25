import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/hanguksal_characters.jpg';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">안녕하세요!</h1>
            <h1 className="weight800 font60">
              Let's Learn Korean with Us ^^
            </h1>
            <p className="font12">
              Hanguksal adalah komunitas belajar Bahasa Korea di Indonesia. Yuk gabung!
            </p>
            <Button label="JOIN DONG" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;

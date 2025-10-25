import React from 'react';
import "./about.css";
import { SiAdguard } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <section className="about container" id='about'>
        <div className="about-img">
            <img src="/about.png" alt="" />
        </div>
        <div className="about-data">
            <h2 className="heading">
                Why <span className="gradient-text">Choose</span> Us?
            </h2>
            <p>Our products are of the highest quality, designed to suit all your activities — making us the perfect choice for you.</p>
            <div className="about-box-data">
            <div className="about-box">
                <span className="about-icon">
                    <SiAdguard />
                </span>
                <h3 className="box-title">Longevity</h3>
                <p>True impact happens when the problems you solve are meaningful and your solutions are honest.</p>
            </div>
             <div className="about-box">
                <span className="about-icon">
                    <AiFillStar />
                </span>
                <h3 className="box-title">Heritage</h3>
                <p>We are pioneers, continually exploring new ways of living and working, just as we have done before.</p>
            </div>
             <div className="about-box">
                <span className="about-icon">
                    <BsCheckLg />
                </span>
                <h3 className="box-title">Quality</h3>
                <p>Our manufacturing facilities use the best sustainable materials and follow world-class standards to ensure quality.</p>
            </div>
                 <div className="about-box">
                <span className="about-icon">
                    <IoPeopleSharp />
                </span>
                <h3 className="box-title">Community</h3>
                <p>We always pay attention to our users and have a community that constantly supports us..</p>
            </div>
        </div>
        </div>
        
      </section>
    </div>
  );
};

export default About; 


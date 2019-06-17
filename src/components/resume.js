import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Tiago Mendes</h2>
            <h4 style={{ color: "grey" }}>Software Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              First of all, I must say that I am passionate about the world of
              technology. As a programmer I have a few months of programming
              experience, but i have been able to adapt fast and quite well to
              the projects that i participated in!   
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Adress</h5>
            <p>Braga, PT </p>
            <h5>Phone</h5>
            <p>+351 914243823</p>
            <h5>Email</h5>
            <p>tiagoandrem@hotmail.com</p>
            <h5>Web</h5>
            <p>www.tiagoandrem.pt</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2019}
              schoolName="IEFP - Mazagão"
              schoolDescription="Software Developer"
            />
            <Education
              startYear={2008}
              endYear={2010}
              schoolName="ISCAP"
              schoolDescription="Marketing and administration"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="LudusCristalTec - Game Developer"
              jobDescription="Luck games developer, for the Italian and Spanish market.
               Use of custom software based on C++ and c#  for the development of bonus games engine for slot machines.  Use of Photoshop to manipulate the textures.
               "
            />

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Edigma - Software Developer (Internship)"
              jobDescription="During my internship, I developed a 3D VR game, that was played by the visitors of the QSP Summit 2019 on the Edigma and Displax event space.
              I developed all the mechanics of the game, all the programming was done in C # using Visual Studio and Unity. I also been part of the development team who created the solution to the implementation of FTP Client using a TCP connection socket, to connect an external device that interacted with the game.
              "
            />

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Freelancer - Android"
              jobDescription="As a freelancer I am developing an application that is a clone of Uber app, using Android Studio.
              The programming languages used on this project are Java and JS for ﬁrebase functions. For database I used google's NoSQL Firebase service. I used the Google Maps API for the location services. I used Paypal API for payments and Node.Js for the server connection.
              "
            />
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Freelancer - AR app"
              jobDescription="I created a small AR app that recognizes an object and shows a 3D animation over it.
              I have used Unity and Visual Studio to create the scripts with C#. I have used Vuforia SDK for Image Targets ."
            />

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Freelancer - Console mode marketplace"
              jobDescription="For a school project I developed an MVP using Java, it was a classiﬁed marketplace with an innovative integrated service. 
              I made de UML of the project. The project was made exclusivly in Java. Used MYSQL to database related purposes.
              "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills </h2>
            <Skills skill="Java----------->" progress={30} />

            <Skills skill="C#------------->" progress={35} />

            <Skills skill="C&C++------->" progress={20} />

            <Skills skill=".NET---------->" progress={30} />

            <Skills skill="JavaScript--->" progress={20} />

            <Skills skill="HTML/CSS-->" progress={20} />

            <Skills skill="React--------->" progress={20} />

            <Skills skill="NodeJs------->" progress={20} />

            <Skills skill="FireBase----->" progress={50} />

            <Skills skill="SQL----------->" progress={30} />

            <Skills skill="MYSQL------>" progress={30} />

            <Skills skill="Vuforia------->" progress={40} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

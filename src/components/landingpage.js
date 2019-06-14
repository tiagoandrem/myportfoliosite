import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ with: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Software Developer</h1>
              <hr />

              <p>
                {" "}
                Java | C# | C&C++ | .NET | JavaScript | HTML/CSS | Boostrap |
                React | NodeJS | Google Firebase | SQL | MySQL | Android | Games{" "}
              </p>
              <div className="social-links">
                {/*Linkedin*/}
                <a
                  href="https://www.linkedin.com/in/tiago-mendes-27946827/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*GitHub*/}
                <a
                  href="https://github.com/tiagoandrem"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;

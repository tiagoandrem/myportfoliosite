import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="project-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://unity3d.com/files/images/ogimg.jpg) center/ cover"
              }}
            />
            <CardText>My Unity3D Projects</CardText>
            <CardActions border>
              <a href="https://github.com/tiagoandrem" class="button">
                {" "}
                GitHub
              </a>
              <a href="https://flic.kr/s/aHsmEfGMtV" class="button">
                {" "}
                Media
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="project-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.blugraphic.com/wp-content/uploads/2013/06/Android-Logo-4.jpg) center/ cover"
              }}
            />
            <CardText>My Android Apps</CardText>
            <CardActions border>
              <a href="https://github.com/tiagoandrem" class="button">
                {" "}
                GitHub
              </a>
              <a href="https://flic.kr/s/aHsmEfJMV1" class="button">
                {" "}
                Media
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="project-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center/ cover"
              }}
            />
            <CardText>My SLAM Projects</CardText>
            <CardActions border>
              <a href="https://github.com/tiagoandrem" class="button">
                {" "}
                GitHub
              </a>
              <a href="https://flic.kr/s/aHsmEfHK84" class="button">
                {" "}
                Media
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="project-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://docs.unity3d.com/uploads/Main/vuforia_logo.png) center/ cover"
              }}
            />
            <CardText>My Vuforia Projects</CardText>
            <CardActions border>
              <a href="https://github.com/tiagoandrem" class="button">
                {" "}
                GitHub
              </a>
              <a href="https://flic.kr/s/aHsmEfHK84" class="button">
                {" "}
                Media
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div className="project-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center/ cover"
              }}
            />
            <CardText>My React Projects</CardText>
            <CardActions border>
              <a href="https://github.com/tiagoandrem" class="button">
                {" "}
                GitHub
              </a>
              <a href="https://flic.kr/p/2gdYqnN" class="button">
                {" "}
                Media
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Unity3D</Tab>
          <Tab>Android</Tab>
          <Tab>Slam</Tab>
          <Tab>Vuforia</Tab>
          <Tab>React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

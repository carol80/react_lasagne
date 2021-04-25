import React from "react";
import { Button, Grid } from "@material-ui/core"
import { GiInfinity,GiClockwork } from "react-icons/gi"
import { DiDocker,DiOpensource } from "react-icons/di"
import { VscExpandAll } from "react-icons/vsc"
import { AiTwotoneApi,AiOutlineWhatsApp } from "react-icons/ai"
import { BiDesktop } from "react-icons/bi";

import { useHistory } from "react-router-dom";
import Header from "./Header";
import { PieChart,WordChart,TeamChart } from "./Charts.js"
import TechStack from "./Techstack"
import Footer from "./Footer"
import start_image from "./images/IT_Service_Management.png"
import research_paper from "./images/BE_Research_Paper.pdf"
// import FadeIn from "../utils/FadeIn";

import "./Landing.css";

const Landing = () => {
  let history = useHistory();

  return (
    <div className="landing">
      <Header />
      <div className="section-content rowC section1" paddingbottom="0px">
      <Grid container>
          <Grid style={{ paddingleft:"0px", textAlign: "left", color: "white" }} item md={6} xs={12}>
            <br/>
            <button style={{ background: "linear-gradient(90deg, rgba(29, 36, 63, 1) 5%, rgba(35, 46, 79, 1) 96%)", borderRadius: "50px", padding: "15px", color: "white", fontSize: "15px" }}>
              BE Project
            </button>
            <br/>
            <h1 style={{ padding: '10px', fontSize: '50px' }}>Virtual Assistant</h1>
            <h3 style={{ padding: '10px' }}>To configure this component to work with your existing app, you’ll need to import and call initImages, passing an object for configuration. imageResolver is where you will take the processed image object with calculated dimensions and generate a URL that conforms to how your CMS resizes images.</h3>
            <br/>
            <Button variant="contained" color="primary" onClick={() => history.push("/dashboard")}>
              Go to Console
            </Button>
            &nbsp;&nbsp;&nbsp; 
            <Button variant="outlined" color="primary" href="https://github.com/carol80/react_lasagne">
              Github
            </Button>
            &nbsp;&nbsp;&nbsp; 
            <Button variant="outlined" color="primary" href={ research_paper }>
              Research Paper
            </Button>
          </Grid>
          <Grid className="inner-content" style={{ paddingLeft : "0px" }} item md={6} xs={12}>
            <img src={ start_image } className="start-img" alt="landing_image" />
          </Grid>
        </Grid>
      </div>


      <div className="section-content section3">
        <div className="inner-content">
          <h1 className="Headers">ABOUT THE PROJECT</h1>
          <br/>
          <Grid container>
            <Grid item md={6} sm={12} xs={12} style={{ paddingLeft : "20px", textAlign: "left" }}>
              <h1 style={{ color: "lightgreen" }}>Virtual assistance using question generation/ Answering</h1>
              <h4>(Abstract)</h4>
              <h3>Question Generation and Answering, being a challenging task, has gained considerable attention in the past years. Even though significant milestones are achieved, when used in a real-time system, it needs indispensable optimization. This paper proposes an approach to developing an online platform that facilitates traditional processes by introducing a virtual assistant to support educational programs by asking questions in natural language and getting an answer without reading the internal documents relevant to the problem. The system put forward is a cloud-based solution that automatically generates questions and provides sample answers from a given document(s). The entire architecture integrated into the WhatsApp interface with Twilio API's help offers a user-friendly experience.</h3>
            </Grid>
            <Grid item md={6} sm={12} style={{ paddingLeft: '10px'}}>
              <PieChart />
            </Grid>
          </Grid>
        </div>
      </div>


      <div className="section-content section2" style={{ background: "#111"}}>
          <h1 className="Headers">FEATURES</h1>
          <Grid container>
            <Grid className="box" item lg={3} md={4} sm={6} xs={12}>
              <AiOutlineWhatsApp size="90px" color="blue" />
              <h2>WhatsApp Interface</h2>
              <h5>It's a fast, simple, and convenient way to chat, share photos and videos, send and receive documents, and engage in private, secure conversations.</h5>
              </Grid>
            <Grid className="box" item lg={3} md={4} sm={6} xs={12}>
              <VscExpandAll size="90px" color="blue"/>
              <h2>Scalable Architecture</h2>
              <h5>An architecture that can scale up to meet increased work loads.</h5>
              </Grid>
            <Grid className="box" item lg={3} md={4} sm={6} xs={12}>
              <DiDocker size="90px" color="blue" />
              <h2>Dockerization of Server Script</h2>
              <h5>Automates the deployment of software applications inside containers by providing an additional layer of abstraction and automation of OS-level virtualization.</h5>
              </Grid>
            <Grid className="box" item lg={3} md={4} sm={6} xs={12}>
              <BiDesktop size="90px" color="blue"/>
              <h2>Responsive Web App Development</h2>
              <h5>Designs that accommodate different screen sizes, so the content looks great on any screen size.</h5>
              </Grid>
            <Grid className="box" item lg={3} md={4} sm={6} xs={12}>
              <AiTwotoneApi size="90px" color="blue" />
              <h2>Use of Inhouse Developed APIs</h2>
              <h5>Rather than being dependent of some thrid party library, we have Inhouse custom APIs.</h5>
              </Grid>
            <Grid className="box" item lg={3} md={4} sm={6} xs={12}>
              <DiOpensource size="90px" color="blue" />
              <h2>Use of OpenSource Technologies</h2>
              <h5>Open source is generally much more cost-effective than a proprietary solution. They also give enterprises the ability to start small and scale.</h5>
              </Grid>
            <Grid className="box" item lg={3} md={4} sm={6} xs={12}>
              <GiInfinity size="90px" color="blue"/>
              <h2>Continuous Integration and Deployment Pipeline</h2>
              <h5>Monitoring and automating to improve the process of application development, integration, testing phases, delivery and deployment.</h5>
              </Grid>
            <Grid className="box" item lg={3} md={4} sm={6} xs={12}>
              <GiClockwork size="90px" color="blue" />
              <h2>High Availability and Failover Architecture </h2>
              <h5>The system instantly redirects requests to a backup system in case of a failure, ensuring maximum systems availability.</h5>
              </Grid>
          </Grid>
      </div>

      {/* <div className="section-content section4" style={{ background: "#111" }}>
      <h1 className="Headers">Prepration of the Database</h1>
      <Grid container>
        <Grid item md={6} sm={12}>
          <WorldMap />
        </Grid>
        <Grid style={{ textAlign: 'left', color: '#2563ff' }} item md={6} sm={12}>
          <h1 style={{ padding: '0px 15px' }}>CCTV Cameras at<br></br>various Locations.</h1>
          <h3 style={{ padding: '0px 15px', color: 'white' }}>To configure this component to work with your existing app, you’ll need to import and call initImages, passing an object for configuration. imageResolver is where you will take the processed image object with calculated dimensions and generate a URL that conforms to how your CMS resizes images.<br></br>The example below connects to a local instance of image-steam and will resize image based on the users viewport and pixel density.</h3>
        </Grid>
      </Grid>
      </div> */}

    <div className="section-content">
      <WordChart />
    </div>


      <div className="section-content section5" style={{ padding: "0px", background: "#111" }}>
        <div className="inner-content">
          <div className="inner-content">
            <h1 className="Headers">TECH-STACK</h1>
            <TechStack />
          </div>
        </div>
      </div>


      <div className="section-content section4" style={{ padding: "0px", background: "#111" }}>
        <div className="inner-content">
          <div className="inner-content">
            <h1 className="Headers">OUR TEAM</h1>
            <TeamChart />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
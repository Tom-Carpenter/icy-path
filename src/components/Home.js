import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Home(){
    return (
        <Jumbotron>
                <Row sm={12} xs={12}>
            <Col sm={3} xs={0}></Col>
            <Col sm={6}>
            <h1 className="header">A bit about us</h1>
            <p>
            Here at Icy Path, we are striving to develop a game to challenge people of all ages. It tells a story of a penguin named "Poggers" and his constant struggle to save his young child.
 
 With big sheets of ice, getting around can be tough as once poggers is moving he can't stop or change direction until he hits something. Our game gives the power to the people, challenge your mind and work out where to place boulders to help Poggers get to his chick. 
  
 In the long run we don't just want to make a game for the people, we want to make a community where people can compete against each other on the leaderboards and get involved in community content and posts. If you are as excited as we are then go and follow <a href="https://mobile.twitter.com/Poggers69078986">Poggers</a> and give him some love, he needs it.
            </p>
            <h1 className="header">Meet the team</h1>
            <h2>Tom</h2>
            <p>Hi, my name is Tom, I am currently a DevOps/Platform engineer at Capgemini. I am also on the degree apprenticeship programme with Aston. I love the tech I work with, mostly Kubernetes, Terraform and AWS. Outside of work I like keeping fit but also going to the pub.
            </p>
            <h2>Norbert</h2>
            <p>
            Hi, I'm a .Net Developer at Pinewood working predominantly in Azure on the upkeep and development of 3 car sale websites, mostly in C#, HTML, CSS, JavaScript and Knockout. Outside of work I enjoy to run, go to the gym and play video games.
            </p>
            <h2>Ben</h2>
            <p>Ben here, I am an automation engineer at Capgemini, in my free time I create applications and games to support the community as well as having a passion for Game development I also take great enjoyment in playing video games. My work involved working with Java, PHP, SQL. 
            </p>
            <h2>Max</h2>
            <p>Hi, my name is Max. I am an Operations Analyst at Capgemini. I am on the degree apprenticeship programme with Aston University. I am enthusiastic about applying my technical knowledge to all projects I work on. In my free time I play football often and enjoy going down to the beach.</p>
            <h2>Daniel</h2>
            <p>
            Hi, my name is Dan and I'm a trainee software engineer who works for GoCompare and studies at Aston University. I mostly work with C#, Typescript & React. I enjoy problem solving, going to the gym and playing video games.
            </p>
            <h2>Nabeel</h2>
            <p>
            Hi, my name is Nabeel. I'm currently an Integration Engineer at Capgemini. I help to build and manage the integration of Azure cloud systems. Outside of work, i'm an avid swimmer and gym goer.
            </p>
            <h2>Joe</h2>
            <p>Hi, I'm Joe! I'm an app developer at Pinewood where we develop our apps for all platforms using Xamarin, predominantly in C#. Outside of work I enjoy playing guitar and gaming, especially in VR.</p>
            <p className="header">
                <a href='/latest'>What's the latest?</a>
            </p>
            </Col>
            </Row>
            
        </Jumbotron>
    );
}
export default Home;
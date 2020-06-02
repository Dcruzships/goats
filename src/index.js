import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo1_64.png'; // Tell webpack this JS file uses this image
import './index.scss';
import { Anchor, Box, Grommet, Header, Main, Paragraph, Heading, Nav, Image, Carousel, Video } from "grommet";
import { grommet } from "grommet/themes";

import Scroll from "react-scroll";
let scroll = Scroll.animateScroll;

const items = [
  { label: "About", href: "aboutPage" },
  { label: "Animals", href: "#" },
  { label: "Stories", href: "#" },
  { label: "Contact", href: "#" }
];

function App()
{
  return(
    <Grommet theme={grommet}>
      <Box height="100vh">
        <Navbar />
        <Slides />
      </Box>
      <Box height="100vh" pad="large" id="aboutPage" name="aboutPage">
        <About />
      </Box>
    </Grommet>
  );
}

class Navbar extends React.Component
{
  handleScroll(dest) {
    scroll.scrollTo(1000);
  }

  render() {
    return(
      <Header background="light-4" pad="medium" id="header" height="12%">
        <Box direction="row" align="center" gap="medium">
          <Anchor href="https://github.com/dcruzships" target="_blank"><Image src={logo} alt="" /></Anchor>
          <Anchor color="black" href="https://github.com/dcruzships" target="_blank">
            Day 6 Farm
          </Anchor>
        </Box>

        <Nav direction="row">
          {items.map(item => (
            <Anchor onClick={() => this.handleScroll(item.href)} label={item.label} key={item.label} />
          ))}
        </Nav>
      </Header>
    )
  }
}

const Slides = () => {
  return(
    <Box align="center" pad="small" height="88%">
      <Carousel fill>
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/home/goats1.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/home/goats7.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/home/goats3.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/home/goats8.png" />
      </Carousel>
    </Box>
  )
}

const About = () => {
  return(
    <Box>
      <Heading>About</Heading>
      <Paragraph>Something about something</Paragraph>
      <Video controls={false} fit="contain" alignSelf="start" loop={true} autoPlay={true} mute={true}>
        <source key="video" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/goatsVid2.mp4" type="video/mp4" />
      </Video>
      <Paragraph>More things</Paragraph>
      <Paragraph>More things</Paragraph>
      <Paragraph>More things</Paragraph>
    </Box>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo1_64.png'; // Tell webpack this JS file uses this image
import './index.scss';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Anchor, Box, Grommet, Header, Main, Paragraph, Heading, Nav, Image, Carousel, Video, Distribution, Text } from "grommet";
import { grommet } from "grommet/themes";

const items = [
  { label: "About", href: "#about" },
  { label: "Animals", href: "#" },
  { label: "Stories", href: "#" },
  { label: "Contact", href: "#" }
];

function App()
{
  return(
    <Grommet theme={grommet} full>
      <Navbar />
      <Slides />
      <About />
    </Grommet>
  );
}

// function scrollTo() {
//   scroller.scrollTo('scroll-to-element',
//   {
//     duration: 800,
//     delay: 0,
//     smooth: 'easeInOutQuart'
//   })
// }

const scrollTo = () => {
  // scroller.scrollTo("about",
  // {
  //   duration: 800,
  //   delay: 0,
  //   smooth: 'easeInOutQuart'
  // })
}

const Navbar = () =>
{
  return(
    <Header background="light-4" pad="medium" height="12%">
      <Box direction="row" align="center" gap="medium">
        <Anchor href="https://github.com/dcruzships" target="_blank"><Image src={logo} alt="" /></Anchor>
        <Anchor color="black" href="https://github.com/dcruzships" target="_blank">
          Day 6 Farm
        </Anchor>
      </Box>

      <Nav direction="row">
        {items.map(item => (
          <Anchor to="#about" onClick={scrollTo()} label={item.label} key={item.label} />
        ))}
      </Nav>
    </Header>
  )
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
    <Main pad="large" id="about" name="about">
      <Heading>Something</Heading>
      <Paragraph>Something about something</Paragraph>
      <Video controls="over" alignSelf="start" loop={true} autoPlay={true} mute={true} width="640px" height="360px">
        <source key="video" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/goatsVid1.mp4" type="video/mp4" />
      </Video>
      <Paragraph>More things</Paragraph>
    </Main>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

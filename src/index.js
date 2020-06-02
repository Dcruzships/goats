import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo1_64.png'; // Tell webpack this JS file uses this image
import './index.scss';
import { Anchor, Box, Grommet, Header, Nav, Clock, Image, Carousel } from "grommet";
import { grommet } from "grommet/themes";

const items = [
  { label: "About", href: "#" },
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
    </Grommet>
  );
}

function Navbar() {
  return(
    <Header background="light-3" pad="small" height="10%">
      <Box direction="row" align="center" gap="small">
        <Anchor href="https://github.com/dcruzships" target="_blank"><Image src={logo} alt="" /></Anchor>
        <Anchor color="black" href="https://github.com/dcruzships" target="_blank">
          Day 6 Farm
        </Anchor>
        <Clock type="digital" />
      </Box>

      <Nav direction="row">
        {items.map(item => (
          <Anchor href={item.href} label={item.label} key={item.label} />
        ))}
      </Nav>
    </Header>
  )
}

const Slides = () => {
  return(
    <Box align="center" pad="none" height="90%">
      <Carousel fill>
        <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
        <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
        <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
      </Carousel>
    </Box>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

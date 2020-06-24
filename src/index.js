import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo1_64.png'; // Tell webpack this JS file uses this image
import './index.scss';
import { Anchor, Box, Grommet, Grid, Header, Paragraph, Heading, Nav, Image, Carousel, Video, Collapsible, Text } from "grommet";
import { grommet } from "grommet/themes";

var Scroll   = require('react-scroll');
var scroller = Scroll.scroller;

const items = [
  { label: "About", href: "aboutPage" },
  { label: "Animals", href: "animalsPage" },
  { label: "Stories", href: "storiesPage" },
  { label: "Contact", href: "contactPage" }
];

class App extends React.Component
{
  render() {
    return(
      <Grommet theme={grommet}>
        <Box height="100vh">
          <Navbar />
          <Slides />
        </Box>
        <Box height="100vh" pad="large" id="aboutPage" name="aboutPage" background="neutral-1">
          <About />
        </Box>
        <Box height="100vh" pad="large" id="animalsPage" name="animalsPage">
          <Animals />
        </Box>
      </Grommet>
    );
  }
}

class Navbar extends React.Component
{
  handleScroll = (dest) => {
    scroller.scrollTo(dest, {
      duration: 1500,
      smooth: true,
    });

    console.log(dest);
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

const Animals = () => {
  return(
    <Carousel fill>
      <GoatGrid name1="goat1" name2="goat2" name3="goat3"/>
      <GoatGrid name1="goat4" name2="goat5" name3="goat6"/>
      <GoatGrid name1="goat7" name2="goat8" name3="goat9"/>
    </Carousel>
  )
}

const GoatGrid = (props) => {
  return(
    <Grid
      rows={['xxlarge']}
      columns={['1/3', '1/3', '1/3']}
      gap="small"
      areas={[
        { name: props.name1, start: [0, 0], end: [1, 0] },
        { name: props.name2, start: [1, 0], end: [2, 0] },
        { name: props.name3, start: [2, 0], end: [3, 0] },
      ]}
    >
      <GoatColumn name={props.name1} />
      <GoatColumn name={props.name2} />
      <Box gridArea={props.name3} background="light-2"><Paragraph>{props.name3}</Paragraph></Box>
    </Grid>
  )
}

const GoatColumn = (props) => {
  const [open, setOpen] = useState(false);

  return(
    <Box gridArea={props.name} background="brand" onClick={() => alert("Submenu item 1 selected")} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Collapsible open={open} {...props}>
        <Paragraph>test</Paragraph>
        <Box
          background="light-2"
          round="medium"
          pad="medium"
          align="center"
          justify="center"
        >
          <Text>This is a box inside a Collapsible component</Text>
        </Box>
      </Collapsible>
      <Paragraph>{props.name}</Paragraph>
    </Box>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo1_64.png'; // Tell webpack this JS file uses this image
import './index.scss';
import { Anchor, Box, Grommet, Grid, Header, Paragraph, Heading, Nav, Image, Carousel, Video, Collapsible, Text, Footer, Accordion, AccordionPanel, Tabs, Tab, Table, TableHeader, TableRow, TableCell, TableBody } from "grommet";
import { base } from "grommet/themes";
import ReactAudioPlayer from 'react-audio-player';

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
      <Grommet theme={base}>
        <Box height="100vh" id="home" name="home">
          <Navbar />
          <Slides />
        </Box>
        <About />
        <Box height="100vh" pad="large" id="animals" name="animals" focusIndicator={false}>
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
  }

  render() {
    return(
      <Header background="light-4" pad="medium" id="header" height="12%" size="small">
        <Box direction="row" align="center" gap="medium">
          <Anchor href="https://github.com/dcruzships" target="_blank"><Image src={logo} alt="" /></Anchor>
          <Anchor color="black" href="https://github.com/dcruzships" target="_blank">
            Day Six Farm
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
    <Box align="center" pad="none" height="88%" id="mainSlides">
      <Carousel fill play={5000} controls="selectors">
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/home/goats1.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/home/goats7.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/home/goats3.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/home/goats8.png" />
      </Carousel>
    </Box>
  )
}

const About = () => {
  const [trackNum, setTrackNum] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  function playTrack(label)
  {
    document.querySelector("#player").play();

    // let player = document.querySelector("#player");
    // let playerSource = document.querySelector("#playerSource");
    // setIsPlaying(true);
    // setTrackNum(label);
    // playerSource.src = `./assets/audio/memoir${label}.ogg`;
    // document.querySelector("#player").play();
  }

  return(
    <Box pad="medium" id="aboutPage" name="aboutPage" background="neutral-3">
      <Tabs alignSelf="center" pad="small">
        <Tab title="About">
          <Grid
            rows={['medium', 'medium']}
            columns={['small', 'large']}
            gap="small"
            areas={[
              { name: 'text', start: [0, 0], end: [1, 0] },
              { name: 'bible', start: [0, 1], end: [0, 1] },
              { name: 'vid', start: [1, 1], end: [1, 1] },
            ]}
            pad="large"
          >
            <Box gridArea="text" pad="medium" background="light-2">
              <Heading level="1">About</Heading>
              <Paragraph fill margin="small">
              Day Six Farm is a loving home for 32 all natural, well-fed goats and 12 adorable mallard ducks. Lori Ferell opened her farm with 15 goats in 2018 and has since doubled her herd thanks to her incredible caring nature and wonderful heart. Spending most of her life as a city girl, Lori has dreamed of having a farm and raising animals since childhood. At first sight, an immediate feeling of peace came over Lori’s life; there was something ever present, even holy in the precious lives as they scratched their horns on trees, frolicking in the grass. The name was chosen to give thanks and honor back to God.</Paragraph>
            </Box>
            <Box gridArea="bible" background="light-2" pad="small" alignSelf="center">
              <Heading level="5" alignSelf="center"><b><u>Genesis 1:24-25</u></b></Heading>
              <Paragraph size="small" alignSelf="center" textAlign="center">“And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.
              And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.”</Paragraph>
            </Box>
            <Box gridArea="vid" background="light-2" pad="medium">
              <Video controls={false} loop={true} autoPlay={true} mute={true} fit={true}>
                <source key="video" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/goatsVid2.mp4" type="video/mp4" />
              </Video>
            </Box>
          </Grid>
        </Tab>
        <Tab title="Goats">
          <Grid
            rows={['medium', 'medium']}
            columns={['small', 'small', 'small', 'small', 'small']}
            gap="small"
            areas={[
              { name: 'goat0', start: [0, 0], end: [0, 0] },
              { name: 'goat1', start: [1, 0], end: [1, 0] },
              { name: 'goat2', start: [2, 0], end: [2, 0] },
              { name: 'goat3', start: [3, 0], end: [3, 0] },
              { name: 'goat4', start: [4, 0], end: [4, 0] },
              { name: 'goat5', start: [0, 1], end: [0, 1] },
              { name: 'goat6', start: [1, 1], end: [1, 1] },
              { name: 'goat7', start: [2, 1], end: [2, 1] },
              { name: 'goat8', start: [3, 1], end: [3, 1] },
              { name: 'goat9', start: [4, 1], end: [4, 1] },
            ]}
            pad="large"
          >
            <Box gridArea="goat0" background="light-2" pad="small">

            </Box>
            <Box gridArea="goat1" background="light-2" pad="small">

            </Box>
            <Box gridArea="goat2" background="light-2" pad="small">

            </Box>
            <Box gridArea="goat3" background="light-2" pad="small">

            </Box>
            <Box gridArea="goat4" background="light-2" pad="small">

            </Box>
            <Box gridArea="goat5" background="light-2" pad="small">

            </Box>
            <Box gridArea="goat6" background="light-2" pad="small">

            </Box>
            <Box gridArea="goat7" background="light-2" pad="small">

            </Box>
            <Box gridArea="goat8" background="light-2" pad="small">

            </Box>
            <Box gridArea="goat9" background="light-2" pad="small">

            </Box>
          </Grid>
        </Tab>
        <Tab title="Audio">
          <Box background="light-2" pad="large" margin="large">
            <Heading level="2">Recordings</Heading>
            <Accordion pad="medium">
              <AccordionPanel label="Panel 1" width="xlarge" onClick={() => playTrack(1)}>
                <Box pad="medium" background="light-2">
                  <Text>One</Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Panel 2" width="xlarge" onClick={() => playTrack(2)}>
                <Box pad="medium" background="light-2">
                  <Text>Two</Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Panel 3" width="xlarge" onClick={() => playTrack(3)}>
                <Box pad="medium" background="light-2">
                  <Text>Three</Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Panel 4" width="xlarge" onClick={() => playTrack(4)}>
                <Box pad="medium" background="light-2">
                  <Text>Four</Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Panel 5" width="xlarge" onClick={() => playTrack(5)}>
                <Box pad="medium" background="light-2">
                  <Text>Five</Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Panel 6" width="xlarge" onClick={() => playTrack(6)}>
                <Box pad="medium" background="light-2">
                  <Text>Six</Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Panel 7" width="xlarge" onClick={() => playTrack(7)}>
                <Box pad="medium" background="light-2">
                  <Text>Seven</Text>
                </Box>
              </AccordionPanel>
            </Accordion>
            <ReactAudioPlayer
              src="./assets/audio/memoir1.ogg"
              autoPlay
              controls
            />
          </Box>
        </Tab>
        <Tab title="FAQ">
          <Box background="light-2" pad="large" margin="large">
            <Table pad="medium">
              <TableHeader>
                <TableRow>
                  <TableCell scope="col" border="bottom">
                  </TableCell>
                  <TableCell scope="col" border="bottom">
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell scope="row">
                    <strong>Q1</strong>
                  </TableCell>
                  <TableCell>Coconut</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <strong>Chris</strong>
                  </TableCell>
                  <TableCell>Watermelon</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Tab>
      </Tabs>
    </Box>
  )
}

const Animals = (props) => {
  const [panelNum, setPanelNum] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  function handleClick(e)
  {
    // e.preventDefault();
    // let width = window.innerWidth;
    // width = width - 101;
    // setMouseX(width / e.screenX);
    // if(mouseX < 1.6)
    // {
    //   setPanelNum(2);
    // }
    // else if(mouseX < 2.1)
    // {
    //   setPanelNum(1);
    // }
    // else
    // {
    //   setPanelNum(0);
    // }
    //
    // console.log(panelNum);
  }

  return(
    <Carousel fill controls="arrows" onClick={handleClick}>
      <GoatGrid panel={panelNum} name1="goat1" name2="goat2" name3="goat3" />
      <GoatGrid panel={panelNum} name1="goat4" name2="goat5" name3="goat6" />
      <GoatGrid panel={panelNum} name1="goat7" name2="goat8" name3="goat9" />
      <GoatGrid panel={panelNum} name1="goat10" name2="goat11" name3="goat12" />
      <GoatGrid panel={panelNum} name1="goat13" name2="goat14" name3="goat15" />
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
        { name: props.name1, start: [0, 0], end: [0, 0] },
        { name: props.name2, start: [1, 0], end: [1, 0] },
        { name: props.name3, start: [2, 0], end: [2, 0] },
      ]}
    >
      <GoatColumn name={props.name1} onClick={props.handleClick} />
      <GoatColumn name={props.name2} />
      <Box gridArea={props.name3} background="light-2"><Paragraph>{props.name3}</Paragraph></Box>
    </Grid>
  )
}

const GoatColumn = (props) => {
  return(
    <Box background="yellow" border={true}>
      <Paragraph>{props.name}</Paragraph>
    </Box>
  )
}

const FooterBar = () => {
  return(
    <Footer />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

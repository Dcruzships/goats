import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo1_64.png'; // Tell webpack this JS file uses this image
import './index.scss';
import { Anchor, Box, Grommet, Grid, Header, Paragraph, Heading, Nav, Image, Carousel, Video, Collapsible, Text, Footer, Accordion, AccordionPanel, Tabs, Tab, RangeInput } from "grommet";
import { base } from "grommet/themes";
import ReactAudioPlayer from 'react-audio-player';

var Scroll   = require('react-scroll');
var scroller = Scroll.scroller;

const items = [
  { label: "About", href: "aboutPage" },
  { label: "Contact", href: "contact" }
];

const goats = [
  { label: "goat0", name: "poppy", desc: "A good goat!" },
  { label: "goat1", name: "blossom", desc: "A good goat!" },
  { label: "goat2", name: "marvin", desc: "A good goat!" },
  { label: "goat3", name: "myrtle", desc: "A good goat!" },
  { label: "goat4", name: "clementine", desc: "A good goat!" },
  { label: "goat5", name: "buford", desc: "A good goat!" },
  { label: "goat6", name: "beulah", desc: "A good goat!" },
  { label: "goat7", name: "mabel", desc: "A good goat!" },
  { label: "goat8", name: "goats", desc: "Good goats!" },
  { label: "goat9", name: "bruce", desc: "A good dog!" },
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
        <Contact />
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
          <Anchor href="https://dcruzships.github.io/goats/" target="_blank"><Image src={logo} alt="" /></Anchor>
          <Anchor color="black" href="https://dcruzships.github.io/goats/" target="_blank">
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
      <Carousel fill play={5000} controls={true}>
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/home/goats1.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/home/goats4.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/home/goats7.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/home/goats3.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/home/goats5.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/home/goats8.png" />
      </Carousel>
    </Box>
  )
}

const About = () => {
  const [trackNum, setTrackNum] = useState(50);
  const [volume, setVolume] = useState(.2);
  let player;
  let playerSource;

  function playTrack(label)
  {
    player = document.querySelector("#player");
    playerSource = document.querySelector("#playerSource");
    player.src = `https://raw.githubusercontent.com/dcruzships/goats/master/assets/audio/memoir${label}.ogg`;

    if(label !== trackNum)
    {
      player.play();
      setTrackNum(label);
    }
    else {
      player.pause();
      setTrackNum(50);
    }
  }

  function changeVolume(e)
  {
    e.preventDefault();
    setVolume(e.target.value);
    player = document.querySelector("#player");

    player.volume = e.target.value;
  }

  // const goats = [
  //   { label: "goat0", name: "poppy", desc: "A good goat!" },
  //   { label: "goat1", name: "blossom", desc: "A good goat!" },
  //   { label: "goat2", name: "myrtle", desc: "A good goat!" },
  //   { label: "goat3", name: "marvin", desc: "A good goat!" },
  //   { label: "goat4", name: "clementine", desc: "A good goat!" },
  //   { label: "goat5", name: "buford", desc: "A good goat!" },
  //   { label: "goat6", name: "beulah", desc: "A good goat!" },
  //   { label: "goat7", name: "mabel", desc: "A good goat!" },
  //   { label: "goat8", name: "goats", desc: "Good goats!" },
  //   { label: "goat9", name: "bruce", desc: "A good dog!" },
  // ];

  return(
    <Box pad="medium" id="aboutPage" name="aboutPage" background="neutral-3">
      <Tabs alignSelf="center" pad="small">
        <Tab title="About" width= "50vw">
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
            width="50vw"
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
              <Image
                fit="cover"
                src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/poppy.png"
              />
            </Box>
            <Box gridArea="goat1" background="light-2" pad="small">
              <Image
                fit="cover"
                src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/blossom.png"
              />
            </Box>
            <Box gridArea="goat2" background="light-2" pad="small">
              <Image
                fit="cover"
                src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/marvin.png"
              />
            </Box>
            <Box gridArea="goat3" background="light-2" pad="small">
              <Image
                fit="cover"
                src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/myrtle.png"
              />
            </Box>
            <Box gridArea="goat4" background="light-2" pad="small">
              <Image
                fit="cover"
                src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/clementine.png"
              />
            </Box>
            <Box gridArea="goat5" background="light-2" pad="small">
              <Image
                fit="cover"
                src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/buford.png"
              />
            </Box>
            <Box gridArea="goat6" background="light-2" pad="small">
              <Image
                fit="cover"
                src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/beulah.png"
              />
            </Box>
            <Box gridArea="goat7" background="light-2" pad="small">
              <Image
                fit="cover"
                src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/mabel.png"
              />
            </Box>
            <Box gridArea="goat8" background="light-2" pad="small">
              <Image
                fit="cover"
                src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/goats1.png"
              />
            </Box>
            <Box gridArea="goat9" background="light-2" pad="small">
              <Image
                fit="cover"
                src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/bruce.png"
              />
            </Box>
          </Grid>
        </Tab>
        <Tab title="Recordings and More!">
          <Box background="light-2" pad="large" margin="large">
            <Box direction="row" align="center" gap="xlarge">
              <Heading level="2">Recordings</Heading>
              <Box gap="small" direction="row" align="center">
              <i className='fas fa-volume-up'></i>
              <RangeInput
                value={volume}
                min={0}
                max={1.0}
                step={.1}
                onChange={event => changeVolume(event)}
                hoverIndicator={true}
                style={{width:'50%'}}
              />
              </Box>
            </Box>
            <Accordion pad="medium">
              <AccordionPanel label="My Name Is Lori Ferell" width="xlarge" onClick={() => playTrack(1)}>
                <Box pad="medium" background="light-2" direction="row">
                  <Paragraph>I grew up in Richardson, TX. While my relatives lived in the country, I embraced the city life for years. I was a guidance counselor for a long time, and I developed a passion for service. Helping others, watching life grow. <br /> <br />
                  In April 2018 I got my first fifteen goats! Since then I have learned to love all life that I come across. Watching them grow up, their little personality quirks coming about, it's a miracle to witness. </Paragraph>
                  <Image fit="contain" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/lori.jpg" />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="First Steps" width="xlarge" onClick={() => playTrack(2)}>
                <Box pad="medium" background="light-2" direction="row-reverse">
                  <Text>"It was scary but wonderful... I had found this new source of peace and joy."</Text>
                  <Image fit="contain" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/goats2.jpg" />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="A Gift from God - Day Six Farm" width="xlarge" onClick={() => playTrack(3)}>
                <Box pad="medium" background="light-2">
                  <Text>Three</Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Learning from Baby Goats!" width="xlarge" onClick={() => playTrack(5)}>
                <Box pad="medium" background="light-2">
                  <Text>Five</Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Selling Goats" width="xlarge" onClick={() => playTrack(6)}>
                <Box pad="medium" background="light-2">
                  <Text>Six</Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="All Natural!" width="xlarge" onClick={() => playTrack(7)}>
                <Box pad="medium" background="light-2">
                  <Text>Seven</Text>
                </Box>
              </AccordionPanel>
            </Accordion>
            <ReactAudioPlayer id="player"
              src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/audio/memoir1.ogg"
            />
          </Box>
        </Tab>
      </Tabs>
    </Box>
  )
}

const Contact = (props) => {

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
    <Box height="100vh" pad="large" id="contact" name="contact" focusIndicator={false} background="light-2">

    </Box>
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

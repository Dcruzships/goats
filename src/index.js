import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import logo from './logo1_64.png'; // Tell webpack this JS file uses this image
import './index.scss';
import { Anchor, Box, Grommet, Grid, Header, Paragraph, Heading, Nav, Image, Carousel, Video, Text, Accordion, AccordionPanel, Tabs, Tab, RangeInput, Collapsible } from "grommet";
import { base } from "grommet/themes";
import { Volume } from 'grommet-icons/icons/Volume';
// import { Facebook, Youtube, Github, Twitter } from 'grommet-icons';
import ReactAudioPlayer from 'react-audio-player';

var Scroll   = require('react-scroll');
var scroller = Scroll.scroller;

// const myTheme = {
//   global: {
//     font: {
//       family: 'Open Sans'
//     }
//   },
// };

const items = [
  { label: "About", href: "aboutPage" },
  { label: "Contact", href: "contact" }
];

const goats = [
  {
    label: "goat0",
    name: "Poppy",
    desc: "A good goat!",
    src: "https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/poppy.png"
  },
  {
    label: "goat1",
    name: "Blossom",
    desc: "A good goat!",
    src: "https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/blossom.png"
  },
  {
    label: "goat2",
    name: "Marvin",
    desc: "A good goat!",
    src: "https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/marvin.png"
  },
  {
    label: "goat3",
    name: "Myrtle",
    desc: "A good goat!",
    src: "https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/myrtle.png"
  },
  {
    label: "goat4",
    name: "Clementine",
    desc: "A good goat!",
    src: "https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/clementine.png"
  },
  {
    label: "goat5",
    name: "Buford",
    desc: "A good goat!",
    src: "https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/buford.png"
  },
  {
    label: "goat6",
    name: "Beulah",
    desc: "A good goat!",
    src: "https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/beulah.png"
  },
  {
    label: "goat7",
    name: "Mabel",
    desc: "A good goat!",
    src: "https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/mabel.png"
  },
  {
    label: "goat8",
    name: "Goats",
    desc: "A good goat!",
    src: "https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/goats1.png"
  },
  {
    label: "goat9",
    name: "Bruce",
    desc: "A good goat!",
    src: "https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/panels/bruce.png"
  },
];

class App extends React.Component
{
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render()
  {
    const { width } = this.state;
    const isMobile = width <= 500;

    // the rest is the same...
    if(isMobile)
    {
      return(
        <Grommet theme={base}>
          <Box id="home" name="home">
            <MobileNav />
            <MobileSlides />
          </Box>
          <MobileAbout />
          <MobileContact />
        </Grommet>
      );
    }
    else {
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

class MobileNav extends React.Component
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

      <Anchor onClick={() => this.handleScroll(items[1].href)} label={items[1].label} key={items[1].label} />

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
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/home/goats8.png" />
      </Carousel>
    </Box>
  )
}

const MobileSlides = () => {
  return(
    <Box align="center" pad="none" height="500px" id="mainSlides">
      <Carousel fill play={5000} controls={true}>
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/home/goats1.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/home/goats4.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/home/goats7.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/home/goats3.png" />
        <Image fit="cover" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/home/goats8.png" />
      </Carousel>
    </Box>
  )
}

const GoatPanel = (props) => {
  const [open, setOpen] = useState(false);

  function goatExpand(e)
  {
    e.preventDefault();
    setOpen(!open);
  }

  return(
    <Box key={props.goat.name} gridArea={props.goat.label} onClick={event => goatExpand(event)} background="light-2" pad="xsmall">
      <Image
        fit="cover"
        src={props.goat.src}
        key={props.goat.name}
      />
      <Collapsible open={open} direction="vertical"><Text alignSelf="center">{props.goat.name}</Text></Collapsible>
    </Box>
  )
}

const About = () => {
  const [trackNum, setTrackNum] = useState(50);
  const [volume, setVolume] = useState(.4);
  let player;

  function playTrack(label)
  {
    player = document.querySelector("#player");
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

  return(
    <Box pad="medium" id="aboutPage" name="aboutPage" background="neutral-3">
      <Tabs alignSelf="center" pad="small">
        <Tab title="About" width= "xlarge">
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
            width="xlarge"
          >
            <Box gridArea="text" pad="xsmall" background="light-2" round={true}>
              <Heading level="1">About</Heading>
              <Paragraph fill margin="small">
              Day Six Farm is a loving home for a herd of all natural, well-fed goats and some adorable mallard ducks located in Prosper, TX. My name is Lori Ferrell and I opened my farm with 15 goats in 2018. I have since grown my herd with lots of love, perseverence, and desire to honor God. It was this combination that allowed me to overcome the learning curve of farm life.<br /><br /> Spending most of my life as a city girl, I dreamed of having a farm and raising animals even as a young child. At first sight of my new goats entering the yard, an immediate feeling of peace and awe came over me. Watching the goats eat, sleep, and even scratch their horns against the trees made it clear that the farm needed a special name. I chose the name Day Six Farm to give thanks back to God for creating these wonderful creatures.</Paragraph>
            </Box>
            <Box gridArea="bible" background="light-2" pad="small" alignSelf="center">
              <Heading level="5" alignSelf="center"><b><a target="_blank" href="https://www.biblegateway.com/passage/?search=Genesis%201&version=KJV" rel="noopener noreferrer">Genesis 1:24-25</a></b></Heading>
              <Paragraph size="small" alignSelf="center" textAlign="center">“And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.
              And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.”</Paragraph>
            </Box>
            <Box gridArea="vid" background="light-2" pad="medium">
              <Video controls={false} loop={true} autoPlay={true} mute={true} fit="contain">
                <source key="video" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/goatsVid2.mp4" type="video/mp4" />
              </Video>
            </Box>
          </Grid>
        </Tab>
        <Tab title="Goats">
          <Heading level="2">Meet Some of The Goats</Heading>
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
            {goats.map(goat => {
              return(
                <GoatPanel key={goat.name} goat={goat} />
              )
            })}

          </Grid>
        </Tab>
        <Tab title="Recordings and More!">
          <Box background="light-2" pad="large" margin="large" width="xlarge" round={true}>
            <Box direction="row" width="xlarge" justify="between">
              <Heading level="1">Recordings</Heading>
              <Box gap="small" align="center" direction="row" justify="end">
                <Volume />
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
              <AccordionPanel label="My Name is Lori Ferrell" width="xlarge" onClick={() => playTrack(1)}>
                <Box pad="medium" background="light-2" direction="row-responsive">
                  <Paragraph>I grew up in Richardson, TX. While my relatives lived in the country, I embraced the city life for years. I was a guidance counselor for a long time, and I developed a passion for service. Helping others, watching life grow. <br /> <br />
                  In April 2018 I got my first fifteen goats! Since then I have learned to love all life that I come across. Watching them grow up, their little personality quirks coming about, it's a miracle to witness. </Paragraph>
                  <Image src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/lori.jpg" />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="First Steps" width="xlarge" onClick={() => playTrack(2)}>
                <Box pad="medium" background="light-2" direction="row-reverse" gap="medium">
                  <Paragraph align="start">"It was scary but wonderful... I had found this new source of peace and joy."</Paragraph>
                  <Image fit="contain" width="250px" height="400px" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/goats3.png" />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="A Gift from God - Day Six Farm" width="xlarge" onClick={() => playTrack(3)}>
                <Box pad="medium" background="light-2" direction="row-reverse" gap="medium">
                  <Paragraph>
                  Day Six Farms comes from <a href="https://www.biblegateway.com/passage/?search=Genesis%201&version=KJV">Genesis 1:24-31</a><br /> <br/>

                  24 And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.<br /><br/>

                  25 And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.<br /><br/>

                  26 And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.<br /><br/>

                  27 So God created man in his own image, in the image of God created he him; male and female created he them.<br /><br/>

                  28 And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.<br /><br/>

                  29 And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.<br /><br/>

                  30 And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so.<br /><br/>

                  31 And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.
                  </Paragraph>
                  <Image fit="contain" gap="medium" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/goats1.png" />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Learning from Baby Goats!" width="xlarge" onClick={() => playTrack(5)}>
                <Box pad="medium" gap="medium" background="light-2" direction="row">
                  <Paragraph>I bought my first 15 goats in April 2018, since then I have increased the size of my herd and sold many goats! <br /> <br />

                  There's a lot I wish I had known before I had bought my first goat, but I wouldn't trade the learning experiences for the world! Ups and downs come about everyday, and I like to think I have become stronger for my patience and perseverence. They are precious creatures, each with unique personalities, all rustling with love! I spend hours just watching them live, everything they do is a testament to the beauty of this world, an example of God's love.
                  </Paragraph>
                  <Image width="250px" height="400px" fit="contain" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/extra3.png" />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="All Natural!" width="xlarge" onClick={() => playTrack(7)}>
                <Box pad="medium" background="light-2" direction="row">
                  <Paragraph>I provide my goats with an all-natural multi-grain feed, high quality hay, and fresh, clean water. Plus they love eating leaves off any trees they can reach or the branches I trim for them!
                  <br /><br />
                  Goats mature around age 2 and can live up to 15 years (or so I've been told!)
                  </Paragraph>
                  <Image width="450px" height="300px" fit="contain" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/extra2.png" />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Selling Goats" width="xlarge" onClick={() => playTrack(6)}>
              <Box pad="medium" gap="medium" background="light-2" direction="row-reverse">
                <Paragraph>I sell goats for all sorts of purposes. While providing meat for family celebrations is wonderful, I love the idea of providing goats for someone starting a herd or adding to one. They all have loving, joyful spirits and deserve happiness!<br /><br /> I would be happy to assist a new farmer with my knowledge of raising goats. They are well behaved and make great pets even with young children!<br /><br />

                Most of them are boer, kiko, or cross-breeds. If interested, please call me at <a href="tel:+19728901153">(972)890-1153</a> or send me an email at <a href="mailto:lorileeferrell375@gmail.com" target="_blank" rel="noopener noreferrer">lorileeferrell375@gmail.com</a>
                </Paragraph>
                <Image width="450px" height="300px" fit="contain" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/extra5.png" />
              </Box>
              </AccordionPanel>
            </Accordion>
            <ReactAudioPlayer id="player"
              src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/audio/memoir1.ogg"
              volume={volume}
            />
          </Box>
        </Tab>
      </Tabs>
    </Box>
  )
}

const MobileAbout = () => {
  const [trackNum, setTrackNum] = useState(50);
  const [volume, setVolume] = useState(.4);
  let player;

  function playTrack(label)
  {
    player = document.querySelector("#player");
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
  return(
    <Box pad="xsmall" id="aboutPage" name="aboutPage" background="neutral-3">
      <Tabs alignSelf="center" pad='small'>
        <Tab title="About">
          <Grid
            rows={['medium', 'small', 'small']}
            columns={['88vw']}
            gap="small"
            areas={[
              { name: 'text', start: [0, 0], end: [0, 0] },
              { name: 'bible', start: [0, 2], end: [0, 2] },
              { name: 'vid', start: [0, 1], end: [0, 1] },
            ]}
            pad="medium"
            width="medium"
          >
            <Box gridArea="text" pad="small" background="light-2" round={true}>
              <Heading level="2">About</Heading>
              <Paragraph margin="xsmall" size="medium">
              Day Six Farm is a home for goats and mallard ducks. My name is Lori Ferrell and I opened my farm with 15 goats in 2018. I am loving my journey as a successful goat farmer. This farm brings a feeling of peace and awe to my life. I chose the name Day Six Farm to give thanks back to God for creating these wonderful creatures.</Paragraph>
            </Box>
            <Box gridArea="bible" background="light-2" pad="small" alignSelf="center">
              <Text level="3" alignSelf="center" pad='xxsmall'><b><a target="_blank" href="https://www.biblegateway.com/passage/?search=Genesis%201&version=KJV" rel="noopener noreferrer">Genesis 1:24-25</a></b></Text>
              <Paragraph size="small" alignSelf="center" textAlign="center">“And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.
              And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.”</Paragraph>
            </Box>
            <Box gridArea="vid" background="light-2" pad="small">
              <Video controls={false} loop={true} autoPlay={true} mute={true} fit="contain">
                <source key="video" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/goatsVid2.mp4" type="video/mp4" />
              </Video>
            </Box>
          </Grid>
        </Tab>
        <Tab title="Goats">
          <Carousel pad="medium" controls="arrows">
            {goats.map(goat => {
              return(
                <Box key={goat.name} background="light-2">
                  <Image
                    fit="cover"
                    src={goat.src}
                  />
                </Box>
              )
            })}
          </Carousel>
        </Tab>
        <Tab title="Recordings and More!">
          <Box background="light-2" alignSelf="center" width="100vw" round={true}>
            <Box direction="column" width="medium" pad="small">
              <Heading level="1" alignSelf="center">Recordings</Heading>
              <Box gap="small" align="center" direction="row" justify="center">
                <Volume />
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
              <AccordionPanel label="My Name is Lori Ferrell" width="large" onClick={() => playTrack(1)}>
                <Box pad="medium" background="light-2" direction="row-responsive">
                  <Paragraph>I grew up in Richardson, TX. While my relatives lived in the country, I embraced the city life for years. I was a guidance counselor for a long time, and I developed a passion for service. Helping others, watching life grow. <br /> <br />
                  In April 2018 I got my first fifteen goats! Since then I have learned to love all life that I come across. Watching them grow up, their little personality quirks coming about, it's a miracle to witness. </Paragraph>
                  <Image src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/lori.jpg" />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="First Steps" width="large" onClick={() => playTrack(2)}>
                <Box pad="medium" background="light-2" direction="row-reverse" gap="medium">
                  <Paragraph align="start">"It was scary but wonderful... I had found this new source of peace and joy."</Paragraph>
                  <Image fit="contain" width="250px" height="400px" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/goats3.png" />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="A Gift from God - Day Six Farm" width="large" onClick={() => playTrack(3)}>
                <Box pad="medium" background="light-2" direction="row-reverse" gap="medium">
                  <Paragraph>
                  Day Six Farms comes from <a href="https://www.biblegateway.com/passage/?search=Genesis%201&version=KJV">Genesis 1:24-31</a><br /> <br/>
                  </Paragraph>
                  <Image fit="contain" gap="medium" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/goats1.png" />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Learning from Baby Goats!" width="large" onClick={() => playTrack(5)}>
                <Box pad="medium" gap="medium" background="light-2" direction="row">
                  <Paragraph>I bought my first 15 goats in April 2018, since then I have increased the size of my herd and sold many goats! <br /> <br />

                  There's a lot I wish I had known before I had bought my first goat, but I wouldn't trade the learning experiences for the world! Ups and downs come about everyday, and I like to think I have become stronger for my patience and perseverence. They are precious creatures, each with unique personalities, all rustling with love! I spend hours just watching them live, everything they do is a testament to the beauty of this world, an example of God's love.
                  </Paragraph>
                  <Image width="150px" height="300px" fit="contain" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/extra3.png" />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="All Natural!" width="large" onClick={() => playTrack(7)}>
                <Box pad="medium" background="light-2" direction="row">
                  <Paragraph>I provide my goats with an all-natural multi-grain feed, high quality hay, and fresh, clean water. Plus they love eating leaves off any trees they can reach or the branches I trim for them!
                  <br /><br />
                  Goats mature around age 2 and can live up to 15 years (or so I've been told!)
                  </Paragraph>
                  <Image width="450px" height="300px" fit="contain" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/extra2.png" />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Selling Goats" width="large" onClick={() => playTrack(6)}>
              <Box pad="medium" gap="medium" background="light-2" direction="row-reverse">
                <Paragraph>I sell goats for all sorts of purposes. While providing meat for family celebrations is wonderful, I love the idea of providing goats for someone starting a herd or adding to one. They all have loving, joyful spirits and deserve happiness!<br /><br /> I would be happy to assist a new farmer with my knowledge of raising goats. They are well behaved and make great pets even with young children!<br /><br />

                Most of them are boer, kiko, or cross-breeds. If interested, please call me at <a href="tel:+19728901153">(972)890-1153</a> or send me an email at <a href="mailto:lorileeferrell375@gmail.com" target="_blank" rel="noopener noreferrer">lorileeferrell375@gmail.com</a>
                </Paragraph>
                <Image width="450px" height="300px" fit="contain" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/extra5.png" />
              </Box>
              </AccordionPanel>
            </Accordion>
            <ReactAudioPlayer id="player"
              src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/audio/memoir1.ogg"
              volume={volume}
            />
          </Box>
        </Tab>
      </Tabs>
    </Box>
  )
}

const MobileContact = (props) => {
  return(
    <Box pad="medium" id="contact" name="contact" background="neutral-4" direction="column" align="center" alignSelf="center" justify="center">
      <Heading level="1"><u>Contact Me</u></Heading>
      <Grid
        rows={['medium', 'small', 'xxsmall']}
        columns={['88vw']}
        gap="medium"
        areas={[
          { name: 'pic1', start: [0, 1], end: [0, 1] },
          { name: 'info', start: [0, 0], end: [0, 0] },
          { name: 'links', start: [0, 2], end: [0, 2] },
        ]}
        pad="small"
        width="medium"
        alignSelf="center"
      >
        <Box pad="medium" gridArea="info" background="light-2" align="center" justify="center" textAlign="center">
          <Paragraph size="medium" textAlign="center">I sell goats for all sorts of purposes. While providing meat for family celebrations is wonderful, I love the idea of providing goats for someone starting a herd or adding to one. They all have loving, joyful spirits and deserve happiness!<br /><br />

          Most of them are boer, kiko, or cross-breeds. If interested, please call me at <a href="tel:+19728901153">(972)890-1153</a> or send me an email at <a href="mailto:lorileeferrell375@gmail.com" target="_blank" rel="noopener noreferrer">lorileeferrell375@gmail.com</a>
          </Paragraph>
        </Box>
        <Box pad="medium" gridArea="pic1">
          <Image fit="contain" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/extra1.png" />
        </Box>
      </Grid>
    </Box>
  )
}

const Contact = (props) => {
  return(
    <Box pad="small" id="contact" name="contact" background="neutral-4" direction="column" align="center" alignSelf="center" justify="center">
      <Heading level="1"><u>Contact Me</u></Heading>
      <Grid
        rows={['medium', 'xsmall']}
        columns={['23vw', 'large', '23vw']}
        gap="medium"
        areas={[
          { name: 'pic1', start: [0, 0], end: [0, 0] },
          { name: 'info', start: [1, 0], end: [1, 0] },
          { name: 'pic2', start: [2, 0], end: [2, 0] },
          { name: 'links', start: [0, 1], end: [2, 1] },
        ]}
        pad="small"
        width="xlarge"
        alignSelf="center"
      >
        <Box pad="large" gridArea="info" background="light-2" align="center" justify="center" textAlign="center" round={true}>
          <Paragraph size="large" textAlign="center">I sell goats for all sorts of purposes. While providing meat for family celebrations is wonderful, I love the idea of providing goats for someone starting a herd or adding to one. They all have loving, joyful spirits and deserve happiness!<br /><br /> I would be happy to assist a new farmer with my knowledge of raising goats. They are well behaved and make great pets even with young children!<br /><br />

          Most of them are boer, kiko, or cross-breeds. If interested, please call me at <a href="tel:+19728901153">(972)890-1153</a> or send me an email at <a href="mailto:lorileeferrell375@gmail.com" target="_blank" rel="noopener noreferrer">lorileeferrell375@gmail.com</a>
          </Paragraph>
        </Box>
        <Box pad="medium" gridArea="pic1">
          <Image fit="contain" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/extra1.png" />
        </Box>
        <Box pad="medium" gridArea="pic2">
          <Image fit="contain" src="https://raw.githubusercontent.com/dcruzships/goats/master/assets/img/extra6.png" />
        </Box>

      </Grid>
    </Box>
  )
}

// <Box margin='xxsmall' gridArea="links" background="light-2" direction="row" justify="center" align="center" gap="xlarge">
//   <Facebook size="large" />
//   <Twitter size="large" />
//   <Youtube size="large" />
//   <a href="https://github.com/Dcruzships/goats" target="_blank" rel="noopener noreferrer"><Github size="large" /></a>
// </Box>

$(document).ready(function()
{
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'));
});

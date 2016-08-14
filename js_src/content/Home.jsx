import React from 'react';

import Tile from '../Tile.jsx';
import Typewriter from '../Typewriter.jsx';
import styles from '../styles.js';

const HEADING_TEXT = 'Hi, I\'m Brent Schroeter ';
const URLS = {
  github: 'https://github.com/brentschroeter',
  resume: 'http://bit.ly/1RQVmP2',
  linkedin: 'https://linkedin.com/in/brentschroeter',
};

const Home = () => (
  <div>
    <h1 style={styles.h1}>
      <Typewriter startText={HEADING_TEXT} goalText={HEADING_TEXT} />
    </h1>
    <p>
      <span style={styles.bold}>
        I strive for a healthier future through automation, analytics, and engineering.{' '}
      </span>
      I'm also a soccer player, frisbee thrower, and occasional wake surfer who{' '}
      wishes he travelled more. This site is a work in progress, so please bear with me!
    </p>
    <p>
      Checkin{'\''} me out?{' '}
      <a href={URLS.resume} style={styles.links.underline} target="_blank">{'R\u00e9sum\u00e9'}</a>,
      {' '}
      <a href={URLS.github} style={styles.links.underline} target="_blank">Github</a>,{' '}
      <a href={URLS.linkedin} style={styles.links.underline} target="_blank">LinkedIn</a>
    </p>
    <br />
    <Tile
      alt="Hyperloop"
      img="/media/Home/ratzenberger.jpg"
      href="/stories/hyperloop"
      spaceBottom
      spaceRight
    />
    <Tile
      alt="Dubhacks"
      img="/media/Home/dubhacks.jpg"
      spaceBottom
      spaceRight
    />
    <Tile
      alt="TUNE"
      img="/media/Home/wakesurfing_interns.jpg"
      href="/stories/tune"
      spaceBottom
      spaceRight
    />
    <Tile
      alt="Scholarship Junkies"
      img="/media/Home/sj.jpg"
      href="/stories/scholarshipjunkies"
      spaceBottom
      spaceRight
    />
  </div>
);

export default Home;

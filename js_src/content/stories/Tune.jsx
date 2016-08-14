import React from 'react';

import styles from '../../styles.js';

const TUNE_BLUE = '#007AFF';

const Tune = () => (
  <div>
    <h2 style={styles.h2}>
      <span style={{ color: TUNE_BLUE }}>TUNE</span>{' '}
      (Summer 2016)
    </h2>
    <h4 style={styles.h4}>
      Interning at the fastest growing tech company in the Pacific Northwest.
    </h4>
    <h3 style={styles.h3} title="too long; didn't read">tl;dr</h3>
    <p>
      I have the unique opportunity to build new frontend dev tools as a summer intern at TUNE,{' '}
      the industry leading marketing analytics company based a block outside of Pike Place Market.
    </p>
    <h3 style={styles.h3}>My Goal</h3>
    <p>
      To improve the productive capacity of the TUNE frontend team by 10%.
    </p>
  </div>
);

export default Tune;

import React, { Component, PropTypes } from 'react';
import { Link } from 'redux-little-router';

import styles from './styles.js';

class Tile extends Component {
  constructor(...args) {
    super(...args);
    this.state = { hover: false };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({ hover: true });
  }

  handleMouseOut() {
    this.setState({ hover: false });
  }

  render() {
    const {
      alt,
      href,
      img,
      spaceBottom,
      spaceRight,
    } = this.props;
    const { hover } = this.state;
    const tileStyle = {
      ...styles.tile.container,
      backgroundImage: img ? `url('${img}')` : null,
      marginBottom: spaceBottom ? 20 : 0,
      marginRight: spaceRight ? 20 : 0,
    };
    const overlayDefaultStyle = href ? styles.tile.overlay.normal : styles.tile.overlay.disabled;
    const overlayStyle = {
      ...overlayDefaultStyle,
      opacity: hover ? 1 : 0,
    };
    const tile = (
      <div
        onMouseOut={this.handleMouseOut}
        onMouseOver={this.handleMouseOver}
        style={tileStyle}
      >
        <div style={overlayStyle}>
          <span style={styles.tile.text}>{alt}</span>
        </div>
      </div>
    );
    if (href) {
      return (
        <Link
          href={href}
          style={styles.links.noUnderline}
        >
          {tile}
        </Link>
      );
    }
    return tile;
  }
}

Tile.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string,
  img: PropTypes.string,
  spaceBottom: PropTypes.bool,
  spaceRight: PropTypes.bool,
};

export default Tile;

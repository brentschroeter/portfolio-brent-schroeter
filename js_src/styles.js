const app = {
  fontFamily: '\'Raleway\', \'Helvetica\', \'Arial\', sans-serif',
  fontSize: 14,
  lineHeight: 1.5,
};

const bold = {
  fontWeight: 'bold',
};

const contentBody = {
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 960,
  position: 'relative',
  width: '90%',
};

const h1 = {
  ...bold,
  fontSize: 48,
};

const h2 = {
  ...bold,
  fontSize: 36,
};

const h3 = {
  ...bold,
  fontSize: 24,
};

const h4 = {
  ...bold,
  fontSize: 14,
};

const link = {
  color: 'inherit',
};

const linkNoUnderline = {
  ...link,
  textDecoration: 'none',
};

const linkUnderline = {
  ...link,
  textDecoration: 'underline',
};

const navElem = {
  boxSizing: 'border-box',
  color: '#000',
  height: 51,
  overflow: 'visible',
  paddingTop: 15,
  textAlign: 'center',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
};

const navContainer = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};

const navEdge = {
  ...navElem,
  borderBottom: 'solid 1px #000',
  flex: 1,
};

const navItem = {
  normal: {
    ...navElem,
    borderBottom: 'solid 1px #000',
    flexBasis: 100,
    height: 51,
  },
  active: {
    ...navElem,
    borderBottom: 'solid 3px #37F',
    flexBasis: 100,
    transition: 'border-bottom-width 0.1s',
  },
};

const navSpacer = {
  ...navElem,
  borderBottom: 'solid 1px #000',
  flexBasis: 20,
};

const tileContainer = {
  backgroundSize: 'cover',
  display: 'inline-block',
  height: 160,
  width: 160,
};

const tileOverlay = {
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'flex-end',
  width: '100%',
  textAlign: 'center',
  transition: '0.1s all',
};

const tileOverlayNormal = {
  ...tileOverlay,
  color: '#FFF',
};

const tileOverlayDisabled = {
  ...tileOverlay,
  color: '#999',
};

const tileText = {
  paddingBottom: 20,
};

const styles = {
  app,
  bold,
  contentBody,
  h1,
  h2,
  h3,
  h4,
  navigation: {
    container: navContainer,
    edge: navEdge,
    item: navItem,
    spacer: navSpacer,
  },
  links: {
    noUnderline: linkNoUnderline,
    underline: linkUnderline,
  },
  tile: {
    container: tileContainer,
    overlay: {
      disabled: tileOverlayDisabled,
      normal: tileOverlayNormal,
    },
    text: tileText,
  },
};

export default styles;

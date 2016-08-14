import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider as ReduxProvider } from 'react-redux';
import { compose, createStore } from 'redux';
import {
  createStoreWithRouter,
  provideRouter,
  initializeCurrentLocation,
  Fragment,
} from 'redux-little-router';
import ejs from 'ejs';

import Navigation from './Navigation.jsx';
import styles from './styles.js';
import content from './content.jsx';

const reducer = state => state;

const storyTitles = {
  hyperloop: 'Hyperloop',
  scholarshipjunkies: 'Scholarship Junkies',
  tune: 'TUNE',
};

const routes = {
  '/': {
    title: 'Portfolio \u2014 Brent Schroeter',
  },
  '/stories/:storyName': {
    title: '<%= result.storyTitles[params.storyName] %> \u2014 Brent Schroeter',
    storyTitles,
  },
};

const store = createStore(
  reducer,
  {},
  createStoreWithRouter({ routes, pathname: location.pathname, basename: '' })
);

const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

const updateTitle = ({ template, params, result }) => {
  document.title = ejs.render(template, {
    params,
    result,
  }, { escape: false });
};

const App = props => {
  const { router } = props;
  const { storyName } = router.params;
  const { title } = router.result;
  updateTitle({
    template: title,
    params: router.params,
    result: router.result,
  });
  return (
    <div style={styles.app}>
      <Navigation />
      <div style={styles.contentBody}>
        <Fragment forRoute="/">
          {content.home}
        </Fragment>
        <Fragment forRoute="/stories/:storyName">
          {storyName && content.stories[storyName]}
        </Fragment>
      </div>
    </div>
  );
};

App.propTypes = {
  router: PropTypes.object,
};

const ComposedApp = compose(
  provideRouter({ store }),
  connect(state => ({
    router: state.router,
  }))
)(App);

ReactDOM.render(
  <ReduxProvider store={store}><ComposedApp /></ReduxProvider>,
  document.getElementById('mountNode')
);

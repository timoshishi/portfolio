import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
const About = lazy(() => import('./views/About'));
const Contact = lazy(() => import('./views/Contact'));
const Projects = lazy(() => import('./views/Projects'));

const Routes = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Suspense>
  );
};

export default Routes;

import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/index';
import routerData from './router'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
ReactDOM.render(
  <Router>
    <Switch>
      {
        routerData.map((e,i)=>{
          return (
            <Route exact={i == 0} path={e.path}>
              <Layout>
                <e.component />
              </Layout>
            </Route>
          )
        })
      }
    </Switch>
  </Router>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}




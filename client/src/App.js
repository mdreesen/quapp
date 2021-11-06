import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, operationName } from '@apollo/react-hooks';
import { ChatEngine } from 'react-chat-engine';
import ApolloClient from 'apollo-boost';

// Import pages
// User pages
import Landing from './pages/Landing';
import UserSettings from './pages/UserSettings';
import Home from './pages/Home';

import NotAPage from './pages/NotAPage';

import UserProfile from './pages/UserProfile'

// making the connection to the graphql backend server
// "uri" = Uniform Resource Identifier
// this function also sets up looking at the user when logged in
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/settings" component={UserSettings} />
            <Route exact path="/home" component={Home}/>
            <Route exact path="/profile/user/:username" component={UserProfile}/>

            <Route component={NotAPage}/>

          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;

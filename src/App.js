import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Home from "./components/Home";
import Music from "./components/Music";
import Games from "./components/Games";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

class App extends Component {
  render() {
    return (
      <Router>
        <Container text>
          <Route exact path="/" component={Home} />
          <Route path="/music" component={Music} />
          <Route path="/games" component={Games} />
          <Route exact path="/blog/" component={Blog} />
          <Route path="/blog/:year/:month/:article" component={BlogPost} />
        </Container>
      </Router>
    );
  }
}

export default App;

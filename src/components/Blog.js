import React, { Component } from "react";
import { Divider, Header, List } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: []
    };
  }

  componentDidMount() {
    fetch("/blog/index.txt")
      .then(result => result.text())
      .then(index => {
        const lines = index.split("\n");
        const pages = [];
        lines.map(line => {
          const parts = line.split(";");
          if (parts.length > 3) {
            pages.push(parts);
          }
          return null;
        });
        this.setState({ pages });
      });
  }

  renderItem(page) {
    return (
      <List.Item key={page[2]}>
        <NavLink to={`/blog/${page[0]}/${page[1]}/${page[2]}`}>
          {page[3]}
        </NavLink>
      </List.Item>
    );
  }

  render() {
    const pages = this.state.pages.map(this.renderItem);
    return (
      <div>
        <Divider hidden />
        <Header>Blog</Header>

        <List>{pages}</List>
      </div>
    );
  }
}

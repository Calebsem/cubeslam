import React, { Component } from "react";
import { Divider, Item, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Divider hidden />
        <Header as="h1">
          Hello there.
          <Header.Subheader>
            I'm Tuxic. I do music, games and 3d.
          </Header.Subheader>
        </Header>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" src="/assets/images/icons/oblivion.jpg" />
            <Item.Content verticalAlign="middle">
              <NavLink to="/music">
                <Header>
                  Music >
                  <Header.Subheader>
                    Tuxic, Phonema and other musical projects
                  </Header.Subheader>
                </Header>
              </NavLink>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="tiny" src="/assets/images/icons/ecosya.jpg" />
            <Item.Content verticalAlign="middle">
              <NavLink to="/games">
                <Header>
                  Games >
                  <Header.Subheader>
                    burnout., Ecosya, Space Shooterz and other games
                  </Header.Subheader>
                </Header>
              </NavLink>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="tiny" src="/assets/images/icons/blog.png" />
            <Item.Content verticalAlign="middle">
              <NavLink to="/blog">
                <Header>
                  Blog >
                  <Header.Subheader>
                    Technical and personal ramblings
                  </Header.Subheader>
                </Header>
              </NavLink>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
}

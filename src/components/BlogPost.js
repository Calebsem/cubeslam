import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { Divider, Header, Image } from "semantic-ui-react";

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      post: "### Loading..."
    };
  }
  componentDidMount() {
    this.setState({
      title: "",
      date: "",
      post: "### Loading..."
    });
    fetch(
      `/blog/${this.props.match.params.year}/${this.props.match.params.month}/${
        this.props.match.params.article
      }/index.html.md`
    )
      .then(result => result.text())
      .then(post => {
        // header analysis
        const lines = post.split("\n");
        let isHeader = false;
        let title = "";
        let date = "";
        const headerLines = [];
        const postLines = [];

        lines.map(line => {
          if (line === "---") isHeader = !isHeader;
          if (line !== "---" && isHeader) {
            headerLines.push(line);
          }
          if (line !== "---" && !isHeader) {
            postLines.push(line);
          }
          return null;
        });
        headerLines.map(header => {
          const parts = header.split(": ");
          if (parts.length > 1) {
            switch (parts[0]) {
              case "title":
                title = parts[1];
                break;
              case "date":
                date = parts[1];
                break;
              default:
                break;
            }
          }
          return null;
        });
        this.setState({ title, date, post: postLines.join("\n") });
        return null;
      });
  }

  render() {
    return (
      <div>
        <Divider hidden />
        <Header>
          {this.state.title}

          <Header.Subheader>{this.state.date}</Header.Subheader>
        </Header>
        <ReactMarkdown source={this.state.post} renderers={{ image: Image }} />
      </div>
    );
  }
}

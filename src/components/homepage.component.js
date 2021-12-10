import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import React, { Component } from "react";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
    };
  }

  async componentDidMount() {
    const response = await fetch("https://bs-random-json.vercel.app/api/data");
    const json = await response.json();
    this.setState({ data: json });
    this.setState({ isLoading: false });
  }

  render() {
    return (this.state.isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <Editor value={this.state.data} onChange={this.handleChange} />
    )
    );
  }
}

import React from "react";
import monaco from "./monaco-environment";

export default class MonacoDiff extends React.Component<{ a: string, b: string }> {
  container: HTMLDivElement | undefined;
  editor:;

  componentDidMount() {
    if (this.container) {
      const { a, b } = this.props;

      this.editor = monaco.editor.createDiffEditor(this.container, {
        automaticLayout: true,
        theme: "vs-dark"
      });
      
      this.editor.setModel({
        original: a,
        modified: b
      });
    }
  }

  setContainer = (container: HTMLDivElement) => {
    this.container = container;
  }

  render() {
    return (
      <div ref={this.setContainer} />
    );
  }
}
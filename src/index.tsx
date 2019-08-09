import monaco from "./monaco-environment";
import diffs, { IDiff } from "./diffs";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Diff extends React.Component<{ diff: IDiff }> {
  render() {
    const { description, diff: [a, b], title } = this.props.diff;

    return (<div />)
  }
}

ReactDOM.render(
  <React.Fragment>
    {diffs.map(diff => {
      return (<Diff diff={diff} />)
    })}
  </React.Fragment>,
  document.querySelector("#container")
);

diffs.forEach(diff => {
  
});

const defaultLineHeight = 19;

const diffSections = document.querySelectorAll("div");

function displayDiff(diffSection: HTMLDivElement) {
  const preTags = diffSection.querySelectorAll("pre");
  const original = preTags[0].innerText;
  const modified = preTags[1].innerText;
  const div = diffSection;

  for (const pre of preTags) {
    if (pre.parentNode) {
      pre.parentNode.removeChild(pre);
    }
  }

  const diff = document.createElement("div");
  diff.className = "diffView";
  div.appendChild(diff);

  const originalModel = monaco.editor.createModel(original, "text/plain");
  const modifiedModel = monaco.editor.createModel(modified, "text/plain");

  const lines = Math.max(originalModel.getLineCount(), modifiedModel.getLineCount());
  diff.style.height = `${lines * defaultLineHeight}px`;
  
  originalModel.updateOptions({ tabSize: 2 });
  modifiedModel.updateOptions({ tabSize: 2 });
  
  const diffEditor = monaco.editor.createDiffEditor(diff, {
    automaticLayout: true,
    theme: "vs-dark"
  });
  diffEditor.setModel({
    original: originalModel,
    modified: modifiedModel
  });
}

for (const diffSection of diffSections) {
  displayDiff(diffSection);
}
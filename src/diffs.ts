import project from "../xml/project.xml";
import dataset from "../xml/dataset.xml";

export interface IDiff {
  title: string;
  description: string;
  diff: [string, string]
}

const diffs: Array<IDiff> = [
  {
    title: "Add dataset",
    description: "",
    diff: [project, dataset]
  }
];

export default diffs;
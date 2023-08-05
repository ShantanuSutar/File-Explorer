import { useState } from "react";
import Folder from "./components/Folder";
import explorer from "./data/folderData";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorer} />
    </div>
  );
}

export default App;

import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false); // whether or not to expand the folder
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  }); // isFolder is used to determine whether to show 📁 or 📄

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation(); // preventing any parent handlers from being notified of the event.
    setExpand(true); // expand the folder
    setShowInput({ visible: true, isFolder }); // show the input
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>📁 {explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder ➕</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File ➕</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
                className="inputContainer-input"
              />

              {/*
                autoFocus is used to focus the input when the page loads 

                onBlur is used to hide the input when the user clicks outside the input
               */}
            </div>
          )}

          {explorer.items.map((item) => {
            return <Folder explorer={item} key={item.id} />;
          })}
          {/* recursively call the Folder component */}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
};

export default Folder;

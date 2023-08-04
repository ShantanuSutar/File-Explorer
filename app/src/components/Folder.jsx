const Folder = ({ explorer }) => {
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder">
          <span>📁 {explorer.name}</span>
        </div>
        <div>
          {explorer.items.map((item) => {
            return <span key={item.id}>{item.name}</span>;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
};

export default Folder;

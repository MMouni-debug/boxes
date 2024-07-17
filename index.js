const Box = (props) => {
    const { className, boxTextStyling, boxText } = props;
  
    return (
      <div className={className}>
        <p className={boxTextStyling}>{boxText}</p>
      </div>
    );
  };
  
  const element = (
    <div className="boxes-bg-container">
      <h1 className="boxes-header">Boxes</h1>
      <div className="box-collection-container">
        <Box
          className="box-item small-box"
          boxTextStyling="box-item-text"
          boxText="Small"
        />
  
        <Box
          className="box-item medium-box"
          boxTextStyling="box-item-text"
          boxText="Medium"
        />
  
        <Box
          className="box-item large-box"
          boxTextStyling="box-item-text"
          boxText="Large"
        />
      </div>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById("root"));
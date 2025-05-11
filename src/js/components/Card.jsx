import React from 'react';

const Card = (props) => {

  const cardStyle = { 
    margin: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    width: "100%", 
    maxWidth: "400px", 
    minHeight: "100%", 
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  };

  const imgStyle = {
    objectFit: "cover",
    width: "100%",
    height: "auto", 
    maxHeight: "300px", 
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px"
  };

  return (
    <div className="card" style={cardStyle}>
      <img 
        src={props.image}
        className="card-img-top" 
        alt={props.title}
        style={imgStyle}
      />
      <div className="card-body p-3">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description} </p>
        <a href="#" class="btn btn-primary">Saber más...!</a>
      </div>
    </div>
  );
};

export default Card;
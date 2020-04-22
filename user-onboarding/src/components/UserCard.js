import React, { useState } from "react";

const UserCard = props => {
  const [editable, setEditable] = useState(false);
  const [style, setStyle] = useState({});

  return (
    <div className="card">
      <p>
        Name:{" "}
        <span
          className="cardName"
          maxLength="20"
          contentEditable={editable}
          style={style}
          onKeyDown={event => {
            event.keyCode === 5 && document.querySelector(".cardName");
          }}
        >
          {props.firstName} {props.lastName}
        </span>
      </p>
      <p>
        {" "}
        Email:{" "}
        <span
          className="cardEmail"
          contentEditable={editable}
          style={style}
          onKeyDown={event => {
            event.keyCode === 5 && document.querySelector(".cardEmail");
          }}
        >
          {" "}
          {props.email}
        </span>
      </p>
      <p>
        Password:{" "}
        <span
          className="cardpassWord"
          contentEditable={editable}
          style={style}
          onKeyDown={event => {
            event.keyCode === 5 && document.querySelector(".cardpassWord");
          }}
        >
          {props.passWord}
        </span>
      </p>
      <button
        className="edit-btn"
        onClick={() => {
          setEditable(true);
          setStyle({ border: "2px solid red", background: "pink"});
        }}
      >
        Edit
      </button>
      
      <button
        className="edit-btn"
        onClick={() => {
          setEditable(false);
          setStyle({border: "2px solid green", background: "lightgreen"});
        }}
      >
        Save
      </button>
    </div>
  );
};

export default UserCard;
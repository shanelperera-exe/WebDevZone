import React from "react";

function Avatar(props) {
    return <img
        src={props.imgURL}
        alt="avatar_img"
        className="circle-img card-img"
    />
}

export default Avatar;
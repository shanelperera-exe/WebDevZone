import React from "react";
import "./../../public/styles.css";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id} 
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://media.licdn.com/dms/image/v2/D4E03AQECiHZvL0XisQ/profile-displayphoto-crop_800_800/B4EZenDS.bHsAU-/0/1750854351784?e=1756944000&v=beta&t=wRNPsBQYOqJzJ3z8obm7S6g5SVXuZUyCY_ypaDS7LPI"/>
      <div className="card-list">
        {contacts.map(createCard)}
        {/* {contacts.map(card => (
          <Card
            name={card.name}
            imgURL={card.imgURL}
            phone={card.phone}
            email={card.email}
          />
        ))} */}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import "./App.css";

const initialUsers = [
  {firstName: 'Brennan', lastName: 'Huff', email: 'brennan@prestigeworldwide.org', passWord: 'xxxx'},
  // {firstName: 'Dale', lastName: 'Doback', email: 'dale@prestigeworldwide.org', role: 'fantasy baseball team manager'}
]

function App() {
  
  // const [team, setTeam] = useState(initialUser)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passWord: ""
  });
  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    console.log(formData);
  };
  
  const [userList] = [initialUsers];

  const submitForm = event => {
    userList.push(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      passWord: ""
    });
    
    
    
    event.preventDefault();

    console.log(userList);
    console.log(formData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form
          onInputChange={onInputChange}
          formData={formData}
          submitForm={submitForm}
        />
      </header>
      <h3 className="userList">Onboarded Users</h3>
      <div className="card-wrapper">
        {userList.map(item => {
          return (
            <UserCard
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              passWord={item.passWord}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
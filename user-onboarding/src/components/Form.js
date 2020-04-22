import React from "react";

const Form = props => {
  return (
    <>
      <form onSubmit={props.submitForm}>
        <h3 className="mainTitle">User-Onboarding</h3>
        
        <label htmlFor="firstName"> &nbsp;First Name:&nbsp; </label>
        <input
          value={props.formData.firstName}
          onChange={props.onInputChange}
          id="firstName"
          name="firstName"
          type="text"
        />
        
        <label htmlFor="lastName">&nbsp;Last Name:&nbsp; </label>
        <input
          value={props.formData.lastName}
          onChange={props.onInputChange}
          id="lastName"
          name="lastName"
          type="text"
        />

        <label htmlFor="emailInput">&nbsp;Email:&nbsp; </label>
        <input
          value={props.formData.email}
          onChange={props.onInputChange}
          id="emailInput"
          name="email"
          type="text"
        />
        
        <label htmlFor="passWordInput">&nbsp;Password:&nbsp; </label>
        <input
          value={props.formData.passWord}
          onChange={props.onInputChange}
          id="passWordInput"
          name="passWord"
          type="text"
        />
        <button>&nbsp;Add&nbsp;</button>
      </form>
    </>
  );
};

export default Form;
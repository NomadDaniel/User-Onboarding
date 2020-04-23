import React from 'react'

function FriendForm(props) {
  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
    ////////// NEW PROPS FOR TODAY //////////
    disabled,
    errors,
  } = props

  return (
    <form className='friend container'>
      <h2>New User Form</h2>
      {/* 🔥 STEP 10 - SHOW A BUNCH OF ERRORS */}
      <div className='errors'>
       {/* <p>{errors.username}</p> */}
       <p>{errors.firstName}</p>
       <p>{errors.lastName}</p>
       <p>{errors.email}</p>
       {/* <p>{errors.civil}</p> */}
      </div>
      {/* ////////// TEXT INPUTS ////////// */}
      {/* <label>Username:&nbsp;
      <input
          value={values.username}
          onChange={onInputChange}
          name='username'
          type='text'
        /></label> */}
      <label>First Name:&nbsp;
      <input
          value={values.firstName}
          onChange={onInputChange}
          name='firstName'
          type='text'
        /></label>
      <label>Last Name:&nbsp;
      <input
          value={values.lastName}
          onChange={onInputChange}
          name='lastName'
          type='text'
        /></label>  
      <label>Email:&nbsp;
      <input
          value={values.email}
          onChange={onInputChange}
          name='email'
          type='text'
        /></label>

      {/* ////////// DROPDOWN ////////// */}
      {/* <label>Civil Status:&nbsp;
      <select
          value={values.civil}
          onChange={onInputChange}
          name='civil'
        >
          <option defaultValue=''>Please choose</option>
          <option value='married'>married</option>
          <option value='single'>not married</option>
        </select></label> */}

      {/* ////////// CHECKBOXES ////////// */}
      <label>&nbsp;Agree to Terms Of Service?<input
        checked={values.termsOfService.yes}
        onChange={onCheckboxChange}
        name='yes'
        type="checkbox" /> Yes </label>
      <label><input
        checked={values.termsOfService.no}
        onChange={onCheckboxChange}
        name='no'
        type="checkbox" /> No </label>
      {/* <label><input
        checked={values.termsOfService.coding}
        onChange={onCheckboxChange}
        name='coding'
        type="checkbox" /> Coding</label> */}

      {/* ////////// DISABLED PROP NEW FOR TODAY ////////// */}
      <button onClick={onSubmit} disabled={disabled}>submit</button>
    </form>
  )
}

export default FriendForm

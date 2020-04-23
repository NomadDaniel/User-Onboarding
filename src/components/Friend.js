import React from 'react'

function Friend({ details }) {
  if (!details) {
    return <h3>Working fetching your users&apos;s details...</h3>
  }
  return (
    <div className='friend container'>
      <h2>{details.first_name} {details.last_name}</h2>
      <p>Email: {details.email}</p>
      
      {/* <p>Married: {details.married ? 'Yes' : 'No'}</p> */}

      {
        !!details.termsOfService && !!details.termsOfService.length &&
        <div>
          termsOfService:
          <ul>
            {
              details.termsOfService.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default Friend

import React, {useEffect, useState} from 'react'
import './Client.css'

const Client = () => {

  /* Use state*/
  const [clients, setClients] = useState([])

  useEffect(()=>{
    fetch('https://fakerapi.it/api/v1/companies?_quantity=20')
    .then(response => response.json())
    .then(data => setClients(data.data))

  }, [])

  console.log(clients)
  return (
    <div className='clients'>
      <div className='header'>
            <h2>Clients</h2>
          </div>
        <div className='client-container'>
        <table>
              <tr>
                  <th>Fullname</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>gender</th> 
              </tr>
               {
                 clients ? clients.map((client, idx) => (
                  < tr key={idx}>
                  <td>
                    <p>
                      <span>{client.contact.firstname}</span>
                      <span>{client.contact.lastname}</span>
                    </p>
                   </td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.contact.gender}</td>
              </tr>
                 ) ) : null
               }
              
                
      </table>
        </div>
      
    </div>
  )
}

export default Client

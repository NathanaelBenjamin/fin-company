import React, { useEffect, useState } from 'react'
import './teams.css'


const TeamMembers = () => {
  const [teams, setTeams] = useState([])

  const url = 'https://fakerapi.it/api/v1/persons?_quantity=10';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setTeams(data.data))

  }, [])




  return (
    <div className="Team">
      <div className='header'>
        <h2>TEAM MEMBERS</h2>
      </div>
      <div className="teams-container">

        <div className="settings_members-table-main">

          <table>
            <thead>
              <tr className='bottom'>
                <th> FULL NAME</th>
                <th> EMAIL</th>
                <th> PHONE NO</th>
                <th> GENDER</th>
              </tr>
            </thead>

            <tbody>

              {
                teams ? teams?.map((team, idx) => (
                  <tr key={idx} className='bottom'>
                    <td>
                      <p>
                        <span> {team.firstname}</span>
                        <span> {team.lastname}</span>
                      </p>

                    </td>
                    <td> {team.email}</td>
                    <td> {team.phone}</td>
                    <td> {team.gender}</td>
                  </tr>
                )) : null
              }

            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default TeamMembers

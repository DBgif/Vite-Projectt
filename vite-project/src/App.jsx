import { useState, useEffect } from 'react'
import './App.css'

const teamData = {
  leader: {
    role: '🌿 Environment Leader',
    name: 'Paredes',
    img: 'paredes.png'  // Fixed
  },
  assistants: [
    { role: '🌱 Sustainable Assistant', name: 'Ayala', img: 'ayala.jpeg' },      // Fixed
    { role: '🌍 Eco‑Secretary', name: 'Mabini', img: 'mabini.png' },           // Fixed
    { role: '💰 Treasurer', name: 'Jumayag', img: 'jumayag.jpg' }              // Fixed
  ],
  teams: [
    {
      role: '🌳 Documentation & Logistics',
      members: [
        { name: 'Dinlasan', img: 'dinlasan.jpg' },                              // Fixed
        { name: 'Jaropojop', img: 'jaropojop.jpeg' },                           // Fixed
        { name: 'Obo', img: 'obo.jpg' },                                        // Fixed
        { name: 'Pepito', img: 'pepito.jpg' },                                  // Fixed
        { name: 'Salvador', img: 'img_7588.png' }                               // Fixed
      ]
    },
    {
      role: '♻️ CNA Organizer (Eco‑Programs)',
      members: [
        { name: 'Benghay', img: 'benghay.jpg' },                                // Fixed
        { name: 'Gonzales', img: 'gonzales.jpg' },                              // Fixed
        { name: 'Malabanan', img: 'malabanan.jpg' },                            // Fixed
        { name: 'Rong', img: 'rong.png' },                                      // Fixed
        { name: 'Salazar', img: 'salazar.jpeg' },                               // Fixed
        { name: 'Solis', img: 'solis.jpg' }                                     // Fixed
      ]
    },
    {
      role: '🎨 Creatives',
      members: [
        { name: 'Bay', img: 'bay.png' },                                        // Fixed
        { name: 'Castañeda', img: 'castañeda (1).png' },                        // Fixed
        { name: 'Deles', img: 'creative3.jpg' },                                // Fixed
        { name: 'Gentilezo', img: 'gentilezo.jpg' },                            // Fixed
        { name: 'Reguero', img: 'reguero.png' }                                 // Fixed
      ]
    }
  ],
  editors: {
    role: '✍️ Narrative Paper Editor (Climate Narratives)',
    members: [
      { name: 'Arce', img: 'arce .png' },                                     // Fixed
      { name: 'Ego-Ugan', img: 'ego-ugan.png' },                              // Fixed
      { name: 'Medina', img: 'medina.jpg' },                                  // Fixed
      { name: 'Pedragosa', img: 'pedragosa (1).png' },                        // Fixed
      { name: 'Reyes', img: 'reyes christian.png' }                           // Fixed
    ]
  }
}

// All other components unchanged - they already use `/images/${img}`
function LeaderCard({ data }) {
  return (
    <div className="card leader">
      <div className="role">{data.role}</div>
      <img src={`/images/${data.img}`} alt={data.name} className="photo" />
      <p className="name">{data.name}</p>
    </div>
  )
}

function TeamMember({ name, img }) {
  return (
    <div className="team-member">
      <img src={`/images/${img}`} alt={name} className="team-photo" />
      <p className="team-name">{name}</p>
    </div>
  )
}

function TeamCard({ role, members }) {
  return (
    <div className="card team">
      <div className="role">{role}</div>
      <div className="team-grid">
        {members.map((member, idx) => (
          <TeamMember key={idx} {...member} />
        ))}
      </div>
    </div>
  )
}

function Connector({ long = false }) {
  return <div className={`connector ${long ? 'long' : ''}`} />
}

function App() {
  return (
    <div className="app">
      <h1>Organizational Chart</h1>
      <p className="subtitle">
        Building a sustainable team for a greener future <br />
        <span>Group2-NSTP🌿</span>
      </p>

      <div className="org-chart">
        <LeaderCard data={teamData.leader} />
        <Connector />
        
        <div className="level">
          {teamData.assistants.map((assistant, idx) => (
            <div className="card" key={idx}>
              <div className="role">{assistant.role}</div>
              <img src={`/images/${assistant.img}`} alt={assistant.name} className="photo" />
              <p className="name">{assistant.name}</p>
            </div>
          ))}
        </div>
        
        <Connector long />
        
        <div className="level team-level">
          {teamData.teams.map((team, idx) => (
            <TeamCard key={idx} role={team.role} members={team.members} />
          ))}
        </div>
        
        <Connector long />
        
        <div className="level">
          <TeamCard role={teamData.editors.role} members={teamData.editors.members} />
        </div>
      </div>
    </div>
  )
}

export default App
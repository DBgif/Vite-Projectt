import { useState, useEffect } from 'react'
import './App.css'

const teamData = {
  leader: {
    role: '🌿 Environment Leader',
    name: 'Paredes',
    img: 'Images/PAREDES.png'
  },
  assistants: [
    { role: '🌱 Sustainable Assistant', name: 'Ayala', img: 'Images/AYALA.jpeg' },
    { role: '🌍 Eco‑Secretary', name: 'Mabini', img: 'Images/Mabini.png' },
    { role: '💰 Treasurer', name: 'Jumayag', img: 'Images/JUMAYAG.jpg' }
  ],
  teams: [
    {
      role: '🌳 Documentation & Logistics',
      members: [
        { name: 'Dinlasan', img: 'Documentations and Logistics/DINLASAN.jpg' },
        { name: 'Jaropojop', img: 'Documentations and Logistics/JAROPOJOP.jpeg' },
        { name: 'Obo', img: 'Documentations and Logistics/OBO.jpg' },
        { name: 'Pepito', img: 'Documentations and Logistics/Pepito.jpg' },
        { name: 'Salvador', img: 'Documentations and Logistics/IMG_7588.PNG' }
      ]
    },
    {
      role: '♻️ CNA Organizer (Eco‑Programs)',
      members: [
        { name: 'Benghay', img: 'CNA Oraganizer/BENGHAY.jpg' },
        { name: 'Gonzales', img: 'CNA Oraganizer/GONZALES.jpg' },
        { name: 'Malabanan', img: 'CNA Oraganizer/MALABANAN.jpg' },
        { name: 'Rong', img: 'CNA Oraganizer/Rong.png' },
        { name: 'Salazar', img: 'CNA Oraganizer/SALAZAR.jpeg' },
        { name: 'Solis', img: 'CNA Oraganizer/SOLIS.jpg' }
      ]
    },
    {
      role: '🎨 Creatives',
      members: [
        { name: 'Bay', img: 'Creatives/BAY.png' },
        { name: 'Castañeda', img: 'Creatives/CASTAÑEDA (1).png' },
        { name: 'Deles', img: 'creative3.jpg' },
        { name: 'Gentilezo', img: 'Creatives/Gentilezo.jpg' },
        { name: 'Reguero', img: 'Creatives/Reguero.png' }
      ]
    }
  ],
  editors: {
    role: '✍️ Narrative Paper Editor (Climate Narratives)',
    members: [
      { name: 'Arce', img: 'Narrative Paper Editor/ARCE .png' },
      { name: 'Ego-Ugan', img: 'Narrative Paper Editor/Ego-Ugan.png' },
      { name: 'Medina', img: 'Narrative Paper Editor/MEDINA.jpg' },
      { name: 'Pedragosa', img: 'Narrative Paper Editor/PEDRAGOSA (1).png' },
      { name: 'Reyes', img: 'Narrative Paper Editor/REYES CHRISTIAN.png' }
    ]
  }
}

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
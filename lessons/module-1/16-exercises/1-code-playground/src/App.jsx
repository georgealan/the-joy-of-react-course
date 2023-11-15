import React from 'react';

function ContactCard({ name, job, email }) {
  return (
    <li className="contact-card">
      <h2>{name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{job}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  );
}

function App() {
  return (
    <ul>
      <ContactCard name="Sunita Kumar" job="Electrical Engineer" email="sunita.kumar@acme.co" />
      <ContactCard name="Henderson G. Sterling II" job="Receptionist" email="henderson-the-second@acme.co" />
      <ContactCard name="Aoi Kobayashi" job="President" email="kobayashi.aoi@acme.co" />
    </ul>
  )
}

export default App;

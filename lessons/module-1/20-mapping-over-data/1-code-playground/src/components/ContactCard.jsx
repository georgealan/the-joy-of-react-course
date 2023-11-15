function ContactCard({ name, job, email }) {
  return (
    <li className="contact-card">
      <h2>{name}</h2>
      <dl>
        <dd>Job</dd>
        <dt>{job}</dt>
        <dd>Email</dd>
        <dt>{email}</dt>
      </dl>
    </li>
  )
}

export default ContactCard
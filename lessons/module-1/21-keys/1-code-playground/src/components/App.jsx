import ContactCard from './ContactCard'

const data =[
  {
    id: 'sunita-abc123',
    name: 'Sunita Kumar',
    job: 'Electrical Engineer',
    email: 'sunita.kumar@acme.co',
  },
  {
    id: 'henderson-def456',
    name: 'Henderson G. Sterling II',
    job: 'Receptionist',
    email: 'henderson-the-second@acme.co',
  },
  {
    id: 'aio-ghi789',
    name: 'Aoi Kobayashi',
    job: 'President',
    email: 'kobayashi.aoi@acme.co',
  },
  {
    id: 'aio-tyi732',
    name: 'George Alan',
    job: 'Programmer',
    email: 'george.aoi@acme.co',
  },
]

function App() {
  return (
    <ul>
      {data.map((contacts) => (
        <ContactCard 
          key={contacts.id} // Arrays in React need to have a unique key to identify
          name={contacts.name} 
          job={contacts.job} 
          email={contacts.email} />
      ))}
    </ul>
  )
}

export default App

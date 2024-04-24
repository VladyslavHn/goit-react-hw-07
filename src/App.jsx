import ContactForm from "./components/contactForm/contactForm"
import ContactList from "./components/contactList/contactList"
import SearchBox from "./components/searchBox/searchBox"
import './App.css'

function App() {

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox  />
      <ContactList  />
    </div>
  )
}

export default App

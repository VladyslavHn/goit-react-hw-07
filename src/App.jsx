import ContactForm from "./components/contactForm/contactForm"
import ContactList from "./components/contactList/contactList"
import SearchBox from "./components/searchBox/searchBox"
import './App.css'
import { selectError, selectIsLoading } from "./redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

function App() {

    const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>error</h2>}
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox  />
      <ContactList  />
    </div>
  )
}

export default App

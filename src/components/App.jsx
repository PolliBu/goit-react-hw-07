import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import Title from './Title/Title';

function App() {
  return (
    <>
      <div>
        <Title />
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;

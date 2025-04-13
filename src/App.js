import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="phoneBook-container">
      <h1>Phone Book</h1>
      <div className="phoneBook-wrap">
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
}

export default App;

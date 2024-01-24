import './App.css';
import Notes from './components/Notes';
import NotesForm from './components/NotesForm';
import { useNotesContext } from './services/store/NotesContext';
function App() {
  return (
    <div className="App">
      <h1>Note Taking Application</h1>
      <Notes />
      <NotesForm />
    </div>
  );
}

export default App;

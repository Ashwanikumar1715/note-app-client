import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateNote from './components/CreateNote';
import ShowNoteList from './components/ShowNoteList';
import ShowNoteDetails from './components/ShowNoteDetails';
import UpdateNoteInfo from './components/UpdateNoteInfo';


const App = () => {
  return (
    <Router>
      <div>
     
        <Routes>
          <Route exact path='/' element={<ShowNoteList />} />
          <Route path='/create-note' element={<CreateNote />} />
          <Route path='/edit-note/:id' element={<UpdateNoteInfo />} />
          <Route path='/show-note/:id' element={<ShowNoteDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';

function ShowNoteList() {
  const [notes, setNote] = useState([]);

  useEffect(() => {
    axios
      .get('https://note-app-backend-4ef0.onrender.com/api/notes')
      .then((res) => {
        setNote(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowNoteList');
      });
  }, []);

  const noteList =
    notes.length === 0
      ? 'there is no Note record!'
      : notes.map((note, k) => <NoteCard note={note} key={k} />);

  return (
    <div className='ShowNoteList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Notes List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-note'
              className='btn btn-outline-warning float-right'
            >
              + Add New Note
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{noteList}</div>
      </div>
    </div>
  );
}

export default ShowNoteList;
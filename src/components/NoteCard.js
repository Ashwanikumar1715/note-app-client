import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NoteCard = (props) => {
  const note = props.note;

  return (
    <div className='card-container'>
      <img
        src={`https://source.unsplash.com/random/900×700/?${note.title}`}
        alt='notes'
        height={150}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-note/${note._id}`}><span className='span-text'>Topic:</span>{note.title}</Link>
        </h2>
        <h3><span className='span-text'>Author:</span>{note.author}</h3>
        <p><span className='span-text'>Note:</span>{note.description}</p>
      </div>
    </div>
  );
};

export default NoteCard;
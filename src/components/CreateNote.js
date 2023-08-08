import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateNote = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [note, setNote] = useState({
    title: '',
    author: '',
    description: ''
  });

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://melodic-lolly-5c5e13.netlify.app/api/notes', note)
      .then((res) => {
        setNote({
          title: '',
          author: '',
          description: ''
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateNote!');
      });
  };

  return (
    <div className='CreateNote'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Notes List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Notes</h1>
            <p className='lead text-center'>Create new Notes</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='title/subject'
                  name='title'
                  className='form-control'
                  value={note.title}
                  onChange={onChange}
                />
              </div>
              <br />

        

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={note.author}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                
                <textarea
                  type='text'
                  placeholder=' Notes here'
                  name='description'
                  className='form-control'
                  value={note.description}
                  onChange={onChange}
                ></textarea>
              </div>

           

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
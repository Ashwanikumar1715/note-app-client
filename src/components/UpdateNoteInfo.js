import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateNoteInfo(props) {
  const [note, setNote] = useState({
    title: '',
   
    author: '',
    description: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://melodic-lolly-5c5e13.netlify.app/api/notes/${id}`)
      .then((res) => {
        setNote({
          title: res.data.title,
         
          author: res.data.author,
          description: res.data.description
        });
      })
      .catch((err) => {
        console.log('Error from UpdateNoteInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: note.title,
      
      author: note.author,
      description: note.description
      
    };

    axios
      .put(`https://melodic-lolly-5c5e13.netlify.app/api/notes/${id}`, data)
      .then((res) => {
        navigate(`/show-note/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateNoteInfo!');
      });
  };

  return (
    <div className='UpdateNoteInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Note List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Note</h1>
            <p className='lead text-center'>Update Note's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Title of the Note'
                name='title'
                className='form-control'
                value={note.title}
                onChange={onChange}
              />
            </div>
            <br />

          

            <div className='form-group'>
              <label htmlFor='author'>Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={note.author}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                placeholder='Description of the Note'
                name='description'
                className='form-control'
                value={note.description}
                onChange={onChange}
              />
            </div>
            <br />


            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateNoteInfo;
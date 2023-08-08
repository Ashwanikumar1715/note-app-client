import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowNoteDetails(props) {
  const [note, setnote] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://note-app-backend-4ef0.onrender.com/api/notes/${id}`)
      .then((res) => {
        setnote(res.data);
      })
      .catch((err) => {
        console.log('Error from ShownoteDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`https://note-app-backend-4ef0.onrender.com/api/notes/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShownoteDetails_deleteClick');
      });
  };

  const noteItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{note.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Author</td>
            <td>{note.author}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Description</td>
            <td>{note.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowNoteDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show note List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>note's Record</h1>
            <p className='lead text-center'>View note's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{noteItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(note._id);
              }}
            >
              Delete note
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-note/${note._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit note
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowNoteDetails;
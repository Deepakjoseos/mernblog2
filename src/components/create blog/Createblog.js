import React from 'react';
import './createblog.css';
import { Link } from 'react-router-dom';

function Createblog(props) {
    return (
        <div className='blog'>
            <h1 className='head'>Add Blog</h1>
            <br></br>
            <br></br>
            <label>Author</label>
            <br></br>
            <input className="inputfield" type="text" placeholder="Author" />
            <br></br>
            <label>Title</label>
            <br></br>
            <input className="inputfield" type="text" placeholder="Blog Title" />
                <br></br>
            <label >Description</label>
            <br></br>
            <input className="inputfield1" type="text" placeholder="Description" />
            <br></br>
           <Link to="/article-list"> <button>Submit</button></Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
           

    );
}

export default Createblog;
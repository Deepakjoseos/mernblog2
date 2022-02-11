 import React from 'react';
 import{Link} from 'react-router-dom';
 import './header.css';
 function Header(props) {
     return (
         <div>
             <nav className='header'>
                <Link className="logo" to="/home"><h2 className='logo'>Welcome To Blog Application</h2></Link>
                <div className='articles'>
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to ="/about">About</Link>
                <Link className="link" to="/add-blog">Add Blog</Link>
                <Link className="link" to="/article-list">Blogs</Link>
                <Link className="link" to="/">Sign Out</Link>

        </div>
             </nav>
         </div>
     );
 }
 
 export default Header;
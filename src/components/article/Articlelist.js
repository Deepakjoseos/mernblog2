import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';
import articleContent from './SampleArticleDB';

function Articlelist(props) {
    return (
        <div>
          <h1 id='articles'>Blogs</h1>
          <br></br>
                {articleContent.map((i,key) => (
                  <Link className='article' key={key} to={`/article/${i.name}`}>
                    <br></br>
                  <h3>{i.title}</h3></Link>

                ))}
                

           </div>
    );
}

export default Articlelist;
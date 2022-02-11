import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from './SampleArticleDB';
import Error from '../error/error';


function Article(props) {
    const {name} = useParams();
    console.log(name);

    //Temporary storage of DB data
    const [articleData,setarticleData] = useState({upvotes:0 ,comments:[]})
    //Matching new parameter
    const article = ArticleContent.find(i =>i.name===name);
    console.log(article);
     

         //BackEnd connection fetch API

     useEffect(() => {

         fetchAPI();

        }, [name]);


    async function fetchAPI(){
        const response = await fetch(`/api/article/${name}`)
        const body = await response.json();
        console.log(body);
        setarticleData(body);
     }

     //Article does not exist in DB
    if(!article)
    return <Error />

    return (
        <div >

           <h1 className='article'>{article.title} </h1> 
           <br></br>
          <p className='upv'>This article has {articleData.upvotes} Upvotes</p>
           <p className='para'>{article.description}</p>
           <p className='para'>{article.comments}</p>

        </div>
    );
}

export default Article;
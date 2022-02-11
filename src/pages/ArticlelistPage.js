import React from 'react';
import Articlelist from '../components/article/Articlelist';
import Header from '../components/header/Header';
function ArticlelistPage(props) {
    return (
        <div>
            <Header />
            <Articlelist />
        </div>
    );
}

export default ArticlelistPage;
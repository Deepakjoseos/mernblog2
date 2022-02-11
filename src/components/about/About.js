import React from 'react';
import './about.css';
function About(props) {
    return (
        <div>
            <h1 className='about'>About This</h1>

            <p className='para'>This is an installable Blogging app that lets a user delve into a topic of choice and write a blog post, or read one of the already uploaded Blog posts.

In order to write your very own Blog post, you can conveniently login using one of your social accounts, and start penning your thoughts!

You can edit your Blog post at any time, as long as you're logged in. If you ever feel like your post is no longer a valid representation of your thoughts, you can also delete it at any instant of time.

You can also provide your opinions about any post, in the comments' section of every post, anonymously!
Your comment will always have a unique icon accompanying it.</p>
        </div>
        
    );
}

export default About;
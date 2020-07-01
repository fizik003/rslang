import React, { useState, useEffect } from 'react';

import wordCards from './vocabulary-data';
import WordsToLearn from './WordsToLearn/WordsToLearn';
import Pagination from './Pagination/Pagination';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return {
    difficultWords: store.appSettings.difficultWords,
    languageLevel: store.appSettings.level,
  }
}


const Vocabulary = (props) => {
  const [posts, setPosts] = useState([]);
  const [currentLanguageLevel] = useState(props.languageLevel);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

  useEffect(() => {
    const getPosts = () => {
      setPosts(wordCards[currentLanguageLevel]);
    }

    getPosts();
  }, []);


  // remove words for learn into deleted words
  const remove = (index) => {
    const newArr = [
      ...wordCards[currentLanguageLevel].slice(0, index),
      ...wordCards[currentLanguageLevel].slice(index + 1)
    ];

    setPosts(newArr);
  }


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <WordsToLearn posts={currentPost} remove={remove} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default connect(mapStateToProps)(Vocabulary);
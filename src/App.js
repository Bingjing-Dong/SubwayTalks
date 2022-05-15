import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MainPage from './main-page/MainPage';
import TrainPage from './train-page/TrainPage';
import PostPage from './post-page/PostPage';

import DisplayInfo from './post-page/components/displayInfoGathered';
import Signup from './main-page/components/signup/signup';
import Signin from './main-page/components/signin/signin';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/station" element={<TrainPage />} />
        <Route exact path="/make-a-post" element={<PostPage />} />
        <Route exact path="/success" element={<DisplayInfo />} />
        <Route exact path="/sign-up" element={<Signup />} />
        <Route exact path="/sign-in" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;

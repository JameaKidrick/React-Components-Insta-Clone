/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
// import dummydata

// DATA
import dummydata from './dummy-data';

// COMPONENTS
import PostsPage from './components/PostsContainer/PostsPage';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const [data, setData] = useState(dummydata)
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */}
      <SearchBarContainer />
      <PostsPage data={data} />
    </div>
  );
};

export default App;

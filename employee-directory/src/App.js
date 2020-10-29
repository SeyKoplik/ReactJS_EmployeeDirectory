import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import friends from './friends.json';

function App() {
  return (
    <>
      <Header />
      <SearchInput />
      <SearchResults />
    </>
  );
}

export default App;

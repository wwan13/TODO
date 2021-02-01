import React from 'react'
import EntireWrap from '../entireWrap/EntireWrap'
import Header from '../header/Header'
import Main from '../main/Main'
import SortNav from '../sortNav/SortNav'

function App() {
  return (
    <>
      <EntireWrap>
        <Header />
        <Main>
          <SortNav />
        </Main>
      </EntireWrap>
    </>
  );
}

export default App;

import React from 'react'
import EntireWrap from '../entireWrap/EntireWrap'
import Header from '../header/Header'
import Main from '../main/Main'
import Contents from '../contents/Contents'

function App() {
  return (
    <>
      <EntireWrap>
        <Header />
        <Main>
          <Contents />
        </Main>
      </EntireWrap>
    </>
  );
}

export default App;

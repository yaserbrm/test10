import React from 'react';
import { useMediaQuery } from 'react-responsive'
import Mobile from './Mobile/mobile';

 

function App() {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <div>
       {isMobile &&  <Mobile/>}
    </div>
  );
}

export default App;

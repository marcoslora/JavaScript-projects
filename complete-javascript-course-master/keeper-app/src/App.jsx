import React from 'react';
import Note from './Note';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Note></Note>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;

import React from 'react';

function Footer() {
  const currentTime = new Date().getFullYear();
  return (
    <footer>
      <p>copyright &#169; {currentTime} By ML</p>
    </footer>
  );
}
export default Footer;

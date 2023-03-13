import React from 'react';

const currentTime = new Date().getFullYear();

function Footer() {
  return <p>copyright &#169; {currentTime} By ML</p>;
}
export default Footer;

import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Created with ❤️ by Yash | ©{year}</p>
    </footer>
  );
}

export default Footer;

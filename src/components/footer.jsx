import React from 'react';
import '../styles/footer.css';

function Footer() {
  
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center mb-0">
          &copy; {currentYear} Delso Felipe da Silva Ferreira
        </p>
      </div>
    </footer>
  );
}

export default Footer;

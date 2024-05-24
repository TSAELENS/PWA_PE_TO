import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <header className="header-container">
      <a href="/" className="logo">Gameblog</a>
      <nav className="nav">
        <a href="/" className="nav-item">Home</a>
        <a href="/news" className="nav-item">News</a>
        <a href="/tests" className="nav-item">Tests</a>
        <a href="/populaire" className="nav-item">Populaire</a>
        <a href="/tech" className="nav-item">Tech</a>
        <a href="/geek" className="nav-item">Geek</a>
      </nav>
      <div className="header-icons">
        <input
          type="text"
          className="search-input"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="icon" onClick={togglePopup}><i className="fas fa-user"></i></div>
        {isPopupVisible && (
          <div className="popup">
            <button onClick={() => { /* Handle login */ }}>Login</button>
            <button onClick={() => { /* Handle register */ }}>Register</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

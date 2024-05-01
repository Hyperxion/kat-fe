import React from 'react';
import '../css/navigationBar.css'

export function NavigationBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
  <nav>
    <ul>
      <li>
        <a href="#" onClick={() => scrollToSection('intro-section')}>ÚVOD</a>
      </li>
      <li>
        <a href="#" onClick={() => scrollToSection('future-event-section')}>AKCIE</a>
      </li>
      <li>
        <a href="#">GALÉRIA</a>
      </li>
      <li>
        <a href="#">SPONZORI</a>
      </li>
      <li>
        <a href="#">KONTAKT</a>
      </li>
    </ul>
  </nav>
  );
}

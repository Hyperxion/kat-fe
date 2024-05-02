import React from 'react';
import '../css/navigationBar.css'

export function NavigationBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const isVisible = isInViewport(section);
      if (!isVisible) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        });
      } else {
        event.preventDefault();
      }
    }
  };

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
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
        <a href="#" onClick={() => scrollToSection('gallery-section')}>GALÉRIA</a>
      </li>
      <li>
        <a href="#" onClick={() => scrollToSection('sponsors-section')}>SPONZORI</a>
      </li>
      <li>
        <a href="#" onClick={() => scrollToSection('contact-section')}>KONTAKT</a>
      </li>
    </ul>
  </nav>
  );
}

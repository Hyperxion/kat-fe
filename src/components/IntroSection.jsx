// IntroSection.js
import React from 'react';
import { useState } from 'react';
import { ImageModal } from './ImageModal.jsx'

export function IntroSection({images}) {
  const introImageIndex = 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="intro-section" id='intro-section'>
      <div className="content-wrapper">
        <p className="intro-text">
          Vítame Vás na stránke Košického Airsoft-ového Tímu!
          </p>        
          <p className="intro-text">
          Sme skupina airsoftových nadšencov, ktorí chcú posunúť airsoft v Košiciach na ďalší level. 
          Začali sme sa stretávať už v roku 2019. Vtedy nás bolo zhruba 15 a stretávali sme sa väčšinou raz
          do týždňa, v Nedeľu. To sme ešte netušili ako dlho nám to vydrží a kam až budú naše ciele smerovať! Teraz je v našej skupine viac ako 40 mien, hoci je pravda,
          že pevné jadro tvorí tak tretina. Zakladateľom skupiny a naším vedúcim je Rado alias 'Bobo'. Hlavne jemu vďačíme za to, že sa môžeme stretávať. Bobo organizuje
          hry, vyhľadáva rôzne miesta a má víziu. Bez neho by sme sa neposkladali ani na duel :). Za to ti, Bobo, patrí veľká vďaka ;).
        </p>
        <img src={images[introImageIndex]} alt="Introduction" className="intro-image" onClick={openModal} />
        <p className="intro-text">
          Keďže sa airsoft stal z "občajného" víkendového odreagovania veľkou vášňou, rozhodli sme sa dať do toho viac, čoho výsledkom je aj táto stránka. Okrem nej pre Vás chystáme aj
          nové ihrisko priamo v Košiciach. Chceme všetkým ukázať, že airsoft je šport, ktorý stojí za pozornosť - kopec adrenálínu, zábavy ale aj fyzického vypätia na jednom mieste so
          zaujímavými ľuďmi, ktorí majú čo ponúknuť aj mimo airsoftového ihriska. S novým ihriskom príde aj zopár herných režimov ako je napríklad súboj o vlajky, dominátor či zneškodnenie
          bomby podľa známej hry Counter-Strike.
        </p>
        <p className="intro-text">
            Myslím, že je sa na čo tešiť :) Stay tuned!
        </p>
        <p className="intro-text" style={{ textAlign: 'right' }}>
            Mr. Crow
        </p>
      </div>
      <ImageModal isOpen={isModalOpen} closeModal={closeModal}  images={images}  index={introImageIndex} />
    </div>
  );
}

"use client";
import React, { useEffect } from 'react';

const Snow: React.FC = () => {
  useEffect(() => {
    const snowContainer = document.getElementById('snow-container');

    if (snowContainer) {
      const createSnowflake = () => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';

        // Tilfeldig startposisjon og størrelse
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        const size = Math.random() * 20 + 10; // Størrelse mellom 20px og 30px
        snowflake.style.fontSize = size + 'px';

        // Tilfeldig animasjonsvarighet og forsinkelse
        const duration = Math.random() * 5 + 10; // Mellom 5s og 15s
        snowflake.style.animationDuration = duration + 's';

        snowContainer.appendChild(snowflake);

        // Fjern snøflaket etter at animasjonen er ferdig
        setTimeout(() => {
          snowContainer.removeChild(snowflake);
        }, duration * 1000);
      };

      // Generer snøflak med jevne mellomrom
      const interval = setInterval(createSnowflake, 500);

      // Rydd opp når komponenten avmonteres
      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return <div id="snow-container"></div>;
};

export default Snow;

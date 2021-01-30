import React from 'react';
import './footer.css';

const Footer: React.FC = () => (
  <footer>
    <p>
      2021 &copy;&nbsp;
      <a className="footer__link" href="https://github.com/arumirinka" rel="noopener noreferrer" target="_blank">
        arumirinka
      </a>,&nbsp;
      <a className="footer__link" href="https://github.com/katerinafedotova" rel="noopener noreferrer" target="_blank">
        katerinafedotova
      </a>,&nbsp;
      <a className="footer__link" href="https://github.com/svetlana-tyshkevich" rel="noopener noreferrer" target="_blank">
        svetlana-tyshkevich
      </a>,&nbsp;
      <a className="footer__link" href="https://github.com/femiarkh" rel="noopener noreferrer" target="_blank">
        femiarkh
      </a>,&nbsp;
      <a className="footer__link" href="https://rs.school/js/" rel="noopener noreferrer" target="_blank">
        <img className="footer__img" src="https://rs.school/images/rs_school_js.svg" alt="Rolling Scopes School" />
        &nbsp;JS course
      </a>
    </p>
  </footer>
);

export default Footer;

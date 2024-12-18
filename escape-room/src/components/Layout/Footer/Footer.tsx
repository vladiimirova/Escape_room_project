import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer(): JSX.Element {
  return (
    <div className="fixed bottom-[24px] left-[56px]  text-white py-[10px]">
      <div className="flex justify-center">
        <FontAwesomeIcon icon={faInstagram} className="w-[28px] h-[28px] mr-[10px]" />
        <FontAwesomeIcon icon={faFacebook} className="w-[28px] h-[28px]" />
      </div>
    </div>
  );
}

export default Footer;

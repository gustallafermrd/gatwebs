"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';

const WhatsappLive = () => {
  const whatsappNumber = '+541133680235';
  const baseUrl = 'https://api.whatsapp.com/send';
  const whatsappMessage = 'Hola, me gustaría saber más sobre sus servicios.';
  const whatsappUrl = `${baseUrl}?phone=${whatsappNumber}&text=${whatsappMessage}&type=phone_number&app_absent=0`;

  useEffect(() => {
    const handleScroll = () => {
      const whatsappLinkElement = document.querySelector('.whatsapp-link');
      if (window.scrollY > 100) {
        whatsappLinkElement?.classList.add('visible');
      } else {
        whatsappLinkElement?.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link relative" >
          <span className=" absolute top-[7px] left-[7px] -z-50 size-10">
            <span className="flex items-center justify-center size-full animate-ping rounded-full bg-green-500 opacity-75"></span>
          </span>
          <Image src="/images/whatsapp.png" alt="Whatsapp Icon" width={40} height={40} className="whatsapp-icon z-50"/>
        </a>
    </div>
  );
};

export default WhatsappLive;

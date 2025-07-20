import React from 'react';
import './globals.css';
import WhatsappLive from './WhatsappLive';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsappLive />
      </body>
    </html>
  );
}

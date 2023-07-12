import React from 'react';

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__overlay"></div>
      <div className="banner__content">
        <h1 className="banner__title">Nothing can stop you</h1>
        <a href="/" className="white-button" title="Hello">
          FIND OUT MORE
        </a>
      </div>
    </div>
  );
}

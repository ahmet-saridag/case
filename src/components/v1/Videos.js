import React from 'react';
export default function Videos() {
  const watchLink = {
    href: 'https://www.youtube.com/playlist?list=PLsCKOwdEGYAC4Y_jMK61vIc2RaVApH53B',
    name: 'Watch All Videos',
  };
  return (
    <div className="videos">
      <div className="videos__header">
        <h3 className="videos__title">Feel the excellent wet braking with Driveways!</h3>
        <a target="_blank" rel="noreferrer" href={watchLink.href} className="white-button videos__link">
          {watchLink.name}
        </a>
      </div>
      <div className="videos__body">
        <iframe
          className="videos__iframe"
          width="100%"
          height="740"
          src="https://www.youtube.com/embed/fgXgcLIIsjc"
          title="Feel the excellent wet braking with Driveways! #EnjoyTheDrive"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <a target="_blank" rel="noreferrer" href={watchLink.href} className="white-button videos__link-mobile">
        {watchLink.name}
      </a>
    </div>
  );
}

import React from 'react';

function LibrarySongTitle({ song }) {
  return <h4 className='library__song--title'>{song.name}</h4>;
}

export default LibrarySongTitle;

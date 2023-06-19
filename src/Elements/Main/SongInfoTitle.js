import React from 'react';

function SongInfoTitle({ songState }) {
  return <h1 className='song-info__title'>{songState.currentSong[0].name}</h1>;
}

export default SongInfoTitle;

import React from 'react';
import colors from '../../Utils/Colors';

function SongInfoArtist({ songState }) {
  return (
    <h1 className='song-info__artist' style={{ color: `${colors.coral}` }}>
      {songState.currentSong[0].artist}
    </h1>
  );
}

export default SongInfoArtist;

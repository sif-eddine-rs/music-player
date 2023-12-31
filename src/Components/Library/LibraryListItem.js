import React from 'react';
import songData from '../../Data/SongData';
import LibrarySongArtist from '../../Elements/Library/LibrarySongArtist';
import LibrarySongCover from '../../Elements/Library/LibrarySongCover';
import LibrarySongTitle from '../../Elements/Library/LibrarySongTitle';

function LibraryListItem({ song, setSongState, songState, audioRef }) {
  const changeCurrentSongHandler = () => {
    setTimeout(() => {
      setSongState({
        ...songState,
        currentSong: [songData[songData.findIndex((s) => s === song)]],
      });
      if (songState.isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then((audio) => {
            audioRef.current.play();
          });
        }
      }
    }, 150);
  };
  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={changeCurrentSongHandler}
      className={`library__list-item ${
        song.id === songState.currentSong[0].id ? 'active-song' : ''
      }`}>
      <LibrarySongCover song={song} />
      <div className='library__song-column'>
        <LibrarySongTitle song={song} />
        <LibrarySongArtist song={song} />
      </div>
    </div>
  );
}

export default LibraryListItem;

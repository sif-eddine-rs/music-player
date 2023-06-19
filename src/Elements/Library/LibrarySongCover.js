function LibrarySongCover({ song }) {
  return (
    <figure className='library__song--cover'>
      <img
        src={`${song.cover}`}
        alt='Artwork'
        className='library-song-cover-art'
      />
    </figure>
  );
}

export default LibrarySongCover;

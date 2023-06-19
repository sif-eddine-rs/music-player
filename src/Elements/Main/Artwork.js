function Artwork({ songState }) {
  return (
    <div className='artwork'>
      <img
        src={`${songState.currentSong[0].cover}`}
        alt='Album Art'
        className='artwork__img'
      />
    </div>
  );
}

export default Artwork;

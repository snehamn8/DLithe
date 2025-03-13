import React, { useState } from "react";
import "./spoty.css";

const songs = [
  { id: 1, title: "Mehabooba, KGF", artist: "Ravi Basrur, Ananya Bhat", audio: "/songs/song1.mp3" },
  { id: 2, title: "Kannazhaga, 3", artist: "Dhanush, Shruti Haasan", audio: "/songs/song2.mp3" },
  { id: 3, title: "Tera Hone Laga Hoon", artist: "Atif Aslam, Alisha Chinai", audio: "/songs/song3.mp3" },
];

const SpotyApp = () => {
  const [search, setSearch] = useState("");
  const [likedSongs, setLikedSongs] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const toggleLike = (song) => {
    setLikedSongs((prev) =>
      prev.includes(song) ? prev.filter((s) => s !== song) : [...prev, song]
    );
  };

  const playSong = (song) => {
    setCurrentSong(song);
  };

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>🎵 Spotify App</h1>
      <input
        type="text"
        placeholder="🔍 Search songs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="playlist">
        <h2>🎶 Playlist</h2>
        <ul>
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <li key={song.id} className="song-item">
                <span>{song.title} - {song.artist}</span>
                <div className="buttons">
                  <button onClick={() => playSong(song)} className="play-btn">▶ Play</button>
                  <button onClick={() => toggleLike(song)} className="like-btn">
                    {likedSongs.includes(song) ? "❤️" : "🤍"}
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No songs found...</p>
          )}
        </ul>
      </div>

      <div className="liked-songs">
        <h2>💖 Liked Songs</h2>
        {likedSongs.length > 0 ? (
          <ul>
            {likedSongs.map((song) => (
              <li key={song.id} className="song-item">
                <span>{song.title} - {song.artist}</span>
                <div className="buttons">
                  <button onClick={() => playSong(song)} className="play-btn">▶ Play</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No liked songs yet...</p>
        )}
      </div>

      <button className="subscribe-btn" onClick={() => setIsSubscribed(!isSubscribed)}>
        {isSubscribed ? "✅ Subscribed" : "🔔 Subscribe"}
      </button>

      {currentSong && (
        <div className="player">
          <h3>Now Playing: {currentSong.title} - {currentSong.artist}</h3>
          <audio controls autoPlay src={currentSong.audio}></audio>
        </div>

        
      )}
    </div>
  );
};

export default SpotyApp;

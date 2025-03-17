const playlist = [
    { title: "Song 1", src: "song1.mp3" },
    { title: "Song 2", src: "song2.mp3" },
    { title: "Song 3", src: "song3.mp3" }
];

const audioPlayer = document.getElementById("audio-player");
const playlistElement = document.getElementById("playlist");

playlist.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.addEventListener("click", () => {
        audioPlayer.src = song.src;
        audioPlayer.play();
    });
    playlistElement.appendChild(li);
});

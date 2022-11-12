let players = document.querySelectorAll('audio');
let albums = document.querySelectorAll('.album-cover');

function hidePlayers() {
  players.forEach(function(el) {
    el.pause();
    el.currentTime = 0;
    el.style.display = 'none';
  });
}

hidePlayers();

albums.forEach(function(el) {
  el.onclick = (i) => {
    hidePlayers();
    switch (i.target.getAttribute('id')) {
      case 'hard-rain-album':
        document.querySelector('#hard-rain-player').style.display = 'block';
        document.querySelector('#music-playing').innerHTML = ": <i>A Hard Rain’s A‐Gonna Fall</i>";
        players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
        });
        break;
      case 'times-changin-album':
        document.querySelector('#times-changin-player').style.display = 'block';
        document.querySelector('#music-playing').innerHTML = ": <i>The Times They Are a-Changin'</i>";
        players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
        });
        break;
      case 'rolling-stone-album':
        document.querySelector('#rolling-stone-player').style.display = 'block';
        document.querySelector('#music-playing').innerHTML = ": <i>Like a Rolling Stone</i>";
        players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
        });
        break;
      case 'rainy-day-women-album':
        document.querySelector('#rainy-day-women-player').style.display = 'block';
        document.querySelector('#music-playing').innerHTML = ": <i>Rainy Day Women ♯12 & 35</i>";
        players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
        });
        break;
    }
  }
});

'use strict';


/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Isbhamu",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/isbhamu.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Ang'senandaba",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Angsenandaba.mp3",
    views: "5k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Umakhelwane",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Makhelwane.mp3",
    views: "3k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Sazi Izinsizwa",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Sazi_Izinsizwa.mp3",
    views: "1.5k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Mufunwa Wanga",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Mufunwa_wanga.mp3",
    views: "990"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Ngisendleleni",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Ngisendleleni.mp3",
    views: "6.1k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Ngiyakthanda",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Ngiyakthanda.mp3",
    views: "2.8k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Ungezi",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Ungezi.mp3",
    views: "800"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Sizijabulele",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Sizijabulele.mp3",
    views: "3k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Emendweni",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Emendweni.mp3",
    views: "2k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Usefikile Umaphathefika",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Usefikile_Umaphathefika.mp3",
    views: "1.5k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Imali Yami",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Imali_yami.mp3",
    views: "1k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Uthando",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Uthando.mp3",
    views: "3.1k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Emabhaceni",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Emabhaceni.mp3",
    views: "700"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/dumakahle_2024.jpg",
    title: "Imali Ngeke Iphele",
    album: "Ang'senandaba",
    year: 2024,
    artist: "iPhatha's",
    musicPath: "./music/Imali_ngeke_iphele_ft_Anzo.mp3",
    views: "3k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Awukabi Yindoda",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Awukabi_Indoda-.mp3",
    views: "7k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Ilanga",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Ilanga.mp3",
    views: "6k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Inja Elalendlini",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Inja_Elalendlini.mp3",
    views: "8k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Ikhehla lase lenke",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Ikhehla_Lase_Lenke.mp3",
    views: "10k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Umama Onjani",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Umama_Onjani.mp3",
    views: "5k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "20k",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/20k.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Isono Yini",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Isono_Yini.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Lena Emsiga",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Lena_Emsinga.mp3",
    views: "13k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Usudlala Ngami",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Usudlala_Ngami.mp3",
    views: "9k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Udiletha",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Udiletha.mp3",
    views: "6k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Ibhunguka",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Ibhunguka.mp3",
    views: "3k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Siluqale Phansi",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Siluqale_Phansi.mp3",
    views: "6.8k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Umuhle Kaningi",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Umuhle_Kaningi.mp3",
    views: "2.9k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/592x592bb.webp",
    title: "Isina Muva",
    album: "Ikhehla lase lenke",
    year: 2023,
    artist: "uDumakahle",
    musicPath: "./music/Isina_Muva.mp3",
    views: "3.4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Wagqoka Bo Wesbali",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Wagqoka_Bo_Wesbali.mp3",
    views: "19k"
  },
    {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Isdingo Sempilo",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Isdingo_Sempilo.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Amagama Amnandi",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Amagama_Amnandi.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Bafuna Sihlukane",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Bafuna_Sihlukane(feat. Nomfundo Moh).mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "S'qhuba Izinkomo",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Sqhuba_Izinkomo.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Ejele",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Ejele.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Uchomangani",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Uchomangani.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Ifoni Yami",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Ifoni_Yami.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Uqeda Mathe Mahhala",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Uqeda_Mathe_Mahhala.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Awonile",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Awonile.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Nqabeleni",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Nqabeleni.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Kuyenzeka",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Kuyenzeka.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Kwampumelelo",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Kwampumelelo.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Angiyi Ekhaya",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Angiyi_Ekhaya.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Amandla Edlozi",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Amandla_Edlozi.mp3",
    views: "4k"
  },
  {
    backgroundImage: "./images/dumakahle_background.JPG",
    posterUrl: "./images/Udumakahle.jpg",
    title: "Umlanjwana",
    album: "S'qhuba Izinkomo",
    year: 2022,
    artist: "uDumakahle",
    musicPath: "./music/Umlanjwana.mp3",
    views: "4k"
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
      <span class="span">${musicData[i].title} </span>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);


/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time]");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    skipNext();
  }
}


/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
    

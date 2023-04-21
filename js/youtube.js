let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'PXXkK1aVxrU',
    playerVars : {
      autoplay: true,
      loop: true,
      Playlist: 'PXXkK1aVxrU',
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      }
    }
  });
}
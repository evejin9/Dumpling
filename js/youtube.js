let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'PXXkK1aVxrU',
    playerVars : {
      autoplay: true,
      loop: true,
      playlist: 'PXXkK1aVxrU',
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      }
    }
  });
}
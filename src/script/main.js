// Video Playback Script
const videoContainer = document.getElementById('videoContainer');
const videoThumbnail = document.getElementById('videoThumbnail');
const playOverlay = document.getElementById('playOverlay');
const videoPlayer = document.getElementById('videoPlayer');

videoContainer.addEventListener('click', () => {
  // Hide thumbnail and overlay
  videoThumbnail.classList.add('hidden');
  playOverlay.classList.add('hidden');
  
  // Show and play video
  videoPlayer.classList.remove('hidden');
  videoPlayer.play();
});
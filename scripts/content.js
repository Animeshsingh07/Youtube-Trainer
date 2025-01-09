document.addEventListener('visibilitychange', () => {
  const video = document.querySelector('video');
  if (!video) return;

  if (document.hidden) {
    if (!video.paused) {
      video.pause();
      video.setAttribute('data-paused-by-extension', 'true');
    }
  } else {
    if (video.getAttribute('data-paused-by-extension') === 'true') {
      video.play();
      video.removeAttribute('data-paused-by-extension');
    }
  }
});

const device = getDevice();
const anchor = document.getElementById('facebook-live');
const live_id = new URLSearchParams(location.search).get('id');
if (live_id) {
  if (device === 'computer') anchor.href += live_id;
  else if (device === 'android') anchor.href = 'fb://fullscreen_video_redirect/' + live_id;
  else if (device === 'ios') anchor.href = 'fb://fullscreen_video/' + live_id;
}

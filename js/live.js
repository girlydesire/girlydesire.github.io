const device = getDevice();
const anchor = document.getElementById('facebook-live');
const thumb = document.getElementById('live-thumbnail');
const wording = document.getElementById('live-wording');
const live_id = new URLSearchParams(location.search).get('id');

if (live_id) {

  wording.textContent = 'เข้ารับชม LIVE จาก Girly Desire';
  thumb.src = 'https://api.shophil.com/facebook-video-thumb/' + live_id;

  if (device === 'computer') anchor.href = 'https://www.facebook.com/GirlyDesire/videos/' + live_id;
  else if (device === 'ios') anchor.href = 'fb://fullscreen_video/' + live_id;
  else if (device === 'android') {
  	const version = getAndroidVersion();
  	if (version && version >= 8) {
  	  anchor.href = 'fb://fullscreen_video_redirect/' + live_id;
  	} else {
      anchor.href = 'fb://fullscreen_video/' + live_id;
    }  	
  }

} else if (device !== 'computer') {

  anchor.href = 'fb-messenger://user/379172625480987?ref=live-notification';

}

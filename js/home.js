const device = getDevice();
const social = ['messenger', 'facebook', 'instagram'];
const android_fb = 'fb://page/379172625480987';
const mobile_links = [
  'fb-messenger://user/379172625480987',
  'fb://profile/379172625480987',
  'instagram://user?username=girlydesire',
];

if (device !== 'computer') {
  social.forEach(function(id, index) {
    const anchor = document.getElementById(id);
    if (id === 'facebook' && device === 'android') anchor.href = android_fb;
    else anchor.href = mobile_links[index];
  });
}

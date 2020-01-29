// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-66171212-1', 'auto');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');

// Facebook Pixel Code
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '598850273639675'); // Insert your pixel ID here.
fbq('track', 'PageView');


// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());


// getDevice function

function isMobile() {
  return (typeof orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function isAndroid() {
  return /android|silk/i.test(navigator.userAgent);
}

function getAndroidVersion() {
  const ua = navigator.userAgent.match(/android ([0-9])/i);
  if (ua && ua.length > 1) return ua[1];
}

function getDevice() {
  if (!isMobile()) return 'computer';
  else if (isAndroid()) return 'android';
  else return 'ios';
}


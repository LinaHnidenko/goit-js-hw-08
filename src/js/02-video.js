import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onTimeUpdate = function (data) {
  //   console.log(data);
  localStorage.setItem(VIDEO_CURRENT_TIME, data.seconds);
};
player.on('timeupdate', throttle(onTimeUpdate, 2000));

player.setCurrentTime(localStorage.getItem(VIDEO_CURRENT_TIME) || 0);

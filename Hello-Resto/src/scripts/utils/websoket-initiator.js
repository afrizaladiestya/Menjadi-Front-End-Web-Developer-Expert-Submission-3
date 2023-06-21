/* eslint-disable no-undef */

import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const movie = JSON.parse(message.data);

    NotificationHelper.sendNotification({

      title: `${restaurant.name} is ready!`,
      options: {
        body: movie.overview,
        image: `${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}`,
      },
    });
  },
};

export default WebSocketInitiator;

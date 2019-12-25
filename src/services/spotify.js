import SpotifyWebApi from "spotify-web-api-js";

import {spotifyAccessToken} from "../store";

let spotifyService = new SpotifyWebApi();

// TODO : What Happens If `token` Subscription Is Not Unsubscribed?
spotifyAccessToken.subscribe(token => {
  spotifyService.setAccessToken(token);
});

export default spotifyService;

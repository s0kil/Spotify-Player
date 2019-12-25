import SpotifyWebApi from "spotify-web-api-js";

import {spotifyAccessToken} from "../store";

let spotifyService = new SpotifyWebApi();

spotifyAccessToken.subscribe(token => {
  spotifyService.setAccessToken(token);
});

export default spotifyService;

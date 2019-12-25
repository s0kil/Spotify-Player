<script>
  import {onMount} from "svelte";
  import {HashGet} from "hashget";

  import {spotifyAccessToken} from "../store";

  const SpotifyLoginUrl = `https://accounts.spotify.com/authorize
?client_id=${process.env.Spotify_Client_ID}
&redirect_uri=${encodeURIComponent(process.env.Redirect_URI)}
&response_type=token`;

  function getAccessToken() {
    let locHash = new HashGet();
    if (locHash.has("access_token")) {
      // window.location.hash = ""; // Clean The URL
      spotifyAccessToken.set(locHash.getValue("access_token"))
    }
  }

  onMount(() => {
    getAccessToken();
  });
</script>

<style>
  a {
    color: black;
  }
</style>

<button>
  <a href="{SpotifyLoginUrl}">Login To Spotify</a>
</button>

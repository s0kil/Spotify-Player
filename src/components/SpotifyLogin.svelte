<script>
  const SpotifyLoginUrl = `https://accounts.spotify.com/authorize
?client_id=${process.env.Spotify_Client_ID}
&redirect_uri=${encodeURIComponent(process.env.Redirect_URI)}
&response_type=token
&scope=user-read-recently-played`;
</script>

<style>
  a {
    color: black;
  }
</style>

<button>
  <a href="{SpotifyLoginUrl}">Login To Spotify</a>
</button>

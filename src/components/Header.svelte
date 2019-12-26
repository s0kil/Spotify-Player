<script>
  import Back from "./icons/Back.svelte";
  import Forward from "./icons/Forward.svelte";

  const SpotifyLoginUrl = `https://accounts.spotify.com/authorize
?client_id=${process.env.Spotify_Client_ID}
&redirect_uri=${encodeURIComponent(process.env.Redirect_URI)}
&response_type=token
&scope=user-read-recently-played`;
</script>

<style>
  header {
    position: sticky;
    top: 0;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  header > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  button {
    border: none;
  }

  .back, .forward {
    height: 34px;
    width: 34px;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
  }

  .back {
    margin-right: 16px;
  }

  .sign-up,
  .login {
    width: 120px;
    height: 100%;
    font-weight: bolder;
  }

  .sign-up {
    background-color: transparent;
    color: #fff;
  }

  .login {
    background-color: #fff;
    color: #181818;
    border-radius: 500px;
  }
</style>

<header>
  <div>
    <div>
      <button class="back">
        <Back/>
      </button>
      <button class="forward">
        <Forward/>
      </button>
    </div>
    <div>
      <button class="sign-up">
        SIGN UP
      </button>
      <a href="{SpotifyLoginUrl}">
        <button class="login">
          LOG IN
        </button>
      </a>
    </div>
  </div>
</header>

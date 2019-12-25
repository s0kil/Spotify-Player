<script>
  import SpotifyService from "../../services/spotify";

  import SpotifyLogin from "../../components/SpotifyLogin.svelte";

  let playlists = SpotifyService.getFeaturedPlaylists();
</script>

<SpotifyLogin/>

{#await playlists}
  <p>Loading Featured Playlists</p>
{:then playlistsData}
    {#each playlistsData.playlists.items as playlist}
      <p>{playlist.name}</p>
      <p>{@html playlist.description}</p>
      <img src="{playlist.images[0].url}" alt="{playlist.name}">
      <hr>
    {/each}
{:catch error}
  <p>{error.message}</p>
{/await}

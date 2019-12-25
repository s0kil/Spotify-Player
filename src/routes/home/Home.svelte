<script>
  import {onMount} from "svelte";

  import SpotifyService from "../../services/spotify";

  import SpotifyLogin from "../../components/SpotifyLogin.svelte";

  let playlists;
  onMount(() => {
    playlists = SpotifyService.getFeaturedPlaylists();
  });
</script>

<SpotifyLogin/>

{#if playlists}
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
      <h1>Error</h1>
      <code>{error.response}</code>
      {console.error(error)}
    {/await}
{/if}

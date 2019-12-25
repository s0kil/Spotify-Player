<script>
  import {tokenExists} from "../../store";
  import SpotifyService from "../../services/spotify";
  import {onMount} from "svelte";

  import SpotifyLogin from "../../components/SpotifyLogin.svelte";
  import PlaylistCard from "../../components/PlaylistCard.svelte";

  onMount(async () => {
    if ($tokenExists) {
      // TODO Load User Recently Played Tracks
      // let data = await SpotifyService.getMyRecentlyPlayedTracks();
      // console.log(data);
    }
  });
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    padding: 0 32px;
  }
</style>

<SpotifyLogin/>

{#if $tokenExists}
    {#await SpotifyService.getFeaturedPlaylists()}
      <p>Loading Featured Playlists</p>
    {:then playlistsData}
      <div>
          {#each playlistsData.playlists.items as playlist}
            <PlaylistCard
                name="{playlist.name}"
                tagline="{playlist.description}"
                image="{playlist.images[0].url}"
            />
          {/each}
      </div>
    {:catch error}
      <h1>Error</h1>
      <code>{error.response}</code>
      {console.error(error)}
    {/await}
{/if}

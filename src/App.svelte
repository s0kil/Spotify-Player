<script>
  import "modern-normalize"; // Normalize Browsers Default Style
  import "simple-scrollbar/simple-scrollbar.css"; // TODO : Add Custom Scrollbar Styles
  import "./index.css"; // Global Styles

  import {onMount} from "svelte";
  import {Router, Route} from "svelte-routing";
  import scrollbar from "simple-scrollbar"; // TODO : Rewrite Scrollbar In Svelte?

  import routes from "./routes/index";

  import Home from "./routes/home/Home.svelte";
  import Search from "./routes/search/Search.svelte";
  import AccountSettings from "./routes/settings/Account.svelte";
  import Collection from "./routes/collection/Collection.svelte";
  import AlbumsCollection from "./routes/collection/Albums.svelte";
  import TracksCollection from "./routes/collection/Tracks.svelte";
  import ArtistsCollection from "./routes/collection/Artists.svelte";
  import PodcastsCollection from "./routes/collection/Podcasts.svelte";
  import PlaylistsCollection from "./routes/collection/Playlists.svelte";
  import MadeForYouCollection from "./routes/collection/MadeForYou.svelte";

  import NavBar from "./components/NavBar.svelte";

  onMount(() => {
    // Initialize Scrollbar
    scrollbar.initEl(document.getElementById("main-body"));
  });
</script>

<style>
  main {
    width: 100vw;
    position: fixed;

    /* Thanks To : https://github.com/rachelandrew/cssgrid-ama/issues/24 */
    display: grid;
    grid-template-columns: [navbar] 230px [mainbody] 1fr;
    grid-template-rows: 100vh auto;
  }

  #main-body {
    grid-column: mainbody;
  }
</style>

<main>
  <NavBar/>

  <div id="main-body">
    <Router>
      <Route path="{routes.collection.madeForYou}" component="{MadeForYouCollection}"/>
      <Route path="{routes.collection.playlists}" component="{PlaylistsCollection}"/>
      <Route path="{routes.collection.podcasts}" component="{PodcastsCollection}"/>
      <Route path="{routes.collection.artists}" component="{ArtistsCollection}"/>
      <Route path="{routes.collection.tracks}" component="{TracksCollection}"/>
      <Route path="{routes.collection.albums}" component="{AlbumsCollection}"/>
      <Route path="{routes.collection.index}" component="{Collection}"/>

      <Route path="{routes.settings.account}" component="{AccountSettings}"/>
      <Route path="{routes.search.index}" component="{Search}"/>
      <Route path="{routes.home}" component="{Home}"/>
    </Router>
  </div>
</main>

<script>
  import {Router, Route} from "svelte-routing";

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
</script>

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

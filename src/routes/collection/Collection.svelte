<script>
  import {navigate} from "svelte-routing";
  import routes from "../index";

  // Redirect To Playlists Collection
  navigate(routes.collection.playlists, {replace: true});
</script>

<script>
  import Logo from "./Logo.svelte";

  import {link} from "svelte-routing";
  import routes from "../routes/index";
</script>

<style>
  nav {
    grid-area: navbar;

    padding-top: 24px;
    background-color: rgb(0, 0, 0);
  }

  .logo {
    width: 131px;
    height: 40px;
    padding-left: 24px;
  }

  .logo a {
    color: rgb(255, 255, 255);
  }
</style>

<nav>
  <div class="logo">
    <a href="{routes.home}" use:link>
      <Logo/>
    </a>
  </div>


</nav>

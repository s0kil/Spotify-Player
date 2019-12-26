<script>
  import {Router} from "svelte-routing";

  import routes from "../routes/index";

  import Logo from "./Logo.svelte";
  import NavLink from "./NavLink.svelte";
  import HomeIcon from "./icons/Home.svelte";
  import SearchIcon from "./icons/Search.svelte";
  import LibraryIcon from "./icons/Library.svelte";
</script>

<style>
  nav {
    grid-column: navbar;
    grid-row: navbar;

    padding-top: 24px;
    background-color: rgb(0, 0, 0);
  }

  .logo {
    width: 130px;
    height: 40px;
    padding-left: 24px;
    margin-bottom: 18px;
  }

  .nav-item {
    height: 40px;
    padding: 0 24px;
    position: relative;

    display: flex;
    align-items: center;
  }

  .nav-item span {
    /*TODO : Figure Out Why Element Is Not Vertically Aligned*/
    margin-left: 16px;
  }

  :global(.nav-item .nav-link-active:before) {
    content: "";
    width: 4px;
    display: block;
    background-color: #1ed760;

    position: absolute;
    left: 0;
    top: 5px;
    bottom: 5px;
  }
</style>

<Router>
  <nav>
    <div class="logo">
      <NavLink to="{routes.home}">
        <Logo/>
      </NavLink>
    </div>

    <ul>
      <li class="nav-item">
        <NavLink to="{routes.home}">
          <HomeIcon/>
          <span>Home</span>
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="{routes.search.index}">
          <SearchIcon/>
          <span>Search</span>
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="{routes.collection.index}">
          <LibraryIcon/>
          <span>Your Library</span>
        </NavLink>
      </li>
    </ul>
  </nav>
</Router>

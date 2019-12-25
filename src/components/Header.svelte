<script>
  import { Router } from "svelte-routing";
  import Back from "./icons/Forward.svelte";
  import Forward from "./icons/Back.svelte";
  import routes from "../routes/index";
</script>

<style>
  header {
    position: fixed;
    left: 230px;
    width: 85vw;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 16px 24px;
  }
  header > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .back, .forward {
    height: 34px;
    width: 34px;
  }
</style>

<header>
  <div>
    <div>
      <button class="back">
        <Back />
      </button>
      <button class="forward">
        <Forward />
      </button>
    </div>
    <div>
      UserLink
    </div>
  </div>
</header>

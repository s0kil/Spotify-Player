<script>
  import { Router } from "svelte-routing";
  import Forward from "./icons/Forward.svelte";
  import Back from "./icons/Back.svelte";
  import routes from "../routes/index";
</script>

<style>
  header {
    grid-area: mainbody;
    position: sticky;
    top:0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    background-color: rgb(0, 0, 0, 0.4);
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
    background-color: rgb(0, 0, 0,0.7);
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
        <Back />
      </button>
      <button class="forward">
        <Forward />
      </button>
    </div>
    <div>
      <button class="sign-up">
        SIGN UP
      </button>
      <button class="login">
        LOG IN
      </button>
    </div>
  </div>
</header>

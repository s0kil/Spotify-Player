<script>
  import {fade} from "svelte/transition";

  export let name = "";
  export let image = "";
  export let tagline = "";
</script>

<style>
  .card {
    width: 180px;
    height: 260px;

    border-radius: 8px;

    color: rgb(255, 255, 255);
    background-color: rgb(40, 40, 40);

    margin: 10px;
    padding: 20px 20px 16px 20px;
  }

  img {
    width: 146px;
    height: 146px;
  }

  h4 {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    margin-top: 8px;
    overflow: hidden;
  }

  p {
    height: 35px;
    font-size: 12px;
    line-height: 18px;
    color: rgb(179, 179, 179);
    padding: 0;
    margin-top: 4px;
    overflow: hidden;
  }
</style>

<div class="card">
  <img src="{image}" alt="{name}" in:fade={{duration: 300}}>
  <h4>{name}</h4>
  <p>{tagline}</p>
</div>

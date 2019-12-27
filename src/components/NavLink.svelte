<script>
  import {Link} from "svelte-routing";

  export let to;

  function getProps({location, href, isPartiallyCurrent, isCurrent}) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    if (isActive) {
      return {class: "nav-link-active"};
    }
    return {};
  }
</script>

<style>
  div {
    display: flex;
    align-items: center;
  }
</style>

<Link to="{to}" getProps="{getProps}">
  <div>
    <slot/>
  </div>
</Link>

<script lang="ts">
  import { QlorbRuntime } from "$apps/Qlorb/ts/runtime";
  import Options from "./OnScreenDisplay/Options.svelte";
  import Score from "./OnScreenDisplay/Score.svelte";

  export let runtime: QlorbRuntime;
</script>

<div class="osd fullscreen">
  <div class="topleft">
    <Options {runtime} />
  </div>
  <div class="topright" />
  <div class="bottomleft">
    <Score {runtime} />
  </div>
</div>

<script lang="ts">
  import Page from "$state/Desktop/Components/ProcessRenderer/Window/Page.svelte";
  import { onMount } from "svelte";
  import { QlorbRuntime } from "../ts/runtime";
  import Background from "./Main/Background.svelte";
  import Game from "./Main/Game.svelte";
  import OnScreenDisplay from "./Main/OnScreenDisplay.svelte";
  export let runtime: QlorbRuntime;

  let level = 0;

  onMount(() => {
    runtime.flushStores();
    runtime.Score.subscribe((v) => (level = Math.floor(v / 100)));
  });
</script>

<Page bind:store={runtime.CurrentPage} name="game">
  <div class="game level-{level}">
    <Background />
    <OnScreenDisplay {runtime} />
    <Game {runtime} />
  </div>
</Page>

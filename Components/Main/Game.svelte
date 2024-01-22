<script lang="ts">
  import { QlorbRuntime } from "$apps/Qlorb/ts/runtime";
  import { Box } from "$apps/Qlorb/ts/types";
  import { onMount } from "svelte";
  import BoxComponent from "./Game/Box.svelte";
  export let runtime: QlorbRuntime;

  const { Clicks, Score, Boxes } = runtime;

  let offset = 0;
  let boxes: Box[];

  Clicks.subscribe((v) => {
    const val = (v + 1) * (runtime.BOX_SIZE + runtime.BOX_SIZE / 2);

    offset = val / 2 - runtime.BOX_SIZE / 2;
    offset = -offset;
  });

  Score.subscribe((v) => {
    if (v < 0) runtime.Score.set(0);
  });

  Boxes.subscribe((v) => (boxes = v));

  onMount(() => {
    runtime.spawnBox(null, false, true);
  });

  function fail(e?: Event) {
    if (e) e.preventDefault();

    runtime.clickReset();
  }
</script>

<div class="game fullscreen">
  <div
    class="boxes"
    style="--boxsize: {runtime.BOX_SIZE}px; --boxes-offset: {offset}px;"
  >
    <button class="misclick-trigger" on:click={fail} on:contextmenu={fail} />

    {#if boxes}
      {#each boxes as box}
        <BoxComponent {runtime} {box} />
      {/each}
    {/if}
  </div>
</div>

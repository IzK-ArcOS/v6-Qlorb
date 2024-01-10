<script lang="ts">
  import { QlorbRuntime } from "$apps/Qlorb/ts/runtime";
  import { onMount } from "svelte";

  export let runtime: QlorbRuntime;

  let oldScore = "";
  let score = "";
  let clicks = "";
  let scoreN = 0;

  onMount(() => {
    runtime.OldScore.subscribe(
      (v) => (oldScore = v.toString().padStart(6, "0"))
    );

    runtime.Score.subscribe((v) => {
      scoreN = v;
      score = v.toString().padStart(6, "0");
    });

    runtime.Clicks.subscribe((v) => (clicks = v.toString().padStart(3, "0")));
  });
</script>

<div class="score">
  <span class="current">{score}</span>
  <div class="top">
    <div class="stat">
      <span class="label">Old</span>
      <span class="value">{oldScore}</span>
    </div>
    <div class="stat">
      <span class="label">Clicks</span>
      <span class="value">{clicks}</span>
    </div>
    <div class="stat">
      <span class="label">Level</span>
      <span class="value">{Math.floor(scoreN / 100)}</span>
    </div>
  </div>
</div>

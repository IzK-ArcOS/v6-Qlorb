<script lang="ts">
  import { QlorbRuntime } from "$apps/Qlorb/ts/runtime";
  import { UserDataStore } from "$ts/stores/user";

  export let runtime: QlorbRuntime;

  let topScore = "";
  let score = "";
  let clicks = "";
  let scoreN = 0;

  const { Score, Clicks } = runtime;

  function setTopScore(score: number) {
    if (!$UserDataStore.appdata.QlorbApp) $UserDataStore.appdata.QlorbApp = { top: 0 };

    const currentTop = ($UserDataStore.appdata.QlorbApp.top as number) || 0;

    if (score > currentTop) $UserDataStore.appdata.QlorbApp.top = score;
  }

  UserDataStore.subscribe((v) => {
    if (!v.appdata.QlorbApp || !v.appdata.QlorbApp.top) return (topScore = "000000");

    topScore = v.appdata.QlorbApp.top.toString().padStart(6, "0");
  });

  Score.subscribe((v) => {
    scoreN = v;
    score = v.toString().padStart(6, "0");

    setTopScore(v);
  });

  Clicks.subscribe((v) => (clicks = v.toString().padStart(3, "0")));
</script>

<div class="score">
  <span class="current">{score}</span>
  <div class="top">
    <div class="stat">
      <span class="label">Top</span>
      <span class="value">{topScore}</span>
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

<script lang="ts">
  import { QlorbRuntime } from "$apps/Qlorb/ts/runtime";

  export let runtime: QlorbRuntime;

  function back() {
    runtime.switchPage("intro");
  }

  function reset() {
    runtime.flushStores();
  }
</script>

<button class="material-icons-round" on:click={back}>
  arrow_back_ios_new
</button>

<button class="material-icons-round" on:click={reset}> refresh </button>

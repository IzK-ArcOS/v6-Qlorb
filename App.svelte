<script lang="ts">
  import { onMount } from "svelte";
  import "./css/main.css";
  import { App } from "$types/app";
  import Intro from "./Components/Intro.svelte";
  import Main from "./Components/Main.svelte";
  import Start from "./Components/Start.svelte";
  import { QlorbRuntime } from "./ts/runtime";

  export let runtime: QlorbRuntime;
  export let app: App;

  onMount(() => {
    runtime.switchPage("intro");
  });
</script>

{#if runtime}
  <Main {runtime} />
  <Intro {runtime} {app} />
  <Start {runtime} {app} />
{/if}

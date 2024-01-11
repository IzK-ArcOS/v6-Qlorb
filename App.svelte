<script lang="ts">
  import { App } from "$types/app";
  import { onMount } from "svelte";
  import Intro from "./Components/Intro.svelte";
  import Main from "./Components/Main.svelte";
  import Start from "./Components/Start.svelte";
  import "./css/main.css";
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

<script lang="ts">
  import videoStream from "./videoStreamAction.svelte";
  import VideoManager from "./VideoManager.svelte";

  let { title, ids, children } = $props();
  $effect(() => {
    VideoManager.init(ids);
  });
</script>

<div
  class="absolute z-10 grid h-screen w-screen place-content-center font-serif"
>
  <div class="flex flex-col justify-center items-center px-8">
    <div class="text-white text-8xl">{title}</div>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
{#each VideoManager.ids as id}
  <div class="video absolute grid place-content-center">
    <video use:videoStream={{ id }} data-status="IDLE" muted playsinline
    ></video>
  </div>
{/each}

<!-- <ul class="absolute bottom-0 z-20">
	{#each VideoManager.ids as id}
		<li>{id}: {VideoManager.clock?.[id] || 0}</li>
	{/each}
</ul> -->

<style>
  .video {
    transition: all 2s;
  }
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  :global(.video:has(video[data-status="TRANSITION-OUT"])) {
    opacity: 0;
    z-index: 2;
  }
  :global(.video:has(video[data-status="IDLE"])) {
    opacity: 0;
    z-index: 0;
  }
  :global(.video:has(video[data-status="PLAYING"])) {
    opacity: 1;
    z-index: 1;
  }
</style>

<script>
  import { innerHeight } from "svelte/reactivity/window";
  let { children, margin = { top: 0, bottom: 0, left: 0, right: 0 } } =
    $props();

  let el = null;
  let steps = 100;
  let percent = $state(0);
  let observer = null;

  function intersectPercent(entries) {
    entries.forEach((entry) => {
      percent = entry.intersectionRatio; //Math.round(Math.ceil(entry.intersectionRatio * 100));
      document.dispatchEvent(
        new CustomEvent("percent", { detail: percent, bubbles: true })
      );
    });
  }

  function stepsToThreshold(steps) {
    return [...Array(steps).keys()].map((n) => n / 100);
  }
  $effect(() => {
    const options = {
      rootMargin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`,
      threshold: stepsToThreshold(steps),
    };
    observer = new IntersectionObserver(intersectPercent, options);
    observer.observe(el);
  });
</script>

<div bind:this={el}>
  {@render children()}
</div>

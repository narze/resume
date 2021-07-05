<script lang="ts">
  let hide = false

  function hideToggle(e: Event) {
    hide = !hide
    const el = e.target as HTMLInputElement
    const parentEl = el.parentNode as HTMLInputElement

    if (hide) {
      parentEl.classList.add("web-only", "text-gray-300")
    } else {
      parentEl.classList.remove("web-only", "text-gray-300")
    }
  }
</script>

<button class="hide-toggle web-only" on:click={hideToggle}
  >{hide ? "[Show]" : "[Hide]"}</button
>

<style>
  .hide-toggle {
    @apply text-gray-700 underline;
  }
</style>

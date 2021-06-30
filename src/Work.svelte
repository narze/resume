<script lang="ts">
  export let position: string = ""
  export let company: string = ""
  export let url: string = ""
  export let years: string[] = []
  export let details: string[] = []
</script>

<div class="work-experience">
  <div class="flex font-bold mb-2">
    <div class="flex-1 text-left">{position}</div>
    <div class="flex-0">
      <a href={url} target="_blank" rel="noreferrer">{company}</a>
    </div>
    <div class="flex-1 text-right">{years.join("-")}</div>
  </div>
  <ul class="text-left list-disc pl-8">
    {#each details as detail}
      <li>
        {detail}
      </li>
    {/each}
  </ul>
</div>

<style>
  .work-experience {
    @apply my-4;
  }

  a {
    text-decoration: underline;
  }

  @media print {
    ul {
      @apply pl-6;
    }

    .work-experience {
      @apply my-2;
    }
  }
</style>

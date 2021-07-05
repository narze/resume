<script lang="ts">
  import Tailwind from "./Tailwind.svelte"
  import Intro from "./Intro.svelte"
  import Work from "./Work.svelte"
  import Kofi from "./Kofi.svelte"
  import HideToggle from "./HideToggle.svelte"
  import {
    educations,
    fullVersionLink,
    interests,
    introData,
    projects,
    sourceLink,
    technologies,
    workExperiences,
  } from "./data"

  let editMode = false

  function toggleMode() {
    editMode = !editMode
  }
</script>

<!-- Remove this is you does not want Kofi widget on your site -->
{#if introData.github == "narze"}
  <Kofi name={introData.github} />
{/if}

<Tailwind />

<header
  class="web-only text-center p-4 sm:p-6 bg-green-400 text-white w-screen"
>
  <h1 class="text-4xl">Resumette</h1>
  <h3>
    <button on:click={toggleMode} class="underline text-lg"
      >{editMode ? "[View]" : "[Edit]"}</button
    >
    <button on:click={() => window.print()} class="underline text-lg"
      >[Print]</button
    >
  </h3>
  <p>
    Printer-friendly standard résumé, any HTML tags with <code>web-only</code> CSS
    class will be hidden on print.
  </p>
  <p>
    You can toggle <button on:click={toggleMode} class="underline"
      >[Edit Mode]</button
    > to hide some sections before printing.
  </p>
  (<a href={sourceLink} target="_blank" rel="noopener">Source</a>)
</header>

<main
  class="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl {editMode
    ? 'edit-mode'
    : 'display-mode'}"
>
  <Intro {...introData} />

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left">
      Technologies and Languages
    </h2>
    <hr />
    <ul class="text-left list-disc pl-8">
      {#each technologies as tech}
        <li>
          <HideToggle />
          <span class="w-28 inline-block">{tech.section}</span>
          <span>{tech.details}</span>
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left">Education</h2>
    <hr />

    <ul class="text-left list-disc pl-8">
      {#each educations as edu}
        <li>
          <HideToggle />
          <strong>{edu.head}</strong>, {edu.details}
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left">Work Experience</h2>
    <hr />

    {#each workExperiences as exp}
      <Work {...exp} />
    {/each}
  </section>

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left">Projects</h2>
    <hr />

    <ul class="text-left list-disc pl-8">
      {#each projects as project}
        <li>
          <HideToggle />
          <strong>{project.name}</strong>
          - {project.details}
          <a href="https://{project.url}" target="_blank" rel="noreferrer"
            ><strong>{project.url}</strong></a
          >
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left">Interests</h2>
    <hr />

    <ul class="text-left list-disc pl-8">
      {#each interests as interest}
        <li>
          <HideToggle />
          {interest}
        </li>
      {/each}
    </ul>
  </section>

  <footer class="print-only">
    (See <a href={fullVersionLink} target="_blank" rel="noopener"
      >full version</a
    >
    or <a href={sourceLink} target="_blank" rel="noopener">source</a>)
  </footer>
</main>

<style>
  main {
    overflow-x: hidden;
  }

  a {
    text-decoration: underline;
  }

  section {
    @apply my-4;
  }

  section h2 {
    @apply font-semibold;
  }

  section hr {
    @apply mt-0 mb-2;
    border-color: darkgrey;
  }

  :global(.print-only) {
    display: none;
  }

  :global(main.display-mode .hide-toggle) {
    display: none;
  }

  @media print {
    * {
      @apply text-xs;
    }

    :global(.print-only) {
      display: inherit;
    }

    :global(.web-only) {
      display: none;
    }

    ul {
      @apply pl-6;
    }

    section {
      @apply my-2;
    }

    section hr {
      @apply mt-0 mb-1;
    }

    main {
      margin: 0 0;
      padding: 0;
    }
  }
</style>

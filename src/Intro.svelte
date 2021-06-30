<script lang="ts">
  export let id: string
  export let name: string = "Foo"
  export let phone: string = ""
  export let email: string = ""
  export let github: string = ""
  export let linkedin: string = ""
  export let location: string = ""
</script>

<div class="flex">
  <div
    class="flex-1 text-left rounded-full py-4 border-2 border-transparent outline-none w-48 tabular-nums focus:border-opacity-100"
  >
    <p><a href={`tel:${phone}`}>{phone}</a></p>
    <p><a href={`mailto:${email}`}>{email}</a></p>
    <p>{location}</p>
  </div>

  <h1
    {id}
    data-testid={id}
    class="flex-none text-4xl text-center rounded-full py-4 mx-auto border-2 border-transparent outline-none max-w-md tabular-nums focus:border-opacity-100"
  >
    {name}
  </h1>

  <div
    class="flex-1 text-right rounded-full py-4 border-2 border-transparent outline-none w-48 tabular-nums focus:border-opacity-100"
  >
    <p>
      <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer"
        >github.com/{github}</a
      >
    </p>
    <p>
      <a
        href={`https://linkedin.com/in/${linkedin}`}
        target="_blank"
        rel="noreferrer">Linkedin</a
      >
    </p>
  </div>
</div>

<style>
  a {
    text-decoration: underline;
  }

  @media print {
    * {
      font-size: 95%;
    }

    ul {
      @apply pl-4;
    }
  }
</style>

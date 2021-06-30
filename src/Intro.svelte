<script lang="ts">
  export let id: string
  export let name: string = "Foo"
  export let phone: string = ""
  export let email: string = ""
  export let github: string = ""
  export let linkedin: string = ""
  export let location: string = ""
</script>

<div class="flex flex-wrap flex-col sm:flex-row print:flex-row">
  <div class="flex-1 text-left sm:py-4 w-48">
    <p><a href={`tel:${phone}`}>{phone}</a></p>
    <p><a href={`mailto:${email}`}>{email}</a></p>
    <p>{location}</p>
  </div>

  <h2
    class="flex-none order-first sm:order-none print:order-none text-3xl md:text-4xl lg:text-6xl text-center py-4"
  >
    {name}
  </h2>

  <div class="flex-1 text-left sm:text-right print:text-right sm:py-4 w-48">
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
    h1 {
      @apply text-3xl;
    }
  }
</style>

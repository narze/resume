<script lang="ts">
  import logo from "./assets/svelte.png"
  import Counter from "./lib/Counter.svelte"
  import Tailwind from "./Tailwind.svelte"
  import Intro from "./Intro.svelte"
  import Work from "./Work.svelte"

  const introData = {
    name: "Manassarn Manoonchai",
    phone: "+66863949474",
    email: "manassarn@gmail.com",
    github: "narze",
    linkedin: "manassarnmanoonchai",
    location: "Bangkok, Thailand",
  }

  const workExperiences = [
    {
      position: "Full-stack Developer, Co-founder",
      company: "EventPop",
      url: "https://eventpop.me",
      years: ["2015", "Current"],
      details: [
        "Designed & developed several core services for EventPop website (Ticketing, Payment, Billing, Reporting, APIs, etc.) using Ruby on Rails.",
        "Maintain server operations, pioneered DevOps practices in the team.",
        "Integrated 3rd-party services : Kerry Express, DHL, Queue-It.",
        "Integrated payment service providers : Omise, ThaiEPay, 123 by 2C2P, SCB-Easy, K-PayPlus, K-PaymentGateway.",
      ],
    },
    {
      position: "Co-founder",
      company: "Maker Zoo",
      url: "https://fb.me/makerzoo",
      years: ["2014", "2016"],
      details: [
        "Pioneered Maker Movement in Thailand by opening first of the Makerspaces in Bangkok.",
        "Hosted maker workshops eg. 3D-modeling, 3D-printing, Arduino, IoT, etc.",
        "Developed hardware-related products for clients and startups.",
        "Provided 3D-printing service & consultant.",
      ],
    },
    {
      position: "Web / IoT Developer (Contract)",
      company: "Box24",
      url: "https://washbox24.com",
      years: ["2015", "2016"],
      details: [
        "Developed internet connected Smart Lockers System using web technologies (Node.js, React.js) on embedded systems (Ubuntu Linux, Arduino, Raspberry Pi)",
        "Developed Node.js library to connect with Nayax to receive cashless payment on vending machines, and also supports Thai Baht cash payment.",
      ],
    },
    {
      position: "Web Developer",
      company: "Figabyte",
      url: "https://www.facebook.com/figabyte",
      years: ["2011", "2014"],
      details: [
        "Developed several Facebook web apps with CodeIgniter, using Facebook API.",
        "Developed web platform using Ruby on Rails 3 & 4.",
        "Made iOS apps for clients using PhoneGap and RubyMotion.",
      ],
    },
    {
      position: "Part-time Web Developer",
      company: "Wongnai Media (wongnai.com)",
      url: "https://wongnai.com",
      years: ["2010"],
      details: [
        "Developed a small part of website using Java with Spring MVC Framework built with Apache Maven.",
        "Learned TDD practice & making early-stage startup.",
      ],
    },
  ]

  const fullVersionLink = "https://manassarn-resume.vercel.app"
  const sourceLink = "https://github.com/narze/resume"
</script>

<Tailwind />

<main class="text-center p-4 mx-0">
  <Intro id="intro" {...introData} />

  <section>
    <h2 class="text-2xl uppercase text-left">Technologies and languages</h2>
    <hr />
    <p>(TBA)</p>
  </section>
  <section>
    <h2 class="text-2xl uppercase text-left">Education</h2>
    <hr />

    <ul class="text-left list-disc pl-8">
      <li>
        <strong>B.Eng. Computer Engineering</strong>, Chulalongkorn University,
        TH. 2007-2010 (GPA 3.45)
      </li>
    </ul>
  </section>
  <section>
    <h2 class="text-2xl uppercase text-left">Work Experience</h2>
    <hr />

    {#each workExperiences as exp}
      <Work {...exp} />
    {/each}
  </section>
  <section>
    <h2 class="text-2xl uppercase text-left">Projects</h2>
    <hr />

    <p>(TBA)</p>
  </section>
  <section>
    <h2 class="text-2xl uppercase text-left">Interests</h2>
    <hr />

    <p>(TBA)</p>
  </section>

  <!--
  <img
    width="100"
    height="100"
    src={logo}
    alt="Svelte Logo"
    class="inline-block"
  />
  <h1
    class="text-6xl uppercase font-thin leading-tight my-8 mx-auto max-w-xs sm:max-w-xs"
  >
    Hello Vite!
  </h1>

  <Counter id="0" />

  <p class="max-w-xs sm:max-w-none my-4 mx-auto leading-5">
    Visit <a class="text-blue-600 underline" href="https://svelte.dev"
      >svelte.dev</a
    > to learn how to build Svelte apps.
  </p>

  <p class="max-w-xs sm:max-w-none my-4 mx-auto leading-5">
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
  -->
  <footer>
    (See <a href={fullVersionLink} target="_blank" rel="noopener"
      >full version</a
    >
    or <a href={sourceLink} target="_blank" rel="noopener">source</a>)
  </footer>
</main>

<style>
  :root {
    --svelte-rgb: 255, 62, 0;
  }

  h1 {
    color: rgb(var(--svelte-rgb));
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

  @media print {
    * {
      font-size: 95%;
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

    body,
    main {
      margin: -1rem 0;
      padding: 0;
    }
  }
</style>

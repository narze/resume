<script lang="ts">
  import Tailwind from "./Tailwind.svelte"
  import Intro from "./Intro.svelte"
  import Work from "./Work.svelte"
  import Kofi from "./Kofi.svelte"

  const introData = {
    name: "Manassarn Manoonchai",
    nickname: "Noom",
    phone: "+66863949474",
    email: "manassarn@gmail.com",
    github: "narze",
    linkedin: "manassarnmanoonchai",
    location: "Bangkok, Thailand",
    website: "monosor.com",
  }

  const technologies = [
    {
      section: "Languages:",
      details:
        "Ruby, JavaScript, Node.js (strong). TypeScript, SQL (proficient).",
    },
    {
      section: "Frameworks:",
      details:
        "Ruby on Rails, ReactJS, NextJS, NestJS, Svelte, TailwindCSS, Bootstrap",
    },
    {
      section: "Tools:",
      details:
        "Git, Terraform, Docker, Kubernetes, Helm, ArgoCD, FluxCD, Robot Framework, Selenium, Zsh",
    },
    {
      section: "Other:",
      details:
        "AWS, GCP, Firebase, Vercel, DigitalOcean, Cloud66, Github Actions, CircleCI, CloudFlare",
    },
  ]

  const educations = [
    {
      head: "B.Eng. Computer Engineering",
      details: "Chulalongkorn University, TH. 2007-2010 (GPA 3.45)",
    },
  ]

  const workExperiences = [
    {
      position: "Full-stack Developer, Co-founder",
      company: "EventPop",
      url: "https://eventpop.me",
      years: ["2015", "Current"],
      details: [
        "Designed, developed and maintained several core services for EventPop website (Ticketing, Seating, Payment, Fee Calculation, Line Item, Billing, Reporting, APIs, etc.) using Ruby on Rails",
        "Researched & applied improvements for development workflow. Testing libraries : RSpec, Guard, VCR, Capybara, Selenium, Cucumber, Timecop. CI/CD : CircleCI, Github Actions, Drone CI, ArgoCD, FluxCD, Terraform",
        "Maintained server operations, deployments, containerization with Docker & Kubernetes, CI/CD. Also pioneered DevOps practices in the team",
        "Integrated 3rd-party services : Kerry Express, DHL, Queue-It, Refund Protect, Skootar, Tanita Body Scale",
        "Integrated payment service providers : Omise, ThaiEPay, 123 by 2C2P, SCB-Easy, K-PayPlus, K-PaymentGateway",
      ],
    },
    {
      position: "Maker, Co-founder",
      company: "Maker Zoo",
      url: "https://fb.me/makerzoo",
      years: ["2014", "2016"],
      details: [
        "Pioneered Maker Movement in Thailand by opening first of the Makerspaces in Bangkok",
        "Hosted maker workshops eg. 3D-modeling, 3D-printing, Arduino, IoT, etc",
        "Developed hardware-related products for clients and startups",
        "Developed smart door lock system for Hubba, a co-working space in Bangkok",
        "Provided 3D-printing service & consultant",
      ],
    },
    {
      position: "Web / IoT Developer (Contract)",
      company: "Box24",
      url: "https://washbox24.com",
      years: ["2015", "2016"],
      details: [
        "Developed internet connected Smart Lockers System using web technologies (Node.js, React.js) on embedded systems (Ubuntu Linux, Arduino, Raspberry Pi)",
        "Developed private Node.js library to connect with Nayax via serial port to receive cashless payment on vending machines, and also supported Thai Baht cash payment",
      ],
    },
    {
      position: "Web Developer",
      company: "Figabyte",
      url: "https://www.facebook.com/figabyte",
      years: ["2011", "2014"],
      details: [
        "Developed several Facebook web apps with CodeIgniter, using Facebook API",
        "Developed web platform using Ruby on Rails 3 & 4",
        "Made iOS apps for clients using PhoneGap and RubyMotion",
      ],
    },
    {
      position: "Part-time Web Developer",
      company: "Wongnai Media (wongnai.com)",
      url: "https://wongnai.com",
      years: ["2010"],
      details: [
        "Developed a small part of website using Java with Spring MVC Framework built with Apache Maven",
        "Learned TDD practice & making early-stage startup",
      ],
    },
  ]

  const projects = [
    {
      name: "Manoonchai",
      details:
        "Modern, productive, and data-driven Thai keyboard layout. A collection of projects built with TypeScript, Elixir, Svelte",
      url: "github.com/manoonchai",
    },
    {
      name: "9armbot (Contributor)",
      details:
        "Twitch & Discord bot for 9arm (Thai technology Youtuber). I helped re-structuring the project using TypeScript & Prisma",
      url: "github.com/thananon/twitch_tools",
    },
    {
      name: "Dotfiles",
      details:
        "macOS dotfiles with setup script for self use, tested on Apple Silicon Macs (Zsh, Zinit, Dotbot, GNU Make, etc.)",
      url: "github.com/narze/dotfiles",
    },
    {
      name: "#100DaysOfCode",
      details:
        "My take on practicing modern frontend development by building small projects in 100 days",
      url: "100daysofcode-narze.vercel.app",
    },
    {
      name: "Baht.rb",
      details: "Ruby gem to convert number to Thai Baht format",
      url: "rubygems.org/gems/baht",
    },
  ]

  const interests = [
    "Areas : Coding, Productivity & Life-hacks, Mechanical Keyboards",
    "Typing : 120+ words per minute (Colemak Mod-DH layout)",
    "Games : Music games, FPS, MOBA, Puzzle",
    "Music : EDM, Rock, Japanese",
    "Pets : I have 3 dogs",
  ]

  const fullVersionLink = "https://manassarn-resume.vercel.app"
  const sourceLink = "https://github.com/narze/resume"
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
  <p>
    Printer-friendly standard résumé, any HTML tags with <code>web-only</code> CSS
    class will be hidden on print.
  </p>
  (<a href={sourceLink} target="_blank" rel="noopener">Source</a>)
</header>

<main class="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl">
  <Intro {...introData} />

  <section>
    <h2 class="text-2xl print:text-4xl uppercase text-left">
      Technologies and Languages
    </h2>
    <hr />
    <ul class="text-left list-disc pl-8">
      {#each technologies as tech}
        <li>
          <span class="w-28 inline-block">{tech.section}</span>
          <span>{tech.details}</span>
        </li>
      {/each}
    </ul>
  </section>
  <section>
    <h2 class="text-2xl print:text-4xl uppercase text-left">Education</h2>
    <hr />

    <ul class="text-left list-disc pl-8">
      {#each educations as edu}
        <li>
          <strong>{edu.head}</strong>, {edu.details}
        </li>
      {/each}
    </ul>
  </section>
  <section>
    <h2 class="text-2xl print:text-4xl uppercase text-left">Work Experience</h2>
    <hr />

    {#each workExperiences as exp}
      <Work {...exp} />
    {/each}
  </section>
  <section>
    <h2 class="text-2xl print:text-4xl uppercase text-left">Projects</h2>
    <hr />

    <ul class="text-left list-disc pl-8">
      {#each projects as project}
        <li>
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
    <h2 class="text-2xl print:text-4xl uppercase text-left">Interests</h2>
    <hr />

    <ul class="text-left list-disc pl-8">
      {#each interests as interest}
        <li>
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

  .print-only {
    display: none;
  }

  .web-only {
    display: inherit;
  }

  @media print {
    * {
      @apply text-xs;
    }

    .print-only {
      display: inherit;
    }

    .web-only {
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

    body,
    main {
      margin: 0 0;
      padding: 0;
    }
  }
</style>

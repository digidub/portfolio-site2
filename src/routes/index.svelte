<script>
  import PageSlide from '../components/PageSlide.svelte';
</script>

<svelte:head><title>Alex Cox • Web Developer • Home</title></svelte:head>

<PageSlide>
  <main>
    <h1 class="page-intro">
      I taught myself to build websites, such as this one.
    </h1>

    <PageSlide>
      <div class="skills">
        <section>
          <h2>I'm a software developer and open source contributor.</h2>
          <p>ES6 JavaScript, React, Svelte, Node.JS, Express, MongoDB</p>
        </section>
        <section>
          <h2>...and I know how things work under the hood.</h2>
          <p>
            Test-Driven Development (TDD), NPM, Webpack, Git, Firebase, Linux
          </p>
        </section>
        <section>
          <h2>But I'm not stopping there!</h2>
          <p>🎯 TypeScript</p>
        </section>
        <section>
          <h2>Though I am ready to offer my skills now:</h2>
          <p>
            Why not check out my <a target="_self" href="/projects"
              >portfolio</a
            >
            and
            <a target="_self" href="/cv">CV</a>? Or
            <a target="_self" href="/contact">contact me</a> about a job?
          </p>
        </section>
      </div>
    </PageSlide>
  </main>
</PageSlide>

<style>
  .skills a {
    color: var(--title-color);
    font-weight: bold;
    text-decoration: none;
  }

  .skills a:hover {
    border-bottom: 1px solid var(--title-color);
  }

  @media only screen and (min-width: 40em) {
    .page-intro {
      margin: auto;
      max-width: 500px;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    .skills {
      margin: auto;
      max-width: 500px;
    }
  }

  @media only screen and (min-width: 65em) {
    .page-intro {
      margin: auto;
      max-width: 500px;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    .skills {
      margin: auto;
      max-width: 500px;
    }
  }
</style>

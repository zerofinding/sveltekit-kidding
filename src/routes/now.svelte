<script>
  import TwitterComp from '$components/TwitterComp.svelte'
</script>

<svelte:head>
  <title>Now</title>
</svelte:head>

<div class="bg-myYellow items-center py-5 my-5 md:px-0 px-4">
  <div class="container max-w-screen-md bg-white border-2 border-b-8 border-black rounded-xl mx-auto flex-col flex justify-between overflow-hidden">
    <div class="md:py-6 md:px-6 py-6 px-4">
      <h1 class="text-4xl font-bold">Now</h1>
      <p class="text-lg font-semibold mt-2">Last updated 20/07/2021</p>
      <div class="markdown-styles_markdown__3w_hn">
        <p>I'm currently living in Yogyakarta, Indonesia (+7 UTC). I'm 23 years old. Now I'm studying at Amikom Yogyakarta 4th semester. How? you asked. I have 4 gap year, I start taking college in 2019 a little late but never too late for a degree.</p>
        <p>I'm a self learner, I learn stuff by reading the docs, youtube and udemy. I think googling is now a skills too, You can solve a bug if you know the right keyword.</p>
        <p>I'm a Front-end developer. React and React native is my main tools for building apps. I design apps too, I love building modern and beautiful app.</p>
        <p>Currently working at Accelbyte as a Software Engineer.</p>
      </div>
      <div class="flex flex-row justify-end">
        <a href="https://twitter.com/intent/tweet?url=https://kikiding.space/now&amp;text=@kikiding current status" target="_blank" rel="noopener" alt="kikiding.space - twitter" title="kikiding.space - twitter">
          <TwitterComp />
        </a>
      </div>
    </div>
  </div>
</div>
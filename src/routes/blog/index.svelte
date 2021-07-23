<script context="module">
  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch }) => {
    const res = await fetch('/data/blogs.json')

    if (res.ok) {
      const resp = await res.json()
      const datas = resp.pageProps.data.allBlogs

      return {
        props: { datas }
      }
    }

    const { message } = await res.json()

    return {
      error: new Error(message)
    }
  }
</script>

<script>
  export let datas

  import { internalDateToDate } from '$lib/helpers'
</script>

<svelte:head>
  <title>Blogs</title>
</svelte:head>

<div class="bg-myYellow items-center py-5 mt-5">
  <div class="container max-w-screen-md mx-auto flex-row flex justify-between md:px-0 px-4">
    <div class="bg-myBlue font-bold text-white sm:text-lg text-md px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
      <p class="text-center">All Posts</p>
    </div>
  </div>
</div>

<div class="bg-myYellow items-center pt-0 pb-20">
  <div class="container max-w-screen-md mx-auto flex-col gap-5 flex justify-between md:px-0 px-4">

  {#each datas as field}

    <div class="bg-white border-2 border-b-8 border-black p-5 rounded-xl flex-1 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
      <a href="/blog/{field.slug}" sveltekit:prefetch>
        <h1 class="font-bold sm:text-2xl text-xl hover:underline">{field.title}</h1>
      </a>
      <p class="sm:text-lg text-md sm:mt-2 mt-1">{internalDateToDate(field.date)} | {field.categories}</p>
      <p class="sm:text-lg text-md sm:mt-2 mt-1">{field.excerpt}</p>
    </div>

  {/each}
  </div>
</div>

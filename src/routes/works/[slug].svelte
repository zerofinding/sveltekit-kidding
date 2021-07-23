<script context="module">
  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch, page }) => {
    const res = await fetch('/data/works.json')
    
    if (res.ok) {
      const resp = await res.json()
      const datas = resp.pageProps.data.allWorks.filter((field) => field.slug === page.params.slug)
      const field = datas[0]
      
      return {
        props: { field }
      }
    }

    const { message } = await res.json()

    return {
      error: new Error(message)
    }
  }
</script>

<script>
  export let field

  import { handleSplit } from '$lib/helpers'
  import TwitterComp from '$components/TwitterComp.svelte'
</script>

<svelte:head>
  <title>Works - {field.title}</title>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="{field.title}"/>
  <meta name="twitter:image" content="https://kikiding.space/api/social-image?title={field.title}&amp;description={field.excerpt}&amp;path=https://kikiding.space/works/{field.slug}"/>
  <meta name="twitter:domain" content="https://kikiding.space/works/{field.slug}"/>
</svelte:head>

<div class="bg-myYellow items-center py-5 my-5 md:px-0 px-4">
  <div class="container max-w-screen-md bg-white border-2 border-b-8 border-black rounded-xl mx-auto flex-col flex justify-between overflow-hidden">

{#if (field.image !== null)}
    <img src="{field.image.url}" alt="kikiding.space" title="kikiding.space" class="border-b-4 border-black" loading="lazy" />
{/if}

    <div class="md:py-6 md:px-6 py-6 px-4">
      <h1 class="text-4xl font-bold">{field.title}</h1>
      <div class="flex-row flex flex-wrap mt-4 gap-2">
        {@html handleSplit(field.categories, 'bg-myOrange font-semibold text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100', field.title, '', '#180e07')}
      </div>
      
      <p class="text-xl mt-4 leading-relaxed font-semibold">About the project</p>
      <div class="markdown-styles_markdown__3w_hn">{@html field.content}</div>

      <p class="text-xl mt-4 leading-relaxed font-semibold">Technology used :</p>
      <div class="flex-row flex flex-wrap mt-2 gap-2">
        {@html handleSplit(field.technologyUsed, 'bg-white font-semibold text-black sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100', field.title, '', '#180e07')}
      </div>

      <p class="text-xl mt-4 leading-relaxed font-semibold">Links :</p>
      <div class="flex-row flex flex-wrap mt-2 gap-2">
        {@html handleSplit(field.deployment, 'bg-myBlue font-semibold text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100', field.title, '#', '#fff', true)}
      </div>

      <div class="flex flex-row justify-end">
        <a href="https://twitter.com/intent/tweet?url=https://kikiding.space/blog/{field.slug}&amp;text={field.title}" target="_blank" rel="noopener" alt="kikiding.space - twitter" title="kikiding.space - twitter">
          <TwitterComp />
        </a>
      </div>
    </div>

  </div>
</div>

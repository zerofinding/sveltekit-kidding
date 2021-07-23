<script context="module">
  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch, page }) => {
    const res = await fetch('/data/blogs.json')
    
    if (res.ok) {
      const resp = await res.json()
      const datas = resp.pageProps.data.allBlogs.filter((field) => field.slug === page.params.slug)
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

  import { internalDateToDate } from '$lib/helpers'
  import TwitterComp from '$components/TwitterComp.svelte'
</script>

<svelte:head>
  <title>Blog - {field.title}</title>
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
      <p class="text-lg font-semibold mt-2">{field.categories} | {internalDateToDate(field.date)}</p>
      <div class="markdown-styles_markdown__3w_hn">{@html field.content}</div>
      
      <div class="flex flex-row justify-end">
        <a href="https://twitter.com/intent/tweet?url=https://kikiding.space/blog/{field.slug}&amp;text={field.title}" target="_blank" rel="noopener" alt="kikiding.space - twitter" title="kikiding.space - twitter">
          <TwitterComp />
        </a>
      </div>
    </div>

  </div>
</div>

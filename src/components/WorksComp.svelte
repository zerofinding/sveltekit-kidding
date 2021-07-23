<script>
  export let datas

  import { handleSplit } from '$lib/helpers'
</script>

<div class="bg-myYellow items-center pt-0 pb-20">
  <div class="container max-w-screen-md mx-auto flex-col gap-5 flex justify-between md:px-0 px-4">
    
{#each datas as field}

    <div class="flex-1 flex-row flex duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
      <div class="bg-white border-2 border-b-8 border-black p-5 rounded-xl flex-1">
        <a href="/works/{field.slug}" sveltekit:prefetch alt="works - {field.title}" title="works - {field.title}">
          <h1 class="font-bold sm:text-2xl text-xl hover:underline">{field.title}</h1>
        </a>
        
        <p class="sm:text-lg text-md sm:mt-2 mt-1">{field.excerpt}</p>

        <div class="flex-row flex flex-wrap mt-2 gap-2">
          {@html handleSplit(field.categories, 'bg-myOrange font-semibold text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100', field.title, `/works/${field.slug}`, '#180e07')}
        </div>

      </div>
    </div>

{/each}

  </div>
</div>
<script>
  export let isMenu
  
  import { page } from '$app/stores'

  const nonePassiveHandler = (event) => {
    event.preventDefault()
    isMenu = !isMenu
  }
</script>

<div class="bg-myOrange items-center border-b-2 border-black py-5">
  <div class="container max-w-screen-md mx-auto md:flex-row flex-col md:gap-2 gap-3 flex justify-between md:px-0 px-4">
    <div class="md:hidden flex">
      <a href="/" class="aburger" alt="kikiding.space - menu" title="kikiding.space - menu" on:click|preventDefault={nonePassiveHandler}>
        <div class="bg-white font-bold text-black sm:text-lg text-md px-4 py-2 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
          <p class="text-center"><i class="fas fa-bars fa-lg"></i></p>
        </div>
      </a>
    </div>
    <div class="{isMenu === true ? 'flex md:flex md:flex-row flex-col md:gap-2 gap-3' : 'flex md:flex hidden md:flex-row flex-col md:gap-2 gap-3'}">
      <a href="/" sveltekit:prefetch alt="kikiding.space - home" title="kikiding.space - home">
        <div class="{$page.path === '/' ? 'bg-myBlue text-white' : 'bg-white text-black'} w-full md:w-24 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
          <p class="font-bold md:text-lg text-md text-center">Home</p>
        </div>
      </a>
      <a href="/now" alt="kikiding.space - now" title="kikiding.space - now">
        <div class="{$page.path === '/now' ? 'bg-myBlue text-white' : 'bg-white text-black'} w-full md:w-24 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
          <p class="font-bold md:text-lg text-md text-center">Now</p>
        </div>
      </a>
    </div>
    <div class="{isMenu === true ? 'flex md:flex md:flex-row flex-col md:gap-2 gap-3' : 'flex md:flex hidden md:flex-row flex-col md:gap-2 gap-3'}">
      <a href="/works" sveltekit:prefetch alt="kikiding.space - works" title="kikiding.space - works">
        <div class="{($page.path === '/works' || $page.path.includes('/works')) ? 'bg-myBlue text-white' : 'bg-white text-black'} w-full md:w-24 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
          <p class="font-bold md:text-lg text-md text-center">Works</p>
        </div>
      </a>
      <a href="/blog" sveltekit:prefetch alt="kikiding.space - blog" title="kikiding.space - blog">
        <div class="{($page.path === '/blog' || $page.path.includes('/blog')) ? 'bg-myBlue text-white' : 'bg-white text-black'} w-full md:w-24 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
          <p class="font-bold md:text-lg text-md text-center">Blog</p>
        </div>
      </a>
      <a href="mailto: codingki@gmail.com" target="_blank" rel="noopener" alt="kikiding.space - contact" title="kikiding.space - contact">
        <div class="bg-white text-black w-full md:w-24 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
          <p class="font-bold md:text-lg text-md text-center">Contact</p>
        </div>
      </a>
    </div>
  </div>
</div>
<script context="module">
  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch }) => {
    const api = ['/data/blogs.json', '/data/works.json']

    try{
      let res = await Promise.all(api.map(e => fetch(e)))
      let datas = await Promise.all(res.map(e => e.json()))
      
      const blogs = datas[0].pageProps.data.allBlogs.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      }).filter((val, i) => i < 2)
      
      const works = datas[1].pageProps.data.allWorks.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      }).filter((val, i) => i < 3)
      
      if(datas){
        return {
          props: { blogs, works }
        }
      }
    }catch(err) {
      console.log(err)
    }

    const { message } = await res.json()

    return {
      error: new Error(message)
    }
  }
</script>

<script>
  export let blogs
  export let works

  import RecentBlogs from '$components/RecentBlogs.svelte'
  import RecentWorks from '$components/WorksComp.svelte'
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="bg-myYellow items-center py-5">
  <div class="container max-w-screen-md mx-auto md:px-0 px-4">
    <div class="mt-5 bg-white border-2 border-b-8 border-black rounded-xl grid grid-cols-12 justify-between duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
      <div class="col-span-12 md:col-span-8 sm:py-10 sm:px-8 p-5">
        <p class="font-bold sm:text-4xl text-2xl text-black">Hi, I am Kiki,</p>
        <p class="font-semibold sm:text-2xl text-xl text-black">Creative Technologist</p>
        <p class="font-normal sm:text-xl text-md text-black mt-2">Im a guy that can code and design, but internet makes me can do anything. Crafting beautiful apps with React and ❤️</p>
        <div class="flex">
          <a href="https://twitter.com/intent/tweet?url=https://kikiding.space/&amp;text=@kikiding's website" target="_blank" rel="noopener" alt="kikiding.space" title="kikiding.space">
            <div
            class="font-semibold text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black mt-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
            style="background-color: rgb(29, 161, 242);">
              <p class="text-center" style="color:#180e07;">
                <i class="fab fa-twitter fa-md" style="color:#180e07;"></i>
                Share this to twitter
              </p>
            </div>
          </a>
        </div>
      </div>
      <div class="col-span-4 m-auto hidden md:inline mt-12">
        <img alt="kikiding.space" title="kikiding.space" src="me.png" />
      </div>
    </div>
  </div>
</div>
<div class="bg-myYellow items-center py-5">
  <div class="container max-w-screen-md mx-auto flex-row flex justify-between md:px-0 px-4">
    <div class="bg-myBlue font-bold text-white sm:text-lg text-md px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
      <p class="text-center">Recent Posts</p>
    </div>
    <a href="/blog" sveltekit:prefetch alt="kikiding.space - blogs" title="kikiding.space - blogs">
      <div class="bg-white font-bold text-black sm:text-lg text-md px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
        <p class="text-center">View All</p>
      </div>
    </a>
  </div>
</div>

<RecentBlogs
datas={blogs} />

<div class="bg-myYellow items-center py-5">
  <div class="container max-w-screen-md mx-auto flex-row flex justify-between md:px-0 px-4">
    <div class="bg-myBlue font-bold text-white sm:text-lg text-md px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
      <p class="text-center">Recent Works</p>
    </div>
    <a href="/works" sveltekit:prefetch alt="kikiding.space - works" title="kikiding.space - works">
      <div class="bg-white font-bold text-black sm:text-lg text-md px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
        <p class="text-center">View All</p>
      </div>
    </a>
  </div>
</div>
<div class="bg-myYellow items-center pt-0 pb-5">
  <div class="container max-w-screen-md mx-auto flex-col gap-4 flex justify-between md:px-0 px-4">

  <RecentWorks
  datas={works} />

  </div>
</div>
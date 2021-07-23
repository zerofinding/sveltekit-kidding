<script context="module">
  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch }) => {
    const res = await fetch('/data/works.json')

    if (res.ok) {
      const resp = await res.json()
      const datas = resp.pageProps.data.allWorks

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
  
  import WorksComp from '$components/WorksComp.svelte'
</script>

<svelte:head>
  <title>Works</title>
</svelte:head>

<div class="bg-myYellow items-center py-5 mt-5">
  <div class="container max-w-screen-md mx-auto flex-row flex justify-between md:px-0 px-4">
    <div class="bg-myBlue font-bold text-white sm:text-lg text-md px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
      <p class="text-center">All Works</p>
    </div>
  </div>
</div>

<div class="bg-myYellow items-center pt-0 pb-5">
  <div class="container max-w-screen-md mx-auto flex-col gap-5 flex justify-between md:px-0 px-4">
    
    <WorksComp
    {datas} />

  </div>
</div>
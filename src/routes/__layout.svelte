<script>
  import { page } from '$app/stores'

	import HeaderComp from '$components/HeaderComp.svelte'
  import FooterComp from '$components/FooterComp.svelte'

  let isMenu = false
</script>

{#key $page.path}
<header>
  <HeaderComp {isMenu} />
</header>
{/key}

<main>
  <div class="bg-myYellow min-h-screen flex flex-col justify-between">
    <slot />
  </div>
</main>

<footer>
  <FooterComp />
</footer>
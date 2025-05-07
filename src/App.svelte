<script lang="ts">
  import ContainerSection from "./ContainerSection.svelte";
  import Footer from "./Footer.svelte";
  import HeaderHome from "./HeaderHome.svelte";
  import HomeContent from "./HomeContent.svelte";
</script>

<!-- BEGIN HEADER -->
<header id="header-nav">
  <ContainerSection>
    <HeaderHome />
  </ContainerSection>
</header>
<!-- END HEADER -->

<!-- BEGIN MAIN MODULE -->
<main>
  <HomeContent />
</main>
<!-- END MAIN MODULE -->

<!-- BEGIN FOOTER -->
<footer id="licensing">
  <ContainerSection>
    <Footer />
  </ContainerSection>
</footer>

<!-- END FOOTER -->

<style>
  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  :global(a:hover) {
    color: #ffc627;
    text-decoration: underline;
  }
</style>

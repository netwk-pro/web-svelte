<script lang="ts">
  import FullWidthSection from "./FullWidthSection.svelte";
  import Logo from "./Logo.svelte";
  // Import the Logo component
  import Badges from "./Badges.svelte";
  import HomeMainContent from "./HomeMainContent.svelte";
  import LegalNav from "./LegalNav.svelte";
  import SocialMedia from "./SocialMedia.svelte";
  // Import the Badges component

  let hrStyle = "hr-styled";
</script>

<FullWidthSection>
  <!-- BEGIN TITLE -->
  <section id="site-title">
    <Logo></Logo>
  </section>
  <!-- END TITLE -->

  &nbsp;

  <hr class={hrStyle} />

  &nbsp;

  <!-- BEGIN MAIN CONTENT-->
  <section id="main-content">
    <HomeMainContent></HomeMainContent>
  </section>
  <!-- END MAIN CONTENT-->

  &nbsp;

  <!-- BEGIN SOCIAL MEDIA -->
  <section id="social-media">
    <SocialMedia></SocialMedia>
  </section>
  <!-- END SOCIAL MEDIA -->

  <hr class={hrStyle} />

  &nbsp;

  <!-- BEGIN LEGAL -->
  <section id="legal-nav">
    <LegalNav></LegalNav>
  </section>
  <!-- END LEGAL -->

  &nbsp;

  <!-- BEGIN BADGES -->
  <section id="badges">
    <Badges></Badges>
  </section>
  <!-- END BADGES -->
</FullWidthSection>

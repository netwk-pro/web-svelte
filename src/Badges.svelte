<script lang="ts">
  // Define the badge links and their properties
  const badges = [
    {
      href: "./legal.html#cc-by",
      src: "https://forthebadge.com/images/badges/cc-by.png",
      alt: "Creative Commons BY",
      class: "badge-cc-by",
    },
    {
      href: "./legal.html#gnu-gpl",
      src: "https://img.shields.io/badge/LICENSE-GPLv3-red?style=for-the-badge&labelColor=9b9b9b&color=d0021b",
      alt: "GPL 3.0 or Later",
      class: "badge-gpl",
    },
  ];

  let rel = "noopener noreferrer";
</script>

<div class="bnav2-wrap">
  <table class="bnav2">
    <tbody>
      <tr>
        {#each badges as badge}
          <td class="bnav2-nav">
            <a {rel} href={badge.href} target="_self">
              <img
                decoding="async"
                loading="lazy"
                src={badge.src}
                alt={badge.alt}
                class={badge.class} />
            </a>
          </td>
        {/each}
      </tr>
    </tbody>
  </table>
</div>

<style>
  .badge-cc-by {
    height: auto;
    width: 160px;
  }
  .badge-gpl {
    height: auto;
    width: 120px;
  }
</style>

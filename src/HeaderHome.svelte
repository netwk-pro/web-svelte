<script lang="ts">
  let nav = [
    { label: "about", href: "about.html", target: "_self", external: false },
    { label: "blog", href: "docs/blog/", target: "_self", external: false },
    {
      label: "discussions",
      href: "https://github.com/netwk-pro/netwk-pro.github.io/discussions",
      target: "_blank",
      external: true,
    },
    {
      label: "link hub",
      href: "https://linktr.ee/neteng_pro",
      target: "_blank",
      external: true,
    },
  ];
  let rel = "noopener noreferrer";
</script>

<nav class="center-nav">
  {#each nav as { label, href, target, external }, index}
    <a {rel} {href} {target}>
      {label}
    </a>
    {#if external}
      <sup>
        <span class="fas fa-arrow-up-right-from-square fa-2xs"></span>
      </sup>
    {/if}
    {#if index < nav.length - 1}
      &nbsp; | &nbsp;
    {/if}
  {/each}
</nav>

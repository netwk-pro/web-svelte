<script lang="ts">
  // Define an array of social media links to make the component dynamic and reusable
  const socialLinks = [
    {
      href: "https://instagram.com/netwk_pro",
      label: "Instagram",
      iconClass: "fab fa-square-instagram fa-2x",
    },
    {
      href: "https://facebook.com/neteng.pro",
      label: "Facebook",
      iconClass: "fab fa-square-facebook fa-2x",
    },
    {
      href: "https://linkedin.com/company/netwk-pro",
      label: "LinkedIn",
      iconClass: "fab fa-linkedin fa-2x",
    },
    {
      href: "https://noc.social/@NetEng_Pro",
      label: "Mastodon",
      rel: "me noopener noreferrer", // Special rel attribute for Mastodon
      iconClass: "fab fa-mastodon fa-2x",
    },
    {
      href: "https://github.com/netwk-pro/",
      label: "GitHub",
      iconClass: "fab fa-square-github fa-2x",
    },
  ];
</script>

<div class="soc-wrap">
  <table class="soc">
    <tbody>
      <tr>
        {#each socialLinks as { href, label, rel = "noopener noreferrer", iconClass }}
          <td class="soc-fa">
            <p>
              <a {rel} {href} target="_blank" aria-label={label}>
                <span class={iconClass}></span>
              </a>
            </p>
          </td>
        {/each}
      </tr>
    </tbody>
  </table>
</div>

&nbsp;

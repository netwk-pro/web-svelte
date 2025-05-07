<script lang="ts">
  // Define the type for a navigation link
  type NavLink = {
    href: string;
    text: string;
    target: string;
    colspan?: number; // Optional property
  };

  // Define the type for rows (array of NavLink arrays)
  const rows: NavLink[][] = [
    [
      { href: "./terms-of-use.html", text: "Terms of Use", target: "_self" },
      { href: "./privacy.html", text: "Privacy Policy", target: "_self" },
    ],
    [{ href: "./legal.html", text: "Legal", target: "_self", colspan: 2 }],
  ];
</script>

<div class="bnav-wrap">
  <table class="bnav">
    <tbody>
      {#each rows as row}
        <tr>
          {#each row as link}
            <td
              class={link.colspan ? "bnav-cell" : "bnav-nav"}
              colspan={link.colspan || 1}>
              <a
                rel="noopener noreferrer"
                href={link.href}
                target={link.target}>
                {link.text}
              </a>
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<script lang="ts">
  // Define structured data for dynamic rendering and modularity
  const creator = {
    name: "Network Pro Strategies",
    url: "https://netwk.pro/",
    trademark: "Network Pro™",
    slogan: "Locking Down Networks™",
  };

  const licenses = [
    {
      type: "CC BY 4.0",
      url: "./legal.html#cc-by",
      externalUrl: "https://creativecommons.org/licenses/by/4.0/",
      icons: [
        {
          src: "https://mirrors.creativecommons.org/presskit/icons/cc.svg",
          alt: "Creative Commons BY",
        },
        {
          src: "https://mirrors.creativecommons.org/presskit/icons/by.svg",
          alt: "Creative Commons BY",
        },
      ],
    },
    {
      type: "GNU GPL",
      url: "./legal.html#gnu-gpl",
      externalUrl: "https://fsf.org",
      description:
        "as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.",
    },
  ];

  const namespaceAttributes = {
    "xmlns:cc": "http://creativecommons.org/ns#",
    "xmlns:dct": "http://purl.org/dc/terms/",
  };

  let rel = "noopener noreferrer";
  let relLicense = "license noopener noreferrer";
  let targetSelf = "_self";
  let targetBlank = "_blank";
</script>

<div class="copyright" {...namespaceAttributes}>
  <!-- Copyright Section -->
  <p>
    Copyright &copy; 2025<br />
    <a
      rel="cc:attributionURL dct:creator noopener noreferrer"
      property="cc:attributionName"
      href={creator.url}
      target={targetBlank}>
      <strong>{creator.name}</strong>
    </a>
    ({creator.trademark})
  </p>

  <!-- Trademark Section -->
  <p>
    {creator.trademark}, the shield logo, and the "{creator.slogan}" slogan are
    <a {rel} href="./legal.html#trademark" target={targetSelf}> trademarks </a>
    of {creator.name}.
  </p>

  <!-- Licensing Section -->
  <p>
    Licensed under
    {#each licenses as license, index}
      {#if license.type === "CC BY 4.0"}
        <a
          href={license.url}
          target={targetSelf}
          rel={relLicense}
          style="display: inline-block">
          <strong>{license.type}</strong>
        </a>
        {#each license.icons as icon}
          <a
            href={license.externalUrl}
            target={targetBlank}
            rel={relLicense}
            style="display: inline-block">
            <img
              decoding="async"
              loading="lazy"
              src={icon.src}
              alt={icon.alt}
              style="
                    height: 18px !important;
                    margin-left: 3px;
                    text-decoration: none;
                    vertical-align: text-bottom;
                  " />
          </a>
        {/each}
      {:else}
        <a href={license.url} target={targetSelf} rel={relLicense}>
          <strong>{license.type}</strong>
        </a>
        , {license.description}
        <a {rel} href={license.externalUrl} target={targetBlank}>
          Free Software Foundation
        </a>
      {/if}
      {index < licenses.length - 1 ? ", and the " : ""}
    {/each}
  </p>
</div>

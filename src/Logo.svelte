<script lang="ts">
  let decoding: "async";
  let loading: "lazy";
  let className = "logo";
  let src = "img/logo-transparent.png";
  let alt = "Network Pro Strategies";
  let sloganA = "Locking Down Networks";
  let sloganB = "Unlocking Confidence™";
</script>

<img
  {decoding}
  {loading}
  class={className}
  {src}
  {alt}
  style="height: 250px; width: 250px" />
<div class="index-title1">
  {sloganA}<br />
  {sloganB}
</div>
<h2 class="index-title2">Security | Networking | Privacy</h2>

<script lang="ts">
  //export let className: string = ""; // Optional: Allows passing additional classes to the container
</script>

<div class="full-width-section">
  <!-- <div class="container {className}"> -->
  <div class="container">
    <slot></slot>
    <!-- Slot to allow child content -->
  </div>
</div>

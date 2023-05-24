<script lang="ts">
    import { formStore } from "./store";
    import { convertToHtml } from "./objectHtmlConverter";
</script>

<!-- TODO: Tabs with html and rendered form -->
<div class="m-3 overflow-scroll border rounded-3">
    <pre class="m-0 p-3">{convertToHtml($formStore)}</pre>
</div>
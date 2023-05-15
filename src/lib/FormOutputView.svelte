<script lang="ts">
    import { formStore } from "./store";
    import { convertToHtml } from "./objectHtmlConverter";
</script>

<!-- TODO: Tabs with html and rendered form -->
<pre>{convertToHtml($formStore)}</pre>
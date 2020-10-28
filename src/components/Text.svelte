<script>
    export let subtle = false;
</script>

<div class:subtle class="text-md text-gray-800">
    <slot />
</div>

<style>
    div.subtle {
        @apply text-gray-500;
    }
</style>
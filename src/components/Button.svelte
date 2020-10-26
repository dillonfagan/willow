<script>
    export let primary = false;
</script>

<button class:primary class="cursor-pointer bg-white px-4 py-2 rounded-md shadow-md hover:shadow-lg">
    <slot />
</button>

<style>
    button.primary {
        @apply bg-yellow-500;
        @apply font-bold;
    }
</style>
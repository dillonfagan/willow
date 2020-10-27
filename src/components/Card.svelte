<script>
    export let small = false;
</script>

<div class:small class="overflow-hidden bg-white flex flex-col space-y-2 rounded-md shadow-md">
    <slot />
</div>

<style>
    div.small {
        @apply w-1/4;
    }
</style>
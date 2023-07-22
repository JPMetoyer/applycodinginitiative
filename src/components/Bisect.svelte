<style lang="scss">
    section.bisect {
        height: calc(100svh - 4rem);
        padding: 0px 4vw;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1rem 1rem;

    }
</style>

<script>
    export let id = "";
</script>

<section id={ id } class="bisect">
    <slot />
</section>

<script lang="ts">
    export let id : string | null;
</script>

<style lang="scss">

    @use "../variables" as app;
    section {
        display: flex; 
        flex-direction: column;
        align-items: center;
        padding: 0vmax 0px;
        gap: 1rem 1rem; 

        @media screen and (min-width: 960px) {
            flex-direction: row;
        }

        > :global(article) {
            height: 100%;
            width: 100%;
            padding: 0px 0px;
            flex-grow: 1;
        }        
    }


</style>

<section id={ id ? id : "" }>
    <slot></slot>
</section>


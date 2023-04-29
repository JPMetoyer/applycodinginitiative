
<style lang="scss">

    @use "../../variables" as app;

    section {
        display: flex; 
        flex-direction: column;
        align-items: center;
        padding: 0vmax 0px;
        gap: 1rem 3rem; 

        height: calc(100vh - 4rem);

        @media screen and (min-width: 960px) {
            flex-direction: row;
        }

        > :global(article) {
            height: 100%;
            width: 100%;
            padding: 5vmax 0px;
            flex-grow: 1;
        }        
    }


</style>

<section>
    <slot></slot>
</section>


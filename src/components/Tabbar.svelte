

<style lang="scss">
    @use "../variables" as app; 

    .tabbar {
        display: flex; 
        align-items: center; 
        justify-content: center;

        width: min-content;
        padding: 0.3rem 0.3rem; 
        gap: 0.5rem; 

        background-color: app.$color-shade;
        border-radius: 0.7rem;

        button {
            text-align: center;
            padding: 0.1rem 1.5rem; 
            min-width: 80px;
            border-radius: 0.4rem;
            cursor: pointer;
            color: app.$color-tint;
            background-color: transparent;
        }

        .focus {
            background-color: app.$color-background;
            box-shadow: 0px 2px 2rem rgba(96, 97, 112, 0.08);
            color: app.$color-foreground; 
        }

    }
</style>

<script lang="ts">
    export let items = ["first", "second", "third"];

    export let focusIndex: number;
    export let updateFocus: (update: number) => void; 

</script>


<div class="tabbar">
    {#each items as item, index }
        <button on:click={ () => { updateFocus(index) } } class={ (index === focusIndex) ? "focus": undefined }>{ item }</button>
    {/each}
</div>


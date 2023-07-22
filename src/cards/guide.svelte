




<style lang="scss">

    @use "../variables" as app; 

    .card {

        position: relative; 

        display: flex; 
        flex-direction: column;
        gap: 2rem;
        padding: 1rem 1rem;  

        background-color: hsl(var(--hue), 50%, 98%, 1);
        border-radius: 1rem;

        overflow: hidden;

        > div > h4 { font-weight: app.$weight-bold; }

        .avatars {
            display: flex; 
            align-items: center;
            width: 100%;

            margin-left: 0.5rem;

            > span {
                display: inline-block;
                width: 1.75rem; 
                height: 1.75rem; 
                border-radius: 2rem; 
                border: 2px solid hsl(var(--hue), 95%, 92%, 1);
                background-color: white;
                margin-left: -0.4em;
            }
        }

        .typeIcon {
            position: absolute; 
            width: 10rem; 
            height: 10rem;
            bottom: -40%;
            right: -25%; 
            background-color: transparent; 
            transform: rotateZ(-45deg);

            padding: 1.0rem; 
            opacity: 12%;

            > :global(svg) {
                fill: hsla(var(--hue), 50%, 50%, 1) !important; 
            }
        }

    }
</style>


<script lang="ts">
    import { getRandomNumber } from "../functions/random";


    import Bacterial from "../types/bacterial.svelte";
    import Fungal from "../types/fungal.svelte";
    import Mental from "../types/mental.svelte";
    import Viral from "../types/viral.svelte";
    import Wellness from "../types/wellness.svelte";

    const items = Array(3);

    const targetIndex = getRandomNumber(0, 4); 
    
</script>


<a href={ `/guide/blood` } class="card" style={ `--hue: ${ getRandomNumber(0, 360) }` }>
    <div>
    <h4>Title</h4>
    <p>Meta</p>
    </div>

    <div class="avatars">
        {#each items as _, index}
            <span style={ `z-index: ${ items.length - index }` }></span>
        {/each}
    </div>
 
    <div class="typeIcon">
        {#if  targetIndex === 0}
            <Bacterial />
        {:else if targetIndex === 1}
            <Viral />
        {:else if targetIndex === 2}
            <Wellness />
        {:else if targetIndex === 3}
            <Mental />
        {:else}
            <Fungal />
        {/if}
    </div>
</a>
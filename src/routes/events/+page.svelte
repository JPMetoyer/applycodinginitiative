<style lang="scss">

    @use "../../variables" as app;

    #catalogue {
        padding: 2rem 0vw;

        display: flex;
        flex-direction: column;
        height: min-content;

        > div.info {
            display: flex; 
            flex-direction: column;
            gap: 1rem;

            > h1 { position: relative; line-height: 110%; }
            > h1::after { 
                content: "";
                position: absolute;
                bottom: -1rem;
                left: 0px;
                
                display: none;
                height: 1px;
                width: 36%;
                background-color: app.$color-brand;
            }

        }

        > div.grid {
            display: grid;
            gap: 2rem 2rem;
            margin: 4rem 0px;
            grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));

        }
    }
</style>

<script lang="ts">
    import Event from "../../cards/event.svelte";
    import Footer from "../../elements/footer.svelte";


    let index : number = 0;
    const events = Array(4);
    
</script>

<main style="padding: 0px 6vw">
<section id="catalogue">
    <div class="info">
        <h1>All Events</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis architecto aliquid dolores magnam cupiditate sit libero vel eos sed a dolorem illum voluptas at, commodi alias natus soluta eius, nemo iure! Ad.</p>
    </div>

    <div class="grid">
        { #each events as info }
        <Event />
        {/each }
    </div>
</section>
</main>

<Footer />
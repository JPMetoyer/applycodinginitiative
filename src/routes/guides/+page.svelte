<style lang="scss">

    @use "../../variables" as app;

    

    #catalogue {
        padding: 2rem 4vw;

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
    import Project from "../../cards/event.svelte";
    import Icon from "../../components/Icon.svelte";
    import projects from "../../data/portfolio.json";
    import Guide from "../../cards/guide.svelte";
    import Footer from "../../elements/footer.svelte";


    const highlights = Array(4);
    let index : number = 0;

    
</script>


<main style="padding: 0px 0vw">
<section id="catalogue">
    <div class="info">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quae itaque possimus vero facilis. Ex facilis delectus quas earum cumque recusandae ducimus odio expedita quae inventore.</p>
    </div>

    <div class="grid">
        { #each highlights as info }
        <Guide />
        {/each }
    </div>
</section>
</main>

<Footer />


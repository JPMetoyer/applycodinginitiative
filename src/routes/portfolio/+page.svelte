
<style lang="scss">

    @use "../../variables" as app;

    #showcase {


        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr;
        gap: 1rem 1rem; 
        height: calc(100vh - 6rem);


        @media screen and (max-width: 960px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 2fr 1fr;
        }

        > div:nth-child(1) {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            padding: 0px 4vw;
        }

        > div:nth-child(2) {
            position: relative;


            div.carousel {
                position: relative;
                overflow: scroll hidden;
                top: 0px;
                left: 0px;
                bottom: 0px;
                right: 0px;

                width: 100%;
                height: 100%;

                &::-webkit-scrollbar { display: none; }
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;


                > div.viewport {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    padding: 0px 1.5rem;
                    bottom: 3rem;

                    display: flex;
                    align-items: center;

                    > :global(div) { width: calc(92vw - 2rem); margin: 0px 0.5rem; }

                }

            }

            div.actions {
                position: absolute;
                bottom: 0px; 
                left: 0px;
                right: 0px;
                padding: 0.5rem 0px;

                display: flex;
                justify-content: center;
                gap: 1rem;
            }

        }

        > div:nth-child(3) {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            padding: 0px 4vw;

            stroke: gray;
            stroke-width: 1;
            fill: none;

            span {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
        }

        
    }

    #catalogue {
        padding: 2rem 4vw;
        margin-bottom: 8rem;

        display: flex;
        flex-direction: column;
        height: min-content;

        > div.info {
            display: flex; 
            flex-direction: column;
            gap: 2rem;

            > h1 { position: relative; }
            > h1::after { 
                content: "";
                position: absolute;
                bottom: -1rem;
                left: 0px;
                
                ;
                height: 1px;
                width: 50%;
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
    import Icon from "../../components/Icon.svelte";

    import { highlights } from "../../data/portfolio.json"; 
    import Project from "../../cards/Project.svelte";
    import { round } from "../../functions/math";

    let highlightIndex = 0;

    let carousel : HTMLElement;
    let carouselWidth: number;
    let viewportWidth: number;
    let capturedPosition : number | undefined = undefined;
    
</script>


<article id="showcase">
    <div>
        <h1>Lorem ipsum dolor sit</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae adipisci, nesciunt necessitatibus voluptatum repellendus deleniti sunt, consequuntur officia cumque explicabo doloremque corporis inventore consequatur?</p>
    </div>

    <div>
        <div class="carousel" bind:this={ carousel } bind:clientWidth={ carouselWidth }>
        <div class="viewport" bind:clientWidth={ viewportWidth }>
        { #each highlights as info }
            <Project></Project>
        {/each }
        </div>
        </div>

        <div class="actions">
            <button class="secondary">Case Study</button>
            <button class="tertiary">See More</button>
        </div>
    </div>

    <div class="value">
        { #each (highlights[highlightIndex].impact) as value }
        <span>
            <Icon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0702 9.57L12.0002 3.5L5.93018 9.57" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 20.4999V3.66992" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Icon>
            <p>{ value }</p>
        </span>
        { /each }
    </div>
</article>

<section id="catalogue">
    <div class="info">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates aspernatur animi commodi omnis? Eos, esse sequi ducimus dolorum laboriosam inventore in pariatur quibusdam autem eligendi</p>
    </div>

    <div class="grid">
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
    </div>
</section>



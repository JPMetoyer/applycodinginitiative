
<style lang="scss">

    @use "../../variables" as app;

    #showcase {


        display: none;
        grid-template-columns: 1fr 2fr 0.5fr;
        grid-template-rows: 1fr;
        gap: 1rem 1rem; 
        height: 100svh;


        @media screen and (max-width: 960px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 2fr 1fr;
        }

        > div:nth-child(1) {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            padding: 0px 4vw;

            h1 { font-size: 150%; }
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

                    > :global(a) { width: calc(92vw - 2rem); margin: 0px 0.5rem; }

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

    #portfolio {
        padding: 0rem 5vw;
        margin: 6rem auto 2rem auto;

        display: flex;
        flex-direction: column;
        height: min-content;

        max-width: app.$max-width;

        @media screen and (min-width: 960px) {
            margin: 8rem auto 8rem auto;
            padding: 0rem 0rem;
        }


        > div.info {
            display: flex; 
            flex-direction: column;
            gap: 2rem;

            max-width: 640px;

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
    import ProjectCard from "$lib/cards/ProjectCard.svelte";
import Icon from "$lib/components/Icon.svelte";
    import projects from "$lib/data/projects.json";

    let highlightIndex: number = 0; 
</script>


<article id="showcase">
    <div>
        <h1>(33)Beats Innovators. Event Facilitators.</h1>
        <p>Explore our unrivaled DJ solutions, curated to elevate events and drive corporate or personal success. Witness the power of sound as we unleash unforgettable experiences and amplify your brand's impact.</p>
    </div>

    <div>
        <div class="carousel">
        <div class="viewport">
        { #each projects as info }
            <ProjectCard data={ info } />
        {/each }
        </div>
        </div>

        <div class="actions">
            <button class="secondary">Case Study</button>
            <button class="tertiary">See More</button>
        </div>
    </div>

    <div class="value">
        { #each (projects[highlightIndex].impact) as value }
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

<section id="portfolio">
    <div class="info">
        <h1>(33)Beats that Speak for Themselves</h1>
        <p>Savor the sounds in our auditory showcase, where each project is a unique melody of our DJ solutions prowess. Immerse yourself in a world of sonic creativity</p>
    </div>

    <div class="grid">
        { #each projects as info }
        <ProjectCard data={ info } />
        {/each }
    </div>
</section>



<script>
    import Project from "../../cards/Project.svelte";
    import Icon from "../../components/Icon.svelte";

</script>


<style lang="scss">

    @use "../../variables" as app;


    #showcase {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 0.4fr 1.3fr 0.6fr;
        gap: 1rem 1rem;
        height: calc(100vh - 10rem);

        > #descriptor {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            gap: 0.5rem;
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
            position: relative;
            margin: 0px 8vw; 

            div.pagination {
                position: absolute;
                bottom: 0px;
                left: 0px;

                display: flex;
                align-items: center;
                justify-content: center;

                height: 2rem;
                margin: 1vh 0px; 

                > span {
                    width: 0.5rem;
                    height: 0.5rem;
                    margin: 0px 0.2rem;
                    
                    border: solid;
                    border-width: 1px;
                    border-radius: 100%;
                    border-color: app.$color-foreground;
                }
                
            }

            div.arrows {
                position: absolute;
                bottom: 0px;
                right: 0px;
                margin: 1vh 0px; 

                display: flex;
                align-items: center;
                justify-content: center;

                gap: 0.5rem;



                fill: transparent;
            }
        }
    }
</style>


<article id="showcase">
    <div id="descriptor">
        <h1 class="tagline">Boost your Business</h1>
        <p class="instructions">Tap to select</p>
    </div>


    <div>
        <div class="carousel">
        <div class="viewport">
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
        </div>
        </div>

        <div class="actions">
            <a href="/portfolio" class="secondary button">View Case Studies</a>
        </div>
    </div>

    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus. Modi repellat error, fugiat doloremque reprehenderit obcaecati adipisci!</p>

        <div class="pagination">
            <span></span><span></span><span></span><span></span><span></span>
        </div>

        <div class="arrows">
            <Icon frame={[1.8, 1.8]}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 12H3.66998" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </Icon>

            <Icon frame={[1.8, 1.8]}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.5 12H20.33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </Icon>
        </div>
    </div>
</article>


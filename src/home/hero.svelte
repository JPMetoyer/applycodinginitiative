



<style lang="scss">

    @use "../variables" as app;


    #showcase {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 0.5fr 2.1fr 1fr;
        gap: 1rem 1rem;
        height: calc(100svh - 4rem);
        padding-bottom: 1rem;

        > #descriptor {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            gap: 0.5rem;

            padding: 0px 6vw;
        }

        > div:nth-child(2) {
            position: relative;


            div.carousel {
                position: relative;
                overflow: hidden hidden;
                top: 0px;
                left: 0px;
                bottom: 1rem;
                right: 0px;

                width: 100%;
                height: 100%;

                &::-webkit-scrollbar { display: none; }
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;


                > div.viewport {
                    position: absolute;
                    top: 50%;
                    left: 0px;
                    padding: 0px 1.5rem 2rem 1.5rem;
                    transform: translateY(-50%);

                    @media screen and (min-width: 640px) {
                        padding: 0px calc(46vw - 18rem);
                    }

                    display: flex;
                    align-items: center;

                    > :global(a) {
                        width: calc(92vw - 2rem);
                        max-width: 36rem;
                        margin: 0px 0.5rem;

                        @media screen and (min-width: 640px) {
                            margin: 0px calc(0.5rem + 2vw);
                        }

                    }

                }

            }

            div.actions {
                position: absolute;
                bottom: 0px; 
                left: 0px;
                right: 0px;

                display: flex;
                justify-content: center;
                gap: 1rem;
            }

        }

        > div:nth-child(3) {
            position: relative;
            margin: 0px 6vw; 
            padding-top: 0.5rem;

            > p > span {
                @media screen and (max-width: 960px) {
                    display: none;
                };
            }


            div.pagination {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 0.5rem;

                position: absolute;
                bottom: 0px;
                left: 0px;
                margin: 0.5rem 0px; 
                
                span {
                    position: relative;
                    width: 0.4rem;
                    height: 0.4rem;
                    background-color: hsl(240, 16%, 70%);
                    border-radius: 1rem;

                    &.focus {
                        margin: 0px 0.6rem;
                        background-color: app.$color-brand;
                    }

                    &.focus::after {
                        content: "";
                        position: absolute;
                        z-index: 2;
                        top: 50%;
                        left: 50%;
                        transform: translateX(-50%) translateY(-50%);
                        
                        width: 1.5rem;
                        height: 1.5rem;
                        border-radius: 100%;
                        border: 1px solid app.$color-brand;
                    }

                };
            }

            div.arrows {
                position: absolute;
                bottom: 0px;
                right: 0px;
                margin: 0.5rem 0px; 

                display: flex;
                align-items: center;
                justify-content: center;

                gap: 0.5rem;
                fill: transparent;
            }
        }
    }
</style>




<script lang="ts">
    import Event from "../cards/event.svelte";
    import Icon from "../components/Icon.svelte";


    let focus: number = 0;
    let highlights = Array(4);

    let viewportWidth: number = 0;

    $: computeStyle = (index: number) : string => {


    const value : string = (index < focus) ?
        `transform: matrix(0.9, 0, 0, 0.9, -${ (0.95 * viewportWidth)  * index }, 0); opacity: 0%` :
        `transform: matrix(1, 0, 0, 1, -${ (0.88 * viewportWidth) * focus }, 0); opacity: 100%`;

        return value;
    }

    const incrementFocus = () => { focus++; }
    const decrementFocus = () => {  focus-- }

</script>


<svelte:window bind:innerWidth={ viewportWidth } />

<main style="padding: 0px 0px">
<article id="showcase">
    <div id="descriptor">
        <h1 class="tagline">Boost your Business</h1>
        <p class="instructions">Tap to select</p>
    </div>


    <div>
        <div class="carousel">
        <div class="viewport">
            { #each highlights as info, index }
            <Event style={ computeStyle(index) } />
            {/each }
        </div>
        </div>

        <div class="actions">
            <button class="secondary">All Events</button>
        </div>
    </div>

    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus. Modi repellat error, fugiat doloremque reprehenderit obcaecati adipisci!
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat mollitia nobis ullam, dolor quasi dignissimos perspiciatis. Cumque quibusdam tempora id dolorum commodi</span>
        </p>

        <div class="pagination">
            { #each highlights as _, index }
                <span class={ (index === focus) ? "focus" : "" } ></span>
            {/each }
        </div>

        <div class="arrows">
            <Icon disabled={ focus === 0 } onClick={ decrementFocus }>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 12H3.66998" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </Icon>
    
            <Icon disabled={ focus === (highlights.length - 1) } onClick={ incrementFocus }>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.5 12H20.33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </Icon>
        </div>
    </div>
</article>
</main>




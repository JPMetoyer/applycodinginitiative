

<style lang="scss">
    @use "../variables" as app;

    section#hero {
        position: relative;
        height: calc(100svh - 4rem);
        padding: 0rem 0px;
        

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;
        gap: 1rem 2.2rem;


        > div.info {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            margin: auto 0px;
            padding: 0px 4vw; 
        }

        > div.highlights {
            margin-bottom: 3rem;

            position: relative;

            > div.scrollview {
                position: relative;
                height: calc(100% - 4rem);
                width: 100vw;
                margin-bottom: 2rem;

                overflow: hidden;

                div.content {
                    position: absolute;
                    top: 45%;
                    transform: translateY(-50%);
                    padding: 0px 8vw;

                    display: flex;
                    align-items: center; 
                    justify-content: flex-start;

                    gap: 0.5rem;

                }


                div.carrier {
                    width: 80vw; 
                    height: 45vw;
                    background-color: gray;
                    border-radius: 1rem;

                    &:nth-child(2) { transform: scale(0.9); }
                }
            }

            > span {
                position: absolute;
                bottom: 2.5rem;
                left: 50%;
                transform: translateX(-50%);
                
                display: flex;
                gap: 1rem;
            }
        }


        > div.transitional {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            padding: 1.5rem 1.5rem;

            display: flex;
            justify-content: space-between;
            align-items: center;

            > div.pagination {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 0.5rem;
                
                span {
                    width: 0.4rem;
                    height: 0.4rem;
                    background-color: app.$color-gray;
                    border-radius: 1rem;

                };
            }

            > div.arrows {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 0.8rem;

                fill: transparent;
            }
        }

    }

</style>

<script lang="ts">
    import { onMount } from "svelte";
    import Icon from "../components/Icon.svelte";


    let focus: number = 0;
    const events = Array(5);

    let viewportWidth: number = 0;


    const computeStyle = (index: number) : string => {

        const value : string = (index < focus) ?
            `matrix(0.9, 0, 0, 0.9, -${ (0.8 * viewportWidth)  * index }, 0)` :
            `matrix(1, 0, 0, 1, -${ (0.8 * viewportWidth) * focus }, 0)`;

        return value;
    }

    
    const incrementFocus = () => { focus++; }
    const decrementFocus = () => { focus--; }

</script>

<svelte:window bind:innerWidth={ viewportWidth } />

<section id="hero">
    <div class="info">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore atque porro temporibus, beatae voluptatem possimus sint minus, consectetur et itaque!</p>
    </div>

    <div class="highlights">
        <div class="scrollview">
        <div class="content">
            { #each events as event, index }
                <div class="carrier" style={ computeStyle(index) } ></div>
            {/each }
        </div>
        </div>
        

        <span>
            <a class="secondary button" href="/">See All</a>
            <a class="tertiary button" href="/">Learn How</a>
        </span>
    </div>

    <div class="transitional">
        <div class="pagination">
            <span></span><span></span><span></span><span></span><span></span>
        </div>

        <div class="arrows">
            <Icon onClick={ decrementFocus }>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 12H3.66998" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </Icon>
    
            <Icon onClick={ incrementFocus }>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.5 12H20.33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </Icon>
        </div>
    </div>
</section>

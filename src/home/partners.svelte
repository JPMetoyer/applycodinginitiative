

<style lang="scss">
    @use "../variables" as app;


    section#partners {
        position: relative;
        height: 300vh;

        border-top: 1px solid black;


        padding: 1.5rem 5vw;

        div.billboard {
            position: sticky;
            padding: 1rem 0px;
            top: 3rem;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 1rem;

            height: calc(100svh - 4rem);

            > span {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: column;
                gap: 0.75rem;

                padding: 3rem 0px; 

                background: linear-gradient(180deg, app.$color-background, transparent);

                > p { font-size: 110%; font-weight: app.$weight-bold; color: app.$color-info; }
            }
        }

        div#canvas {

            position: absolute;
            width: 100vw;
            height: 50%;

            transform: translateX(-5vw) translateY(6rem);
            z-index: -1;

            overflow: hidden;
            // border: 1px solid brown;

            div.group {
                position: absolute;
                width: 150vmin;
                height: 150vmin;

                transition-property: transform;
                transition-duration: 400ms;
                transition-timing-function: ease-in;
            }

            &.first > div.group { transform: translateX(-15%) translateY(10%); }
            &.second > div.group { transform: translateX(10%) translateY(-45%); }
            &.third > div.group { transform: translateX(-45%) translateY(-45%); }

            span {
                position: absolute;

                display: block;
                width: 9rem;
                height: 9rem;
                border-radius: 100%;

                background-color: hsl(206, 14%, 95%);
                filter: drop-shadow(0.3rem 0.3rem 1rem rgba(40, 42, 54, 0.05));

                padding: 1rem 1rem;

                &:nth-child(1) { left: 50%; top: 10%; transform: translateX(-50%); }
                &:nth-child(2) { left: 10%; bottom: 10%;  }
                &:nth-child(3) { right: 10%; bottom: 10%;  }
            }
        }
    }


</style>

<script lang="ts">
    import { clamp, round } from "../functions/gui";
    import organizations from "../data/partners.json";
    
    const entryScrollPosition : number = 2670;
    const exitScrollPosition : number = 4230;
    const scrollDistance : number = exitScrollPosition - entryScrollPosition;

    let scrollPosition : number = 0;
    
    $: scrollProgress = clamp((scrollPosition - entryScrollPosition), 0, scrollDistance);
    $: scrollPercent = round((scrollProgress / scrollDistance), 2);




</script>

<svelte:window bind:scrollY={ scrollPosition } />

<section id="partners">

    

    <div class="billboard">
        <span>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>{ organizations[(scrollPercent < 0.33) ? 0 : (scrollPercent < 0.66) ? 1 : 2].name }</p>
        </span>

        <div id="canvas" class={ (scrollPercent < 0.33) ? "first" : (scrollPercent < 0.66) ? "second" : "third" }>
            <div class="group">
                <span><img src="/icons/afyadux.png" alt=""></span>
                <span><img src="/icons/microsoft.png" alt=""></span>
                <span><img src="/icons/wci.png" alt=""></span>
    
                <div class="line"></div>
            </div>
        </div>

        <p>{ organizations[(scrollPercent < 0.33) ? 0 : (scrollPercent < 0.66) ? 1 : 2].description }</p>
    </div>
        
</section>



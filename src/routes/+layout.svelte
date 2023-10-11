


<style lang="scss">
    @use "../variables" as app;


    nav {
        position: fixed; 
        top: 0px; 
        left: 0px; 
        right: 0px;
        z-index: 10;

        display: flex; 
        align-items: center; 
        justify-content: space-between;

        padding: 0.3rem 1rem; 
        background-color: app.$color-background;

        border-bottom: 0.5px solid app.$color-brand;

        #logo {
            // width: 2.8rem;
            height: 2.8rem;
            padding: 0.2rem;
            fill: app.$color-brand;
        }

        div.links {
            position: absolute;
            left: 50%;

            @media screen and (min-width: 640px) {
                display: flex;
            }

            display: none;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            transform: translateX(-50%);
            
        }

        span {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 1rem; 

            @media screen and (min-width: 640px) {
                > :global(button) { display: none }
            }
        };

        
    }

    section#popup-nav {

        @media screen and (max-width: 640px) {
            &.show {
                opacity: 100%;

                z-index: 5;
                > * { z-index: 6; }
            }
        }

        

        display: block;
        opacity: 0%;

        transition-duration: 300ms;
        transition-property: opacity;
        transition-timing-function: ease-in;

        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        width: 100vw;
        height: 100vh;

        z-index: -1;
        > * { z-index: -1; }


        -webkit-backdrop-filter: blur(1rem);
        backdrop-filter: blur(1rem);
        background-color: rgb(255, 255, 255, 0.2);

        padding-top: 4rem;



        div.links {

            position: relative;

            height: 100svh;

            padding: 0px 5vw;

            display: flex;
            flex-direction: column; 
            align-items: flex-end;
            justify-content: center;
            gap: 0.5rem;

            transform: translateY(-4rem);

            div.cite {
                position: absolute;
                bottom: 0px;
                left: 0px;
                right: 0px;

                display: flex;
                align-items: center;
                justify-content: space-between;

                margin: 1rem 5vw;
            }

            > a {
                font-size: 180%;
                font-weight: app.$weight-bold;

                padding: 0.5rem 0px 0.5rem 2rem;
            }
        }
    }
</style>

<script lang="ts">
    import { onMount } from "svelte";
    import "../app.scss";
    import Icon from "../components/Icon.svelte";

    let popup: HTMLElement;
    let showNavbar: boolean = false;
    const toggleNavbar = () => { showNavbar = !showNavbar };

    onMount(() => {
        popup.addEventListener(("click"), toggleNavbar);
    });



</script>


<nav>
    <a href="/" id="logo">
        <img src="/icons/favicon.png" alt="">
    </a>

    <div class="links">
        <a href="/">Home</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
    </div>

    <span>
        <a href="/quote" class="button">Get Quote</a>

        <Icon handleClick={ toggleNavbar }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>                                             
        </Icon>
    </span>
</nav>

<main class={ showNavbar ? "active" : "" }>
    <slot></slot>
</main>

<section class={ showNavbar ? "show" : "" } id="popup-nav" bind:this={ popup }>

    <div class="links">
        <a href="/">Home</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>

        <div class="cite">
            <p>Copy &copy; 2023</p>
            <p>All rights reserved</p>
        </div>
    </div>

</section>




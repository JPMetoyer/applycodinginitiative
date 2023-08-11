


<style lang="scss">
    @use "../variables" as app;

    nav {
        position: fixed; 
        top: 0px; 
        left: 0px; 
        right: 0px;

        z-index: 5;

        display: flex; 
        align-items: center; 
        justify-content: space-between;

        padding: 0.3rem 8vw; 
        background-color: app.$color-background;
        border-bottom: 0.5px dashed app.$color-brand;



        #logo {
            height: 2.8rem;
            fill: app.$color-brand;
            stroke: transparent;

            display: flex;
            align-items: center;
            justify-content: flex-start;

            > h1 {
                color: app.$color-brand;
                text-decoration: none;
                font-weight: app.$weight-black;
                text-transform: uppercase;
                font-size: 120%;
            } 
        }

        .links {

            z-index: 4;
            
            position: fixed;
            bottom: 0px;
            left: 0px;
            right: 0px;
            height: 3.5rem;
            background-color: app.$color-background;
            // background-color: red;

            .trailer {
                
                position: absolute;
                bottom: 0px;
                left: 0px;
                right: 0px;

                display: flex;
                align-items: center;
                justify-content: space-between;

                padding: calc(0px + 1.5rem) 6vw;

            }

            @media screen and (max-width: 640px) {
                &.show {
                }

                height: 0dvh;
                opacity: 0%;


                flex-direction: column;
                align-items: flex-start;

                padding: 0px 8vw;
                gap: 2rem; 

                > a {
                    font-size: 200%;
                }
            }
            

            display: flex; 
            align-items: center; 
            justify-content: center; 
            gap: 1.5rem;
        }

        #cta {
            position: relative;
            padding: 0.2rem calc(1.5rem + 0.9rem) 0.2rem 1rem; 
        }

        #cta > svg {
            position: absolute;
            right: 0.8rem;
            top: 50%; 
            bottom: 0px;
            width: 1.2rem;
            height: 1.2rem;
            fill: transparent;
            stroke: app.$color-background;
            transform: translateY(-50%) rotateZ(315deg);
            stroke-width: 2;
        }

        span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

</style>

<script lang="ts">
    import { goto } from "$app/navigation";
    import "../app.scss";

    import { page } from '$app/stores';
    import Icon from "../components/Icon.svelte";
    import { onMount } from "svelte";
    const padding = ($page.route.id !== "/partners");

    let linksElement : HTMLDivElement;

    onMount(() => {
        linksElement.onclick = () => {
            linksElement.classList.remove("menu");
        };
    });





</script>

<nav>
    <a href="/" id="logo">
        <img src="/icons/wci.png" alt=""> 
        <h1>The Coding Initiative</h1>         
    </a>

    
    <span>
        <a href="https://codinginitiative.org/" target="_blank" id="cta" class="button">
            Club Page
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M3.5 12H20.33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </a>
    </span>
</nav>
    
<slot></slot>




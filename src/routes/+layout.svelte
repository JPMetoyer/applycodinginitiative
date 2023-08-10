


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

        padding: 0.3rem 1rem; 
        background-color: app.$color-background;
        border-bottom: 0.5px dashed app.$color-brand;



        #logo {
            width: 2.8rem;
            height: 2.8rem;
            fill: app.$color-brand;
            stroke: transparent;
        }

        .links {

            z-index: 4;
            
            position: fixed;
            top: 0px;
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
            fill: app.$color-background;
            transform: translateY(-50%) rotateZ(180deg);
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
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.6541 58.8698C49.2384 58.8698 58.8547 44.3016 58.8547 31.6693C58.8547 31.2554 58.8462 30.8436 58.8271 30.4334C60.6936 29.0841 62.3164 27.3999 63.5963 25.4835C61.8834 26.2446 60.0402 26.757 58.1063 26.9881C60.0799 25.8047 61.5956 23.9318 62.3106 21.6996C60.4631 22.795 58.4174 23.591 56.2403 24.0203C54.4951 22.1622 52.0107 21 49.2617 21C43.9817 21 39.7001 25.2816 39.7001 30.559C39.7001 31.3094 39.7843 32.0387 39.9476 32.7388C32.0028 32.3397 24.9575 28.5351 20.2429 22.751C19.4209 24.1634 18.9476 25.8052 18.9476 27.5557C18.9476 30.8722 20.6356 33.8003 23.2022 35.5137C21.634 35.4654 20.1607 35.0341 18.8724 34.3175C18.8703 34.3573 18.8703 34.3976 18.8703 34.4394C18.8703 39.0697 22.1661 42.9353 26.5399 43.8114C25.737 44.0302 24.8923 44.1479 24.0199 44.1479C23.4041 44.1479 22.8053 44.0864 22.2228 43.9757C23.4396 47.7734 26.9692 50.5377 31.1538 50.6156C27.8813 53.1801 23.7592 54.708 19.2804 54.708C18.5093 54.708 17.7483 54.664 17 54.5755C21.2307 57.2868 26.2543 58.8698 31.6541 58.8698Z"/>
        </svg>            
    </a>

    <div class="links" bind:this={ linksElement } >
        <a href="/">Why</a>
        <a href="/">Events</a>
        <a href="/">Guides</a>
        <a href="/">Health</a>

        <div class="trailer">
            <p>Copyright &copy; 2023</p>
            <p>Afyadux</p>
        </div>
    </div>

    <span>
        <a href="/events" id="cta" class="button">
            Donate
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9934 2C7.34388 2 3.5 5.71789 3.5 10.3178C3.5 12.6357 4.34198 14.7876 5.7305 16.6116C7.24809 18.6235 9.13474 20.3765 11.2704 21.7524C11.8039 22.0944 12.2425 22.0704 12.7285 21.7524C14.8522 20.3765 16.7388 18.6235 18.2695 16.6116C19.657 14.7876 20.5 12.6357 20.5 10.3178C20.5 5.71789 16.6561 2 11.9934 2"/>
            </svg>
        </a>

        <Icon frame={[ 2, 2 ]} onClick={ () => { linksElement.classList.toggle("show"); }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 17H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 12H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 7H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Icon>
    </span>
</nav>
    
<slot></slot>




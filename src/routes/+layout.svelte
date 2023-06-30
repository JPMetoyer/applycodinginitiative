


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
        border-bottom: 0.5px solid app.$color-brand;

        #logo {
            // width: 2.8rem;
            height: 2.8rem;
            padding: 0.2rem;
            fill: app.$color-brand;
        }

        #underline::after {
            content: '';
            width: 0;
            height: 3px;
            background-color: app.$color-brand;
            margin: auto;
            display: block;
        }

        #underline:hover::after {
        width: 100%;
        transition: all 80ms ease-in-out;
        }
        .links {

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            background-color: transparent;
            
            display: flex; 
            align-items: center; 
            justify-content: center; 
            gap: 1.5rem;


            @media screen and (max-width: 960px) {
                gap: 0.4rem;
                padding: 0.8rem 1.25rem 0.8rem 1.25rem;
                border-radius: 1rem;
                border: 0.8px solid app.$color-brand;

                > a.current {
                    
                    color: app.$color-brand;
                    width: max-content;
                    height: 0.2rem;
                    transform: translateY(-0.60rem);
                    background-color: transparent;
                    margin: 0px 0.5rem;
                }

                > a { 
                    pointer-events: none;
                    color: transparent;
                    width: 0.2rem;
                    height: 0.2rem;
                    background-color: app.$color-gray;
                    border-radius: 100%;
                }
            }

            // > a:hover {
            //     box-shadow: 0px 1px 0px 0px;
            //     transition: all 300ms ease-in-out;
            // }
        }
    }


    button.tabbar {

        padding: unset !important;
        border-radius: unset !important;
        color: unset !important;
        width: unset !important;

        pointer-events: none;

        position: fixed;
        top:0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        z-index: 2;
        background-color: rgba(255, 255, 255, 0.0) !important;
        backdrop-filter: blur(0rem);
        -webkit-backdrop-filter: blur(0rem);

        display: flex;
        align-items: flex-start;

        transition-property: backdrop-filter -webkit-backdrop-filter background-color;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;

        border: none;

        &:focus, &:active {
            background-color: red;
        }

        &.show {
            pointer-events: all;

            backdrop-filter: blur(1rem);
            -webkit-backdrop-filter: blur(1rem);
            background-color: rgba(255, 255, 255, 0.3) !important;

            > div.links {
                transform: translateX(-50%) translateY(0rem);
            }
        }

        > div.links {

            transition-property: transform;
            transition-duration: 0.3s;
            transition-timing-function: ease-out;;
            // transition-delay: 0.1s;

            z-index: 3;
            margin-top: 5rem;
            margin-left: 50%;
            transform: translateX(-50%) translateY(-5rem);
            padding: 0.5rem 1.5rem;
            border-radius: 0.8rem;
            background-color: app.$color-background;
            width: max-content;

            display: flex;
            justify-content: center;
            gap: 1rem;

            > a.current { pointer-events: none; text-decoration: line-through; color: app.$color-gray;  }
        }
    }

    footer {
        display: none;
        height: 50vh;
        min-height: 300px;
        margin-top: 16vh;
    }
</style>

<script>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import "../app.scss";

    let tabbar = false;
    const toggleTabbar = () => { tabbar = !tabbar; }

</script>


<button class={ tabbar ? "tabbar show" : "tabbar" } on:click={ toggleTabbar }>

    <div class="links">
        <a class={ $page.route.id === "/portfolio" ? "current" : "" } href="/portfolio">Portfolio</a>
        <a class={ $page.route.id === "/services" ? "current" : "" } href="/services">Services</a>
        <a class={ $page.route.id === "/about" ? "current" : "" } href="/about">About</a>
    </div>
</button>

<nav>
    <a href="/" id="logo">
        <!-- <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.6541 58.8698C49.2384 58.8698 58.8547 44.3016 58.8547 31.6693C58.8547 31.2554 58.8462 30.8436 58.8271 30.4334C60.6936 29.0841 62.3164 27.3999 63.5963 25.4835C61.8834 26.2446 60.0402 26.757 58.1063 26.9881C60.0799 25.8047 61.5956 23.9318 62.3106 21.6996C60.4631 22.795 58.4174 23.591 56.2403 24.0203C54.4951 22.1622 52.0107 21 49.2617 21C43.9817 21 39.7001 25.2816 39.7001 30.559C39.7001 31.3094 39.7843 32.0387 39.9476 32.7388C32.0028 32.3397 24.9575 28.5351 20.2429 22.751C19.4209 24.1634 18.9476 25.8052 18.9476 27.5557C18.9476 30.8722 20.6356 33.8003 23.2022 35.5137C21.634 35.4654 20.1607 35.0341 18.8724 34.3175C18.8703 34.3573 18.8703 34.3976 18.8703 34.4394C18.8703 39.0697 22.1661 42.9353 26.5399 43.8114C25.737 44.0302 24.8923 44.1479 24.0199 44.1479C23.4041 44.1479 22.8053 44.0864 22.2228 43.9757C23.4396 47.7734 26.9692 50.5377 31.1538 50.6156C27.8813 53.1801 23.7592 54.708 19.2804 54.708C18.5093 54.708 17.7483 54.664 17 54.5755C21.2307 57.2868 26.2543 58.8698 31.6541 58.8698Z"/>
        </svg>             -->

        <img src="/icons/favicon.png" alt="">
    </a>

    <button class="links" on:click={ toggleTabbar }>
        <a class={ $page.route.id === "/portfolio" ? "current" : "" } href="/portfolio" id="underline">Portfolio</a>
        <a class={ $page.route.id === "/services" ? "current" : "" } href="/services" id="underline">Services</a>
        <a class={ $page.route.id === "/about" ? "current" : "" } href="/about" id="underline">About</a>
    </button>

    <a href="mailto:contact@33beats.com" class="button">Get Quote</a>
</nav>

<main>
    <slot></slot>
</main>


<footer>

</footer>



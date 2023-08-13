


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

    section#toast {
        z-index: 10;

        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        height: 100dvh;

        background-color: transparent;
        pointer-events: none;

        p {
            position: absolute;
            bottom: -20%;
            left: 50%;
            transform: translateX(-50%);

            transition-property: bottom;
            transition-duration: 700ms;
            transition-timing-function: ease-in;

            color: app.$color-background;
            box-shadow: 0rem 0rem 1.5rem rgba(40, 42, 54, 0.08);

            padding: 0.25rem 2rem;
            border-radius: 2rem;

            &.show {
                bottom: 3rem;
            }
        }
    }

</style>

<script lang="ts">

    import "../app.scss";

    import { page } from '$app/stores';
    import { NotificationState, notification, sendNotification } from "../lib/utilities";
    

    $: color = () => { 

        if ($notification === undefined) { return "transparent"; }

        switch ($notification.type) {
            case NotificationState.info:
                return "#3361FF";

            case NotificationState.error:
                return "#FF5E6E";

            case NotificationState.warning:
                return "#FF8800";

            case NotificationState.success:
                return "#2BD84E";
        
            default:
                return "#3361FF";
        }
    }
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

<section id="toast">
    <p style={ `background-color: ${ color() };` } class={ ($notification === undefined) ? "" : "show" }>{  ($notification === undefined) ? "" : $notification.message }</p>
</section>







<style lang="scss">
    @use "../variables" as app;

    nav {
        position: fixed; 
        top: 0px; 
        left: 0px; 
        right: 0px;

        display: flex; 
        align-items: center; 
        justify-content: space-between;

        padding: 0.5rem 2rem; 

        #logo {
            height: 2.8rem;
            fill: app.$color-brand;
            stroke: transparent;
        }

        .links {
            display: flex; 
            align-items: center; 
            justify-content: center; 
            gap: 1rem;
        }
    }
</style>

<script>
    import { goto } from "$app/navigation";
    import "../app.scss";
</script>



<nav>
    <a href="/" id="logo">
        <img src="/icons/logo.png" alt="">
    </a>

    <div class="links">
        <a href="/portfolio">Portfolio</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/careers">Careers</a>
    </div>

    <a href="/quote" class="button">Get Quote</a>
</nav>

<main>
    <slot></slot>
</main>


<footer>

</footer>



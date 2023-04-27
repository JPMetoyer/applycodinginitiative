


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

    const navigateToQuote = () => {
        goto(`/quote`, { replaceState: false });
    }
</script>

<nav>
    <a href="/" id="logo"><img src="/logo.png" alt=""></a>

    <div class="links">
        <a href="/portfolio">Portfolio</a>
        <a href="/services">Services</a>
        <a href="/team">Team</a>
    </div>

    <button on:click={ navigateToQuote } id="cta">Get Quote</button>
</nav>

<main>
    <slot></slot>
</main>


<footer>

</footer>



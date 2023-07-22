

<style lang="scss">
    main {
        position: relative;

        
    }
</style>


<script lang="ts">
    import Footer from "../elements/footer.svelte";
    import About from "../home/about.svelte";
    import Detail from "../home/detail.svelte";
    import Faq from "../home/faq.svelte";
    import Guides from "../home/guides.svelte";
    import Hero from "../home/hero.svelte";
    import Partners from "../home/partners.svelte";

</script>


<main style={ `padding: 0px 0vw` }>
    <Hero />
    <About />

    <Guides />
    <Detail />
    <Partners />
    <Faq />

    <Footer />
</main>


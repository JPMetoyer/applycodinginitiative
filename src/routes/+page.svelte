

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
    import Process from "../home/process.svelte";

</script>


<main style={ `padding: 0px 0vw` }>
    <Hero />
    <About />

    <Guides />
    <Detail />
    <Process />
    <Faq />

    <Footer />
</main>


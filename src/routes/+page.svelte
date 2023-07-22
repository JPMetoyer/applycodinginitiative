

<style lang="scss">
    main {
        position: relative;

        section#g-intro {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.2rem;

            padding: 0px 5vw;

            p { margin-top: 1.5rem; }
        }
    }
</style>


<script>
    import About from "../home/about.svelte";
    import Detail from "../home/detail.svelte";
    import Guides from "../home/guides.svelte";
    import Hero from "../home/hero.svelte";
    import Partners from "../home/partners.svelte";

</script>

<main style={ `padding: 0px 0vw` }>
    <!-- <About /> -->

    <section id="g-intro">
        <h3>Lorem ipsum dolor sit amet conset</h3>
        <h6>Lorem ipsum dolor</h6>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis consectetur corrupti cum provident earum! Nemo vitae consequuntur tenetur, ratione itaque optio praesentium rerum hic impedit unde! Nisi accusantium natus quas eos?</p>
    </section>

    <Guides />

    <Detail />
</main>


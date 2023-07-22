




<style lang="scss">
    @use "../variables" as app;

    section#guides {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem 1rem;

        padding: 16rem 5vw 7rem 5vw;
        margin-top: 4rem;

        section.intro {
            position: absolute;

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.2rem;

            padding: 0px 5vw;

            p { margin-top: 1.5rem; }
        }

        div {
            border: 1px solid brown;
            height: 100px;
        }

        a {
            position: absolute;
            bottom: 2rem;
            left: 50%;

            transform: translateX(-50%) translateY(0rem);
        }

        
    }

</style>


<script>

</script>

<section id="guides">

    <section class="intro">
        <h3>Lorem ipsum dolor sit amet conset</h3>
        <h6>Lorem ipsum dolor</h6>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis consectetur corrupti cum provident earum! Nemo vitae consequuntur tenetur, ratione itaque optio praesentium rerum hic impedit unde! Nisi accusantium natus quas eos?</p>
    </section>

    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>

    <a href="/" class="button tertiary">See more</a>
</section>






<style lang="scss">
    @use "../../variables" as app;

    section#about {
        height: 100svh;


        margin: 2rem 6vw 4rem 6vw;
        padding: 2rem 0px 8rem 0px;

        display: grid;
        grid-template-columns: 1fr 1.5fr;
        grid-template-rows: 1fr;

        gap: 8vh 6vw;

        max-width: app.$max-width;

        @media screen and (min-width: app.$max-width) {
            margin: 2rem auto 2rem auto;
        }


        @media screen and (max-width: 960px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr max-content;

            padding: 0rem 0vw;
            height: max-content;


        }

        div.graphic {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1.5rem;
        }

        div.content {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                border-radius: 1rem;
            }
        }
    }
</style>


<script lang="ts">


</script>

<section id="about">
    <div class="graphic">
        <h2>Spinning Successes: (33)Beats by Design!</h2>
        <p>Welcome to 33 Beats, where rhythm and innovation harmonize to create unforgettable experiences. We are more than just a DJ solutions firm; we are the architects of melodic masterpieces and the conductors of sonic symphonies. Our team of talented mix maestros possesses an uncanny ability to turn ordinary events into extraordinary audio journeys that captivate audiences.</p>

        <a href="/#portfolio" class="button tertiary">See for yourself</a>
    </div>


    <div class="content">
        <img src="/images/barman.jpg" alt="">
    </div>
</section>


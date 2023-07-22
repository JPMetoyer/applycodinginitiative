


<style lang="scss">

    @use "../variables" as app;

    section#partners {
        height: calc(100svh - 4rem);

        border: 1px solid orange; 

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 4vmax 4vmax;

        padding: 8vmax 0px;

        @media screen and (min-width: 960px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
        }

        div.canvas {
            border: 1px solid blue;
            flex-grow: 1;
        }

        div.article {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;

            a {
                margin-left: auto;
                color: app.$color-brand;
            }
        }
    }
</style>

<section id="partners">
    <div class="canvas">

    </div>

    <div class="article">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aspernatur quasi accusantium expedita quis, tempora incidunt dolorem ullam rerum. Ullam nisi incidunt eligendi inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, modi totam nemo pariatur facilis, saepe deleniti obcaecati perferendis ipsum nisi magni veniam ullam consectetur.</p>
        <a href="/">Learn More -></a>
    </div>
</section>




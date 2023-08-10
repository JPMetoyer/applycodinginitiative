

<style lang="scss">
    @use "../variables" as app;

    div.graphic {
        padding: 2rem 0px;

        > img {
            width: 100%;
            height: 100%;
            background-color: pink;
            border-radius: 1rem;
        }
    }

    div.info {

        display: flex;
        flex-direction: column;

        > h2 { margin-bottom: 1rem; }

        > h5 {
            font-weight: app.$weight-bold;
            margin-top: 2.5rem;
            margin-bottom: 0.5rem;
        }

        div.partners {

            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;

            span {
                width: 2.8rem;
                height: 2.8rem;
                border-radius: 3rem;

                padding: 0.5rem 0.5rem;
                background-color: hsl(206, 14%, 95%);
                filter: drop-shadow(0.3rem 0.3rem 1rem rgba(40, 42, 54, 0.05));
            }
        }
    }

    
</style>


<script>
    import Bisect from "../components/Bisect.svelte";

</script>


<Bisect>
    <div class="graphic">
        <img src="" alt="">
    </div>


    <div class="info">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id accusamus laudantium ad illo aliquid molestiae quaerat ratione mollitia deserunt deleniti, expedita in perferendis asperiores at corrupti porro quis quo vel aperiam voluptatem.</p>

        <h5>Brought to you by:</h5>
        <div class="partners">
            <span><img src="/icons/afyadux.png" alt=""></span>
            <span><img src="/icons/microsoft.png" alt=""></span>
            <span><img src="/icons/wci.png" alt=""></span>
        </div>

    </div>
</Bisect>


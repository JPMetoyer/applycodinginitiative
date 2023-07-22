

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
        justify-content: center;

        p { margin-top: 2rem; }

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
                width: 2.4rem;
                height: 2.4rem;
                background-color: pink;
                border-radius: 3rem;
            }
        }
    }

    
</style>


<script>
    import Bisect from "../components/Bisect.svelte";

</script>


<Bisect>

    <div class="info">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id accusamus laudantium ad illo aliquid molestiae quaerat ratione mollitia deserunt deleniti, expedita in perferendis asperiores at corrupti porro quis quo vel aperiam voluptatem.</p>

        <h5>Brought to you by:</h5>
        <div class="partners">
            <span></span><span></span><span></span>
        </div>

    </div>

    <div class="graphic">
        <img src="" alt="">
    </div>    
</Bisect>


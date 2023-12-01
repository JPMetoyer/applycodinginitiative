
<style lang="scss">
    @use "../../variables" as app;

    footer {
        background-color: app.$color-brand;
        padding: 2rem 4vw;


        display: flex;
        flex-direction: column;
        justify-content: space-between;

        gap: 02em;

        p {
            color: app.$color-background;
            font-size: 0.8rem;
        };

        div.info {
            height: 4rem;
        }

        div.trail {
            margin: 0rem 0px;

            display: flex;
            justify-content: space-between;
        }
    }
</style>


<footer>
    <div class="info">
        <img src="/icons/official-white.png" alt="">
    </div>

    <div class="trail">
        <p>Copyright &copy; Thirty Three Limited, KE</p>
        <p>All Rights Reserved</p>
    </div>
</footer>


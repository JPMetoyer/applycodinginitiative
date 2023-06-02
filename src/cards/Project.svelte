


<style lang="scss">

    @use "../variables" as app;

    div.project {
        width: calc(92vw - 2rem);
        margin: 0px 0.5rem; 
        border-radius: 0.8rem;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 10rem auto;

        background-color: app.$color-background;
        filter: drop-shadow(0rem 1rem 3rem rgba(40, 42, 54, 0.08));

        > img {
            width: 100%;
            border-radius: 0.8rem 0.8rem 0px 0px;
            object-fit: cover;
        }

        .info {
            padding: 0.5rem 0.7rem;

            > p:nth-child(1) { font-weight: app.$weight-bold; }
        }

        .info > span {
            display: flex;
            justify-content: space-between;

            
        }
    }
</style>

<script lang="ts">

</script>


<div class="project">
    <img src="/images/edm.jpg" alt="">

    <div class="info">
        <p>Lorem ipsum dolor sit amet.</p>
        <span>
            <p>Marketing · EDM</p>
            <p>Mombasa</p>
        </span>
    </div>
</div>



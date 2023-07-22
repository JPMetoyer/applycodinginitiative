




<style lang="scss">
    @use "../variables" as app;

    section#guides {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem 1rem;

        padding: 0px 5vw 7rem 5vw;
        margin-top: 4rem;

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
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>

    <a href="/" class="button tertiary">See more</a>
</section>




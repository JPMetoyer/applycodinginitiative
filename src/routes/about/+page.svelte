<script>
    import Partners from "../../sections/about/partners.svelte";

</script>


<style lang="scss">
    .bisect {

        display: none;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        gap: 2rem 2rem;

        .graphic {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .content {
            display: flex; 
            flex-direction: column;
            gap: 1rem;
        }
        
        @media screen and (max-width: 960px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }
    }

    
</style>

<section class="bisect">
    <div class="graphic">
        <img src="/images/placeholder.png" alt="">
    </div>
    <div class="content">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi fugiat fuga neque omnis architecto est illum quisquam accusamus a! Labore et magnam eum molestiae.</p>
    </div>
</section>

<Partners></Partners>







<style lang="scss">

    @use "../variables" as app;


    // #region About
    article.meet {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        h1 {
            font-size: 300%;
            padding-top: 2rem;
            padding-left: 2rem;
            transform: translateY(20%);
        }

        > span:nth-child(1) {
            margin-right: auto;
        }
        
        > span:nth-child(2) {
            margin-left: auto;
            margin-right: 2rem;
        }
    }

    article.content {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        gap: 1rem;

        padding: 0px 4vw;

        > a {
            margin-left: auto;
            transform: translateY(4vmax);
        }
    }

    article.content p {
        &::first-letter {
            float: left;
            font-size: 3rem;
            font-weight: app.$weight-bold;
            padding-top: 0.8rem;
            padding-bottom: 0.6rem;
            padding-right: 0.5rem;
            padding-left: 0.5rem;

        }
    }
    // #endregion

    // #region Portfolio
    #portfolio {
        width: 100%;
        height: calc(100vh - 8rem);

        display: flex;
        flex-direction: column;
        justify-content: center;

        .title {
            margin: 2rem 0px;
            display: flex;
            align-items: center;
            justify-content: center;

            > h1 {
                text-align: center;
            }
        }

        .scrollview {
            position: relative;
            width: 100%; 
            height: 40vh;

            > .viewport {
                position: absolute;
                top: 0px; 
                left: 0px; 
                right: 0px; 
                bottom: 0px;
                width: 100%;
                height: 100%;
                overflow: scroll hidden;
            }

            > .viewport > div.content {
                position: absolute;
                left: 0px;
                top: 50%;
                bottom: 0px;
                height: max-content;
                width: 1500px;
                transform: translateX(-37.5rem) translateY(-50%);

                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 3rem;
            }
        }
    }
    // #endregion


</style>


<Section>
    <article class="meet">
        <span>
            <h1>Meet</h1>
            <img src="/icons/logo.png" alt="">
        </span>
    
        <span>
            <p>+ 75% better reviews</p>
            <p>+ 250 better reviews</p>
            <p>+ 12 better reviews</p>
        </span>
    </article>
    
    <article class="content">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci rem doloribus animi numquam, alias error provident dolor necessitatibus amet dolores itaque placeat accusantium labore reiciendis inventore quod ipsam! Inventore maiores ea dolores! Lorem ipsum dolor sit amet</p>
        <a href="/about" class="button">Learn more</a>
    </article>
</Section>

<section id="portfolio">
    <div class="title">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
    </div>

    <div class="scrollview">
    <div class="viewport">
    <div class="content">
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
    </div>
    </div>
    </div>
</section>

<script>
    import Section from "./components/Section.svelte";
    import Project from "./cards/Project.svelte";
</script>


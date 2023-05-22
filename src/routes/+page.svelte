


<style lang="scss">

    @use "../variables" as app;


    // #region About
    // :global(#about)  {
    //     display: none;
    // }

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
            transform: translateY(00%);
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
            transform: translateY(2vh);
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
        padding-top: 2rem;
        padding-bottom: 2rem;

        display: flex;
        flex-direction: column; 
        gap: 1rem;

        .flag {
            display: flex;
            align-items: flex-start; 
            justify-content: flex-start;
            gap: 1rem;

            @media screen and (max-width: 960px) {
                flex-direction: column;
            }

            > h2 {
                min-width: 300px;
                width: 20vw;
            }

            > p {
                margin-left: 8vmax;
            }

        }

        #content {
            padding-top: 1rem;
            flex-grow: 1;

            display: flex;
            flex-direction: column; 
            gap: 1rem;

            .companies {
                display: flex;
                align-items: center;
                justify-content: center;

                gap: 0.5rem; 
                fill: app.$color-foreground;

                .separator {
                    width: 2rem; 
                    height: 2rem;
                    transform: rotateZ(45deg);
                }

                .partner {
                    width: 4rem; 
                    height: 4rem;

                    padding: 0.5rem 0.5rem; 
                    border-radius: 8rem;
                    border: 1px solid ivory;

                    > img {
                        filter: drop-shadow(0.3rem 0.3rem 0.4rem rgba(40, 42, 54, 0.2));
                    }
                
                }

            }


            #carousel {
                position: relative;
                overflow: scroll hidden;
                flex-grow: 1;

                .viewport {

                    position: absolute;
                    top: auto; 
                    bottom: auto;
                    left: 0px;
                    height: 100%;
                    
                    display: flex;
                    align-items: center;

                    padding: 0rem calc((92vw - 36vmax) / 2);
                    gap: 1.5rem;
                    transform: translateX( var(--reel-chip) );

                    div.carrier {
                        width: 36vmax;
                        height: 25vmax; 

                        padding: 2vw;
                    }

                }

            }  
        }

        #cta {
            margin: 0px auto;
        }
    }
    // #endregion

    // #region Clients
    section#clients {
        height: calc(90vh - 8rem);
        padding: 16vmax 0px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 6vmin;

        #action {
            display: flex;
            justify-content: space-between; 
            align-items: flex-end;

            > h2 {
                line-height: 160%;
            }
        }

        #river {
            height: 12vmin;

            display: flex;
            align-items: center;
            justify-content: flex-start;

            .fish {
                height: 4rem; 
                width: max-content;;
            }
        }
    }
    // #endregion

    // #region Team
    #team {

        height: 45vmax;
        min-height: 600px;
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;

        #profiles {

            width: 50vmin; 
            height: 50vmin;
            transform: rotateZ(45deg);

            z-index: 1;

            display: grid;
            grid-template-columns: 1fr 1fr; 
            grid-template-rows: 1fr 1fr;

            > div {
                width: 100%;
                height: 100%; 
                border: 1px solid app.$color-shade;
                background-color: transparent;

                padding: 2vw 2vw; 
                
                // &:nth-child(1) { background-color: red };
                // &:nth-child(2) { background-color: blue };
                // &:nth-child(3) { background-color: green };
                // &:nth-child(4) { background-color: yellow };

                > img {
                transform: rotateZ(-45deg);
                }
            }
        }

        #people {
            position: absolute;
            top: 0px; 
            left: 0px; 
            bottom: 0px; 
            right: 0px;

            > .chip {
                display: flex; 
                flex-direction: column;
                line-height: 120%;

                margin: 1rem 0px;
                padding: 0px 1rem;

                position: absolute;

                &:nth-child(1) { border-left: 2px solid green; top: 0px; left: 0px; }
                &:nth-child(2) { border-right: 2px solid green; top: 0px; right: 0px; justify-content: flex-end; text-align: right; }
                &:nth-child(3) { border-left: 2px solid green; bottom: 0px; left: 0px; }
                &:nth-child(4) { border-right: 2px solid green; bottom: 0px; right: 0px; justify-content: flex-end; text-align: right; }


                width: 16vw;
                min-width: 200px;
                gap: 0px;
                
                > h5 { font-size: 0.9rem; font-weight: app.$weight-bold; };
                > p { font-size: 0.9rem; font-weight: app.$weight-light; };
            }
        }
    }
    // #endregion

    // #region Faq
    #faq {

        margin-top: 32vh;
        margin-bottom: 32vh;

        .content {
            margin: 3rem 0px;
        }


        .question {
            display: flex;
            flex-direction: column;
            padding: 0.3rem 0px;
            background-color: transparent;
            color: app.$color-foreground;

            margin: 0px;
            width: 100%;

            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 1px solid app.$color-foreground;
            border-radius: 0px;

            

            overflow: hidden hidden;

            > h4 {
                line-height: 170%;
                font-weight: app.$weight-bold;
            }

            > p {

                transition-property: height;
                transition-duration: 200ms;
                transition-timing-function: ease-in;

                color: app.$color-gray;

                height: 0rem;
            }

            &.open { > p {
                height: 1.7rem;
            }}

            &:first-child {
                border-top: 1px solid black;
            }
        }

    }
    // #endregion

</style>



<script lang="ts">
    import Section from "./components/Section.svelte";
    import Project from "./cards/Project.svelte";
    import events from "../data/projects.json";
    import Work from "../models/work";

    const samples : Work[] = events.slice(0, 4).map((info) => new Work(info));

    let portfolioIndex = 0;


    let faqIndex = 3;
    const updateFaqIndex = (index: number) => { 
        if (faqIndex === index) { return }; 
        faqIndex = index;
    }
    const questions = [0, 0, 0, 0, 0, 0]
</script>



<Section id="about">
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
    <div class="flag">
        <h2>Unparalleled expertise</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem, iste minima facere distinctio nemo. Provident vitae quam tempora laboriosam ad</p>
    </div>

    <div id="content">

        <div class="companies">
            <div class="partner">
                <img src="/icons/atlassian.png" alt="">
            </div>
            <div class="separator">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="#292D32"/>
                    <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"/>
                </svg>
            </div>
            <div class="partner">
                <img src="/icons/apple.png" alt="">
            </div>
        </div>


        <div id="carousel">
        <div class="viewport" style="--reel-chip: calc((35vmax + 2rem) * -{ portfolioIndex })">
        { #each samples as event }
            <div class="carrier"><Project event={ event } /></div>
        { /each }           
        </div>
        </div>

        <a id="cta" href="/portfolio" class="button secondary">See all work</a>

    </div>
</section>

<section id="clients">

    <article id="action">
        <h2>Lorem sit dolor,<br>sit Amet</h2>

        <a href="/quote" class="button">Join the Club</a>
    </article>

    <div id="river">
        <div class="fish"><img src="/icons/logo.png" alt=""></div>
        <div class="fish"><img src="/icons/logo.png" alt=""></div>
        <div class="fish"><img src="/icons/logo.png" alt=""></div>
        <div class="fish"><img src="/icons/logo.png" alt=""></div>
        <div class="fish"><img src="/icons/logo.png" alt=""></div>
        <div class="fish"><img src="/icons/logo.png" alt=""></div>
    </div>

</section>

<section id="team">

    <div id="profiles">
        <div><img src="/images/eren.png" alt=""></div>
        <div><img src="/images/nana.png" alt=""></div>
        <div><img src="/images/toph.png" alt=""></div>
        <div><img src="/images/daywave.png" alt=""></div>
    </div>

    <div id="people">
        <div class="chip">
            <h5>Eren Yeager</h5>
            <p>Lorem ipsum dolor sit, amet consectetur amit.</p>
        </div>

        <div class="chip">
            <h5>Nana Kirstein</h5>
            <p>Lorem ipsum dolor sit, amet consectetur amit.</p>
        </div>

        <div class="chip">
            <h5>Toph Beifong</h5>
            <p>Lorem ipsum dolor sit, amet consectetur amit.</p>
        </div>

        <div class="chip">
            <h5>Daywave Wafula</h5>
            <p>Lorem ipsum dolor sit, amet consectetur amit.</p>
        </div>
    </div>

</section>

<section id="faq">
    <div class="content">
        <h1>Frequently Asked Questions</h1>
    </div>

    { #each questions as _, index }
    <button on:click={ () => { updateFaqIndex(index) }} class={ `question${ faqIndex === index ? " open" : "" }` }>
        <h4 class="truncated">Lorem ipsum dolor sit amet.</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus obcaecati minus asperiores</p>
    </button>
    {/each }
</section>




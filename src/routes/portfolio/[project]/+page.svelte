<script>
    import Icon from "../../../components/Icon.svelte";

    import { page } from '$app/stores';
    import projects from "../../../data/portfolio.json";
    import CaseStudy from "../../../models/casestudy";

    const projectID = $page.params.project;
    const response = new CaseStudy(projects.find((sample) => sample.id === projectID));


</script>


<style lang="scss">
    @use "../../../variables" as app;

    article {
        padding: 1rem 5vw 0rem 5vw;

        section {


            > h3 {
                position: relative;
                font-weight: app.$weight-bold;
                margin-bottom: 1rem;
                
                &::after {
                    position: absolute;
                    top: -0.5rem;
                    left: 0px;

                    content: "";
                    width: 2rem;
                    height: 0.1rem;
                    background-color: app.$color-brand;
                }
            }

            margin-top: 4rem;


        }

        section#intro {
            margin-top: 0px;
            margin-bottom: 2rem;

            > h5 { font-weight: app.$weight-black; font-size: 100%; margin: 0.5rem 0px; }

            div.companies {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;

                gap: 0.5rem; 
                fill: app.$color-foreground;
                margin: 2rem 0px;

                .thirthythree {
                    display: flex;
                    align-items: center;
                    gap: 1.0rem;
                }

                .separator {
                    width: 2rem; 
                    height: 2rem;
                    transform: rotateZ(45deg);
                }

                .partner {

                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    > img {
                        width: 3.6rem; 
                        height: 3.6rem;

                        padding: 0.4rem 0.4rem; 
                        border-radius: 8rem;
                        // border: 1px solid rgba(40, 42, 54, 0.05);
                        background-color: hsl(206, 14%, 95%);
                        filter: drop-shadow(0.3rem 0.3rem 1rem rgba(40, 42, 54, 0.05));
                    }
                
                }

                > img {
                    height: 4.2rem;
                    transform: translateX(-1rem);
                }

            }
        }

        section.gallery {

            transform: translateY(-1rem);

            > div.photos {
                display: flex; 
                flex-direction: column;;
                gap: 0.2rem 0px;
                margin-top: 1.5rem;

                border-radius: 1rem;
                overflow: hidden; 
            }

            > :nth-child(3) { margin-top: 3rem; }

            > div.value {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                gap: 0.5rem 0px;

                margin: 2rem 0px;

                > span {
                    fill: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;;
                }
            }

            .call-to-action {
                display: flex;
                align-items: center;
                justify-content: center;

                margin-top: 2rem;
                margin-bottom: 4rem;
            }

        }

        section#reviews {

            display: none;

            position: relative;
            padding-top: 3rem;

            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 1rem 1rem;


            > div.comment {
                border-radius: 1rem;
                padding: 0.5rem 1rem;

                display: flex;
                flex-direction: column;
                gap: 0.5rem 0px; 
                background-color: app.$color-background;
                filter: drop-shadow(0rem 0rem 1rem rgba(40, 42, 54, 0.05));

                h4 { font-weight: app.$weight-bold; }

                > span {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    
                    > div { width: 3.6rem; height: 3.6rem; border: 1px solid app.$color-shade; border-radius: 4rem; }
                }

                > p { margin: 0.25rem 0px;  }
            }

            > h3 { position: absolute; top: 0px; }
        }



    }
</style>

<article>
    <section id="intro">
    <h5>{ response.deliverables[0] } &middot; { response.deliverables[1] }</h5>

    <div class="companies">
        <div class="thirthythree">
            <div class="partner">
                <img src="/icons/favicon.png" alt="">
                <h2>33Beats</h2>
            </div>

            <div class="separator">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="#292D32"/>
                    <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"/>
                </svg>
            </div>
        </div>
        
        
        <img src={ response.logo } alt="">
    </div>
    </section>

    <section class="block">
        <h3>Challenge</h3>

        <p>{ response.challenge }</p>
    </section>

    <section class="gallery">

        <h3>Before</h3>

        <div class="photos">
        { #each response.before as image }
        <img src={ image } alt="">
        {/each }
        </div>
    </section>

    
    <section class="block">
        <h3>Target Audience</h3>

        <p>{ response.audience }</p>
    </section>


    <section class="block">
        <h3>Tune in to Success</h3>

        <p>{ response.results }</p>
    </section>

    
    <section class="gallery">
        <h3>After</h3>

        <div class="photos">
            { #each response.after as image }
            <img src={ image } alt="">
        {/each }
        </div>

        <div class="value">
        { #each response.impact as ripple }
        <span>
            <Icon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0702 9.57L12.0002 3.5L5.93018 9.57" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 20.4999V3.66992" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Icon>
            <p>{ ripple }</p>
        </span>
        {/each }  
        </div>
    </section>

    <section id="reviews">
        <h3>Comments</h3>

        { #each response.reviews as comment }
        <div class="comment">
            <span>
                <div><img src="/images/eren.png" alt=""></div>

                <span>
                    <h4>{ comment.name }</h4>
                    <p>{ comment.title }</p>
                </span>
            </span>

            <p>&#34{ comment.comment }&#34</p>
        </div>
        {/each }
    </section>

    <section class="gallery">
        <div class="photos">
            <img src="/images/festival.jpg" alt="">
        </div>

        <div class="call-to-action">
            <a class="button secondary" href="">Join in the Mix</a>
        </div>
    </section>

    


</article>





<style lang="scss">

    @use "../../variables" as app;

    article#services {
        width: 100%;
        // padding-top: 60vh;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 2rem;

        position: relative;
        padding: 0px 5vw 0rem 5vw;

        max-width: app.$max-width;

        @media screen and (min-width: app.$max-width) {
            margin: 2rem auto 2rem auto;
            padding: 0px 4vw;


            div#header { padding: 0px 0px !important; }

        }

        overflow: hidden;

        div#header {
            // position: absolute;
            // top: 0.5rem;
            // left: 0px;
            // right: 0px;

            display: flex; 
            flex-direction: column;
            gap: 2rem;

            // padding: 0px 5vw;

            > h1 { position: relative; font-size: 164%; }
            > h1 > * { font-size: 100%; }
            > h1::after { 
                content: "";
                position: absolute;
                bottom: -1rem;
                left: 0px;
                
                ;
                height: 1px;
                width: 42%;
                background-color: app.$color-brand;
            }
        }

        #region {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            gap: 1.5rem 4vw;


            @media screen and (max-width: 960px) {
                grid-template-columns: 1fr;
                grid-template-rows: max-content 1fr;

                > div {
                    width: 90vw;
                }
            }
        }

        div#graphic {

            margin: auto 0px;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            > img {
                margin: auto auto 1rem auto;
                // width: 100%;
                // height: 100%;
                object-fit: cover;
                border-radius: 1rem;
            }

            > p {
                display: none;
                
                position: absolute;
                top: 0%;
                left: 50%;
                transform: translateX(-50%) translateY(-10%);
                font-weight: app.$weight-black;
                font-size: 200%;

                color: app.$color-shade;

                width: 100%;
                text-align: center;

                &:first-child {
                    z-index: -1;
                }

                &:nth-child(2){
                    display: none;

                        z-index: 2;
                    color: transparent;
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: orange;
                }
            }

        }

        div.message {

            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: 0.5rem;

            margin-bottom: 1rem;

            p { height: 8rem; }

            ul {
                margin-left: 2rem; 
                color: app.$color-foreground;
            };
        }

        div.selection {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 1rem 1rem;


            button {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: flex-end;

                padding: 1rem 1rem 0.8rem 0rem;
                border-radius: 0.8rem;
                border: 1px dashed app.$color-gray;
                height: 100%;
                width: 100%;

                background-color: transparent;

                transition-property: box-shadow;
                transition-duration: 300ms;
                transition-timing-function: ease-in;

                &.show {
                    border: 1px dashed transparent;
                    box-shadow: 0rem 0rem 1.5rem rgba(40, 42, 54, 0.08);
                }

                p { transform: translateY(0.1rem); }
                h4 { font-weight: app.$weight-bold; }

                > * {
                    color: app.$color-gray;
                }
            }
        }


        div#cta {

            position: sticky;
            bottom: 0px;
            left: 0px;
            right: 0px;
            width: 100%;

            padding: 1rem 0px;

            display: flex;
            align-items: center;
            justify-content: center;

            background: linear-gradient(180deg, transparent, app.$color-background 50%);

            > a { background-color: app.$color-background; }
        }
    }
</style>

<script lang="ts">

    let activeIndex: number = 0;

    $: services = [
        {
            single: "A.V. Production",
            image: "barman.jpg",
            lead: "A.V.",
            title: "Production",
            description: "Stay ahead with cutting-edge technology; we offer seamless integration of the latest audio tech, lighting systems, and interactive features - ensuring futuristic audio-visual delight.",
            deliverables: [
                "Cutting-Edge Audio Technology",
                "Dynamic Lighting Systems",
                "Interactive Features Implementation",
            ]
        },
        {
            single: "Events",
            image: "cocktail.jpg",
            lead: "Curated",
            title: "Events",
            description: "Crafting unforgettable DJ experiences: from intimate gatherings to massive festivals. Handling everything, from set design to audience engagement, ensuring your event is a sonic spectacle.",
            deliverables: [
                "Custom Set Design",
                "Audience Engagement Strategies",
                "Logistical Event Handling",
            ]
        },
        {
            single: "Branding",
            image: "festival.jpg",
            lead: "Digital",
            title: "Branding",
            description: "Ignite your online presence with our digital branding service. Designing eye-catching visuals, producing engaging content, and strategizing social media campaigns to amplify your brand across platforms.",
            deliverables: [
                "Eye-Catching Visual Design",
                "Engaging Content Production:",
                "Strategic Social Media Campaigns",
            ]
        },
        {
            single: "Marketing",
            image: "wei.jpg",
            lead: "Promotional",
            title: "Marketing",
            description: "Amplify your beats with our Promotional Marketing service – tailored strategies to elevate your company's brand, engage fans, and set the dancefloor on fire.",
            deliverables: [
                "Tailored Brand Elevation Strategies",
                "Fan Engagement Initiatives",
                "Dancefloor Ignition Campaigns",
            ]
        }
    ]
</script>

<article id="services">

    <div id="header">
        <h1>Ready to take your <span>event</span> to the next level?</h1>
        <p>Here is how we can help:</p>
    </div>

    <div id="region">
        <div id="graphic">  
            <p>{ services[activeIndex].single }</p>
            <p>{ services[activeIndex].single }</p>
            <img src={ `/images/${ services[activeIndex].image }` } alt="">
        </div>

        <div>
            <div class="message">
                <p>{ services[activeIndex].description }</p>
                <ul>
                    { #each services[activeIndex].deliverables as deliverable }
                        <li>{ deliverable }</li>
                    {/each }
                </ul>
            </div>

            <div class="selection">
                { #each services as service, index}
                <button class={ (activeIndex === index) ? "show" : "" } on:click={ () => { activeIndex = index }} >
                    <p>{ service.lead }</p>
                    <h4>{ service.title }</h4>
                </button>
                {/each }
            </div>
        </div>
    </div>


    <div id="cta">
        <a href="/hire" class="button tertiary">Get Personalized Quote</a>
    </div>
</article>




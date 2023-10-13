

<style lang="scss">
    @use "../../variables" as app;

    h1 { font-size: 160%; font-weight: app.$weight-black; }
    b { font-weight: app.$weight-bold; }
    span.info { color: app.$color-brand }

    div > h3 { margin-bottom: 0.5rem; }

    span.list {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        > p {
            padding-left: 1.5rem;
        }
    }

    section#contact {

        height: calc(100svh - 5rem);
        padding: unset;


        display: grid;
        grid-template-columns: 1fr;
        grid-template-columns: auto;
        gap: 6vw;

        @media screen and (min-width: 960px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
        }


        div#canvas {

            position: absolute;
            max-height: calc(100vh - 5rem);
            min-height: 300px;
            height: 40vh;
            width: 90vw;

            @media screen and (min-width: 960px) {
                position: fixed;
                top: 4rem;
                left: 5vw;
                width: calc(45vw - 3vw);
                height: 100vh;
            }

            > span.check {

                z-index: -2;

                height: 100%;

                display: flex;
                flex-direction: column;
                justify-content: space-around;

                span {
                    height: 1px;
                    width: 100%;
                    background-color: app.$color-gray;

                    opacity: 32%;
                }

                &.horizontal {
                    width: 100%;
                    position: absolute; 
                    flex-direction: row;

                    z-index: -1; 

                    span {
                        width: 1px;
                        height: 100%;
                    };

                    &::after {
                        content: "";
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        right: 0px;
                        bottom: 0px;
                        background: radial-gradient(50% 50.00% at 50% 50.00%, transparent 0%, app.$color-background 100%);
                    }

                }
            }
        }

        article {
            display: flex;
            flex-direction: column;
            justify-content: center;


            @media screen and (min-width: 960px) {
                width: 50%;
                margin-right: 2rem;
                margin-left: 50vw;
            }

            padding: 0px 5vw 0px 5vw;
        }

        article > form {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 0.5rem;

            margin-top: 1rem;
            margin-bottom: 24vh;

            

            > div { width: 100%; margin-top: 2rem; }


            > div.description {
                display: flex; 
                justify-content: flex-start;
                flex-direction: column;
                gap: 0.3rem;
                margin-bottom: 0.5rem;

                margin-top: 0px;

                width: 100%;
            }

            div.prompt {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                > p { font-style: italic; }
            }

            div.competitions {
                margin-top: 2rem;
            }

            div.organizations {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                gap: 1rem 1rem;

                margin-top: 1rem;

            }

            div.learn {
                position: relative;
                margin-top: 1.5rem;

                padding-top: 1rem;

                p {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                }

                a {
                    position: relative;
                    margin-left: 2rem;
                    color: app.$color-brand;
                    height: 1.5rem;

                    width: max-content;

                    > div {
                        position: absolute;
                        top: 50%;
                        right: -2rem;
                        width: 1.5rem;
                        height: 1.5rem;

                        transform: translateY(-35%) rotateZ(45deg);
                    }
                }

                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 0.3rem;

                
            }

            input[type=radio] { display: none; }

            div.email { margin-top: 0px; }

            div.email.error {
                input { border: 1px solid app.$color-error };
                p { color: app.$color-error; font-size: 90%; margin-left: 0.5rem; margin-top: 0.2rem; };
            }

            > div.options {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;

                width: 100%;
                margin-top: 0px;
            }

            label {
                position: relative;

                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 1rem; 
                border-radius: 0.8rem;
                background-color: app.$color-background;

                padding: 2rem 1rem 0.5rem 1rem;
                fill: transparent;
                width: unset;
                flex-grow: 1;

                cursor: pointer;

                border: 1px dashed app.$color-shade;

                transition-property: box-shadow;
                transition-duration: 300ms;
                transition-timing-function: ease-in;

                input { display: none };

                > img {
                    position: absolute;
                    width: 2rem; 
                    height: 2rem;

                    top: 0.5rem;
                    left: 0.5rem;

                    object-fit: cover;

                    max-height: unset !important;

                    filter: grayscale(100%);

                    transition-property: filter;
                    transition-duration: 300ms;
                    transition-timing-function: ease-in;
                }

                > span {
                    position: absolute;
                    top: 0.5rem;
                    right: 1rem;

                    width: 1.25rem;
                    height: 1.25rem;
                    stroke: app.$color-info;

                    opacity: 0%;

                    transition-property: opacity;
                    transition-duration: 300ms; 
                    transition-timing-function: ease-in;

                }

                

                &.checked {
                    border: 1px dashed transparent;
                    box-shadow: 0rem 0rem 1.5rem rgba(40, 42, 54, 0.08);

                    img { filter: grayscale(0%); }
                    > p { color: app.$color-foreground; }

                    > span {
                        opacity: 100%;
                    }
                }

                > p { 
                    text-align: end; 
                    font-weight: app.$weight-bold;
                    color: app.$color-gray;
                }

            }

            > span {

                position: fixed;
                bottom: 0px;
                left: 0px;
                right: 0px;
                // background-color: app.$color-background;
                background: linear-gradient(0deg, app.$color-background 50%, transparent);

                padding: 2.5rem 1rem 2rem 2.4rem;

                width: 100%;
                // height: 2.5rem;

                display: flex;
                align-items: center;
                justify-content: space-between;

                @media screen and (min-width: 960px) {
                    padding-left: 55vw;
                }

            }


            textarea {
                resize: none;
            }

            input,
            textarea {
                padding: 0.6rem 0.8rem;
                background-color: transparent;
                border-radius: 0.6rem;

                width: 100%;


                border: 1px solid app.$color-shade;
                &::placeholder { color: app.$color-gray; }
            }
        }

        


        article > div.description {
            margin-bottom: 0.5rem;

            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            &.header {
                margin-top: 3rem;

                > p { margin: 0.5rem 0px; }
            }
        }

    }
</style>

<script lang="ts">
    import { onMount } from "svelte";
    import { sendNotification, NotificationState } from "../../lib/utilities";
    import Deliverable from "../../cards/Deliverable.svelte";
    import Icon from "../../components/Icon.svelte";
    import Project from "../../cards/Project.svelte";


    let viewportHeight : number = 0;
    let viewportWidth : number = 0;

    $: rows = Math.floor(viewportHeight / 40);


    $: deliverableServices = [
        { selected: false, lead: "A.V.", name: "Production", image: "atlassian.png", id: "avprod", minKes: 12000, maxKes: 15000, minDollar: 100, maxDollar: 150 },
        { selected: false, lead: "Event", name: "Experiences", image: "atlassian.png", id: "event", minKes: 20000, maxKes: 21000, minDollar: 200, maxDollar: 210 },
        { selected: false, lead: "Digital", name: "Branding", image: "atlassian.png", id: "branding", minKes: 17000, maxKes: 21000, minDollar: 170, maxDollar: 210 },
        { selected: false, lead: "Promotional", name: "Marketing", image: "atlassian.png", id: "marketing", minKes: 24000, maxKes: 32500, minDollar: 240, maxDollar: 325 }
    ]

    // Answers

    let currency: string = "kes";
    let name: string;
    let email: string;
    let projectDescription: string = "";

    let formElement: HTMLFormElement;
    let emailElement: HTMLInputElement;
    let projectDescriptionElement : HTMLTextAreaElement;

    let sending : boolean = false;
    let emailError : string = "";

    $: serviceable = 
        (deliverableServices[0].selected) ||
        (deliverableServices[1].selected) ||
        (deliverableServices[2].selected) ||
        (deliverableServices[3].selected);

    $: submittable = 
        (sending === false) &&
        (serviceable) &&
        (currency !== undefined) &&
        (name != "") && (name != undefined) &&
        (email != "") && (email != undefined) &&
        (projectDescription != "") && (projectDescription != undefined) &&
        (emailError === ""); 

    $: selected = (currency === "dollar") ? 
        deliverableServices.map((service) => (service.selected) ? [service.minDollar, service.maxDollar] : [0, 0]) :
        deliverableServices.map((service) => (service.selected) ? [service.minKes, service.maxKes] : [0, 0]);

    $: total = selected.reduce((previous, current) => [(previous[0] + current[0]), (previous[1] + current[1])]);

    const onFinishEditEmail = async () => {

        const emailRegexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        console.log();


        if (emailRegexPattern.test(email) === false && email !== "") { emailError = "Please enter a correct email address"; return }
        emailError = "";
    }


    const submitForm = async () => {

        sending = true;
        sendNotification({ message: "Sending ...", type: NotificationState.info });

        const data = JSON.stringify({
            currency: currency,
            name: name,
            email: email,
            description: projectDescription,

            avProduction: deliverableServices[0].selected,
            events: deliverableServices[1].selected,
            branding: deliverableServices[2].selected,
            marketing: deliverableServices[3].selected

        });

        const action = await fetch(`/api/application`, {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: data
        });

        if (formElement !== undefined) { formElement.reset() } 

        sendNotification({ message: "Application sent successfully :)", type: NotificationState.success });
    }

</script>

<svelte:window bind:innerHeight={ viewportHeight } bind:innerWidth={ viewportWidth }/>

<main>
<section id="contact">

    <div id="canvas">
        <Deliverable title="A.V. Production" active={ deliverableServices[0].selected } image={ "/images/under.jpeg" } />
        <Deliverable title="Expertly Curated Events" active={ deliverableServices[1].selected } image={ "/images/tours.jpeg" } />
        <Deliverable title="Digital Branding" active={ deliverableServices[2].selected } image={ "/images/tours.jpeg" } />
        <Deliverable title="Promotional Marketing" active={ deliverableServices[3].selected } image={ "/images/tours.jpeg" } />

        <span class="check horizontal">
            { #each Array(rows) as _ }
            <span></span>
            {/each }
        </span>

        <span class="check vertical">
        { #each Array(rows) as _ }
            <span></span>
        {/each }
        </span>
    </div>

    <article>
        <div class="description header">
            <h1>Shape your sonic vision with precision!<br></h1>
            <h2>Personalized Quote Estimate</h2>

            <p style="margin-bottom: 1rem">
                Detail your event needs, articulate your desires, and watch us turn your vision into a reality. Together, we'll elevate your experience, achieve measurable goals, and set your beats on a transformative journey.
            </p>

            <p>A few things to keep in mind: </p>
            <span class="list">
                <p>This is form will act as the initial point of contact between you and us</p>
                <p class="point">The prices listed below are rough estimates - true costs will change depending on the exact scope, challenge, and deliverables for the project</p>
            </span>
        </div>

        
        <form bind:this={ formElement } action="/api/application" on:submit|preventDefault={ submitForm } method="post">

            <input type="radio" bind:group={ currency } id="kes" name="stream" value="kes">
            <input type="radio" bind:group={ currency } id="dollar" name="stream" value="dollar">

            <div class="options">
                <label class={ (currency === "kes") ? "checked" : "" } for="kes">
                    <p>KES<br>Kenyan Shilling</p>

                    <span>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.service/2000/svg">
                        <path d="M6 12L10.2426 16.2427L18.7279 7.75739" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </label>

                <label class={ (currency === "dollar") ? "checked" : "" } for="dollar">
                    <span>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.service/2000/svg">
                        <path d="M6 12L10.2426 16.2427L18.7279 7.75739" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>

                    <p>$<br>U.S. Dollar</p>
                </label>
            </div>

            <div class="competitions">
                <h3>Elevate your beats; captivate your audience; amplify your brand</h3>
                <p>Choose from our dynamic DJ services to create an unforgettable experience tailored to your unique vision</p>
            </div>

            <div class="organizations">
                { #each deliverableServices as service }
                    <label class={ `${ service.selected ? "checked" : "" }` } for={ service.id }>
                        <img src={ `/icons/${ service.image }` } alt="">
                        <p class="truncated">{ service.lead }<br>{ service.name }</p>

                        <span>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.service/2000/svg">
                            <path d="M6 12L10.2426 16.2427L18.7279 7.75739" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>

                        <input bind:checked={ service.selected } type="checkbox" id={ service.id }>
                    </label>
                {/each }
            </div>


            

            <br>
                
            <div class="description">
                <h3>Contact information</h3>
                <p>We will use this information to contact you and send updates</p>
            </div>

            <input bind:value={ name } type="text" placeholder="Your Name" name="name">

            <div class={ (emailError === "") ? "email" : "email error" }>
                <input on:blur={ onFinishEditEmail } bind:this={ emailElement } bind:value={ email } type="email" name="email" placeholder="youremail@company.com">
                <p>{ emailError }</p>
            </div>

            <br>
            <br>

            <div class="description">
                <h3>Project Questions</h3>
                <p>Let's bring your vision to life! Describe your project in detail, from the atmosphere you envision to specific services you're interested in. We're here to tailor our DJ solutions to your unique ideas and make your event unforgettable.</p>
            </div>
            <div class="prompt">
                <textarea rows="1" bind:this={ projectDescriptionElement } on:input={ () => projectDescriptionElement.style.height = `${ (projectDescriptionElement.scrollHeight) }px` } bind:value={ projectDescription } name="" id="" placeholder="Describe the project you had in mind"></textarea>
            </div>

            <span>
                <p>{ (currency === "dollar" ? "$ " : "KES ") }{ total[0].toLocaleString() }-{ total[1].toLocaleString() }</p>
                <button type="submit" disabled={ (submittable === false) || (sending === true) }>{ submittable ? "Submit" : "Fill in all information" }</button>
            </span>
        </form>
    </article>

</section>
</main>
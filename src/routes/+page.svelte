

<style lang="scss">
    @use "../variables" as app;

    h1 { font-size: 160%; font-weight: app.$weight-black; }
    b { font-weight: app.$weight-bold; }
    span.info { color: app.$color-brand }

    div > h3 { margin-bottom: 0.5rem; }

    span.list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;

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


        p > a { color: app.$color-info; }

        div#canvas {

            position: absolute;
            max-height: calc(100vh - 5rem);
            min-height: 300px;
            height: 40vh;
            width: 90vw;

            top: var(--offset);
            transform: translateY(-60%);

            @media screen and (min-width: 360px) and (max-width: 560px) {
                transform: translateY(-120%);
            }

            @media screen and (min-width: 560px) and (max-width: 960px) {
                transform: translateY(-180%);
            }

            @media screen and (min-width: 960px) {
                position: fixed;
                top: 60vh;
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

        section#intro {
            margin-top: 1rem;
            margin-bottom: 2rem;

            > h5 { display: none; font-weight: app.$weight-black; font-size: 100%; margin: 0.5rem 0px; }

            div.companies {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;

                gap: 0.5rem; 
                fill: app.$color-foreground;
                margin: 1rem 0px;

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
                    height: 3rem;
                    transform: translateX(-0.3rem) translateY(0.3rem);
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

            @media screen and (max-width: 959px) {
                margin-top: 50vh;
            }

            

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

                @media screen and (max-width: 960px) {
                    margin-bottom: 50vh;
                }
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
                align-items: flex-end;
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

        


        article > div:nth-child(1){
            margin-bottom: 0.5rem;

            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            &.header {
                margin-top: 3rem;

                > p { margin: 0.5rem 0px; }
            }
        }

        #action {
            min-width: max-content;
        }

    }
</style>

<script lang="ts">
    import { sendNotification, NotificationState } from "$lib/utilities/utilities";
    import Deliverable from "$lib/cards/Deliverable.svelte";
    import { onMount } from "svelte";


    let viewportHeight : number = 0;
    let viewportWidth : number = 0;

    $: rows = Math.floor(viewportHeight / 40);



    // Answers

    let name: string;
    let email: string = "";
    let idNumber: number;
    let teacher: string = "";

    let offsetHeight = 0;

    let formElement: HTMLFormElement;
    let emailElement: HTMLInputElement;

    let sending : boolean = false;
    let emailError : string = "";


    onMount(() => {
        console.log(formElement.offsetTop);
        offsetHeight = formElement.offsetTop;
    });

    $: submittable = 
        (emailError === "") &&
        (name != "") && (name != undefined) &&
        (teacher != "") && (teacher != undefined) &&
        (email != "") && (email != undefined) &&
        (idNumber != undefined);
        


    $: bougieCheck = email.endsWith("@codinginitiative.org") || email.endsWith("@students.springisd.org");

    const onFinishEditEmail = async () => {

        const emailRegexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailRegexPattern.test(email) === false && email !== "") { emailError = "Please enter a correct email address"; return }
        if (bougieCheck === false && email !== "") { emailError = "Use your correct school or Coding Initiative email"; return }
        emailError = "";
    }


    const submitForm = async () => {

        if (idNumber.toString().length !== 8) {
            sendNotification({ message: "Your ID Number must be 8 digits long", type: NotificationState.error });
            return;
        }

        if ((email === "") || (email === undefined) || bougieCheck === false) {
            sendNotification({ message: "Enter a proper email", type: NotificationState.error });
            return;
        }

        sending = true;
        sendNotification({ message: "Sending ...", type: NotificationState.info });

        const data = JSON.stringify({
            name: name,
            email: email,
            teacher: teacher,
            ID: idNumber
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

    <article>
        <div class="description header">
            <h1>Wunsche Coding Initiative<br></h1>
            <h2>Hour of Code Event &middot; Wednesday, Dec 6 2023</h2>
        </div>

        <section id="intro">
    
            <div class="companies">
                <div class="thirthythree">
                    <div class="partner">
                        <img src="/icons/code.png" alt="">
                        <h2>Code.org</h2>
                    </div>
        
                    <div class="separator">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="#292D32"/>
                            <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"/>
                        </svg>
                    </div>
                </div>
                
                
                <img src="/icons/banner.png" alt="">
            </div>
        </section>

        <div class="description header">
            <p style="margin-bottom: 1rem">
                Hello Wunsche scholars, <br><br>
                The Wunsche Coding Initiative, in partnership with <a target="_blank" href="https://code.org">code.org</a>, is hosting an Hour of Code event for Wunsche students this Wednesday. The Hour of Code event is a program started by Code.org meant to introduce the field of programming to others, and we are partnering with them to help them with that goal. This event is especially catered to those with no/minimal skill in the field. Whether you've never written a line of code or are just curious about it, join us and see if this could be the perfect start for you!
            </p>

            <p>A few things to keep in mind:<br></p>
            <span class="list">
                <p>👩‍💻&nbsp; No coding experience is necessary</p>
                <p>🍿&nbsp; Free popcorn, cookies, and drinks will be offered at the event</p>
                <p>🏆&nbsp; Winnable prizes & free swag will be available</p>
                <p>🕒&nbsp; The event will occur during 7th period</p>
                <p>👫&nbsp; You are encouraged to bring friends and go through the experience together</p>
                <p><b>📝&nbsp; Only the first 150 people who sign up will be called down to participate</b></p>
            </span>
        </div>

        


        <div id="canvas" style={ `--offset: ${ offsetHeight }px` }>
            <Deliverable title={ "Outreach participants holding up our logo" } active={ true } image={ `/images/under.jpeg` } />

    
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

        
        <form bind:this={ formElement } action="/api/application" on:submit|preventDefault={ submitForm } method="post">
            <br>
                
            <div class="description">
                <h3>Contact Information</h3>
                <p>We will use this information to contact you and send updates. Use your school email to sign up. Or, if you are a current Wunsche Coding Initiative member, use your personal <b>[name]@codinginitiative.org</b> email to sign up</p>
            </div>

            <input bind:value={ name } type="text" placeholder="Your Name" name="name">
            <input bind:value={ idNumber } pattern="\d*" type="number" name="id" placeholder="ID Number">
            <input bind:value={ teacher } type="text" placeholder="7th Period Teacher" name="teacher">

            <div class={ (emailError === "") ? "email" : "email error" }>
                <input on:blur={ onFinishEditEmail } bind:this={ emailElement } bind:value={ email } type="email" name="email" placeholder="email@students.springisd.org / name@codinginitiative.org">
                <p>{ emailError }</p>
            </div>

            <br>
            <br>

            <span style="z-index: 10;">
                <p></p>
                <button id="action" type="submit" disabled={ (submittable === false) || (sending === true) }>{ submittable ? "Submit" : "Fill in all information" }</button>
            </span>
        </form>
    </article>

</section>
</main>
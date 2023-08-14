

<style lang="scss">
    @use "../variables" as app;

    h1 { font-size: 160%; font-weight: app.$weight-black; }
    b { font-weight: app.$weight-bold; }

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
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
        }


        div#canvas {

            position: relative;
            max-height: calc(100vh - 5rem);
            min-height: 300px;
            height: 40vh;

            @media screen and (min-width: 960px) {
                position: fixed;
                top: 4rem;
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
        }

        article > form {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 0.5rem;

            margin-top: 1rem;
            margin-bottom: 24vh;

            

            > div { width: 100%; }


            > div.description {
                display: flex; 
                justify-content: flex-start;
                flex-direction: column;
                gap: 0.3rem;
                margin-bottom: 0.5rem;

                width: 100%;
            }

            div.prompt {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                > p { font-style: italic; }
            }

            input[type=radio] { display: none; }

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
            }

            label {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 1rem; 
                border-radius: 0.8rem;
                background-color: app.$color-background;

                padding: 1.5rem 1rem 0.65rem 1rem;
                fill: transparent;
                width: unset;
                flex-grow: 1;

                border: 1px dashed app.$color-shade;

                transition-property: box-shadow;
                transition-duration: 300ms;
                transition-timing-function: ease-in;

                &.checked {
                    border: 1px dashed transparent;
                    box-shadow: 0rem 0rem 1.5rem rgba(40, 42, 54, 0.08);

                    > p { color: app.$color-foreground; }
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
                background: linear-gradient(0deg, app.$color-background 40%, transparent);

                padding: 2.5rem 2.4rem 2rem 2.4rem;

                width: 100%;
                height: 2.5rem;

                display: flex;
                align-items: center;
                justify-content: flex-end;

            }


            textarea {
                resize: vertical;
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
            margin-bottom: 1rem;

            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            &.header {
                margin-top: 3rem;
                margin-bottom: 2rem;

                > p { margin: 0.5rem 0px; }
            }
        }

    }
</style>

<script lang="ts">
    import { onMount } from "svelte";
    import Deliverable from "../cards/Deliverable.svelte";
    import { NotificationState, sendNotification } from "../lib/utilities";


    let viewportHeight : number = 0;

    $: rows = Math.floor(viewportHeight / 40);


    // Answers
    let streamOption : string; 
    let name: string;
    let idNumber: number;
    let email: string;

    let interest: string;
    let successfulYear: string;
    let favoriteCartoon: string;
    let pineapplePizza: String;

    let formElement: HTMLFormElement;
    let emailElement: HTMLInputElement;

    let sending : boolean = false;

    let emailError : string = "";

    $: submittable = 
        (sending === false) &&
        (streamOption != undefined) &&
        (name != "") && (name != undefined) &&
        (idNumber != null) &&
        (email != "") && (email != undefined) &&
        (emailError === "") &&

        (interest != "") && (interest != undefined) &&
        (successfulYear != "") && (successfulYear != undefined) &&
        (favoriteCartoon != "") && (favoriteCartoon != undefined) &&
        (pineapplePizza != "") && (pineapplePizza != undefined)
        ; 

    const onFinishEditEmail = async () => {
        if (email.endsWith("@students.springisd.org") === false && email !== "") { emailError = "Use your correct school email"; return }
        emailError = "";
    }


    const submitForm = async () => {

        if (idNumber.toString().length !== 8) {
            sendNotification({ message: "Your ID Number must be 8 digits long", type: NotificationState.error });
            return;
        }


        sending = true;
        sendNotification({ message: "Sending ...", type: NotificationState.info });


        const data = JSON.stringify({
            stream: streamOption,
            name: name,
            ID: idNumber,
            email: email,

            interest: interest,
            successfulYearDescription: successfulYear,
            cartoon: favoriteCartoon,
            pizza: pineapplePizza

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

<svelte:window bind:innerHeight={ viewportHeight } />

<main style="padding: 0px 6vw">
<section id="contact">

    <div id="canvas">
        <Deliverable title="(Now) Underclassman Tours · Dec 2022" active={ streamOption === "underclassman" } image={ "/images/under.jpeg" } />
        <Deliverable title="Upperclassmen on Field Trip Promoting Computing" active={ streamOption === "upperclassman" } image={ "/images/tours.jpeg" } />

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
            <h1>Wunsche Coding Initiative <br></h1>
            <h2>2023-2024 Application</h2>

            <p style="margin-bottom: 1rem">
                Hello Wunsche Scholars, <br>
                This is the application form for the 2023-2024 Wunsche Coding Initiative cohort. Our mission is to promote interest, exploration, and skill for the field of programming through student-taught lessons at all grade levels.
                <br>
                <br>
                This year, we will be hosting more expeditions for middle school students where members will have a chance to volunteer, increase opportunities for members to compete at all levels, guide members with personal projects, and more on the way.
            </p>

            <p>A few things to keep in mind: </p>
            <span class="list">
                <p>Deadline to submit this application is <b>Friday, Aug 25, 2023</b>, because of the unique nature of the club, as we teach Web Development year around, we want to get an early start so that students can prepare for competition. </p>
                <p class="point">Club meetings will be during Study Hall (2nd for Underclassmen, and 6th for Upperclassmen); if you are a part of a club/class that does activities during your Study Hall, like the Yearbook Club, you will have to choose where you would prefer to spend your time</p>
                <p class="point">The cohort resets each year; <b>so previous members also have to apply</b>. This is to give current members who are no longer interested an opportunity to go back to their normal scheduling, and new students who are interested a chance to join</p>
                <p>The club uses a blind selection process, meaning identifying information like name or ID number will be removed from review, and will only be used for contacting interested students</p>
            </span>
        </div>

        
        <form bind:this={ formElement } action="/api/application" on:submit|preventDefault={ submitForm } method="post">
            <div class="description">
                <h3>Are you an Underclassman or an Upperclassman</h3>
                <p>Please keep in mind this will be used to change your 6th period class schedule and will take effect for the whole school year. <br><br> 9th and 10th will be at Mr. Neal, 11th and 12th at Ms. Gereke<br><b>Choose one below:</b></p>
            </div>

            <input type="radio" bind:group={ streamOption } id="under" name="stream" value="underclassman">
            <input type="radio" bind:group={ streamOption } id="upper" name="stream" value="upperclassman">

            <div class="options">
                <label class={ (streamOption === "underclassman") ? "checked" : "" } for="under"><p>9th & 10th<br>Underclassman</p></label>
                <label class={ (streamOption === "upperclassman") ? "checked" : "" } for="upper"><p>11th & 12th<br>Upperclassman</p></label>
            </div>

            <br>
                
            <div class="description">
                <h3>Contact information</h3>
                <p>We will use this information to send updates</p>
            </div>

            <input bind:value={ name } type="text" placeholder="Your Name" name="name">
            <input bind:value={ idNumber } pattern="\d*" type="number" name="id" placeholder="ID Number">

            <div class={ (emailError === "") ? "email" : "email error" }>
                <input on:blur={ onFinishEditEmail } bind:this={ emailElement } bind:value={ email } type="email" name="email" placeholder="youremail@students.springisd.org">
                <p>{ emailError }</p>
            </div>

            <br>

            <div class="description">
                <h3>General Questions</h3>
                <p>Information to help us get to know you better - especially in relations to your interest in code. Answer in as many (or few) words as you would like. The more detail you provide, however, the better. Keep in mind that any names, emails, ID numbers or of the sort added to your answers will be edited to "[...]" by a club officer beforehand. If you have to use someone in your answer, use pronouns like: my, them, my friend, my father, my brother etc. Keep in mind that just because you do not have any knoweldge in coding, that will not automatically cut you from our application! Almost every single person in the club since its origin did not have any experience in Information Technology besides the founders and some of the officers!</p>
            </div>

            <div class="prompt">
                <p>How or why did you find interest in programming. If you have never done it before, and just want to try it out for exploration, you can explain that too (ideally at least 100 words)</p>
                <textarea  bind:value={ interest } name="" id="" placeholder="<p>It all started when I watched the Big Bang Theory ...</p>"></textarea>
            </div>

            <br>

            <div class="prompt">
                <p>What would a successful year, both personally and socially, as a WCI (Wunsche Coding Initiative) member look like to you? (ideally at least 100 words)</p>
                <textarea name=""  bind:value={ successfulYear } id="" placeholder="<p>I heard (Mr Neal | Ms Gereke) is the GOAT so I wou..</p>"></textarea>
            </div>

            <br>

            <div class="prompt">
                <p>Favorite Cartoon show? (You can have fun with this one; No ideal word limit)</p>
                <textarea  bind:value={ favoriteCartoon } name="" id="" placeholder="<p>So there is this one YouTuber ...</p>"></textarea>
            </div>

            <br>

            <div class="prompt">
                <p>Pineapple on Pizza? (No ideal word limit with this either)</p>
                <textarea  bind:value={ pineapplePizza } name="" id="" placeholder="<p>Only (Taylor's Version)</p>"></textarea>
            </div>

            <span>
                <button type="submit" disabled={ (submittable === false) || (sending === true) }>{ submittable ? "Submit" : "Fill in all information" }</button>
            </span>
        </form>
    </article>

</section>
</main>



<style lang="scss">
    @use "../variables" as app;

    h1 { font-size: 160%; font-weight: app.$weight-black; }
    b { font-weight: app.$weight-bold; }
    span.info { color: app.$color-brand }

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

            div.organizations {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                gap: 1rem 1rem;

                margin-top: 1rem;

                label {
                    position: relative;

                    img {
                        position: absolute;
                        top: 0.8rem;
                        left: 0.8rem;

                        width: 3rem;
                        max-height: 100%;
                    }
                    p { height: 3rem; }
                }
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

                cursor: pointer;

                border: 1px dashed app.$color-shade;

                transition-property: box-shadow;
                transition-duration: 300ms;
                transition-timing-function: ease-in;

                input { display: none };

                img {
                    filter: grayscale(100%);

                    transition-property: filter;
                    transition-duration: 300ms;
                    transition-timing-function: ease-in;
                }

                &.checked {
                    border: 1px dashed transparent;
                    box-shadow: 0rem 0rem 1.5rem rgba(40, 42, 54, 0.08);

                    img { filter: grayscale(0%); }
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
    let viewportWidth : number = 0;

    $: rows = Math.floor(viewportHeight / 40);


    $: competitionOrganizations = [
        { selected: false, lead: "Business", name: "Professionals of America", image: "bpa.png", id: "bpa", link: "https://bpa.org/" },
        { selected: false, lead: "", name: "SkillsUSA", image: "skillsusa.png", id: "skills", link: "https://www.skillsusa.org/" },
        { selected: false, lead: "Future Business", name: "Leaders of America", image: "fbla.png", id: "fbla", link: "https://www.fbla-pbl.org/" },
        { selected: false, lead: "Technology", name: "Student Association", image: "tsa.png", id: "tsa", link: "https://tsaweb.org/" }
    ]


    // Answers
    let streamOption : string; 
    let name: string;
    let idNumber: number;
    let email: string;

    let interest: string = "";
    let successfulYear: string = "";
    let favoriteCartoon: string = "";
    let pineapplePizza: string = "";

    let formElement: HTMLFormElement;
    let emailElement: HTMLInputElement;

    let interestElement : HTMLTextAreaElement;
    let cartoonElement : HTMLTextAreaElement;
    let successElement : HTMLTextAreaElement;
    let pizzaElement : HTMLTextAreaElement;

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
            pizza: pineapplePizza, 

            bpa: competitionOrganizations[0].selected,
            skills: competitionOrganizations[1].selected,
            fbla: competitionOrganizations[2].selected,
            tsa: competitionOrganizations[3].selected

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
                <p>Deadline to submit this application is <b>Friday &middot; Sept 15, 2023 @ 11:59 PM</b>. This is due to the unique nature of the club, as we teach Web Development year around, we want to get an early start so that students can prepare for competition. </p>
                <p class="point">Club meetings will be during Study Hall (2nd for Underclassmen, and 6th for Upperclassmen); if you are a part of a club/class that does activities during your Study Hall, like the Yearbook Club, you will have to choose where you would prefer to spend your time</p>
                <p class="point">The cohort resets each year; <b>so previous members also have to apply</b>. This is to give current members who are no longer interested an opportunity to go back to their normal scheduling, and new students who are interested a chance to join</p>
                <p>The club uses a blind selection process, meaning identifying information like name or ID number will be removed from review, and will only be used for contacting interested students</p>
            </span>
        </div>

        
        <form bind:this={ formElement } action="/api/application" on:submit|preventDefault={ submitForm } method="post">
            <div class="description">
                <h3>Are you an Underclassman or an Upperclassman</h3>
                <p>Please keep in mind this will be used to change your Study Hall class and will take effect for the whole school year. <br><br> 9th and 10th will be at Mr. Neal, 11th and 12th at Ms. Gereke<br><b>Choose one below:</b></p>
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

            <div class="competitions">
                <h3>Competitions</h3>
                <p>Are you interested in showcasing your knowledge competitively and taking it as far as it can go? This year, we plan to have multiple options and routes for members to apply their skill competitively. <b>You do not have to be a Wunsche Coding Initiative member to compete in these organizations</b>; however, WCI members do get access to exclusive perks including:</p>

                <br>

                <span class="list">
                    <p>Financial aid for competitions (during 2022, we were the only chapter that fully paid or at least subsidized its members' competition fees)</p>
                    <p>Tailored coaching and practice sessions from other members who have competed before</p>
                    <p>Assisted guidance for projects, both personal and competitive, ranging from timing, content, design, and execution</p>
                </span>

                <br>

                <p>If you think you might be interested in competing, regardless of whether you end up as a Wunsche Coding Initiative member, choose the organizations that you are interested in (select all that apply):</p>
            </div>

            <div class="organizations">
                { #each competitionOrganizations as org }
                    <label class={ `${ org.selected ? "checked" : "" }` } for={ org.id }>
                        <img src={ `/icons/${ org.image }` } alt="">
                        <p class="truncated">{ org.lead }<br>{ org.name }</p>

                        <input bind:checked={ org.selected } type="checkbox" id={ org.id }>
                    </label>
                {/each }
            </div>

            

            <div class="learn">
                <p>You can learn more about each on their respective pages:</p>
                <br>
        
                { #each competitionOrganizations as org }
                    <a target="_blank" href={ org.link }>{ org.lead } { org.name } <div>&uarr;</div></a>
                {/each }
            </div>

            <br>

            <div class="description">
                <h3>General Questions</h3>
                <p>Information to help us get to know you better - especially in relations to your interest in code. Answer in as many (or few) words as you would like. The more detail you provide, however, the better. Keep in mind that any names, emails, ID numbers or of the sort added to your answers will be edited to "[...]" by a club officer beforehand. If you have to use someone in your answer, use pronouns like: my, them, my friend, my father, my brother etc. Just because you do not have any knoweldge in coding, that will not automatically cut you from our application! Almost every single person in the club since its origin did not have any experience in Information Technology besides the founders and some of the officers!
                <br>
                <br>
                
                <span class="info">Since your progress won't be saved before you submit, we recommend typing it elsewhere then pasting here when you are done</span>
            
            </p>
            </div>

            <div class="prompt">
                <p>How or why did you find interest in programming. If you have never done it before, and just want to try it out for exploration, you can explain that too (ideally at least 100 words)</p>
                <textarea rows="1" bind:this={ interestElement } on:input={ () => interestElement.style.height = `${ interestElement.scrollHeight }px` } bind:value={ interest } name="" id="" placeholder="<p>It all started when I watched the Big Bang Theory ...</p>"></textarea>
            </div>

            <br>

            <div class="prompt">
                <p>What would a successful year, both personally and socially, as a WCI (Wunsche Coding Initiative) member look like to you? (ideally at least 100 words)</p>
                <textarea rows="1" bind:this={ successElement } on:input={ () => successElement.style.height = `${ successElement.scrollHeight }px` } name=""  bind:value={ successfulYear } id="" placeholder="<p>I heard (Mr Neal | Ms Gereke) is the GOAT so I wou..</p>"></textarea>
            </div>

            <br>

            <div class="prompt">
                <p>Favorite Cartoon show? (You can have fun with this one; No ideal word limit)</p>
                <textarea rows="1" bind:this={ cartoonElement } on:input={ () => cartoonElement.style.height = `${ cartoonElement.scrollHeight }px` } bind:value={ favoriteCartoon } name="" id="" placeholder="<p>So there is this one YouTuber ...</p>"></textarea>
            </div>

            <br>

            <div class="prompt">
                <p>Pineapple on Pizza? (No ideal word limit with this either)</p>
                <textarea rows="1" bind:this={ pizzaElement } on:input={ () => pizzaElement.style.height = `${ pizzaElement.scrollHeight }px` } bind:value={ pineapplePizza } name="" id="" placeholder="<p>Only if the pineapple is (Taylor's Version)</p>"></textarea>
            </div>

            <span>
                <button type="submit" disabled={ (submittable === false) || (sending === true) }>{ submittable ? "Submit" : "Fill in all information" }</button>
            </span>
        </form>
    </article>

</section>
</main>

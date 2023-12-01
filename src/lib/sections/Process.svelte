

<style lang="scss">

    @use "../../variables" as app;

    section#process {

        display: grid;
        grid-template-columns: 1fr;
        height: 100%;
        padding: 0px auto 0rem auto;
        margin: 0px 6vw 8rem 6vw;

        gap: 3rem 4vw;

        max-width: 1280px;

        @media screen and (min-width: 960px) {
            grid-template-columns: 14rem auto;
            margin: 0px auto 8rem auto;

        }


        div.header {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;

            margin-top: 0rem;
            margin-bottom: 2rem;

            max-width: 740px;
            margin-right: auto;

            grid-column: span 2;

        }

        div.tags {
            position: sticky;
            top: 40vh;
            left: 0px;

            margin-right: auto;
            margin-top: 2rem;
            margin-bottom: 4rem;

            display: flex;
            flex-direction: column;
            gap: 1rem;

            a {
                padding: 0.3rem 1rem;
                background-color: transparent;
                border: 1px dashed app.$color-shade;
                border-radius: 1rem;

                span { padding: 0px 0.2rem; }

                @media screen and (max-width: 960px) {
                    padding: 0.2rem 0.5rem;
                    span.ms { display: none; }
                }

                &.current {
                    background-color: app.$color-foreground;
                    color: app.$color-background;
                    border: 1px solid transparent;
                }
            }
        }

        a:hover {
            box-shadow: 0 0 3px 0;
        }

        article {

            position: relative;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-end;
            gap: 3rem;


            div.step {

                background-color: app.$color-background;
                filter: drop-shadow(0rem 1rem 3rem rgba(40, 42, 54, 0.08));

                img {
                    height: 16rem;
                    width: 100%;
                    margin-bottom: 2rem;
                }

                max-width: 100%;
                padding: 2rem 2rem;


                display: flex;
                flex-direction: column;
                gap: 1rem;
                border-radius: 1rem;

            }

            
        }
    }
</style>

<script lang="ts">
    import { clamp, round } from "$lib/utilities/math";
    import { onMount } from "svelte";
    import process from "$lib/data/process.json";


    let processElement: HTMLElement | undefined;
    let scrollOffset = 0;

    $: start = processElement ? (processElement!.offsetTop - 140) : 0;
    $: end = processElement ? start + processElement!.scrollHeight : 0;
    $: span = Math.floor((end - start) / (process.length));

    $: processScrollProgress = clamp((scrollOffset - start), 0, (end - start));
    $: currentStep = clamp((Math.ceil(processScrollProgress / span) - 1), 0, process.length);

</script>


<svelte:window bind:scrollY={ scrollOffset } />

<section id="process" bind:this={ processElement }>
    <div class="header">
        <h1>Setting the Stage for Success:<br>Your Soundtrack to Success Starts Here</h1>
        <p>Discover how our five-step process harmonizes with your business needs, offering a symphony of custom DJ solutions from conceptualization to execution. Journey with us through each stage, where we craft the perfect auditory landscape to elevate your event and engage your audience like never before.</p>
    </div>

    <div>
    <div class="tags">
    { #each process as step, index }
        <div class="tag">
            <a href="/" class={ (currentStep === index) ? "current" : "" }>
                <span>{ index + 1 }</span>
                <span class="ms">{ step.step }</span>
                <!-- { start }-{scrollOffset }-{ end } -->
            </a>
        </div>
    {/each }
    </div>
    </div>

    <article>
        { #each process as step }
            <div class="step" id="">       
                <h3>{ step.title }</h3>
                <p>{ step.message }</p>
            </div>
        {/each }
    </article>
</section>



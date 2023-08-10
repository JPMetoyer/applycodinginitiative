



<style lang="scss">
    section#process {
        position: relative;
        border: 1px solid orange;


        display: grid;
        grid-template-columns: auto 2rem;

        height: max-content;
        padding-left: 2rem;
        padding-bottom: 15vh;

        div.introduction {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;

            padding: 2rem 8vw;
            gap: 0.1rem;

            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
        }

        article {
            margin-top: 20vh;
            margin-right: 2rem;


            display: flex;
            flex-direction: column;
            gap: 2rem;



            > div.story {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                padding: 1.5rem 0rem 1rem 1.5rem;

                background-color: hsl(206, 14%, 95%);
                filter: drop-shadow(0.3rem 0.3rem 1rem rgba(40, 42, 54, 0.05));

                transition-property: background-color;
                transition-duration: 300ms;
                transition-timing-function: ease-in;

                border-radius: 1rem;

                > p {
                    overflow: hidden;

                    transition-property: height;
                    transition-duration: 300ms;
                    transition-timing-function: ease-in;
                }

            
            }
        }

        div.titles {
            position: sticky;
            top: 14rem;
            right: 4vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3rem;

            margin-top: 14vh;

            height: max-content;
        }
    }
</style>

<script lang="ts">
    import { clamp, round } from "../functions/gui";

    const steps = Array(4);

</script>


<section id="process">

    <div class="introduction">
        <h3>Lorem ipsum dolor sit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>

    <article>
    { #each steps as step, index}
        <div class={ `story` }>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi illum ad, fugiat cum, repellendus, incidunt ducimus magnam delectus obcaecati numquam laboriosam! Sapiente repellendus nulla reprehenderit praesentium et quos officia error sint. Soluta maxime ipsa harum aspernatur sed in tempora alias perferendis facere!</p>
        </div>
    {/each } 
    </article>

    <div class="titles">
    { #each steps as step, index}
        <p>{ index + 1 }</p>
    {/each }
    </div>
</section>




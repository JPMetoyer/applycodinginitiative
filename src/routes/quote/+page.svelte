

<style lang="scss">
    @use "../../variables" as app;

    section#contact {

        height: calc(100svh - 5rem);
        padding: unset;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 1rem;

        @media screen and (max-width: 960px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }

        div#canvas {
            flex-grow: 1;
            margin-bottom: 1rem;
            min-height: 240px;
            

            position: relative;

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
        }

        article > form {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 0.5rem;

            margin-top: 1rem;

            > span {

                width: 100%;
                height: 2.5rem;

                display: flex;
                align-items: center;
                justify-content: space-between;

                button {
                    margin-top: 0.5rem;
                }
            }


            textarea {
                height: calc(3 * 1.5rem);
            }

            input,
            textarea {
                padding: 0.6rem 0.8rem;
                background-color: transparent;
                border-radius: 0.6rem;

                width: 100%;
                resize: none;

                border: 1px solid app.$color-shade;
                &::placeholder { color: app.$color-gray; }
            }

        }

        


        article > div.description {
            margin-bottom: 1rem;
        }

        article > div.deliverables {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            gap: 1rem 1rem;

            button.item {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 1rem; 
                border-radius: 0.8rem;
                background-color: app.$color-background;

                padding: 1.8rem 1rem 0.65rem 1rem;
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
        }
    }
</style>

<script lang="ts">

    // import Deliverable from "../../cards/Deliverable.svelte";

    let viewportHeight : number = 0;

    $: rows = Math.floor(viewportHeight / 40);

    let deliverables = [
        {
            name: "AV Production",
            price: 100, 
            checked: false
        },{
            name: "Marketing",
            price: 100, 
            checked: false
        },{
            name: "SEO",
            price: 100, 
            checked: false
        },{
            name: "Product Launch",
            price: 100, 
            checked: false
        }
    ];

    $: estimate = deliverables.filter((current) => current.checked)
                .map((del) => del.price)
                .reduce((accumulated, current) => current + accumulated, 0);

    const onDeliverableClicked = (index: number) => {
        deliverables[index].checked = !deliverables[index].checked;
    }

    const submitForm = () => {

    }
</script>

<svelte:window bind:innerHeight={ viewportHeight } />

<main style="padding: 0px 8vw">
<section id="contact">

    <div id="canvas">
        

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
    <div class="description">
        <h3>Choose your deliverables:</h3>
        <p>How may we help spearhead your business into its next frontier?</p>
    </div>

    <div class="deliverables">
    { #each deliverables as info, index }
        <button class={ `item${ info.checked ? " checked" : "" }` } on:click={ () => { onDeliverableClicked(index) } } >
            <p>{ info.name }</p>
        </button>
    {/each }
    </div>

    <form on:submit={ submitForm } action="" method="get">
        <input type="text" placeholder="Your Name" name="name">
        <input type="email" name="email" placeholder="name@company.com">
        <textarea name="description" placeholder="Enter a description of the project you had in mind"></textarea>

        <span>
            <p>Est: ${ (estimate === 0) ? 0 : `${ estimate + 50 }-${ estimate + 50 }` }</p>
            <button disabled={ !(deliverables[0].checked || deliverables[1].checked) } type="submit">Submit</button>
        </span>
    </form>
    </article>

</section>
</main>



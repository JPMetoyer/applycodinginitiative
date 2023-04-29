


<style lang="scss">

    @use "../../variables" as app; 

    div.project {
        display: flex;
        flex-direction: column;
        gap: 0px;
        min-width: 20rem;
        width: 500px;

        height: max-content;

        line-height: 130%;

        > .preview {
            width: 100%;
            height: 8rem;
            background-color: lightblue;
        }

        > .inspector {

            background-color: lightgray;
            padding: 0.5rem 0.75rem;

            display: flex;
            flex-direction: column;
            gap: 0px;

            h5 {
                font-weight: app.$weight-bold;
            }

            p {
                font-size: 0.9rem;
                font-weight: app.$weight-light;
            }

            .meta {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
</style>


<div class="project">
    <div class="preview">
        <img src="" alt="">
    </div>

    <div class="inspector">
        <h5>Lorem, ipsum dolor.</h5>
        <div class="meta">
            <p>Nairobi, Kenya</p>
            <p class="tag">Marketing</p>
        </div>
    </div>
</div>



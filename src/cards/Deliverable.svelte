

<script lang="ts">
    export let image : string;
    export let active: boolean;
</script>

<style lang="scss">

    @use "../variables" as app; 

    div.deliverable {

        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% - 4rem);
        max-width: 32rem;


        height: calc(100% - 2rem);
        max-height: 24vmax;

        @keyframes dev-in {
            0% {
                transform:  translateX(-200%) translateY(60%) rotateZ(180deg);
            }

            100% {
                transform: translateX(-54%) translateY(-50%) rotateZ(368deg);
            }

        }

        @keyframes dev-out {
            0% {
                transform: translateX(-54%) translateY(-50%) rotateZ(368deg);
            }

            50% {
                transform: translateX(-143%) translateY(20%) rotateZ(244deg);
            }

            100% {
                transform:  translateX(-200%) translateY(60%) rotateZ(180deg);
            }
        }

        @keyframes design-in {
            0% {
                transform:  translateX(-180%) translateY(60%) rotateZ(180deg);
            }

            100% {
                transform: translateX(-54%) translateY(-54%) rotateZ(350deg);
            }
        }   

        @keyframes design-out {
            0% {
                transform: translateX(-54%) translateY(-54%) rotateZ(350deg);
            }

            50% {
                transform: translateX(-143%) translateY(20%) rotateZ(244deg);
            }

            100% {
                transform:  translateX(-200%) translateY(60%) rotateZ(180deg);
            }
        }

        // Design Card
        &:nth-child(1) {
            animation-name: design-out;
            animation-timing-function: linear;
            animation-duration: 500ms;
            animation-fill-mode: forwards;

            z-index: 1;

            &.active {
                animation-name: design-in;
                animation-timing-function: ease-in-out;
                animation-duration: 500ms;
                animation-fill-mode: forwards;
            }
        }


        // Development card
        &:nth-child(2) {
            animation-name: dev-out;
            animation-timing-function: linear;
            animation-duration: 500ms;
            animation-fill-mode: forwards;

            z-index: 2;

            &.active {
                animation-name: dev-in;
                animation-timing-function: ease-in-out;
                animation-duration: 500ms;
                animation-fill-mode: forwards;
            }
        }

        border-radius: 0.6rem;
        overflow: hidden;


        > span.navbar {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;

            z-index: 1;

            display: grid;
            grid-template-columns: 2rem auto 2rem;

            background-color: hsl(218, 27%, 92%);
            padding: 0rem 0.8rem;

            > div {
                display: flex;
                align-items: center; 
                gap: 0.2rem; 
                height: 100%;
                
                > span {
                    width: 0.4rem;
                    height: 0.4rem;
                    border-radius: 1rem;

                    background-color: hsl(210, 5%, 82%);

                    // &:nth-child(1) { background-color: #FF5F56; }
                    // &:nth-child(2) { background-color: #FEBC2E; }
                    // &:nth-child(3) { background-color: #27C840; }
                };
            }

            > p { width: 100%; font-size: 80%; text-align: center; }
        }

        > img { width: 100%; height: 100%; object-fit: cover; }
    }
</style>

<div class={ `deliverable${ active ? " active" : "" }` }>
    <span class="navbar">
        <div><span></span><span></span><span></span></div>
        <p>yourcompany.com</p>
    </span>

    <img src={ image } alt="">
</div>


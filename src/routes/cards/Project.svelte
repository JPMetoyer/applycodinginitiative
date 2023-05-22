


<style lang="scss">

    @use "../../variables" as app; 

    div.project {
        width: 100%;
        height: 100%;

        display: grid; 
        grid-template-rows: 70% 30%;

        @media screen and (min-width: 960px) {
            grid-template-rows: 76% 24%;
        }

        border-radius: 1vmax;
        background-color: app.$color-elevate;
        overflow: hidden;
        // filter: drop-shadow(0.3rem 0.3rem 0.4rem rgba(40, 42, 54, 0.2));



        div.preview {
            flex-grow: 1;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        div.info {

            display: flex;
            flex-direction: column;
            justify-content: center;

            padding: 0px 2vw;
            
            span {
                display: grid;
                grid-template-columns: 1.2rem auto 1.2rem;

                h4 {
                    position: absolute;
                    left: 0.6rem;
                    bottom: 2.4rem;
                }

                > p {
                    margin-left: 0.2rem;
                    font-size: 0.9rem;
                }

                .icon {
                    width: 1.2rem;
                    fill: app.$color-gray;
                }

                .arrow {
                    transform: rotateZ(45deg);
                }
            };

            // position: relative;
            // height: 4rem;

            // 
        }
    }
</style>

<script lang="ts">
    import type Work from "../../models/work";

    export let event: Work; 
</script>


<div class="project">
    <div class="preview">
        <img src={ event.image } alt="">
    </div>

    <div class="info">

        <h4>{ event.title }</h4>


        <span>
        <div class="icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 10.3178C3.5 5.71789 7.34388 2 11.9934 2C16.6561 2 20.5 5.71789 20.5 10.3178C20.5 12.6357 19.657 14.7876 18.2695 16.6116C16.7388 18.6235 14.8522 20.3765 12.7285 21.7524C12.2425 22.0704 11.8039 22.0944 11.2704 21.7524C9.13474 20.3765 7.24809 18.6235 5.7305 16.6116C4.34198 14.7876 3.5 12.6357 3.5 10.3178ZM9.19423 10.5768C9.19423 12.1177 10.4517 13.3297 11.9934 13.3297C13.5362 13.3297 14.8058 12.1177 14.8058 10.5768C14.8058 9.0478 13.5362 7.77683 11.9934 7.77683C10.4517 7.77683 9.19423 9.0478 9.19423 10.5768Z"/>
            </svg>
        </div>
        <p >{ event.location }</p>

        <div class="arrow icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0701 10.32C17.8801 10.32 17.6901 10.25 17.5401 10.1L12.0001 4.56L6.46012 10.1C6.17012 10.39 5.69012 10.39 5.40012 10.1C5.11012 9.81 5.11012 9.33 5.40012 9.04L11.4701 2.97C11.7601 2.68 12.2401 2.68 12.5301 2.97L18.6001 9.04C18.8901 9.33 18.8901 9.81 18.6001 10.1C18.4601 10.25 18.2601 10.32 18.0701 10.32Z" fill="#292D32"/>
            <path d="M12 21.25C11.59 21.25 11.25 20.91 11.25 20.5V3.67C11.25 3.26 11.59 2.92 12 2.92C12.41 2.92 12.75 3.26 12.75 3.67V20.5C12.75 20.91 12.41 21.25 12 21.25Z" fill="#292D32"/>
            </svg>
        </div>
        </span>

    </div>
</div>



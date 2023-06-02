
<style lang="scss">
    section.partners {
        border: 1px solid blue;
        height: max-content;
        margin: 4rem 0px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 1rem 1rem; 

        @media screen and (max-width: 960px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
        }

        .partner {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;

            &.flip { flex-direction: row-reverse; }

            img {
                width: 5rem;
                height: 5rem;
            }

            .info {
                display: flex; 
                flex-direction: column;
            }
        }
    }
</style>


<section class="partners">
    <div class="partner">
        <img src="/images/company.png" alt="">
        <div class="info">
            <h3>Lorem, ipsum.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>

    <div class="partner">
        <img src="/images/company.png" alt="">
        <div class="info">
            <h3>Lorem, ipsum.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>

    <div class="partner">
        <img src="/images/company.png" alt="">
        <div class="info">
            <h3>Lorem, ipsum.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
</section>


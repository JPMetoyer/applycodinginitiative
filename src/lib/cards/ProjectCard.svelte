


<style lang="scss">

    @use "../../variables" as app;

    a.project {
        width: 100%;
        border-radius: 0.8rem;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 10rem auto;

        background-color: app.$color-background;
        filter: drop-shadow(0rem 1rem 3rem rgba(40, 42, 54, 0.08));

        > img {
            width: 100%;
            border-radius: 0.8rem 0.8rem 0px 0px;
            object-fit: cover;
        }

        .info {
            padding: 0.6rem 1rem;

            display: flex;
            flex-direction: column;
            justify-content: center;

            > p:nth-child(1) { font-weight: app.$weight-bold; color: app.$color-foreground; }
        }

        .info > span {
            display: flex;
            justify-content: space-between;

            
        }
    }
</style>

<script lang="ts">
    import type CaseStudy from "../../models/casestudy";
    export let data: CaseStudy;
</script>


<a href={ `/portfolio/${ data.id }` } class="project">
    <img src="/images/edm.jpg" alt="">

    <div class="info">
        <p>{ data.title }</p>
        <span>
            <p>{ data.company }</p>
            <p>{ data.location }</p>
        </span>
    </div>
</a>



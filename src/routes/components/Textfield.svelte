



<style lang="scss">
    @use "../variables" as app; 

    input {
        flex-grow: 1;
        padding: 0.4rem 0.8rem; ;
            
        border-radius: 0.5rem; 
        border: 1px solid app.$color-gray;
        background-color: app.$color-shade;

        &::placeholder {
            color: app.$color-gray; 
        }

        &:focus {
            border: 1px solid app.$color-info; 
            outline: none;
        }
    }
</style>

<script lang="ts">

    export let placeholder: string; 
</script>

<input type="text" placeholder={ placeholder }>



<script>
    export let disabled = true;
</script>

<button
    class="default"
    disabled={disabled}
    on:click
>
  REMIX
</button>

<style>
    .default {
        padding: 1rem;
        background: rgb(235, 155, 47);
        border: 1px solid rgb(157, 90, 0);
        border-radius: 7px;

        font-size: 24px;
        color: rgb(0, 59, 32);

        cursor: pointer;
    }

    .default:hover {
        background: rgb(253, 182, 87);
    }

    .default:disabled {
        background: rgb(200, 200, 200);
        color: rgb(230, 230, 230);
        border-color: rgb(200, 200, 200);
    }
</style>

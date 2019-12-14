<script>
    import {createEventDispatcher} from 'svelte';
    import {remixTypes} from '../store';

    const dispatch = createEventDispatcher();

    function typeChange(event) {
        dispatch('typeChange', event.target.value);
    }
</script>

<select class="type-selector" on:change={typeChange}>
    {#each remixTypes as {value, text}}
        <option class="selection" value="{value}">
            {text}
        </option>
    {/each}
</select>

<style>
    .type-selector {
        height: fit-content;
        background: rgb(73, 147, 113);
        border: 1px solid rgb(0, 59, 32);
        border-radius: 7px;

        font-size: 24px;
        color: rgb(0, 59, 32);
    }

    .type-selector:hover {
        background: rgb(117, 176, 149);
    }

    .selection {
        padding: 5px;
    }
</style>

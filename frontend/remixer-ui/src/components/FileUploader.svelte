<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let file = null;

    function fileDropped(event) {
        uploadFile(event.dataTransfer.files)
    }

    function openFile(event) {
        document.getElementById('fileInput').click();
    }

    function uploadFile(files) {
        if (files && files.length) {
            file = files[0];
            dispatch('file', file);
        }
    }
</script>

<div
    class="dropzone"
    on:dragover|preventDefault
    on:drop|preventDefault={fileDropped}
    on:click={openFile}
>
    {#if file === null}
        <span>Drop song here</span>
        <span>⇕</span>
        <span>Click to upload</span>
    {:else}
        <span class="filename">{file.name}</span>
    {/if}
</div>
<input
    id="fileInput"
    type="file"
    on:change={(event) => uploadFile(event.target.files)}
    hidden
>

<style>
    .dropzone {
        width: 500px;
        height: 300px;
        background-color: rgb(73, 147, 113);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-size: 48px;
        color: rgb(117, 176, 149);

        border-radius: 250px;
        border: 1px dashed rgb(0, 59, 32);

        transition-property: border-radius, background-color, color;
        transition-timing-function: linear;
        transition-duration: 75ms;
    }

    .dropzone:hover {
        background: rgb(117, 176, 149);
        color: rgb(73, 147, 113);
        border-radius: 50px;
    }

    .filename {
        width: 400px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: rgb(235, 155, 47);
    }
</style>
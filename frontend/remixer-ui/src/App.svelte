<script>
    import FileUploader from './components/FileUploader.svelte';
    import TypeSelector from './components/TypeSelector.svelte';
    import RemixButton from './components/RemixButton.svelte';
    import AudioPlayer from './components/AudioPlayer.svelte';
    import Veil from './components/Veil.svelte';
    import {remixTypes} from './store';
    import {processRemix} from './api';

    let selectedType = remixTypes[0].value;
    let remixedFilename = null;
    let songData = null;
    let processing = false;
    let bounce = '';

    function remix() {
        remixedFilename = null;
        setTimeout(() => processing = true, 50);
        processRemix(selectedType, songData).then(response => {
            remixedFilename = response.filename;
            processing = false;
            bounce = 'bounce';
            setTimeout(() => bounce = '', 1500);
        }).catch(() => processing = false);
    }

    function typeChange(event) {
        selectedType = event.detail;
    }
</script>

<div class="content">
    <Veil active={processing} />
    <FileUploader on:file={(s) => songData = s.detail} />
    <div class="controls">
        <TypeSelector on:typeChange={typeChange} />
        <RemixButton
            on:click={remix}
            disabled={songData === null}
        />
    </div>
    <div class="audio-player {bounce}">
        <AudioPlayer filename={remixedFilename} />
    </div>
</div>

<style>
    .content {
        width: 100%;
        height: 100%;

        background: rgb(39, 117, 82);

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .controls {
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .audio-player {
        animation-duration: 1.5s;
        animation-iteration-count: 1;
        transform-origin: bottom;
    }

    .bounce {
        animation-name: bounce;
        animation-timing-function: ease;
    }

    @keyframes bounce {
        0%   { transform: scale(1,1)    translateY(0); }
        10%  { transform: scale(1.1,.9) translateY(0); }
        30%  { transform: scale(.9,1.1) translateY(-70px); }
        50%  { transform: scale(1,1)    translateY(0); }
        57%  { transform: scale(1,1)    translateY(-7px); }
        64%  { transform: scale(1,1)    translateY(0); }
        100% { transform: scale(1,1)    translateY(0); }
    }
</style>

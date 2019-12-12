<script>
    export let active = false;
</script>

<div class="veil" style="display: {active ? 'flex' : 'none'}">
    <div class="spinner"></div>
</div>

<style>
    .veil {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: rgb(117, 176, 149, 0.9);
        z-index: 1;

        justify-content: center;
        align-items: center;
    }

    .spinner {
        width: 160px;
        height: 160px;
        border-width: 25px;
        border-style: solid;
        border-top-color: rgb(235, 155, 47);
        border-right-color: rgb(70, 45, 13);
        border-bottom-color: rgb(235, 155, 47);
        border-left-color: rgb(70, 45, 13);
        border-radius: 50%;
        animation: spin 3s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
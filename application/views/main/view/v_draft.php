<script>
    $(document).ready(function() {
        const respons = '<?php echo $data['arrayReturn'][0]['result_responses']; ?>';
        const obj = JSON.parse(respons);
        window.open(obj.data.url_draft, '_blank');
        
        // const preview = document.querySelector('iframe');
        // preview.src = obj.data.data_file;

    });
</script>

<!-- <iframe class="responsive-iframe" src="" id="iframe-pdf"></iframe> -->
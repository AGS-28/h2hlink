<script>
    $(document).ready(function() {

        const respons = <?php echo $data; ?>;
        const preview = document.querySelector('iframe');
        preview.src = 'data:application/pdf;base64,'+respons;

    });
</script>
<iframe class="responsive-iframe" src="" id="iframe-pdf"></iframe>
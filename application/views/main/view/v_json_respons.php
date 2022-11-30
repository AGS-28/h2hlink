<div style="text-align: left;">
    <?php $json_pretty = json_decode(json_encode($data['arrayReturn'][0]['result_responses'])); ?>
    <p>Respons Created : <?php echo $data['arrayReturn'][0]['created_at_responses'] ?></p>
    <p>Respons Code : <?php echo $data['arrayReturn'][0]['result_code'] ?></p>
    <p>Respons Type : <?php echo $data['arrayReturn'][0]['urai_message_type'] ?></p>
    <p>Respons Content : <?php echo pretty_print($json_pretty); ?></p>
</div>
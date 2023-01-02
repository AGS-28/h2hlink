<div style="text-align: left;">
    <?php $json_pretty = json_decode(json_encode($data['arrayReturn'][0]['message_content'])); ?>
    <p>Request Created : <?php echo $data['arrayReturn'][0]['created_at_message'] ?></p>
    <p>Request Id : <?php echo $data['arrayReturn'][0]['message_id'] ?></p>
    <p>Request Type : <?php echo $data['arrayReturn'][0]['urai_message_type'] ?></p>
    <p>Request Content : <?php echo pretty_print($json_pretty); ?> </p>
</div>
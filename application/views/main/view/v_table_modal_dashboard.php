<script>
    $(document).ready(function() {
        $("#table_data").DataTable({
            searching: false,
            dom: 'Bfrtip',
            buttons: []
        });
    });
</script>
<div align="left">
    <table id="table_data" class="table_data table table-bordered dt-responsive nowrap w-100" width="100%">
        <thead style="width:100%">
            <tr align="center">
                <th>No</th>
                <?php 
                    if($tipe == 1) {
                        $urai_table = 'Status';
                    } else {
                        $urai_table = 'Method';
                    } 
                ?>
                <th><?php echo $urai_table; ?></th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <?php $i=1; foreach ($data as $key => $value) { ?>
                <tr>
                    <td align="center"><?php echo $i; ?></td>
                    <td><?php echo $value['uraian']; ?></td>
                    <td align="center"><?php echo $value['jml']; ?></td>
                </tr>
            <?php $i++; } ?>
        </tbody>
    </table>
</div>
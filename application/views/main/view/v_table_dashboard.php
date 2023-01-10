<script>
$(document).ready(function() {
    if ($.fn.DataTable.isDataTable("#table_data1")) {
        $("#table_data1").DataTable().destroy();
    } 

    $("#table_data1").DataTable({
        "bInfo" : false,
        "bLengthChange": false
    });

    if ($.fn.DataTable.isDataTable("#table_data2")) {
        $("#table_data2").DataTable().destroy();
    } 

    $("#table_data2").DataTable({
        "bInfo" : false,
        "bLengthChange": false
    });

    if ($.fn.DataTable.isDataTable("#table_data3")) {
        $("#table_data3").DataTable().destroy();
    } 

    $("#table_data3").DataTable({
        "bInfo" : false,
        "bLengthChange": false
    });
});
</script>
<?php if($tipe == 1) { ?>
    <table id="table_data1" class="table_data table table-bordered dt-responsive nowrap w-100" width="100%">
        <thead style="width:100%">
            <tr align="center">
                <th>No</th>
                <th>Client Name</th>
                <th>Nomor Aju</th>
                <th>Tanggal Aju</th>
                <th>IPSKA</th>
                <th>Form</th>
                <th>Status</th>
                <th>Nomor SKA</th>
                <th>Tanggal SKA</th>
            </tr>
        </thead>
        <tbody>
            <?php $no = 1; foreach ($data as $key => $value) { ?>
                <tr>
                    <td align="center"><?php echo $no; ?></td>
                    <td><?php echo $value['client_name']; ?></td>
                    <td><?php echo $value['no_aju']; ?></td>
                    <td><?php echo $value['tgl_aju']; ?></td>
                    <td><?php echo $value['ipska']; ?></td>
                    <td><?php echo $value['form']; ?></td>
                    <td><?php echo $value['status_ska']; ?></td>
                    <td><?php echo $value['no_ska']; ?></td>
                    <td><?php echo $value['tgl_ska']; ?></td>
                </tr>
            <?php $no++; } ?>
        </tbody>
    </table>
<?php } ?>

<?php if($tipe == 2) { ?>
    <table id="table_data2" class="table_data table table-bordered dt-responsive nowrap w-100" width="100%">
        <thead style="width:100%">
            <tr align="center">
                <th>No</th>
                <th>Client Name</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <?php $no = 1; foreach ($data as $key => $value) { ?>
                <tr>
                    <td align="center"><?php echo $no; ?></td>
                    <td><?php echo $value['client_name']; ?></td>
                    <td align="right"><?php echo $value['jml']; ?></td>
                </tr>
            <?php $no++; } ?>
        </tbody>
    </table>
<?php } ?>

<?php if($tipe == 3) { ?>
    <table id="table_data3" class="table_data table table-bordered dt-responsive nowrap w-100" width="100%">
        <thead style="width:100%">
            <tr align="center">
                <th>No</th>
                <th>Client Name</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <?php $no = 1; foreach ($data as $key => $value) { ?>
                <tr>
                    <td align="center"><?php echo $no; ?></td>
                    <td><?php echo $value['client_name']; ?></td>
                    <td align="right"><?php echo $value['jml']; ?></td>
                </tr>
            <?php $no++; } ?>
        </tbody>
    </table>
<?php } ?>
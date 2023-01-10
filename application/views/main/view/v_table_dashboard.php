<script>
$(document).ready(function() {
    if ($.fn.DataTable.isDataTable("#table_data")) {
        $("#table_data").DataTable().destroy();
    } 

    $("#table_data").DataTable({
        "bInfo" : false,
        "bLengthChange": false
    });
});
</script>
<table id="table_data" class="table_data table table-bordered dt-responsive nowrap w-100" width="100%">
    <thead style="width:100%">
        <tr align="center">
            <th>No</th>
            <th>Client Name</th>
            <th>Partner Name</th>
            <th>Nomor Aju</th>
            <th>IPSKA</th>
            <th>Form</th>
            <th>Nomor SKA</th>
            <th>Tanggal SKA</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">No</td>
            <td>Client Name</td>
            <td>Partner Name</td>
            <td>Nomor Aju</td>
            <td>IPSKA</td>
            <td>Form</td>
            <td>Nomor SKA</td>
            <td>Tanggal SKA</td>
        </tr>
    </tbody>
</table>
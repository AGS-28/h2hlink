<table class="table align-middle table-nowrap table-borderless">
    <thead>
        <tr>
            <th>Client Name</th>
            <th>Total</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($data as $key => $value) { ?>
            <tr>
                <td>
                    <span class="text-muted mb-3 lh-1 d-block text-truncate"><?php echo $value['client_name']; ?></span>
                </td>
                <td>
                    <span class="text-muted mb-3 lh-1 d-block text-truncate"><?php echo $value['jml']; ?></span>
                </td>
                <td>
                    <span class="text-muted mb-3 lh-1 d-block text-truncate">
                        <button onclick="show_modal_dashboard(<?php echo $value['id']; ?>,<?php echo $tipe; ?>);" class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bx bx-dots-horizontal-rounded"></i>
                        </button>
                    </span>
                </td>
            </tr>
        <?php } ?>
    </tbody>
</table>
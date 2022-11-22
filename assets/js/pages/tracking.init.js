$(document).ready(function() {
    $("#table_data").DataTable();
});

function cari_data(form) {
        var errorString = "Please complete the following data : <br\>";
        var panjangAwal = errorString.length;

        $('#'+form).find('input[type="text"],select,textarea,input[type="file"]').each(function() {
            if($('#'+this.id).css('display') != 'none') {
                if(this.value == "") {
                    errorString += "- "+this.title+"  <br\>";
                }
            }   
        });

        var panjangAkhir = errorString.length;
        panjangAkhir = errorString.length;
        if (panjangAwal == panjangAkhir) {
            if ($.fn.DataTable.isDataTable("#table_data")) {
                $("#table_data").DataTable().destroy();
            }

            var formdata = JSON.stringify($("#"+form).serializeArray());
            $("#table_data").DataTable({
                destroy: true,
                responsive: false,
                autoWidth: true,
                // processing: true,
                serverSide: true,
                // select: true,
                searching: true,
                // order: [0],
                // dom: 'Bfrtip',
                // buttons: [{
                //         extend: "excel",
                //         text: "Export to Excel",
                //         titleAttr: "Excel",
                //         action: exp_excel,
                // }],
                ajax: {
                    url: baseurl + "index.php/tracking/cari/"+Math.random(),
                    type: "POST",
                    data: {
                        formdata
                    },
                },
                drawCallback: function() {
                    $('[data-toggle="popover"]').popover({
                        html: true,
                        content: function() {
                            return $("#primary-popover-content").html();
                        },
                    });
                    hideLoader();
                },
                columnDefs: [{  
                        width: "5%",
                        targets: [0],
                        orderable: true,
                        className: "text-center",
                    },
                    {
                        targets: '_all',
                        className: "text-left"
                    },
                ],
            });
        } else {
            swal.fire({
                title: "Warning!",
                html: errorString,
                icon: "warning",
                button: "Close",
            });
        }

    }
$(document).ready(function() {
    $("#table_data").DataTable({
        searching: false,
        dom: 'Bfrtip',
        buttons: []
    });
    
    flatpickr('#create_date', {
        mode: "range"
    });

    var multipleCancelButton = new Choices('#client_partner',{removeItemButton: true,});
    var multipleCancelButton = new Choices('#client_name',{removeItemButton: true,});
    var multipleCancelButton = new Choices('#end_point',{removeItemButton: true,});
    var multipleCancelButton = new Choices('#npwp',{removeItemButton: true,});
    var multipleCancelButton = new Choices('#nib',{removeItemButton: true,});
    var multipleCancelButton = new Choices('#partner_name',{removeItemButton: true,});
    var multipleCancelButton = new Choices('#create_date',{removeItemButton: true,});
});

function cari_data(form) {
        var errorString = "Please complete the following data : <br\>";
        var panjangAwal = errorString.length;

        $('#'+form).find('input[type="text"],select,textarea,input[type="file"]').each(function() {
            // if($('#'+this.id).css('display') != 'none') {
                if(form != 'form_tracking') {
                    if(this.value == "" && this.title != '') {
                        errorString += "- "+this.title+"  <br\>";
                    }
                }
            // }   
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
                // autoWidth: true,
                processing: true,
                serverSide: true,
                responsive: false,
                // select: true,
                searching: false,
                // order: [0],
                dom: 'Bfrtip',
                buttons: [],
                ajax: {
                    url: baseurl + "index.php/tracking/cari/"+Math.random(),
                    type: "POST",
                    data: {
                        formdata
                    },
                },
                oLanguage: {
                    sProcessing: '<div><div class="spinner-grow text-primary m-1" role="status">'+
                                        '<span class="sr-only">Loading...</span>'+
                                    '</div>'+
                                    '<div class="spinner-grow text-secondary m-1" role="status">'+
                                        '<span class="sr-only">Loading...</span>'+
                                    '</div>'+
                                    '<div class="spinner-grow text-success m-1" role="status">'+
                                        '<span class="sr-only">Loading...</span>'+
                                    '</div>'+
                                    '<div class="spinner-grow text-info m-1" role="status">'+
                                        '<span class="sr-only">Loading...</span>'+
                                    '</div>'+
                                '</div>'
                },
                drawCallback: function() {
                    $('[data-toggle="popover"]').popover({
                        html: true,
                        content: function() {
                            return $("#primary-popover-content").html();
                        },
                    });
                },
                columnDefs: [{  
                        width: "5%",
                        targets: [0, 4],
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

    function show_modal(id, tipe) {
        var title_header = '';
        if(tipe == 0) {
            title_header = 'Data Request';
        }

        if(tipe == 1) {
            title_header = 'Data Respons';
        }

        if(tipe == 2) {
            title_header = 'Views Data';
        }

        $('#modal_header').html(title_header);

        loading('modal_body', true);
        $('#exampleModalScrollable').modal('toggle');
        
        var url = baseurl + "index.php/tracking/get_message_respons/"+Math.random();
        $.post( url, { id: id, tipe: tipe })
        .done(function( data ) {
            loading('modal_body', false);
            $('#modal_body').html(data);
        });
    }

    function loading(id, stat) {
        var loading = '<div><div class="spinner-grow text-primary m-1" role="status">'+
                                        '<span class="sr-only">Loading...</span>'+
                                    '</div>'+
                                    '<div class="spinner-grow text-secondary m-1" role="status">'+
                                        '<span class="sr-only">Loading...</span>'+
                                    '</div>'+
                                    '<div class="spinner-grow text-success m-1" role="status">'+
                                        '<span class="sr-only">Loading...</span>'+
                                    '</div>'+
                                    '<div class="spinner-grow text-info m-1" role="status">'+
                                        '<span class="sr-only">Loading...</span>'+
                                    '</div>'+
                                '</div>';
        if(stat) {
            $('#'+id).html(loading);
        } else {
            $('#'+id).html('');
        }
    }
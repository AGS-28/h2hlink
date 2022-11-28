$(document).ready(function() {
    var multipleCancelButton = new Choices('#client_partner',{removeItemButton: true,});
    var multipleCancelButton = new Choices('#client_name',{removeItemButton: true,});
    var multipleCancelButton = new Choices('#end_point',{removeItemButton: true,});
    var multipleCancelButton = new Choices('#npwp',{removeItemButton: true,});
    var multipleCancelButton = new Choices('#nib',{removeItemButton: true,});
    var multipleCancelButton = new Choices('#partner_name',{removeItemButton: true,});
    var multipleCancelButton = new Choices('#create_date',{removeItemButton: true,});
});

function cari_data(form) {
    var url = siteurl + "/tracking/cari/"+Math.random()
    var columnDefs = [
                        {  
                            width: "5%",
                            targets: [0, 4],
                            orderable: true,
                            className: "text-center",
                        },
                        {
                            targets: '_all',
                            className: "text-left"
                        },
                    ];

    get_data(form,url,validate = false,tableid = "table_data",columnDefs);

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

    
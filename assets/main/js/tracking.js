$(document).ready(function() {    
    if($('#tipe').val() == '0') {
        new Choices('#client_partner',{removeItemButton: true,});
        new Choices('#client_name',{removeItemButton: true,});
        new Choices('#npwp',{removeItemButton: true,});
        new Choices('#nib',{removeItemButton: true,});
        new Choices('#end_point',{removeItemButton: true,});
    }
    
    if($('#tipe').val() == '1') {
        new Choices('#client_partner',{removeItemButton: true,});
        new Choices('#client_name',{removeItemButton: true,});
        new Choices('#npwp',{removeItemButton: true,});
        new Choices('#nib',{removeItemButton: true,});
        new Choices('#end_point',{removeItemButton: true,});
        
        new Choices('#years_multiple_tipe1',{addItems: false,removeItems: false,}).disable();
        new Choices('#month_enabled_tipe1',{addItems: false,removeItems: false,}).disable();
        new Choices('#client_partner_tipe1',{addItems: false,removeItems: false,}).disable();
        new Choices('#client_name_tipe1',{addItems: false,removeItems: false,}).disable();
        new Choices('#end_point_tipe1',{addItems: false,removeItems: false,}).disable();
        new Choices('#npwp_tipe1',{addItems: false,removeItems: false,}).disable();
        new Choices('#nib_tipe1',{addItems: false,removeItems: false,}).disable();
        
        cari_data('form_tracking');
    }

    if($('#tipe').val() == '2') {
        new Choices('#client_partner',{removeItemButton: true,});
        new Choices('#client_name',{removeItemButton: true,});
        new Choices('#npwp',{removeItemButton: true,});
        new Choices('#nib',{removeItemButton: true,});
    }
});

function cari_data(form, validate=false) {
    if($('#tipe').val() == '2') {
        var url = siteurl + "/tracking/cari_ska/"+Math.random()
    } else {
        var url = siteurl + "/tracking/cari/"+Math.random()
    }
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

    get_data(form,url,validate,tableid = "table_data",columnDefs);

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

    if(tipe == 4) {
        title_header = 'Views Document';
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

function progress_bar(tipe) {        
    var id_btn = [1,2];
    $.each(id_btn, function( index, value ) {
        if(parseInt(value) == parseInt(tipe)) {
            $('#btn_'+value).addClass('btn-light');
        } else {
            $('#btn_'+value).removeClass('btn-light');
        }

        if(value == tipe) {
            $('#data_'+value).show();
        } else {
            $('#data_'+value).hide();
        }
    });
}

function get_draftcoo(aju, nib, npwp, user_endpoint, tipe) {
    showLoading(true);
    $.post(baseurl + "index.php/tracking/get_draftcoo/"+Math.random(),{aju:aju, nib:nib, npwp:npwp, user_endpoint:user_endpoint, tipe:tipe}).done(function( data ) {
        showLoading(false);
        const obj = JSON.parse(data);
        if(obj.kode == '200') {
            swal.fire({
                title: 'Succes!',
                html: obj.data.keterangan,
                icon: 'success',
                button: "Close",
            });
        } else{
            swal.fire({
                title: 'Warning!',
                html: obj.keterangan,
                icon: 'warning',
                button: "Close",
            });
        }
    });
}
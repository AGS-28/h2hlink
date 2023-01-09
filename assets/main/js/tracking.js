$(document).ready(function() {    
    if($('#tipe').val() == '0') {
        new Choices('#client_partner',{removeItemButton: true,});
        new Choices('#client_name',{removeItemButton: true,});
        new Choices('#npwp',{removeItemButton: true,});
        new Choices('#nib',{removeItemButton: true,});
        new Choices('#end_point',{removeItemButton: true,});

        cari_data('form_tracking');
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

        cari_data('form_tracking');
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

        if(tipe == 3) {
            $('#exampleModalScrollable').modal('toggle');
        }
    });
}

function progress_bar(tipe,cek='') {
    if(cek == '') {
        var id_btn = [1,2];
    } else {
        var id_btn = [1,2,3];
    }
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
    var stat = true;
    if(tipe == '3') {
        stat = false;
        
        loading('modal_body', true);
        $('#modal_header').html('Submit Coo');
        $('#exampleModalScrollable').modal('toggle');

        var url = baseurl + "index.php/tracking/get_data_coo/"+Math.random();
        $.post( url, { aju: aju, nib:nib, npwp:npwp, user_endpoint:user_endpoint, tipe:tipe })
        .done(function( data ) {
            loading('modal_body', false);
            $('#modal_body').html(data);
        });
    }

    if(stat) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure submit action ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, do it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success mt-2',
            cancelButtonClass: 'btn btn-danger ms-2 mt-2',
            buttonsStyling: false
        }).then(function (result) {
            if (result.dismiss !== Swal.DismissReason.cancel)  {
                submit(aju, nib, npwp, user_endpoint, tipe);
            } else if (result.dismiss === Swal.DismissReason.cancel)  {
                var timerInterval;
                Swal.fire({
                    title: "Cancelled",
                    html: 'I will close in <b></b> seconds.',
                    timer: 1000,
                    icon: 'error',
                    timerProgressBar: true,
                    didOpen:function () {
                        Swal.showLoading()
                        timerInterval = setInterval(function() {
                        var content = Swal.getHtmlContainer()
                        if (content) {
                            var b = content.querySelector('b')
                            if (b) {
                            b.textContent = Swal.getTimerLeft()
                            }
                        }
                        }, 100)
                    },
                    onClose: function () {
                        clearInterval(timerInterval)
                    }
                });
            }
        });
    }
}

function show_v_document(id, name_doc) {
    $('#exampleModalScrollable1').modal('toggle');
    $('#modal_header1').html(name_doc);
    loading('modal_body1', true);
    
    var url = baseurl + "index.php/tracking/get_path_document/"+Math.random();
    $.post( url, { id: id })
    .done(function( data ) {
        loading('modal_body1', false);
        $('#modal_body1').html(data);
    });
}

function changeradiobtn(data) {
    $('#pengajuan').val(data.value);
    if(data.value == '1') {
        $('#input_serial').show();
    } else {
        $('#input_serial').hide();
    }
}

function submit_coo(aju, nib, npwp, user_endpoint, tipe) {
    // var pengajuan = $('#pengajuan').val();
    // var no_serial = $('#no_serial').val();
    var stat = true;

    // if(pengajuan == '') {
    //     alert_error('Please select pengajuan.');
    // } else if(pengajuan == '1') {
    //     if(no_serial == '') {
    //         alert_error('Please input nomor serial.');
    //     } else {
    //         stat = true;
    //     }
    // } else {
    //     $('#no_serial').val('');
    //     stat = true;
    // }

    if(stat) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure submit action ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, do it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success mt-2',
            cancelButtonClass: 'btn btn-danger ms-2 mt-2',
            buttonsStyling: false
        }).then(function (result) {
            if (result.dismiss !== Swal.DismissReason.cancel)  {
                submit(aju, nib, npwp, user_endpoint, tipe, $('#no_serial').val());
            } else if (result.dismiss === Swal.DismissReason.cancel)  {
                var timerInterval;
                Swal.fire({
                    title: "Cancelled",
                    html: 'I will close in <b></b> seconds.',
                    timer: 1000,
                    icon: 'error',
                    timerProgressBar: true,
                    didOpen:function () {
                        Swal.showLoading()
                        timerInterval = setInterval(function() {
                        var content = Swal.getHtmlContainer()
                        if (content) {
                            var b = content.querySelector('b')
                            if (b) {
                            b.textContent = Swal.getTimerLeft()
                            }
                        }
                        }, 100)
                    },
                    onClose: function () {
                        clearInterval(timerInterval)
                    }
                });
            }
        });
    }
}

function submit(aju, nib, npwp, user_endpoint, tipe, no_serial='') {
    showLoading(true);
    $.post(baseurl + "index.php/tracking/get_draftcoo/"+Math.random(),{aju:aju, nib:nib, npwp:npwp, user_endpoint:user_endpoint, tipe:tipe, no_serial:no_serial}).done(function( data ) {
        showLoading(false);
        const obj = JSON.parse(data);
        if(obj.kode == '200') {
            swal.fire({
                title: 'Succes!',
                html: obj.data.keterangan,
                icon: 'success',
                button: "Close",
            }).then((result) => {
                if(tipe == '4') {
                    var url = obj.data.url_draft;
                    if(url != '' && url != 'null') {
                        window.open(url, '_blank');
                    }
                } else if(tipe == '3') {
                    var url = obj.data.url_dok;
                    if(url != '' && url != 'null') {
                        window.open(url, '_blank');
                    }
                } else {
                    location.reload(true);
                }
            });
        } else {
            swal.fire({
                title: 'Warning!',
                html: obj.keterangan,
                icon: 'warning',
                button: "Close",
            });
        }
    });
}
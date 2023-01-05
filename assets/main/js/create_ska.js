var tipe = $('#tipe').val();
var extention = $('#extention').val();
if(tipe == 0) {
    var myDropzone = new Dropzone(".dropzone", { 
        maxFiles: 1,
        // acceptedFiles: ".csv, .xls, .xlsx, .txt, .rar, .json, .xml",
        acceptedFiles: extention,
        addRemoveLinks: true,
        accept: function(file, done) {
            done();
        },
        init: function() {
            this.on("maxfilesexceeded", function(file){
                this.removeFile(file);
                alert_error('Maximum file uploaded is only one');
            });
        }
    });

    var myDropzone1 = new Dropzone(".dropzone1", { 
        maxFiles: 1,
        // acceptedFiles: ".csv, .xls, .xlsx, .txt, .rar, .json, .xml",
        acceptedFiles: extention,
        addRemoveLinks: true,
        // addTypeDocument: true,
        accept: function(file, done) {
            done();
        },
        init: function() {
            this.on("maxfilesexceeded", function(file){
                this.removeFile(file);
                alert_error('Maximum file uploaded is only one');
            });
        }
    });
}

$(document).ready(function() {
    if(tipe == 0) {
        cari_data('form_table',false,'get_data_draft');
        new Choices('#client_partner', {shouldSort: false});
        new Choices('#ipska', {shouldSort: false});
        new Choices('#tipe_form', {shouldSort: false});
        new Choices('#tipe_upload', {shouldSort: false});
    } else {
        show_hide_input();
        get_mask_number('value');
        flatpickr('#document_date', {});
        cari_data('form_table',false,'get_data_document');
        new Choices('#document_type', {shouldSort: true});
        new Choices('#aju_number', {shouldSort: true});
        new Choices('#kppbc', {shouldSort: true});

        var file_upload = document.getElementById('file_upload');
        file_upload.addEventListener('change', function(){
            confirm_save();
        });
    }
});

// function cekFile() {
//     var tipe_upload = $('#tipe_upload').val();
//     var tipe_file = $('#tipe_file').val();
//     var text_file = $('#text_file').val();
//     if(tipe_file.indexOf(tipe_upload) === -1) {
//         var text = $('#tipe_upload option:selected').text();
//         var update_fipe_file = tipe_file+','+tipe_upload;
//         var update_text_file = text_file+','+text;
//         $('#tipe_file').val(update_fipe_file);
//         $('#text_file').val(update_text_file);

//         var substring = $('#text_file').val();
//         var split = substring.substring(1).split(',');

//         var substring1 = $('#tipe_file').val();
//         var split1 = substring1.substring(1).split(',');
        
//         $('#table_text').html('');
//         var satu = '';
//         var dua = '';
//         var tiga = '';

//         var satu1 = '';
//         var dua1 = '';
//         var tiga1 = '';

//         if (typeof split[0] !== 'undefined') {
//             satu = split[0].replace(/^\s+|\s+$/gm,"");
//         }

//         if (typeof split[1] !== 'undefined') {
//             dua = split[1].replace(/^\s+|\s+$/gm,"");
//         }

//         if (typeof split[2] !== 'undefined') {
//             tiga = split[2].replace(/^\s+|\s+$/gm,"");
//         }

//         if (typeof split1[0] !== 'undefined') {
//             satu1 = split1[0].replace(/^\s+|\s+$/gm,"");
//         }

//         if (typeof split1[1] !== 'undefined') {
//             dua1 = split1[1].replace(/^\s+|\s+$/gm,"");
//         }

//         if (typeof split1[2] !== 'undefined') {
//             tiga1 = split1[2].replace(/^\s+|\s+$/gm,"");
//         }

//         var cek = '';
//         if(satu1 == '11') {
//             cek = '1';
//             html = '<a class="relative1" style="cursor: default;">'+satu+'</a>';
//             html += '<a class="relative2" style="cursor: default;">'+dua+'</a>';
//             html += '<a class="relative3" style="cursor: default;">'+tiga+'</a>';
//         } else {
//             html = '<a class="relative" style="cursor: default;">'+satu+'</a>';
//         }

//         if(dua1 == '11') {
//             html = '<a class="relative" style="cursor: default;">'+satu+'</a>';
//             html += '<a class="relative4" style="cursor: default;">'+dua+'</a>';
//             html += '<a class="relative3" style="cursor: default;">'+tiga+'</a>';
//         } else {
//             if(cek == '') {
//                 html = '<a class="relative" style="cursor: default;">'+satu+'</a>';
//                 html += '<a class="relative5" style="cursor: default;">'+dua+'</a>';
//             }
//         }

//         if(tiga1 == '11') {
//             html = '<a class="relative" style="cursor: default;">'+satu+'</a>';
//             html += '<a class="relative5" style="cursor: default;">'+dua+'</a>';
//             html += '<a class="relative6" style="cursor: default;">'+tiga+'</a>';
//         }

//         $('#table_text').html(html);
//         return true;
//     } else {
//         return false;
//     }
// }

function confirm_upload_draft() {
    var errorString = "Please complete the following data : <br\>";
    var panjangAwal = errorString.length;

    // if ($('#invoice_number').val() == '') {
        // errorString += "- Invoice Number  <br\>";
    // }

    if (!$('#client_partner').val()) {
        errorString += "- Select a client partner <br\>";
    }

    if (!$('#ipska').val()) {
        errorString += "- Select a IPSKA <br\>";
    }

    if (!$('#tipe_form').val()) {
        errorString += "- Select a Form <br\>";
    }

    var dropzone = Dropzone.forElement("#myDropzone");
    if (dropzone.files.length == 0) {
        errorString += "- Upload file header & barang <br\>";
    }

    var dropzone1 = Dropzone.forElement("#myDropzone1");
    if (dropzone1.files.length == 0) {
        errorString += "- Upload file cost structure <br\>";
    }


    var panjangAkhir = errorString.length;
    panjangAkhir = errorString.length;
    if (panjangAwal == panjangAkhir) {
        $('#modal_header1').html('Serial Blanko');

        loading('modal_body1', true);
        $('#exampleModalScrollable1').modal('toggle');
        
        var url = baseurl + "index.php/createska/v_serial_blanko/"+Math.random();
        $.post( url, { })
        .done(function( data ) {
            loading('modal_body1', false);
            $('#modal_body1').html(data);
        });
    } else {
        alert_error(errorString);
    }
}

function upload_draft() {
    showLoading(true);
    var dropzone = Dropzone.forElement("#myDropzone");
    var dropzone1 = Dropzone.forElement("#myDropzone1");

    var formdata  = new FormData();
    formdata.append('length', dropzone.files.length);
    formdata.append('length1', dropzone1.files.length);
    formdata.append('client_partner', $('#client_partner').val());
    // formdata.append('invoice_number', $('#invoice_number').val());
    formdata.append('ipska', $('#ipska').val());
    formdata.append('tipe_form', $('#tipe_form').val());
    // formdata.append('tipe_file', $('#tipe_file').val());
    formdata.append('pengajuan', $('#pengajuan').val());
    formdata.append('no_serial', $('#no_serial').val());

    for (var i = 0; i < dropzone.files.length; i++) {
        formdata.append('file_' + i, dropzone.files[i]);
    }

    for (var i = 0; i < dropzone1.files.length; i++) {
        formdata.append('file1_' + i, dropzone1.files[i]);
    }

    var url = baseurl + "index.php/createska/upload_draft/"+Math.random();
    var data = post_ajax(url,formdata);
    var respondData = JSON.parse(data);
    setTimeout(function(){
        showLoading(false);
        if (respondData == 1)  {
            // alert_sukses('',cari_data('form_table',false,'get_data_draft'));
            alert_sukses('',location.reload());
        } else if(respondData == 2) {
            alert_error('Failed to upload documents, please check your type file');
        } else {
            alert_error('Failed to upload documents');
        }
    }, 3000);
}

function confirm_save() {
    var errorString = "Please complete the following data : <br\>";
    var panjangAwal = errorString.length;
    var document_type = $('#document_type ').val();

    $('#form_upload').find('input[type="text"],select,textarea').each(function() {
        if(this.title != '' && this.value == '') {
            if(this.id == 'value') {
                if(document_type == '1' || document_type == '6') {
                    errorString += "- "+this.title+"  <br\>";
                }
            } else {
                errorString += "- "+this.title+"  <br\>";
            } 
        }
    });

    var panjangAkhir = errorString.length;
    panjangAkhir = errorString.length;
    if (panjangAwal == panjangAkhir) {
        confirm_kirim(upload_document);
    }else {
        alert_error(errorString);
    }
}

function upload_document() {
    showLoading(true);
    var datapost  = JSON.stringify(jQuery('#form_upload').serializeArray());
    var formdata  = new FormData();
    formdata.append('formdata',datapost);
    formdata.append('file',$('#file_upload').prop('files')[0]);

    var url = baseurl + "index.php/createska/save_upload_document/"+Math.random();
    var data = post_ajax(url,formdata);
    var respondData = JSON.parse(data);
    setTimeout(function(){
        showLoading(false);
        if (respondData == 1)  {
            alert_sukses('',cari_data('form_table',false,'get_data_document'));
        } else {
            alert_error('Failed to upload documents');
        }
    }, 3000);
}

function cari_data(form, validate, func_name) {
    var url = baseurl + "index.php/createska/"+func_name+"/"+Math.random();
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

function show_modal_document(id, name_doc, tipe, func_name) {
    if(tipe == 0) {
        show_data_document(id, name_doc, '', func_name);
    }
    
    if(tipe == 1) {
        $('#exampleModalScrollable1').modal('toggle');
        $('#modal_header1').html(name_doc);
        loading('modal_body1', true);
        
        var url = baseurl + "index.php/createska/"+func_name+"/"+Math.random();
        $.post( url, { id: id, tipe: tipe })
        .done(function( data ) {
            loading('modal_body1', false);
            $('#modal_body1').html(data);
        });
    }
}

function show_data_document(id, name_doc, tipe='', func_name) {
    if ($.fn.DataTable.isDataTable("#table_data_v_document")) {
        $("#table_data_v_document").DataTable().destroy();
    }  

    if(func_name == 'get_view_draft') {
        var target = [0, 4];
        var target_end = [0, 4];
    } else {
        var target = [0, 6];
        var target_end = [5];
    }

    $("#table_data_v_document").DataTable({
        paging: false,
        searching: false
    });

    if(tipe == '') {
        $('#exampleModalScrollable').modal('toggle');
    }
    
    $('#modal_header').html(name_doc);
    $('#header_id').val(id);

    var url = baseurl + "index.php/createska/"+func_name+"/"+Math.random();
    var columnDefs = [
        {  
            width: "5%",
            targets: target,
            orderable: true,
            className: "text-center",
        },
        {
            targets: target_end,
            className: "text-end"
        },
        {
            targets: '_all',
            className: "text-left"
        },
    ];

    get_data('form_v_document',url,false,tableid = "table_data_v_document",columnDefs);
}

function delete_document(id, header_id) {
    confirm_delete('', next_delete_document, id, header_id);
}

function next_delete_document(id, header_id) {
    loading('modal_loading', true);

    var formdata  = new FormData();
    formdata.append('id',id);
    var url = baseurl + "index.php/createska/delete_document/"+Math.random();
    var data = post_ajax(url,formdata);
    var respondData = JSON.parse(data);
    setTimeout(function(){
        loading('modal_loading', false);

        if (respondData == 1) {
            alert_sukses('',show_data_document(header_id, 'Views Data','1','get_view_document'));
        } else {
            alert_error('Failed to delete documents');
        }
    }, 3000);
}

function send_document(id) {    
    showLoading(true);
    $.post(baseurl + "index.php/createska/cek_document/"+Math.random(),{id:id}).done(function( data ) {
        if(data == 1) {
            $.post(baseurl + "index.php/createska/send_document/"+Math.random(),{id:id}).done(function( data ) {
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
        } else {
            showLoading(false);
            swal.fire({
                title: 'Warning!',
                html: 'Silahkan upload dokumen wajib (PEB/PE & Comersial Invoice)',
                icon: 'warning',
                button: "Close",
            });
        }
    });
}

function show_hide_input() {
    var document_type = $('#document_type').val();
    $('#div_kppbc').hide();
    $('#div_value').hide();

    if(document_type == '1') {
        $('#div_value').show();
    }

    if(document_type == '6') {
        $('#div_kppbc').show();
        $('#div_value').show();
    }
}

function send_draft(id) {
    showLoading(true);
    $.post(baseurl + "index.php/createska/send_draft/"+Math.random(),{id:id}).done(function( data ) {
        showLoading(false);
        const obj = JSON.parse(data);
        if(obj.kode == '200') {
            swal.fire({
                title: 'Succes!',
                html: obj.data.keterangan,
                icon: 'success',
                button: "Close",
            }).then((result) => {
                location.reload(true);
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

function changeradiobtn(data) {
    $('#pengajuan').val(data.value);
    if(data.value == '0') {
        $('#input_serial').show();
    } else {
        $('#input_serial').hide();
    }
}

function submit_file() {
    var pengajuan = $('#pengajuan').val();
    var no_serial = $('#no_serial').val();
    var stat = false;

    if(pengajuan == '') {
        alert_error('Please select pengajuan.');
    } else if(pengajuan == '0') {
        if(no_serial == '') {
            alert_error('Please input nomor serial.');
        } else {
            stat = true;
        }
    } else {
        $('#no_serial').val('');
        stat = true;
    }

    if(stat) {
        confirm_kirim(upload_draft);
    }
}

function delete_draft(id) {
    showLoading(true);
    $.post(baseurl + "index.php/createska/delete_draft/"+Math.random(),{id:id}).done(function( data ) {
        showLoading(false);
        if(data == '1') {
            swal.fire({
                title: 'Succes!',
                html: 'Successfully deleted data.',
                icon: 'success',
                button: "Close",
            }).then((result) => {
                location.reload(true);
            });
        } else {
            swal.fire({
                title: 'Warning!',
                html: 'Failed to delete data',
                icon: 'warning',
                button: "Close",
            });
        }
    });
}
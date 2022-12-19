var tipe = $('#tipe').val();
var extention = $('#extention').val();
if(tipe == 0) {
    var myDropzone = new Dropzone(".dropzone", { 
        // maxFiles: 3,
        // acceptedFiles: ".csv, .xls, .xlsx, .txt, .rar, .json, .xml",
        acceptedFiles: extention,
        // addRemoveLinks: true,
        accept: function(file, done) {
            var cek = cekFile();
            if(cek) {
                done();
            } else {
                alert_error('Please complete the following data : <br\> - Anda hanya bisa melakukan upload sekali dengan tipe dokumen '+$('#tipe_upload option:selected').text());
                this.removeFile(file);
            }
        },
        init: function() {
            // addRemoveLinks: true, 
            // this.on("maxfilesexceeded", function(file) {
            //     alert_error('Please complete the following data : <br\> - Maximum file that can be uploaded is only 3');
            //     this.removeFile(file);
            // });
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

function cekFile() {
    var tipe_upload = $('#tipe_upload').val();
    var tipe_file = $('#tipe_file').val();
    if(tipe_file.indexOf(tipe_upload) === -1) {
        var update_fipe_file = tipe_file+','+tipe_upload;
        $('#tipe_file').val(update_fipe_file);
        return true;
    } else {
        return false;
    }
}

function confirm_upload_draft() {
    var errorString = "Please complete the following data : <br\>";
    var panjangAwal = errorString.length;

    if ($('#invoice_number').val() == '') {
        errorString += "- Invoice Number  <br\>";
    }
    
    var dropzone = Dropzone.forElement("#myDropzone");
    if (dropzone.files.length < 1) {
        errorString += "- File Upload  <br\>";
    }


    var panjangAkhir = errorString.length;
    panjangAkhir = errorString.length;
    if (panjangAwal == panjangAkhir) {
        confirm_kirim(upload_draft);
    } else {
        alert_error(errorString);
    }
}

function upload_draft() {
    showLoading(true);
    var dropzone = Dropzone.forElement("#myDropzone");

    var formdata  = new FormData();
    formdata.append('length', dropzone.files.length);
    formdata.append('client_partner', $('#client_partner').val());
    formdata.append('invoice_number', $('#invoice_number').val());
    formdata.append('ipska', $('#ipska').val());
    formdata.append('tipe_form', $('#tipe_form').val());
    formdata.append('tipe_file', $('#tipe_file').val());

    for (var i = 0; i < dropzone.files.length; i++) {
        formdata.append('file_' + i, dropzone.files[i]);
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
    } else {
        var target = [0, 6];
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
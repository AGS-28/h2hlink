var tipe = $('#tipe').val();
if(tipe == 0) {
    var myDropzone = new Dropzone(".dropzone", { 
        // maxFiles: 2,
        acceptedFiles: ".csv, .xls, .xlsx, .txt, .rar, .json, .xml",
        addRemoveLinks: true,
        accept: function(file, done) {
            done();
        },
        init: function() {
            addRemoveLinks: true, 
            this.on("maxfilesexceeded", function(file) {
                alert_error('Please complete the following data : <br\> - Maximum file that can be uploaded is only 2');
                this.removeFile(file);
            });
        }
    });
}

$(document).ready(function() {
    if(tipe == 0) {
        cari_data('form_table',false,'get_data_draft');
        new Choices('#client_partner', {shouldSort: true});
    } else {
        flatpickr('#document_date', {});
        cari_data('form_table',false,'get_data_document');
        new Choices('#document_type', {shouldSort: true});
        new Choices('#aju_number', {shouldSort: true});

        var file_upload = document.getElementById('file_upload');
        file_upload.addEventListener('change', function(){
            confirm_save();
        });
    }
});

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
        Swal.fire({
            title: 'Confirmation',
            html: 'Are you sure submit action ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes, do it!',
            cancelButtonText: 'No, cancel!'
            }).then((result) => {
            if (result.isConfirmed) {
                upload_draft();
            }
        });
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
    for (var i = 0; i < dropzone.files.length; i++) {
        formdata.append('file_' + i, dropzone.files[i]);
    }

    var url = baseurl + "index.php/createska/upload_draft/"+Math.random();
    var data = post_ajax(url,formdata);
    var respondData = JSON.parse(data);
    setTimeout(function(){
        showLoading(false);
        if (respondData == 1)  {
            alert_sukses(cari_data('form_table',false,'get_data_draft'));
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

    $('#form_upload').find('input[type="text"],select,textarea').each(function() {
        if(this.title != '' && this.value == '') {
            errorString += "- "+this.title+"  <br\>";
        }
    });

    var panjangAkhir = errorString.length;
    panjangAkhir = errorString.length;
    if (panjangAwal == panjangAkhir) {
        Swal.fire({
            title: 'Confirmation',
            html: 'Are you sure submit action ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes, do it!',
            cancelButtonText: 'No, cancel!'
            }).then((result) => {
            if (result.isConfirmed) {
                upload_document(); 
            }
        });
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
            alert_sukses(cari_data('form_table',false,'get_data_document'));
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
        var target = [0, 2];
    } else {
        var target = [0, 4];
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
    Swal.fire({
        title: 'Confirmation',
        html: 'Are you sure delete document ?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes, do it!',
        cancelButtonText: 'No, cancel!'
        }).then((result) => {
        if (result.isConfirmed) {
            loading('modal_loading', true);

            var formdata  = new FormData();
            formdata.append('id',id);
            var url = baseurl + "index.php/createska/delete_document/"+Math.random();
            var data = post_ajax(url,formdata);
            var respondData = JSON.parse(data);
            setTimeout(function(){
                loading('modal_loading', false);

                if (respondData == 1)  {
                    alert_sukses(show_data_document(header_id, 'Views Data','1','get_view_document'));
                } else {
                    alert_error('Failed to delete documents');
                }
            }, 3000);
        }
    });
}
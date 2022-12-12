$(document).ready(function() {
    if($('#tipe').val() == '0') {
        new Choices('#client_name',{removeItemButton: true,});
        new Choices('#npwp',{removeItemButton: true,});
        new Choices('#nib',{removeItemButton: true,});
    }

    new Choices('#client_partner',{removeItemButton: true,});
    new Choices('#month_enabled',{removeItemButton: true,shouldSort: false,});
    // new Choices('#paid_status',{removeItemButton: true,});
    new Choices('#years_multiple',{removeItemButton: true,});
    new Choices('#years_single',{shouldSort: true,});
    new Choices('#show_table', {shouldSort: true});
    new Choices('#month_disabled', {addItems: false,removeItems: false,}).disable();
});

function change_month_years() {
    if($('#show_table').val() == 1) {
        $('#div_years_multiple').hide();
        $('#div_years_single').show();
        
        $('#div_month_disabled').hide();
        $('#div_month_enabled').show();
    } else {
        $('#div_years_single').hide();
        $('#div_years_multiple').show();

        $('#div_month_enabled').hide();
        $('#div_month_disabled').show();
    }

    dinamis_column();
}

function dinamis_column() {
    var month = '';
    var years = '';

    if($('#show_table').val() == 1) {
        month = $('#month_enabled').val();
        years = $('#years_single').val();
    } else {
        month = $('#month_disabled').val();
        years = $('#years_multiple').val();
    }

    if($.isArray(month)) {
        if(month.length == 0) {
            month = arr_month;
        }
    }

    if($.isArray(years)) {
        if(years.length == 0) {
            years = arr_years;
        }
    } else {
        years = [years];
    }

    month.sort(function(a, b){
        return parseInt(a)- parseInt(b);
    });

    years.sort(function(a, b){
        return parseInt(a)- parseInt(b);
    });

    if ($.fn.DataTable.isDataTable("#table_data")) {
        $("#table_data").DataTable().destroy();
    }
    
    $('#table_data thead tr').remove();
    $('#table_data tbody tr').remove();
    
    html = '<tr valign="middle">';
    html1 = '<tr valign="middle">';
    html += '<th class="text-center" width="5%" rowspan="2">No</th>';
    if($('#tipe').val() == '0') {
        html += '<th class="text-center" rowspan="2">Client Name</th>';
    }
    html += '<th class="text-center" rowspan="2">Partner Name</th>';
    $.each(years, function( index, value ) {
        html += '<th class="text-center" colspan="'+month.length+'">'+value+'</th>';

        $.each(month, function( index, value1 ) {
            if($.isNumeric(value1)) {
                value1 = arr_month[value1 - 1];
            }

            html1 += '<th class="text-center">'+value1+'</th>';
        });

        if(years.length > 1) {
            html += '<th class="text-center" rowspan="2">Sub Total</th>';
        }
    });
    html += '<th class="text-center" rowspan="2">Total</th>';
    // html += '<th class="text-center" rowspan="2">Billing</th>';
    html += '<th class="text-center" rowspan="2">Action</th>';
    html += '</tr>';
    html1 += '</tr>';

    html += html1;

    $('#table_data thead').append(html);
}

function cari_data(form, func_name) {
    if ($.fn.DataTable.isDataTable("#table_data")) {
        $("#table_data").DataTable().destroy();
    }  

    if(form == 'form_rekap_client') {
        var target = [1,2];
    } else {
        var target = [1];
    }

    $("#table_data").DataTable({
        paging: false,
        searching: false
    });

    var url = baseurl + "index.php/rekap/"+func_name+"/"+Math.random();
    var columnDefs = [
        {  
            targets: target,
            orderable: true,
            className: "text-left",
        },
        {
            targets: '_all',
            className: "text-center"
        },
    ];

    var buttons = [
        {
                extend: "excel",
                text: "Export to Excel",
                titleAttr: "Excel",
                action: exp_excel,
        }
    ];

    get_data(form,url,false,tableid = "table_data",columnDefs,buttons);
}

function view_detail(client_id, partner_id) {
    if($('#show_table').val() == 1) {
        month = $('#month_enabled').val();
        years = $('#years_single').val();
    } else {
        month = $('#month_disabled').val();
        years = $('#years_multiple').val();
    }

    if($.isArray(month)) {
        if(month.length == 0) {
            month = arr_month;
        }
    }

    if($.isArray(years)) {
        if(years.length == 0) {
            years = arr_years;
        }
    } else {
        years = [years];
    }

    month.sort(function(a, b){
        return parseInt(a)- parseInt(b);
    });

    years.sort(function(a, b){
        return parseInt(a)- parseInt(b);
    });

    var years_tracking = [];
    var month_tracking = [];
    $.each(years, function( index, value ) {
        years_tracking.push(value);
    });

    $.each(month, function( index, value1 ) {
        index_month = index;
        if($.isNumeric(value1)) {
            index_month = value1;
        } else {
            index_month = index + 1;
        }
        month_tracking.push(index_month)
    });

    var implode_years = years_tracking.join(',');
    var implode_month = month_tracking.join(',');

    $('#client_id').val(client_id);
    $('#partner_id').val(partner_id);
    $('#month_tracking').val(implode_month);
    $('#years_tracking').val(implode_years);

    if($('#tipe').val() == '0') {
        var namaForm = 'form_rekap_client';
    } else {
        var namaForm = 'form_rekap_partner';
    }

    var cb = eval('document.'+namaForm);

    var url = baseurl + 'index.php/tracking';
    cb.action = url;
    cb.method = "post";
    cb.submit();
    cb.action = "javascript:void(0)";
}

function exp_excel() {
    if($('#tipe').val() == '0') {
        var namaForm = 'form_rekap_client';
    } else {
        var namaForm = 'form_rekap_partner';
    }

    showLoading(true);
    var formdata = JSON.stringify($("#"+namaForm).serializeArray());
    $.ajax({
        type: 'POST',
        url: baseurl + "index.php/rekap/exp_excel/"+Math.random(),
        data: {formdata},
        dataType: 'json'
    }).done(function(data){
        setTimeout(function() {
            showLoading(false);
            var $a = $("<a>");
            $a.attr("href",data.file);
            $("body").append($a);
            $a.attr("download","file.xls");
            $a[0].click();
            $a.remove();
        }, 1500);
    });
}
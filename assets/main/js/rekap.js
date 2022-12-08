$(document).ready(function() {
    new Choices('#client_partner',{removeItemButton: true,});
    new Choices('#client_name',{removeItemButton: true,});
    new Choices('#npwp',{removeItemButton: true,});
    new Choices('#nib',{removeItemButton: true,});
    new Choices('#month_enabled',{removeItemButton: true,});
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

    if ($.fn.DataTable.isDataTable("#table_data")) {
        $("#table_data").DataTable().destroy();
    }
    
    $('#table_data thead tr').remove();
    $('#table_data tbody tr').remove();
    
    html = '<tr valign="top">';
    html1 = '<tr valign="top">';
    html += '<th class="text-center" width="5%" rowspan="2">No</th>';
    html += '<th class="text-center" rowspan="2">Client Name</th>';
    $.each(years, function( index, value ) {
        html += '<th class="text-center" colspan="'+month.length+'">'+value+'</th>';

        $.each(month, function( index, value1 ) {
            if($.isNumeric(value1)) {
                value1 = arr_month[value1 - 1];
            }

            html1 += '<th class="text-center">'+value1+'</th>';
        });
    });
    html += '<th class="text-center" rowspan="2">Total Aju Number</th>';
    html += '<th class="text-center" rowspan="2">Total Billing</th>';
    html += '<th class="text-center" rowspan="2">Action</th>';
    html += '</tr>';
    html1 += '</tr>';

    html += html1;

    $('#table_data thead').append(html);
}
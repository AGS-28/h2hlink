/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Dashboard Init Js File
*/
$(document).ready(function() {
    loading('div_transaction', true);
    loading('div_pengajuan', true);
    loading('div_penerbitan', true);

    get_data_dashboard('get_data_transaction','div_transaction');
    get_data_dashboard('get_data_pengajuan','div_pengajuan');
    get_data_dashboard('get_data_total_penerbitan','div_penerbitan');
});

// get colors array from the string
function getChartColorsArray(chartId) {
    var colors = $(chartId).attr('data-colors');
    var colors = JSON.parse(colors);
    return colors.map(function(value){
        var newValue = value.replace(' ', '');
        if(newValue.indexOf('--') != -1) {
            var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
            if(color) return color;
        } else {
            return newValue;
        }
    })
}

// mini-1
var minichart1Colors = getChartColorsArray("#mini-chart1");
var options = {
    series: [{
        data: [2, 10, 18, 22, 36, 15, 47, 75, 65, 19, 14, 2, 47, 42, 15, ]
    }],
    chart: {
        type: 'line',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    colors: minichart1Colors,
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

// Box
for (let index = 1; index <= 4; index++) {
    new ApexCharts(document.querySelector("#mini-chart"+index), options).render();
}

// Hit Method
var jml_end_point = each_arr($('#jml_end_point').val());
var urai_end_point = each_arr($('#urai_end_point').val());

var piechartColors = getChartColorsArray("#wallet-balance");
var options = {
    series: jml_end_point,
    chart: {
        width: 227,
        height: 227,
        type: 'pie',
    },
    labels: urai_end_point,
    colors: piechartColors,
    stroke: {
        width: 0,
    },
    legend: {
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
        }
    }]
};
var chart = new ApexCharts(document.querySelector("#wallet-balance"), options);
chart.render();

// Draft Status
var jml_draft_status = each_arr($('#jml_draft_status').val());
var urai_draft_status = each_arr($('#urai_draft_status').val());

var piechartColors = getChartColorsArray("#wallet-balance1");
var options = {
    series: jml_draft_status,
    chart: {
        width: 227,
        height: 227,
        type: 'pie',
    },
    labels: urai_draft_status,
    colors: piechartColors,
    stroke: {
        width: 0,
    },
    legend: {
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
        }
    }]
};
var chart = new ApexCharts(document.querySelector("#wallet-balance1"), options);
chart.render();

function each_arr(arr) {
    var arr_value = [];
    var value = arr.split(',');

    value.forEach(function(value, index) {
        if(value != '') {
            if($.isNumeric(value)){
                arr_value.push(parseInt(value));
            } else {
                arr_value.push(value);
            }
        }
    })
    
    return arr_value;
}

// function show_modal_dashboard(id, tipe) {
//     loading('modal_body', true);
//     $('#exampleModalScrollable').modal('toggle');

//     var url = baseurl + "index.php/home/get_data_modal_dashboard/"+Math.random();
//     $.post( url, { id: id, tipe: tipe }, function( data ) {
//         loading('modal_body', false);
//         $('#modal_body').html( data );
//     });
// }
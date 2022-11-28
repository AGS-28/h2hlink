$(document).ready(function() {

    //choiche 
    var multipleCancelButton = new Choices('#status',{removeItemButton: true,});
    get_data_all();
        $( "#add-item" ).click(function() {
            add_role();
        });
    
});

function get_data_all() {
    var url         = baseurl + "index.php/cms/get_data_role/"+Math.random();
    var form_search = 'form-search';
    var tableid     = 'table_data';
    var columnDefs  =   [ 
                            {  
                                width: "5%",
                                targets: [0,3],
                                orderable: true,
                                className: "text-center",
                            },
                            {  
                                width: "40%",
                                targets: [1,2],
                                orderable: true,
                                className: "text-center",
                            },
                            {
                                targets: '_all',
                                className: "text-left"
                            },
                        ];
    get_data(form_search,url,validate = false,tableid = "table_data",columnDefs);
}

function add_role() {
    $('#modal_add').modal('toggle');
}

function additem(form) 
{
    // alert($('#status').val());
    var url = siteurl + '/cms/add_item/'+Math.random();
    var formdata = new FormData();
    formdata.append('rolename',$('#rolename').val());
    formdata.append('status',$('#status').val());

    var data = post_ajax(url,formdata);
    var respondData = JSON.parse(data);
    if (respondData == 1) 
    {
        alert_sukses("modal_add",close_modal);
        get_data_all();
    }
    else
    {
        alert_error("Failed at adding item");
    }
}

function edit(id) 
{
    
}
function hapus(id) {


    var url = siteurl + '/cms/hapus_role/'+Math.random();
    var postdata = new FormData();
    postdata.append('id',id);
    var data = post_ajax(url,postdata);
    var respondData = JSON.parse(data);

    if (respondData == 1) 
    {

        var url         = baseurl + "index.php/cms/get_data_role/"+Math.random();
        var form_search = 'form-search';
        var tableid     = 'table_data';
        var columnDefs  =   [ 
                                {  
                                    width: "5%",
                                    targets: [2],
                                    orderable: true,
                                    className: "text-center",
                                },
                                {  
                                    width: "40%",
                                    targets: [0,1],
                                    orderable: true,
                                    className: "text-center",
                                },
                                {
                                    targets: '_all',
                                    className: "text-left"
                                },
                            ];
        alert_sukses(get_data(form_search,url,validate = false,tableid = "table_data",columnDefs));
    }
    else
    {
        alert_error("Gagal Delete");
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

    
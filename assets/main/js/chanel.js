const statusChoichesChanel = new Choices('#status', {removeItems: true,removeItemButton: true});
$(document).ready(function() {
    statusChoichesChanel.setChoices(
        [
          { value: 'f', label: 'Not Active'},
          { value: 't', label: 'Active ' },
        ],
        'value',
        'label',
        true,
      );
    get_data_all();
        $( "#add-item" ).click(function() {
            add_role();
        });
    
});

function get_data_all() {
    var url         = baseurl + "index.php/cms/get_data_chanel/"+Math.random();
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
    $('#form-add-item').trigger("reset");
    statusChoichesChanel.setChoices(
        [
          { value: 'f', label: 'Not Active'},
          { value: 't', label: 'Active ' },
        ],
        'value',
        'label',
        true,
      );
    $('#modal_add').modal('toggle');
}

function additem(form) 
{
    var url = siteurl + '/cms/add_item_chanel/'+Math.random();
    add(form,url,true);
}

function edit(id) 
{
    var url = siteurl + '/cms/get_edit_chanel/'+Math.random();
    var postdata = new FormData();
    postdata.append('id',id);
    var data = post_ajax(url,postdata);
    var respondData = JSON.parse(data);
    var thisdata = respondData.thisdata;
    // alert(thisdata.is_active);

    if (respondData.status == 1) {
        $('#name').val(thisdata.name);
        $('#idnya').val(thisdata.id);
        $('#updated').val(1);
        statusChoichesChanel.setChoiceByValue(thisdata.is_active);
        $('#modal_add').modal('toggle');
    }
    else
    {
        alert_error("General Erors...!");
    }

}
function hapus(id) {


    var url = siteurl + '/cms/hapus_chanel/'+Math.random();
    var postdata = new FormData();
    postdata.append('id',id);
    var data = post_ajax(url,postdata);
    var respondData = JSON.parse(data);

    if (respondData == 1) 
    {
        alert_sukses('',get_data_all);
    }
    else
    {
        alert_error("Gagal Delete");
    }

}


    
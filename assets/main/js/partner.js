const statusChoichesPartner = new Choices('#status', {removeItems: true,removeItemButton: true});
const methodChoichesPartner = new Choices('#method', {removeItems: true,removeItemButton: true});
const messageTypePartner = new Choices('#message_type', {removeItems: true,removeItemButton: true});
var tablerowmethod = 0;
$(document).ready(function() {
    statusChoichesPartner.setChoices(
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
    var url         = baseurl + "index.php/cms/get_data_partner/"+Math.random();
    var form_search = 'form-search';
    var tableid     = 'table_data';
    var columnDefs  =   [ 
                            {  
                                width: "5%",
                                targets: [0,4],
                                orderable: true,
                                className: "text-center",
                            },
                            {  
                                width: "40%",
                                targets: [1,3],
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
    statusChoichesPartner.setChoices(
        [
          { value: 'f', label: 'Not Active'},
          { value: 't', label: 'Active ' },
        ],
        'value',
        'label',
        true,
      );
    methodChoichesPartner.setChoices(
        [
          { value: 'post', label: 'POST'},
          { value: 'get', label: 'GET ' },
          { value: 'file', label: 'FILES ' },
        ],
        'value',
        'label',
        true,
      );
    var element = getselectmessagetype();
    messageTypePartner.setChoices(element,'value','label',true,);
    $('#modal_add').modal('toggle');
}

function additem(form) 
{
    var url = siteurl + '/cms/add_item_partner/'+Math.random();
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

function add_method() {
    var methodname          = $('#method-name').val();
    var endpoint            = $('#endpoint').val();
    var messagetype         = $('#message_type').val();
    var messagetypelabel    = $('#message_type').text();
    var status              = $('#status').val();
    var statuslabel         = $('#status').text();
    var method              = $('#method').val();
    var methodlabel         = $('#method').text();
    
    var addrowtable         = '';

    addrowtable += '<tr id = "row_'+tablerowmethod+'">';
    addrowtable += '<td>'+methodname+'<input type="hidden" name="arrmethodname[]" value="'+methodname+'"></td>';
    addrowtable += '<td>'+methodlabel+'<input type="hidden" name="arrType[]" value="'+method+'"></td>';
    addrowtable += '<td>'+endpoint+'<input type="hidden" name="arrendpoint[]" value="'+endpoint+'"><input type="hidden" name="arrstatus[]" value="'+status+'"></td>';
    addrowtable += '<td>'+messagetypelabel+'<input type="hidden" name="arrmessageType[]" value="'+messagetype+'"></td>';
    addrowtable += '<td><button type="button" class="btn btn-danger waves-effect btn-label btn-sm waves-light" onclick="deleteRow('+tablerowmethod+')"><i class="bx bxs-trash label-icon"></i> Delete</button></td>';
    tablerowmethod = (tablerowmethod + 1);
    $('#addrowtableMethods').append(addrowtable);
}

function deleteRow(rowid) {
    $('#row_'+rowid).remove();
}
    
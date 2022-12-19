const packageChoiches = new Choices('#package_type', {removeItems: true,removeItemButton: true});
const ChoichesPartner = new Choices('#partner-name', {removeItems: true,removeItemButton: true});

var tablerowmethod  = 0;
var tablerowpartner = 0;
$(document).ready(function() {
    packageChoiches.setChoices(
        [
          { value: '1', label: 'Basic'},
          { value: '2', label: 'Pro' },
          { value: '3', label: 'Advance' },
        ],
        'value',
        'label',
        true,
      );
    get_data_all();
    $( "#add-item" ).click(function() {
        add_role();
    });

    $('#view-wizard').bootstrapWizard({onTabShow: function(tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index+1;
        var $percent = ($current/$total) * 100;
        $('#view-wizard').find('.progress-bar').css({width:$percent+'%'});
    }});

    $( "#btn-add-partner" ).click(function() {
        add_partner();
      });

    
});

function get_data_all() {
    var url         = baseurl + "index.php/cms/get_data_client/"+Math.random();
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
                                className: "text-left",
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
    packageChoiches.setChoices(
        [
            { value: '1', label: 'Basic'},
            { value: '2', label: 'Pro' },
            { value: '3', label: 'Advance' },
        ],
        'value',
        'label',
        true,
      );
    
    var element = getselectpartner();
    ChoichesPartner.setChoices(element,'value','label',true,);
    $('#modal_add').modal('toggle');
}

function additem(form) 
{
    var url = siteurl + '/cms/add_item_client/'+Math.random();
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

function view(id) 
{
    // $('#modal_view').modal('toggle');
    
    var url         = siteurl + '/cms/get_view_client/'+Math.random();
    var postdata    = new FormData();
    
    postdata.append('id',id);

    var data            = post_ajax(url,postdata);
    var respondData     = JSON.parse(data);
    var clientProfile   = respondData.clientProfile;
    var rowchanel       = respondData.rowChanel;
    var rowendpoint     = respondData.rowEndpoint;

    if (respondData.status == 1) {
        $('#view_nib').val(clientProfile.nib);
        $('#view_npwp').val(clientProfile.npwp);
        $('#view_client_name').val(clientProfile.client_name);
        $('#view_address').val(clientProfile.address);
        $('#view_tlp').val(clientProfile.telephone_no);
        $('#view_hp').val(clientProfile.handphone_no);
        $('#view_authors').val(clientProfile.authority_name);
        $('#view_user_endpoint').val(clientProfile.user_endpoint);
        $('#view_package_type').val(clientProfile.package_name);
        $('#view_startdate').val(clientProfile.validate);
        $('#view_enddate').val(clientProfile.valid_until);
        $('#view_email').val(clientProfile.email);

        $('#viewTabelChanel').empty();
        $('#viewTabelChanel').append(rowchanel);
        
        $('#viewtableEndpoint').empty();
        $('#viewtableEndpoint').append(rowendpoint);
        
        $('#modal_view').modal('toggle');
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
function add_partner() {
    var arrID = [];
    if ($('#arrcekpartner').val() !== '')
    arrID = $('#arrcekpartner').val().split(",");

    if (arrID.indexOf($('#partner-name').val()) === -1) {
        var partner_name        = $('#partner-name').text();
        var partner_id          = $('#partner-name').val();
        var desc_partner        = $('#desc_partner').val();
        var xapikey             = $('#xapikey').val();
        var clientkey           = $('#clientkey').val();
        var addrowtable         = '';

        arrID.push($('#partner-name').val());
        $('#arrcekpartner').val(arrID.join());

        addrowtable += '<tr id = "row_'+tablerowpartner+'">';
        addrowtable += '<td>'+partner_name+'<input type="hidden" name="arrpartnername[]" value="'+partner_name+'"></td>';
        addrowtable += '<td>'+desc_partner+'<input type="hidden" name="arrdescpartner[]" value="'+desc_partner+'"></td>';
        addrowtable += '<td>'+xapikey+'<input type="hidden" name="arrxapikey[]" value="'+xapikey+'"><input type="hidden" name="arridpartner[]" value="'+partner_id+'"></td>';
        addrowtable += '<td>'+clientkey+'<input type="hidden" name="arrclientkey[]" value="'+clientkey+'">';
        addrowtable += '<td><button type="button" class="btn btn-danger waves-effect btn-label btn-sm waves-light" onclick="deleteRow('+tablerowpartner+')"><i class="bx bxs-trash label-icon"></i> Delete</button></td>';
        tablerowpartner = (tablerowpartner + 1);
        $('#addrowtablePartner').append(addrowtable);

        addrowmethod(arrID.join());
        ChoichesPartner.setChoiceByValue('');
        $('#desc_partner').val('');
        $('#xapikey').val('');
        $('#clientkey').val('');

    }
    else
    {
        alert_error('Partner has been added !!');
    }
}

function deleteRow(rowid) {
    var strhs = $('#arrcekpartner').val();
    $('#arrcekpartner').val('');
    var arrhs = strhs.split(",");
    arrhs.splice(rowid,1);
    $('#arrcekpartner').val(arrhs.join());
    $('#row_'+rowid).remove();
    console.log(arrhs.join());
    addrowmethod(arrhs.join());
}

function getselectpartner(id='') {
    var postdata    = new FormData();
    var url         = siteurl+'/cms/getselectpartner';
    postdata.append('id',id);
    
    var data = post_ajax(url,postdata);
    var respondData = JSON.parse(data);
    if (respondData.status == 1) {
        return respondData.thisdata;
    }
    else
    {
        return "[{ value: '', label: 'Empty'}]";
    }
}

function changepartner(val) {
    // alert(val);
    var postdata    = new FormData();
    var url         = siteurl+'/cms/getallpartner';
    postdata.append('id',val);
    
    var data = post_ajax(url,postdata);
    var respondData = JSON.parse(data);
    if (respondData.status == 1) {
        $('#desc_partner').val(respondData.thisdata.desc_partner);
    }
    else
    {
        alert_error("General Errors..");
    }
}

function addrowmethod(val) {
    var postdata    = new FormData();
    var url         = siteurl+'/cms/getaddrowmethod';
    postdata.append('id',val);
    
    var data = post_ajax(url,postdata);
    var respondData = JSON.parse(data);
    if (respondData.status == 1) {
        $('#addrowtableMethods').empty();
        $('#addrowtableMethods').append(respondData.thisdata);
    }
    else
    {
        alert_error('General Errors..!');
    }
}

function getchanel(params) {
    if (params == 0) 
    {
        $('#addrowtableMethods').empty();
    }
    else
    {
        var postdata    = new FormData();
        var url         = siteurl+'/cms/getchanelpackage';
        postdata.append('id',params);
        
        var data = post_ajax(url,postdata);
        var respondData = JSON.parse(data);

        if (respondData.status == 1) {
            $('#addrowtableChanel').empty();
            $('#addrowtableChanel').append(respondData.thisdata);
            
        }
        else
        {
            alert_error('General Errors..!');
        }
    }
}
    
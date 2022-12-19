const statusChoiches = new Choices('#status', {removeItems: true,removeItemButton: true});
const usertypeChoiches = new Choices('#groupid', {removeItems: true,removeItemButton: true});
const clientsChoiches = new Choices('#clientid', {removeItems: true,removeItemButton: true});
$(document).ready(function() {
    statusChoiches.setChoices(
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
    var url         = baseurl + "index.php/user/get_data_user/"+Math.random();
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
                                width: "20%",
                                targets: [1,2,3],
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
    $('.inputclient').css('display','none');
    $('#clientid').css('display','none');
    $( "#username" ).prop( "disabled", false );
    statusChoiches.setChoices(
        [
          { value: 'f', label: 'Not Active'},
          { value: 't', label: 'Active ' },
        ],
        'value',
        'label',
        true,
      );
    var element = getselectgroup();
    usertypeChoiches.setChoices(element,'value','label',true,);
    var element = getselectclient();
    clientsChoiches.setChoices(element,'value','label',true,);
    $('#modal_add').modal('toggle');
}

function additem(form) 
{
    $( "#username" ).prop( "disabled", false );
    var url = siteurl + '/user/add_user/'+Math.random();
    addUsers(form,url);
    $( "#username" ).prop( "disabled", true );
}

function edit(id) 
{
    var url = siteurl + '/user/get_edit_user/'+Math.random();
    var postdata = new FormData();
    postdata.append('id',id);
    var data = post_ajax(url,postdata);
    var respondData = JSON.parse(data);
    var thisdata = respondData.thisdata;
    // alert(thisdata.is_active);

    if (respondData.status == 1) {
        $('#form-add-item').trigger("reset");
        $('.inputclient').css('display','none');
        $('#clientid').css('display','none');
        statusChoiches.setChoices(
            [
            { value: 'f', label: 'Not Active'},
            { value: 't', label: 'Active ' },
            ],
            'value',
            'label',
            true,
        );
        var element = getselectgroup();
        usertypeChoiches.setChoices(element,'value','label',true,);
        var element = getselectclient();
        clientsChoiches.setChoices(element,'value','label',true,);
        
        //set disable
        $( "#username" ).prop( "disabled", true );
        $('#username').val(thisdata.username);
        $('#email').val(thisdata.email);
        $('#name').val(thisdata.name);
        $('#hp').val(thisdata.phone_number);
        $('#address').val(thisdata.address);

        $('#idnya').val(thisdata.id_user);
        $('#updated').val(1);
        statusChoiches.setChoiceByValue(thisdata.is_active);
        if (thisdata.id_groups == 3) 
        {
            usertypeChoiches.setChoiceByValue(thisdata.id_groups);
            $('.inputclient').css('display','block');
            $('#clientid').css('display','block');
        }
        clientsChoiches.setChoiceByValue(thisdata.client_id);
        $('#modal_add').modal('toggle');
    }
    else
    {
        alert_error("General Erors...!");
    }

}
function hapus(id) {


    var url = siteurl + '/cms/hapus_role/'+Math.random();
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

function getselectgroup(id='') {
    var postdata    = new FormData();
    var url         = siteurl+'/user/getselectgroup';
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
function getselectclient(id='') {
    var postdata    = new FormData();
    var url         = siteurl+'/user/getselectclient';
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

function chekrole(val) {
    if (val == 3) 
    {
        $('.inputclient').css('display','block');
        $('#clientid').css('display','block');
    }
    else
    {
        $('.inputclient').css('display','none');
        $('#clientid').css('display','none');
    }
}

$("#password-addon").on('click', function () {
	if ($(this).siblings('input').length > 0) {
		$(this).siblings('input').attr('type') == "password" ? $(this).siblings('input').attr('type', 'input') : $(this).siblings('input').attr('type', 'password');
	}
});
$("#password-addon2").on('click', function () {
	if ($(this).siblings('input').length > 0) {
		$(this).siblings('input').attr('type') == "password" ? $(this).siblings('input').attr('type', 'input') : $(this).siblings('input').attr('type', 'password');
	}
});


    
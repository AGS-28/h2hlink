
$("#btn-login").on('click', function () {
	login();
})

function login() {
    // alert('tet');
    // var formdata = JSON.stringify($("#frm-data").serializeArray());
    var pass = $('#password').val();
    cript(pass);

    var postData = new FormData();
    postData.append("username", $("#username").val());
    postData.append("password", $("#sendpassword").val());
    var url = baseurl + "index.php/auth/login";
    
    $.ajax({
        url: url,
        type: "POST",
        dataType: "text",
        processData: false,
        contentType: false,
        async: false,
        data: postData,
    })
    .done(function(resp) {
        data = resp;
    })
    .fail(function() {
        data = "Fail";
    });


    // console.log(statusResp.table);
    var ret = JSON.parse(data);
    if (ret.status == 1) 
    {
        var timerInterval;
        Swal.fire({
        title: 'Login Berhasil',
        html: 'I will close in <b></b> seconds.',
        timer: 2000,
        icon: 'success',
        timerProgressBar: true,
        didOpen:function () {
            Swal.showLoading()
            timerInterval = setInterval(function() {
            var content = Swal.getHtmlContainer()
            if (content) {
                var b = content.querySelector('b')
                if (b) {
                b.textContent = Swal.getTimerLeft()
                }
            }
            }, 100)
        },
        onClose: function () {
            clearInterval(timerInterval)
        }
        }).then(function (result) {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            var url = baseurl + "index.php/home";
            window.location.replace(url);
        }
        })


        
    }
    else
    { 
        Swal.fire({
            title: ret.label,
            text: ret.txt,
            icon: 'error',
            confirmButtonColor: '#5156be',
          })
    }
    
}

function lupa_password() {
    
    var postData = new FormData();
    postData.append("email", $("#email").val());
    var url = baseurl + "index.php/auth/send_recover_pass";
    $('#btn-reset').css('display','none');
    $('#loading').css('display','block');
    // const data = [];
    setTimeout(function() {
        $.ajax({
            url: url,
            type: "POST",
            dataType: "text",
            processData: false,
            contentType: false,
            async: false,
            data: postData,
        })
        .done(function(resp) {
            data = resp;
        })
        .fail(function() {
            data = "Fail";
        });
        

        var ret = JSON.parse(data);
        if (ret.status == 1) 
        {
            var timerInterval;
            Swal.fire({
            title: 'Berhasil Reset Password',
            html: 'Link reset password telah dikirim ke '+ ret.to +', Pesan ini akan otomatis tertutup dalam <b></b> detik.',
            timer: 5000,
            icon: 'success',
            timerProgressBar: true,
            didOpen:function () {
                Swal.showLoading()
                timerInterval = setInterval(function() {
                var content = Swal.getHtmlContainer()
                if (content) {
                    var b = content.querySelector('b')
                    if (b) {
                    b.textContent = Swal.getTimerLeft()
                    }
                }
                }, 100)
            },
            onClose: function () {
                clearInterval(timerInterval)
            }
            }).then(function (result) {
            /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    var url = baseurl + "index.php/auth";
                    window.location.replace(url);
                }
            });
        }
        else
        { 
            Swal.fire({
                title: "Gagal Reset Password",
                text: "Gagal "+ret.to,
                icon: 'error',
                confirmButtonColor: '#5156be',
                })
        }
        $('#btn-reset').css('display','block');
        $('#loading').css('display','none');
      }, 3000);
      
    
}

function cript(password) {
    var url = baseurl + "index.php/auth/crypt";
    var postData = new FormData();
    var data = false;

    postData.append("password", $("#password").val());
    $.ajax({
        url: url,
        type: "POST",
        dataType: "text",
        processData: false,
        contentType: false,
        async: false,
        data: postData,
    })
    .done(function(resp) {
        data = resp;
    })
    .fail(function() {
        data = "Fail";
    });

    var ret = JSON.parse(data);
    $("#sendpassword").val(ret);
}

$("#password-addon2").on('click', function () {
	if ($(this).siblings('input').length > 0) {
		$(this).siblings('input').attr('type') == "password" ? $(this).siblings('input').attr('type', 'input') : $(this).siblings('input').attr('type', 'password');
	}
});
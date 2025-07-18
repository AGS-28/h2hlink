function add(form,url,validate=false) 
{
    var errorString = "Please complete the following data : <br\>";
    var panjangAwal = errorString.length;

    $('#'+form).find('input[type="text"],select,textarea,input[type="file"]').each(function() {
        if(validate) {
            if(this.value == "" && this.title != '') {
                errorString += "- "+this.title+"  <br\>";
            }
        }  
    });

    var panjangAkhir = errorString.length;
    if (panjangAwal == panjangAkhir) {

        var formdata = JSON.stringify($("#"+form).serializeArray());
        var postdata = new FormData();
        postdata.append('postdata',formdata);

        var data = post_ajax(url,postdata);
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
    } else {
        alert_error(errorString);
    }
}
function addUsers(form,url,validate=false) 
{
    var errorString = "Please complete the following data : <br\>";
    var panjangAwal = errorString.length;

    $('#'+form).find('input[type="text"],select,textarea,input[type="file"]').each(function() {
        if(validate) {
            if(this.value == "" && this.title != '') {
                errorString += "- "+this.title+"  <br\>";
            }
        }  
    });

    var panjangAkhir = errorString.length;
    if (panjangAwal == panjangAkhir) {

        var formdata = JSON.stringify($("#"+form).serializeArray());
        var postdata = new FormData();
        postdata.append('postdata',formdata);

        var data = post_ajax(url,postdata);
        var respondData = JSON.parse(data);
        if (respondData.status == 1) 
        {
            alert_sukses("modal_add",close_modal);
            get_data_all();
        }
        else
        {
            alert_error(respondData.errorText);
        }
    } else {
        alert_error(errorString);
    }
}

function alert_sukses(iddata="",_callback = false,tittle = "Success...") {
    var timerInterval;
        Swal.fire({
        title: tittle,
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
            if (_callback) {
                _callback(iddata)
            }
        });
}

function confirm_delete(content='Anda yakin melakukan aksi ini ?',_callback,iddata='',param1='',param2='',title='Konfirmasi',type='orange')
{
   swal.fire({
         title: content,
         text: "Klik Hapus jika yakin!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonText: "Hapus",
         cancelButtonText: "Batal",
      }).then(function(result){
        if (result.dismiss !== Swal.DismissReason.cancel) 
        {
            _callback(iddata,param1,param2)
        }
      });
}

function confirm_kirim(func,param = '',content='Are you sure submit action ?',title='Confirmation',type='orange')
{
    Swal.fire({
        title: title,
        text: content,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, do it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success mt-2',
        cancelButtonClass: 'btn btn-danger ms-2 mt-2',
        buttonsStyling: false
    }).then(function (result) {
        if (result.dismiss !== Swal.DismissReason.cancel) 
        {
           func(param);
        } else if (result.dismiss === Swal.DismissReason.cancel) 
        {
            var timerInterval;
            Swal.fire({
            title: "Cancelled",
            html: 'I will close in <b></b> seconds.',
            timer: 1000,
            icon: 'error',
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
            });
        }
    });
}

function alert_error(tittle = "Warning!", icon = "warning" , button = "Close",errorString = "") {
    swal.fire({
        title: tittle,
        html: errorString,
        icon: icon,
        button: button,
    });
}

function get_data(form,url,validate = false,tableid = "table_data",columnDefs = [{}],buttons = []) {
    // console.log(form, url, tableid);
    var errorString = "Please complete the following data : <br\>";
    var panjangAwal = errorString.length;

    $('#'+form).find('input[type="text"],select,textarea,input[type="file"]').each(function() {
        if(validate) {
            if(this.value == "" && this.title != '') {
                errorString += "- "+this.title+"  <br\>";
            }
        }  
    });

    var panjangAkhir = errorString.length;
    panjangAkhir = errorString.length;
    if (panjangAwal == panjangAkhir) {
        if ($.fn.DataTable.isDataTable("#" + tableid)) {
            $("#" + tableid).DataTable().destroy();
        }

        var formdata = JSON.stringify($("#"+form).serializeArray());
        $("#" + tableid).DataTable({
            destroy: true,
            // autoWidth: true,
            processing: true,
            serverSide: true,
            responsive: false,
            // select: true,
            searching: false,
            // order: [0],
            dom: 'Bfrtip',
            buttons: buttons,
            ajax: {
                url: url,
                type: "POST",
                data: {
                    formdata
                },
            },
            oLanguage: {
                sProcessing: '<div><div class="spinner-grow text-primary m-1" role="status">'+
                                    '<span class="sr-only">Loading...</span>'+
                                '</div>'+
                                '<div class="spinner-grow text-secondary m-1" role="status">'+
                                    '<span class="sr-only">Loading...</span>'+
                                '</div>'+
                                '<div class="spinner-grow text-success m-1" role="status">'+
                                    '<span class="sr-only">Loading...</span>'+
                                '</div>'+
                                '<div class="spinner-grow text-info m-1" role="status">'+
                                    '<span class="sr-only">Loading...</span>'+
                                '</div>'+
                            '</div>'
            },
            drawCallback: function() {
                $('[data-toggle="popover"]').popover({
                    html: true,
                    content: function() {
                        return $("#primary-popover-content").html();
                    },
                });
            },
            columnDefs: columnDefs,
        });
    } else {
        alert_error(errorString);
    }

}

function loading(id, stat) {
    var loading = '<div><div class="spinner-grow text-primary m-1" role="status">'+
                                    '<span class="sr-only">Loading...</span>'+
                                '</div>'+
                                '<div class="spinner-grow text-secondary m-1" role="status">'+
                                    '<span class="sr-only">Loading...</span>'+
                                '</div>'+
                                '<div class="spinner-grow text-success m-1" role="status">'+
                                    '<span class="sr-only">Loading...</span>'+
                                '</div>'+
                                '<div class="spinner-grow text-info m-1" role="status">'+
                                    '<span class="sr-only">Loading...</span>'+
                                '</div>'+
                            '</div>';
    if(stat) {
        $('#'+id).html(loading);
    } else {
        $('#'+id).html('');
    }
}

function close_modal(id) {
    $("#"+ id).modal('hide');
}


function post_ajax(url, postdata) {
    var result = false;
    $.ajax({
            url: url,
            type: "POST",
            dataType: "text",
            processData: false,
            contentType: false,
            async: false,
            data: postdata,
        })
        .done(function(resp) {
            result = resp;
        })
        .fail(function() {
            result = "Fail";
        });
    return result;
}

function showLoading(stat) {
    if(stat) {
        var val = 'show';
    } else {
        var val = 'hide';
    }

    var div = '<div>'+
                    '<div class="spinner-grow text-primary m-1" role="status">'+
                        '<span class="sr-only">Loading...</span>'+
                    '</div>'+
                    '<div class="spinner-grow text-secondary m-1" role="status">'+
                        '<span class="sr-only">Loading...</span>'+
                    '</div>'+
                    '<div class="spinner-grow text-success m-1" role="status">'+
                        '<span class="sr-only">Loading...</span>'+
                    '</div>'+
                '</div>';
    var customElement = $(div, {});
    $.LoadingOverlay(val, {
        image       : "",
        custom      : customElement
    });
}

function get_data_dashboard(func_name, div_id) {
    var url = baseurl + "index.php/home/"+func_name+"/"+Math.random();
    $.post( url, function( data ) {
        loading(div_id, false);
        $('#'+div_id).html( data );
    });
}

function getselectmessagetype(id='') {
    var postdata    = new FormData();
    var url         = siteurl+'/cms/getmessagetype';
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

function get_mask_number(idInput) {
	$('#'+idInput).blur(function() {
			$(this).formatCurrency({ colorize: true, negativeFormat: '-%s%n', roundToDecimalPlace: -1 });
		})
		.keyup(function(e) {
			var e = window.event || e;
			var keyUnicode = e.charCode || e.keyCode;
			if (e !== undefined) {
				switch (keyUnicode) {
					case 16: break; // Shift
					case 17: break; // Ctrl
					case 18: break; // Alt
					case 27: this.value = ''; break; // Esc: clear entry
					case 35: break; // End
					case 36: break; // Home
					case 37: break; // cursor left
					case 38: break; // cursor up
					case 39: break; // cursor right
					case 40: break; // cursor down
					case 78: break; // N (Opera 9.63+ maps the "." from the number key section to the "N" key too!) (See: http://unixpapa.com/js/key.html search for ". Del")
					case 110: break; // . number block (Opera 9.63+ maps the "." from the number block to the "N" key (78) !!!)
					case 190: break; // .
					default: $(this).formatCurrency({ colorize: true, negativeFormat: '-%s%n', roundToDecimalPlace: -1, eventOnDecimalsEntered: true });
				}
			}
		})
		.bind('decimalsEntered', function(e, cents) {
			/*if (String(cents).length > 2) {
				var errorMsg = 'Please do not enter any cents (0.' + cents + ')';
				$('#formatWhileTypingAndWarnOnDecimalsEnteredNotification2').html(errorMsg);
				log('Event on decimals entered: ' + errorMsg);
			}*/
		});
}

(function ($) {
    'use strict';

    var language = localStorage.getItem('minia-language');
    // Default Language
    var default_lang = 'en';

    $(".table_data").DataTable({
        searching: false,
        dom: 'Bfrtip',
        buttons: []
    });

    flatpickr('.date-range', {
        mode: "range"
    });

    flatpickr('.datepicker', {});

    function setLanguage(lang) {
        if (document.getElementById("header-lang-img")) {
            if (lang == 'en') {
                document.getElementById("header-lang-img").src = "assets/images/flags/us.jpg";
            } else if (lang == 'sp') {
                document.getElementById("header-lang-img").src = "assets/images/flags/spain.jpg";
            } else if (lang == 'gr') {
                document.getElementById("header-lang-img").src = "assets/images/flags/germany.jpg";
            } else if (lang == 'it') {
                document.getElementById("header-lang-img").src = "assets/images/flags/italy.jpg";
            } else if (lang == 'ru') {
                document.getElementById("header-lang-img").src = "assets/images/flags/russia.jpg";
            }
            localStorage.setItem('minia-language', lang);
            language = localStorage.getItem('minia-language');
            getLanguage();
        }
    }

    // Multi language setting
    function getLanguage() {
        (language == null) ? setLanguage(default_lang): false;
        $.getJSON('assets/lang/' + language + '.json', function (lang) {
            $('html').attr('lang', language);
            $.each(lang, function (index, val) {
                (index === 'head') ? $(document).attr("title", val['title']): false;
                $("[data-key='" + index + "']").text(val);
            });
        });
    }

    function initMetisMenu() {
        //metis menu
        $("#side-menu").metisMenu();
    }

    function initCounterNumber() {
        var counter = document.querySelectorAll('.counter-value');
        var speed = 250; // The lower the slower
        counter.forEach(function (counter_value) {
            function updateCount() {
                var target = +counter_value.getAttribute('data-target');
                var count = +counter_value.innerText;
                var inc = target / speed;
                if (inc < 1) {
                    inc = 1;
                }
                // Check if target is reached
                if (count < target) {
                    // Add inc to count and output in counter_value
                    counter_value.innerText = (count + inc).toFixed(0);
                    // Call function every ms
                    setTimeout(updateCount, 1);
                } else {
                    counter_value.innerText = target;
                }
            };
            updateCount();
        });
    }

    function initLeftMenuCollapse() {
        var currentSIdebarSize = document.body.getAttribute('data-sidebar-size');
        $(window).on('load', function () {

            $('.switch').on('switch-change', function () {
                toggleWeather();
            });

            if (window.innerWidth >= 1024 && window.innerWidth <= 1366) {
                document.body.setAttribute('data-sidebar-size', 'sm');
                updateRadio('sidebar-size-small')
            }
        });

        $('#vertical-menu-btn').on('click', function (event) {
            event.preventDefault();
            $('body').toggleClass('sidebar-enable');
            if ($(window).width() >= 992) {
                if (currentSIdebarSize == null) {
                    (document.body.getAttribute('data-sidebar-size') == null || document.body.getAttribute('data-sidebar-size') == "lg") ? document.body.setAttribute('data-sidebar-size', 'sm'): document.body.setAttribute('data-sidebar-size', 'lg')
                } else if (currentSIdebarSize == "md") {
                    (document.body.getAttribute('data-sidebar-size') == "md") ? document.body.setAttribute('data-sidebar-size', 'sm'): document.body.setAttribute('data-sidebar-size', 'md')
                } else {
                    (document.body.getAttribute('data-sidebar-size') == "sm") ? document.body.setAttribute('data-sidebar-size', 'lg'): document.body.setAttribute('data-sidebar-size', 'sm')
                }
            }
        });
    }

    function initActiveMenu() {
        // === following js will activate the menu in left side bar based on url ====
        $("#sidebar-menu a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass("active");
                $(this).parent().addClass("mm-active"); // add active to li of the current link
                $(this).parent().parent().addClass("mm-show");
                $(this).parent().parent().prev().addClass("mm-active"); // add active class to an anchor
                $(this).parent().parent().parent().addClass("mm-active");
                $(this).parent().parent().parent().parent().addClass("mm-show"); // add active to li of the current link
                $(this).parent().parent().parent().parent().parent().addClass("mm-active");
            }
        });
    }

    function initMenuItemScroll() {
        // focus active menu in left sidebar
        $(document).ready(function () {
            if ($("#sidebar-menu").length > 0 && $("#sidebar-menu .mm-active .active").length > 0) {
                var activeMenu = $("#sidebar-menu .mm-active .active").offset().top;
                if (activeMenu > 300) {
                    activeMenu = activeMenu - 300;
                    $(".vertical-menu .simplebar-content-wrapper").animate({
                        scrollTop: activeMenu
                    }, "slow");
                }
            }
        });
    }

    function initHoriMenuActive() {
        $(".navbar-nav a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass("active");
                $(this).parent().addClass("active");
                $(this).parent().parent().addClass("active");
                $(this).parent().parent().parent().addClass("active");
                $(this).parent().parent().parent().parent().addClass("active");
                $(this).parent().parent().parent().parent().parent().addClass("active");
                $(this).parent().parent().parent().parent().parent().parent().addClass("active");
            }
        });
    }

    function initFullScreen() {
        $('[data-toggle="fullscreen"]').on("click", function (e) {
            e.preventDefault();
            $('body').toggleClass('fullscreen-enable');
            if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        });
        document.addEventListener('fullscreenchange', exitHandler);
        document.addEventListener("webkitfullscreenchange", exitHandler);
        document.addEventListener("mozfullscreenchange", exitHandler);

        function exitHandler() {
            if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
                $('body').removeClass('fullscreen-enable');
            }
        }
    }

    function initDropdownMenu() {
        if (document.getElementById("topnav-menu-content")) {
            var elements = document.getElementById("topnav-menu-content").getElementsByTagName("a");
            for (var i = 0, len = elements.length; i < len; i++) {
                elements[i].onclick = function (elem) {
                    if (elem && elem.target && elem.target.getAttribute("href") === "#") {
                        elem.target.parentElement.classList.toggle("active");
                        if(elem.target.nextElementSibling)
                        elem.target.nextElementSibling.classList.toggle("show");
                    }
                }
            }
            window.addEventListener("resize", updateMenu);
        }
    }

    function updateMenu() {
        var elements = document.getElementById("topnav-menu-content").getElementsByTagName("a");
        for (var i = 0, len = elements.length; i < len; i++) {
            if (elements[i] && elements[i].parentElement && elements[i].parentElement.getAttribute("class") === "nav-item dropdown active") {
                elements[i].parentElement.classList.remove("active");
                if(elements[i].nextElementSibling)
                elements[i].nextElementSibling.classList.remove("show");
            }
        }
    }

    function initComponents() {
        // tooltip
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });

        // popover
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        });

        // toast
        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastList = toastElList.map(function (toastEl) {
            return new bootstrap.Toast(toastEl)
        })
    }

    function initPreloader() {
        $(window).on('load', function () {
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
        });
    }

    function initSettings() {
        if (window.sessionStorage) {
            var alreadyVisited = sessionStorage.getItem("is_visited");
            if (!alreadyVisited) {
                sessionStorage.setItem("is_visited", "layout-ltr");
            } else {
                $("#" + alreadyVisited).prop('checked', true);
                // changeDirection(alreadyVisited);
            }
        }
    }

    function initLanguage() {
        // Auto Loader
        if (language && language != "null" && language !== default_lang)
            setLanguage(language);
        $('.language').on('click', function (e) {
            setLanguage($(this).attr('data-lang'));
        });
    }

    function initCheckAll() {
        $('#checkAll').on('change', function () {
            $('.table-check .form-check-input').prop('checked', $(this).prop("checked"));
        });
        $('.table-check .form-check-input').change(function () {
            if ($('.table-check .form-check-input:checked').length == $('.table-check .form-check-input').length) {
                $('#checkAll').prop('checked', true);
            } else {
                $('#checkAll').prop('checked', false);
            }
        });
    }

    function updateRadio(radioId) {
        document.getElementById(radioId).checked = true;
    }

    function layoutSetting() {
        var body = document.getElementsByTagName("body")[0];
        // right side-bar toggle
        $('.right-bar-toggle').on('click', function (e) {
            $('body').toggleClass('right-bar-enabled');
        });

        $('#mode-setting-btn').on('click', function (e) {
            if(body.hasAttribute("data-layout-mode") && body.getAttribute("data-layout-mode") == "dark") {
                document.body.setAttribute('data-layout-mode', 'light');
                document.body.setAttribute('data-topbar', 'light');
                document.body.setAttribute('data-sidebar', 'light');
                (body.hasAttribute("data-layout") && body.getAttribute("data-layout") == "horizontal") ? '' : document.body.setAttribute('data-sidebar', 'light');
                updateRadio('topbar-color-light')
                updateRadio('sidebar-color-light')
                updateRadio('topbar-color-light')
            } else {
                document.body.setAttribute('data-layout-mode', 'dark');
                document.body.setAttribute('data-topbar', 'dark');
                document.body.setAttribute('data-sidebar', 'dark');
                (body.hasAttribute("data-layout") && body.getAttribute("data-layout") == "horizontal") ? '' : document.body.setAttribute('data-sidebar', 'dark');
                updateRadio('layout-mode-dark')
                updateRadio('sidebar-color-dark')
                updateRadio('topbar-color-dark')
            }
        });

        $(document).on('click', 'body', function (e) {
            if ($(e.target).closest('.right-bar-toggle, .right-bar').length > 0) {
                return;
            }
            $('body').removeClass('right-bar-enabled');
            return;
        });

        if(body.hasAttribute("data-layout") && body.getAttribute("data-layout") == "horizontal") {
            updateRadio('layout-horizontal');
            $(".sidebar-setting").hide();
        } else {
            updateRadio('layout-vertical');
        }
        (body.hasAttribute("data-layout-mode") && body.getAttribute("data-layout-mode") == "dark") ? updateRadio('layout-mode-dark'): updateRadio('layout-mode-light');
        (body.hasAttribute("data-layout-size") && body.getAttribute("data-layout-size") == "boxed") ? updateRadio('layout-width-boxed'): updateRadio('layout-width-fuild');
        (body.hasAttribute("data-layout-scrollable") && body.getAttribute("data-layout-scrollable") == "true") ? updateRadio('layout-position-scrollable'): updateRadio('layout-position-fixed');
        (body.hasAttribute("data-topbar") && body.getAttribute("data-topbar") == "dark") ? updateRadio('topbar-color-dark'): updateRadio('topbar-color-light');
        (body.hasAttribute("data-sidebar-size") && body.getAttribute("data-sidebar-size") == "sm") ? updateRadio('sidebar-size-small') : (body.hasAttribute("data-sidebar-size") && body.getAttribute("data-sidebar-size") == "md") ? updateRadio('sidebar-size-compact') : updateRadio('sidebar-size-default');
        (body.hasAttribute("data-sidebar") && body.getAttribute("data-sidebar") == "brand") ? updateRadio('sidebar-color-brand') : (body.hasAttribute("data-sidebar") && body.getAttribute("data-sidebar") == "dark") ? updateRadio('sidebar-color-dark') : updateRadio('sidebar-color-light');
        (document.getElementsByTagName("html")[0].hasAttribute("dir") && document.getElementsByTagName("html")[0].getAttribute("dir") == "rtl") ? updateRadio('layout-direction-rtl'): updateRadio('layout-direction-ltr');

        // on layou change
        $("input[name='layout']").on('change', function () {
            window.location.href = ($(this).val() == "vertical") ? "index.html": "layouts-horizontal.html";
        });
        
        // on layout mode change
        $("input[name='layout-mode']").on('change', function () {
            if($(this).val() == "light") {
                document.body.setAttribute('data-layout-mode', 'light');
                document.body.setAttribute('data-topbar', 'light');
                document.body.setAttribute('data-sidebar', 'light');
                (body.hasAttribute("data-layout") && body.getAttribute("data-layout") == "horizontal") ? '' : document.body.setAttribute('data-sidebar', 'light');
                updateRadio('topbar-color-light')
                updateRadio('sidebar-color-light')
            } else {
                document.body.setAttribute('data-layout-mode', 'dark');
                document.body.setAttribute('data-topbar', 'dark');
                document.body.setAttribute('data-sidebar', 'dark');
                (body.hasAttribute("data-layout") && body.getAttribute("data-layout") == "horizontal") ? '' : document.body.setAttribute('data-sidebar', 'dark');
                updateRadio('topbar-color-dark')
                updateRadio('sidebar-color-dark')
            }
        });

        // on RTL-LTR mode change
        $("input[name='layout-direction']").on('change', function () {
            if($(this).val() == "ltr") {
                document.getElementsByTagName("html")[0].removeAttribute("dir");
                document.getElementById('bootstrap-style').setAttribute('href', 'assets/css/bootstrap.min.css');
                document.getElementById('app-style').setAttribute('href', 'assets/css/app.min.css');
            } else {
                document.getElementById('bootstrap-style').setAttribute('href', 'assets/css/bootstrap-rtl.min.css');
                document.getElementById('app-style').setAttribute('href', 'assets/css/app-rtl.min.css');
                document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
            }
        });
    }

    function init() {
        initMetisMenu();
        initCounterNumber();
        initLeftMenuCollapse();
        initActiveMenu();
        initMenuItemScroll();
        initHoriMenuActive();
        initFullScreen();
        initDropdownMenu();
        initComponents();
        initSettings();
        initLanguage();
        initPreloader();
        layoutSetting();
        Waves.init();
        initCheckAll();
    }

    init();

})(jQuery)


feather.replace()
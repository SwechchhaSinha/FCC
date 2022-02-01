/*!
    * Start Bootstrap - SB Admin v7.0.4 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
function getImg(data, type, full, meta) {
    if (data === 'GREEN') {
        return '<img src="assets/img/icons8-check-mark-button-48.png" />';
    } else {
        return '<img src="assets/img/icons8-cross-mark-button-48.png" />';
    }
}
$.ajax({
    'url': "http://127.0.0.1:5000/fc2/api/images",
    'method': "GET",
    'contentType': 'application/json'
}).done( function(data) {
    $('#ciDatatablesSimple').dataTable( {
        "aaData": data.imageDetails,
        "columns": [
            { "data": "imageTag" },
            { "data": "description" },
            { "data": "health", render:getImg},
            { "data": "imagePushedAt" }
        ]
    })
})




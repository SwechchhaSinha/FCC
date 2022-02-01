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

$(document).ready(function(){
    $('#teamselect').on('click', function() {
        $.ajax({
            'url': "http://127.0.0.1:5000/fc2/api/teams",
            'method': "GET",
            'contentType': 'application/json'
        }).done(function (data) {
                // console.log(data.teams);
                $('#teamselect').empty();
                $.each(data.teams, function (i, p) {
                    $('#teamselect').append($('<option></option>').val(p).html(p));
                });
            });
    });

    $('#teamselect').on('change', function() {
        $.ajax({
            'url': "http://127.0.0.1:5000/fc2/api/teams/services",
            'method': "GET",
            'contentType': 'application/json'
        }).done(data => {
                // console.log(data.services);
                $('#serviceselect').empty();
                $.each(data.services, function(i, p) {
                    $('#serviceselect').append($('<option></option>').val(p).html(p));
                });
            });

    });

    $('#cisubmit').on('click', function () {
        $.ajax({
            'url': "http://127.0.0.1:5000/fc2/api/deployments",
            'method': "GET",
            'contentType': 'application/json'
        }).done(function (data) {
            $('#cdDatatablesSimple').dataTable({
                "data": data.deployments,
                "columns": [
                    {"data": "env"},
                    {"data": "imageTag"},
                    {"data": "deployedAt"},
                    {"data": "status"}
                ]
            })
        })

        $.ajax({
            'url': "http://127.0.0.1:5000/fc2/api/images",
            'method': "GET",
            'contentType': 'application/json'
        }).done(function (data) {
            $('#ciDatatablesSimple').dataTable({
                "data": data.imageDetails,
                "columns": [
                    {"data": "imageTag"},
                    {"data": "description"},
                    {"data": "health", render: getImg},
                    {"data": "imagePushedAt"}
                ]
            })
        })

        function getImg(data) {
            if (data === 'GREEN') {
                return '<img src="../assets/img/icons8-check-mark-button-48.png" />';
            } else {
                return '<img src="../assets/img/icons8-cross-mark-button-48.png" />';
            }
        }
    });



});

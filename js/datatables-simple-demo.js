window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
    const ciDatatablesSimple = document.getElementById('ciDatatablesSimple');
    if (ciDatatablesSimple) {
        new simpleDatatables.DataTable(ciDatatablesSimple);
    }

    const cdDatatablesSimple = document.getElementById('cdDatatablesSimple');
    if (cdDatatablesSimple) {
        new simpleDatatables.DataTable(cdDatatablesSimple);
    }
});

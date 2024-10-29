$(document).ready(function() {
    $('#modoClaro').click(function() {
        $('#mainBody').removeClass('bg-dark text-white').addClass('bg-light');
        $('.navbar').removeClass('bg-dark navbar-dark').addClass('bg-primary navbar-light');
        $('table').removeClass('table-dark').addClass('table-light');
        $('#titulo').text('Modo Claro Activado');
    });

    $('#modoOscuro').click(function() {
        $('#mainBody').removeClass('bg-light').addClass('bg-dark text-white');
        $('.navbar').removeClass('bg-primary navbar-light').addClass('bg-dark navbar-dark');
        $('table').removeClass('table-light').addClass('table-dark');
        $('#titulo').text('Modo Oscuro Activado');
    });
});

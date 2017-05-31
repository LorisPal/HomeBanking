var profilo = angular.module('profilo', [])

/**
 * Prendi saldo disponibile dal database e lo stampa a video nella pagina profilo. 
 * @param saldo controller e $scope = dati dell'utente.
 * @author Mirko Viviano
 * */
profilo.controller('saldo', function($scope){
    $scope.saldoDisponibile = "100.04";
});

/**
 * Ultime attività dell'utente da visualizzare nella homepage del profilo.
 * @author Mirko Viviano
 */
profilo.controller('ultimeAttivita', function($scope){
    $scope.attivita=[{data:'1 Maggio 2017', importo:'100', pagato: 'pagato', link: 'movimenti/id'},
                    {data:'15 Maggio 2017', importo:'4', pagato: 'ricevuto'},
                    {data:'22 Maggio 2017', importo:'500', pagato: 'pagato'},
                    {data:'29 Maggio 2017',importo:'50', pagato: 'ricevuto'}];
});
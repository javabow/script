$('#dataTable').dataTable( {
        "order": [[ 3, 'desc' ]],
        "columnDefs" : [{"targets":3, "type":"date"}],
    } );
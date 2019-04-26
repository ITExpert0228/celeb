
/*
 * Editor client script for DB table name
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		ajax: '/api/name',
		table: '#name',
		fields: [
			{
				"label": "title:",
				"name": "title"
			},
			{
				"label": "name:",
				"name": "name"
			},
			{
				"label": "name1:",
				"name": "name1"
			}
		]
	} );

	var table = $('#name').DataTable( {
		dom: 'Bfrtip',
		ajax: '/api/name',
		columns: [
			{
				"data": "title"
			},
			{
				"data": "name"
			},
			{
				"data": "name1"
			}
		],
		select: true,
		lengthChange: false,
		buttons: [
			{ extend: 'create', editor: editor },
			{ extend: 'edit',   editor: editor },
			{ extend: 'remove', editor: editor }
		]
	} );
} );

}(jQuery));


//buscar cliente por cedula
$(document).on('click', '#buscarCliente', () => {
	var cedula_cliente = $('#cedula').val();
var getUrl = window.location;
		var baseUrl = getUrl.protocol + "//"+getUrl.host+"/"+getUrl.pathname.split('/')[1];

	$.ajax({
		type: "GET",
		url: baseUrl+"/clientes/listar/" + cedula_cliente,
		success: function(response) {
			let cliente = response[0];
			if (Object.keys(response).length === 0) {
				alert("El cliente no se encontro");
				return null
			};
			$("#nombreCliente").val(cliente.nombreCliente);
		}
	});

})


let iva1 = 0;
let ivaVenta1 = 0
let valorTotal1 = 0;
let valorProducto1 = 0;


//buscar producto 1 ingresando el codigo del producto
$(document).on('click', '#buscarProducto1', () => {
	var codigo_producto1 = $("#CodProducto1").val();
	var getUrl = window.location;
		var baseUrl = getUrl.protocol + "//"+getUrl.host+"/"+getUrl.pathname.split('/')[1];

	$.ajax({
		type: "GET",
		url: baseUrl+"/productos/listar/" + codigo_producto1,
		success: function(response) {

			const producto1 = response[0];
			if (Object.keys(response).length === 0) {
				alert("El producto no se encontro");
				return null
			};

			$("#nombreProducto1").val(producto1.nombreProducto);
			valorProducto1 = producto1.precioVenta;
			console.log(valorProducto1);
			iva1 = producto1.ivaCompra / 100;
			console.log(iva1)
		}
	})
})

//calcular valor de venta del producto1 de acuerdo con la cantidad ingresada
$(document).on('change', '#Cantidad1', () => {

	document.getElementById("valorVenta1").value = $("#Cantidad1").val() * valorProducto1;
	console.log(iva1);
	ivaVenta1 = $("#valorVenta1").val() * iva1;
	console.log(ivaVenta1);
	valorTotal1 = parseFloat($("#valorVenta1").val()) + parseFloat(ivaVenta1);
	console.log(valorTotal1)
})


let iva2 = 0;
let ivaVenta2 = 0
let valorTotal2 = 0;
let valorProducto2 = 0;

//buscar producto 2 ingresando el codigo del producto
$(document).on('click', '#buscarProducto2', () => {
	var codigo_producto2 = $("#CodProducto2").val();
	var getUrl = window.location;
		var baseUrl = getUrl.protocol + "//"+getUrl.host+"/"+getUrl.pathname.split('/')[1];

	$.ajax({
		type: "GET",
		url: baseUrl+"/productos/listar/" + codigo_producto2,
		success: function(response) {

			const producto2 = response[0];
			if (Object.keys(response).length === 0) {
				alert("El producto no se encontro");
				return null
			};

			$("#nombreProducto2").val(producto2.nombreProducto);
			valorProducto2 = producto2.precioVenta;
			console.log(valorProducto2);
			iva2 = producto2.ivaCompra / 100
			console.log(iva2);
		}
	})
})

//calcular valor de venta del producto2 de acuerdo con la cantidad ingresada
$(document).on('change', '#Cantidad2', () => {

	document.getElementById('valorVenta2').value = $("#Cantidad2").val() * valorProducto2;
	ivaVenta2 = $("#valorVenta2").val() * iva2;
	console.log(ivaVenta2);
	valorTotal2 = parseFloat($("#valorVenta2").val()) + parseFloat(ivaVenta2);
	console.log(valorTotal2)
})


let iva3 = 0;
let ivaVenta3 = 0
let valorTotal3 = 0;
let valorProducto3 = 0;
let codigo = 0;

//buscar producto 3 ingresando el codigo del producto
$(document).on('click', '#buscarProducto3', () => {
	var codigo_producto3 = $("#CodProducto3").val();
	var getUrl = window.location;
		var baseUrl = getUrl.protocol + "//"+getUrl.host+"/"+getUrl.pathname.split('/')[1];

	$.ajax({
		type: "GET",
		url: baseUrl+"/productos/listar/" + codigo_producto3,
		success: function(response) {

			const producto3 = response[0];
			if (Object.keys(response).length === 0) {
				alert("El producto no se encontro");
				return null
			};

			$("#nombreProducto3").val(producto3.nombreProducto);
			valorProducto3 = producto3.precioVenta;
			console.log(valorProducto3);
			iva3 = producto3.ivaCompra / 100
			console.log(iva3);
		}
	})
})

//calcular valor de venta del producto3 de acuerdo con la cantidad ingresada
$(document).on('change', '#Cantidad3', () => {

	document.getElementById("valorVenta3").value = $("#Cantidad3").val() * valorProducto3;
	ivaVenta3 = $("#valorVenta3").val() * iva3;
	console.log(ivaVenta3);
	valorTotal3 = parseFloat($("#valorVenta3").val()) + parseFloat(ivaVenta3);
	console.log(valorTotal3)
})


//Calcular valor venta total, iva total y total venta con iva
$(document).on('click', '#confirmarVenta', () => {
	$("#mensaje").html("Validando ... ");
	$("#mensaje").html("Ejecutando peticion AJAX ventas... ");
		
	if ($("#Cantidad1").val() <= 0) {
		alert("La cantidad de los productos es incorrecta");
		return null
	};
	$("#mensaje").html("Validando Campos... ");
	if ($("#Cantidad2").val() <= 0) {
		alert("La cantidad de los productos es incorrecta");
		return null
	};
	$("#mensaje").html("Validando Campos... ");
	if ($("#Cantidad3").val() <= 0) {
		alert("La cantidad de los productos es incorrecta");
		return null
	};
	
	$("#mensaje").html("Realizando calculos... ");
	
	document.getElementById("valorVenta").value = parseFloat($("#valorVenta1").val()) + parseFloat($("#valorVenta2").val()) + parseFloat($("#valorVenta3").val());
	document.getElementById("totalIVA").value = parseFloat(ivaVenta1) + parseFloat(ivaVenta2) + parseFloat(ivaVenta3);
	document.getElementById("totalVentaIVA").value = parseFloat($("#valorVenta").val()) + parseFloat($("#totalIVA").val());

	var cliente1 = $("#cedula").val();
	var usuario = localStorage.getItem('usuario');
	var valorVenta = $("#valorVenta").val();
	var iva = $("#totalIVA").val();
	var totalVenta = $("#totalVentaIVA").val();

	venta = {
		cedulaCliente: cliente1,
		cedulaUsuario: usuario,
		valor_venta: valorVenta,
		ivaVenta: iva,
		total_venta: totalVenta,
	}
	var getUrl = window.location;
		var baseUrl = getUrl.protocol + "//"+getUrl.host+"/"+getUrl.pathname.split('/')[1];

	$.ajax({
		type: "POST",
		url: baseUrl+"/ventas/guardar",
		data: JSON.stringify({
			cedulaCliente: cliente1,
			cedulaUsuario: usuario,
			valor_venta: valorVenta,
			ivaVenta: iva,
			total_venta: totalVenta,
		}),
		success: function(response) {
			console.log("ventaAgregada");
			$("#mensaje").html("Ejecutando peticion AJAX ventas... ");
			$("#mensaje").html("Proceso ventas ... ");
		},
		contentType: "application/json"
	});
	
	$("#mensaje").html("Ejecutando peticion AJAX codigo ventas... ");
	setTimeout(function() { consultaCodigo(); }, 5000);
	$("#mensaje").html("Ejecutando peticion AJAX detalle ventas 1 ... ");
	setTimeout(function() { guardarDetalleVenta1() }, 10000);
	$("#mensaje").html("Ejecutando peticion AJAX detalle ventas 2 ... ");
	setTimeout(function() { guardarDetalleVenta2() }, 15000);
	$("#mensaje").html("Ejecutando peticion AJAX detalle ventas 3 ... ");
	setTimeout(function() { guardarDetalleVenta3() }, 20000);
	
})

function consultaCodigo() {
	var getUrl = window.location;
		var baseUrl = getUrl.protocol + "//"+getUrl.host+"/"+getUrl.pathname.split('/')[1];

	$.ajax({
		type: "GET",
		url: baseUrl+"/ventas/codigo",

		contentType: "application/json",
		success: function(response) {
			codigo = response;
			console.log(codigo + "TraeCodigo");
			$("#consecutivo").val(codigo);
		}
	});
}


function guardarDetalleVenta1() {
	var getUrl = window.location;
		var baseUrl = getUrl.protocol + "//"+getUrl.host+"/"+getUrl.pathname.split('/')[1];

	$.ajax({
		type: "POST",
		url: baseUrl+"/detalleVentas/guardar",
		data: JSON.stringify({
			cantidadProducto: $("#Cantidad1").val(),
			codigoProducto: $("#CodProducto1").val(),
			codigoVenta: codigo,
			valorVenta: valorProducto1,
			valorIva: Math.round(ivaVenta1),
			valorTotal: $("#valorVenta1").val(),
		}),
		success: function(response) {
			console.log("GuardaDetalle");
			$("#mensaje").html("Proceso detalle ventas 1 completado ... ");
		},
		contentType: "application/json"

	});
}

function guardarDetalleVenta2() {
	var getUrl = window.location;
		var baseUrl = getUrl.protocol + "//"+getUrl.host+"/"+getUrl.pathname.split('/')[1];

	$.ajax({
		type: "POST",
		url: baseUrl+"/detalleVentas/guardar",
		data: JSON.stringify({
			cantidadProducto: $("#Cantidad2").val(),
			codigoProducto: $("#CodProducto2").val(),
			codigoVenta: codigo,
			valorVenta: valorProducto2,
			valorIva: Math.round(ivaVenta2),
			valorTotal: $("#valorVenta2").val(),
		}),
		success: function(response) {
			console.log("GuardaDetalle");
			$("#mensaje").html("Proceso detalle ventas 2 completado ... ");
		},
		contentType: "application/json"
	});
}

function guardarDetalleVenta3() {
	var getUrl = window.location;
		var baseUrl = getUrl.protocol + "//"+getUrl.host+"/"+getUrl.pathname.split('/')[1];
	$.ajax({
		type: "POST",
		url: baseUrl+"/detalleVentas/guardar",
		data: JSON.stringify({
			cantidadProducto: $("#Cantidad3").val(),
			codigoProducto: $("#CodProducto3").val(),
			codigoVenta: codigo,
			valorVenta: valorProducto3,
			valorIva: Math.round(ivaVenta3),
			valorTotal: $("#valorVenta3").val(),
		}),
		success: function(response) {
			console.log("GuardaDetalle");
			$("#mensaje").html("Proceso detalle ventas 3 completado ... ");
			$("#mensaje").html("Completado con exito proceso ventas. ");
		},
		contentType: "application/json"
	});
}
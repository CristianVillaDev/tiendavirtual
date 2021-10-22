<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Tienda Generica</title>
<link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
	<h2>TIENDA GENERICA</h2>

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Grupo 60</a>
			<button class="navbar-toggler" type="button"
				data-bs-toggle="collapse" data-bs-target="#navbarColor03"
				aria-controls="navbarColor03" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarColor03">
				<ul class="navbar-nav me-auto">
					<li class="nav-item"><a class="nav-link" href="usuarios.jsp">Usuarios</a></li>
					<li class="nav-item"><a class="nav-link" href="clientes.jsp">Clientes</a>
					</li>
					<li class="nav-item"><a class="nav-link"
						href="proveedores.jsp">Proveedores</a></li>
					<li class="nav-item"><a class="nav-link" href="productos.jsp">Productos</a></li>
					<li class="nav-item"><a class="nav-link active" href="#">Ventas
							<span class="visually-hidden">(current)</span>
					</a></li>
					<li class="nav-item"><a class="nav-link" href="reportes.jsp">Reportes</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<div class="container-fluid row pl-0 " style="background:#CFCBC9;">
		<div class="container p-2" style="border: 1px solid #BEB8B6;">
			<form id="formulario">
				<h4 class="text-center" style="font-size: 20px">Gestión de
					Ventas</h4>
				<div class="container">
					<h3 class="mx-auto" id="mensaje"></h3>

				</div>
				<br>
				<div class="row g-3">
					<div class="col-md-3">
						<input type="number" class="form-control" id="cedula"
							name="inputCedula" placeholder="Cédula Cliente" required>
					</div>
					<div class="col-md-2">
						<input type="button" name="buscarCliente" id="buscarCliente"
							class="btn btn-primary" value="Buscar">
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" id="nombreCliente"
							name="nombreCliente" placeholder="Nombre Cliente">
					</div>
					<div class="col-md-3">
						<input type="number" class="form-control" id="consecutivo"
							name="inputConse" placeholder="Consecutivo">
					</div>
				</div>
				<br>
				<div class="row g-3">
					<div class="col-md-2">
						<label for="codigo">Código Producto</label> <input type="number"
							class="form-control" id="CodProducto1" name="inputCodProducto">
					</div>
					<div class="col-md-2">
						<br> <input type="button" name="buscarProducto"
							id="buscarProducto1" class="btn btn-primary"
							style="margin-bottom: 6px" value="Buscar">
					</div>
					<div class="col-md-4">
						<label for="nombre">Nombre Producto</label> <input type="text"
							class="form-control" id="nombreProducto1" name="nombreProducto1">
					</div>
					<div class="col-md-1">
						<label for="cantidad">Cantidad</label> <input type="number"
							class="form-control" id="Cantidad1" name="Cantidad1">
					</div>
					<div class="col-md-3">
						<label for="Valor">Valor Total</label> <input type="number"
							class="form-control" id="valorVenta1" name="Valor1">
					</div>
				</div>

				<div class="row g-3">
					<div class="col-md-2">
						<input type="number" class="form-control" id="CodProducto2"
							name="CodProducto2">
					</div>
					<div class="col-md-2">
						<input type="button" name="buscarProducto" id="buscarProducto2"
							class="btn btn-primary" style="margin-bottom: 6px" value="Buscar">
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" id="nombreProducto2"
							name="nombreProducto2">
					</div>
					<div class="col-md-1">
						<input type="number" class="form-control" id="Cantidad2"
							name="Cantidad2">
					</div>
					<div class="col-md-3">
						<input type="number" class="form-control" id="valorVenta2"
							name="Valor2">
					</div>
				</div>

				<div class="row g-3">
					<div class="col-md-2">
						<input type="number" class="form-control" id="CodProducto3"
							name="CodProducto3">
					</div>
					<div class="col-md-2">
						<input type="button" name="buscarProducto" id="buscarProducto3"
							class="btn btn-primary" style="margin-bottom: 6px" value="Buscar">
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" id="nombreProducto3"
							name="nombreProducto3">
					</div>
					<div class="col-md-1">
						<input type="number" class="form-control" id="Cantidad3"
							name="Cantidad3">
					</div>
					<div class="col-md-3">
						<input type="number" class="form-control" id="valorVenta3"
							name="Valor3">
					</div>
				</div>

				<div class="row g-3">
					<div class="col-md-3"></div>
					<div class="col-md-2"></div>

					<div class="col-auto">
						<label for="totalVenta" class="col-form-label">Total Venta</label>
					</div>
					<div class="col-auto">
						<input type="number" id="valorVenta" class="form-control">
					</div>
				</div>

				<br>
				<div class="row g-3">
					<div class="col-md-3"></div>
					<div class="col-md-2"></div>
					<div class="col-auto">
						<label for="totalIVA">Total IVA</label>
					</div>
					<div class="col-auto">
						<input type="number" class="form-control" id="totalIVA"
							name="totalIVA">
					</div>
				</div>
				<br>
				<div class="row g-3">
					<div class="col-md-3"></div>
					<div class="col-md-2"></div>
					<div class="col-auto">
						<label for="totalVentaIVA">Total venta con IVA</label>
					</div>
					<div class="col-auto">
						<input type="number" class="form-control" id="totalVentaIVA"
							name="totalVentaIVA">
					</div>
				</div>

				<br>
				<div class="row g-3">

					<input type="button" name="confirmarVenta" id="confirmarVenta"
						class="btn btn-primary" style="margin-bottom: 6px"
						value="Confirmar Venta">

				</div>

			</form>
		</div>
	</div>

	<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
	<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	<script
		src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>
	<script src="scripts/ventas.js"></script>

</body>
</html>
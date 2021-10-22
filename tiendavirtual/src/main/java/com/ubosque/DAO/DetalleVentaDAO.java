package com.ubosque.DAO;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.ubosque.DTO.DetallesVentas;
import com.ubosque.DTO.Ventas;

public class DetalleVentaDAO {

	// Metodo para crear una venta
			public void crearDetalleVenta(DetallesVentas detalleVentas) {
				Connection connection = new Connection();
				try {
					
					int codigo=0;
					String query = "SELECT max(codigo_detalle_venta) as codigo FROM detalle_ventas";
					PreparedStatement statement = connection.getConnection().prepareStatement(query);
					ResultSet resultSet = statement.executeQuery();
					if (resultSet.next()) {
						codigo = resultSet.getInt("codigo");
						System.out.println("Existe el código \n");
					} 
					
					query = "INSERT INTO detalle_ventas (codigo_detalle_venta, cantidad_producto, codigo_producto, codigo_venta, valor_venta, valoriva, valor_total )VALUES (?,?,?,?,?,?,?)";
					statement = connection.getConnection().prepareStatement(query);
					statement.setInt(1, codigo+1);
					statement.setInt(2, detalleVentas.getCantidadProducto());
					statement.setInt(3, detalleVentas.getCodigoProducto());
					statement.setInt(4, detalleVentas.getCodigoVenta());
					statement.setDouble(5, detalleVentas.getValorVenta());
					statement.setDouble(6, detalleVentas.getValorIva());
					statement.setDouble(7, detalleVentas.getValorTotal());
					
					statement.executeUpdate();
					System.out.println("El detalle de la venta fué registrad0");
					statement.close();
					connection.connection.close();
				} catch (SQLException e) {
					System.out.println(e.getMessage());
				}

			}
	
}
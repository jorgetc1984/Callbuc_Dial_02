/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package javaapplication1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

public class JavaApplication1 {

    public static void main(String[] args) {
        // Datos de conexión
        String usuario = "root";
        String password = ""; // Agrega tu contraseña si está configurada
        String url = "jdbc:mysql://localhost:3306/Callbuc_Dial"; // Cambia el puerto si es diferente

        Connection conexion = null;
        Statement statement = null;
        ResultSet rs = null;

        try {
            // Cargar el controlador JDBC
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establecer la conexión a la base de datos
            conexion = DriverManager.getConnection(url, usuario, password);

            // Crear una declaración SQL
            statement = conexion.createStatement();

            // Ejecutar una consulta (ejemplo)
            String consultaSQL = "SELECT * FROM tabla_ejemplo";
            rs = statement.executeQuery(consultaSQL);

            // Procesar los resultados (ejemplo)
            while (rs.next()) {
                int id = rs.getInt("id");
                String nombre = rs.getString("nombre");
                System.out.println("ID: " + id + ", Nombre: " + nombre);
            }

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(JavaApplication1.class.getName()).log(Level.SEVERE, "Error al cargar el controlador JDBC", ex);
        } catch (SQLException ex) {
            Logger.getLogger(JavaApplication1.class.getName()).log(Level.SEVERE, "Error SQL: " + ex.getMessage(), ex);
        } finally {
            // Cerrar recursos en un bloque finally
            try {
                if (rs != null) {
                    rs.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (conexion != null) {
                    conexion.close();
                }
            } catch (SQLException ex) {
                Logger.getLogger(JavaApplication1.class.getName()).log(Level.SEVERE, "Error al cerrar recursos", ex);
            }
        }
    }
}

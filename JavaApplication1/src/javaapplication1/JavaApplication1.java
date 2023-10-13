/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package javaapplication1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

public class JavaApplication1 {

    private static final String DB_URL = "jdbc:mysql://127.0.0.1:3306/Callbuc_Dial"; // Usar la IP local
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "";

    public static void main(String[] args) {
        JavaApplication1 app = new JavaApplication1();

        Connection conexion = null;
        Statement statement = null;
        ResultSet rs = null;

        try {
            // Cargar el controlador JDBC
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establecer la conexión a la base de datos
            conexion = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

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

            // Ejemplo de inserción de datos
            app.insertarDatos("NuevoNombre", 30);

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

    public void insertarDatos(String nombre, int edad) {
        Connection conexion = null;
        PreparedStatement preparedStatement = null;

        try {
            conexion = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
            String insercionSQL = "INSERT INTO CallBuc_Dial (nombre, edad) VALUES (?, ?)";
            preparedStatement = conexion.prepareStatement(insercionSQL);
            preparedStatement.setString(1, nombre);
            preparedStatement.setInt(2, edad);
            preparedStatement.executeUpdate();
            System.out.println("Datos insertados con éxito.");
        } catch (SQLException ex) {
            Logger.getLogger(JavaApplication1.class.getName()).log(Level.SEVERE, "Error al insertar datos: " + ex.getMessage(), ex);
        } finally {
            // Cerrar recursos en un bloque finally
            try {
                if (preparedStatement != null) {
                    preparedStatement.close();
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



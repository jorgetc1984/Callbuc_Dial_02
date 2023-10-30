/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.callbucdial;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import javax.swing.JOptionPane;

public class ConexionMySQL {
    private Connection conectar = null;
    private final String usuario = "root";
    private final String contraseña = "";
    private final String bd = "callbuc_dial";
    private final String ip = "localhost";
    private final String puerto = "3306";
    
    public Connection establecerConexion() {
        try {
            // Cargar el controlador MySQL
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            // Establecer la conexión
            String cadenaConexion = "jdbc:mysql://" + ip + ":" + puerto + "/" + bd;
            conectar = DriverManager.getConnection(cadenaConexion, usuario, contraseña);
            
            return conectar;
        } catch (ClassNotFoundException | SQLException e) {
            JOptionPane.showMessageDialog(null, "No se pudo conectar a la base de datos, error: " + e.toString());
            return null;
        }
    }
    
    public void cerrarConexion() {
        try {
            if (conectar != null) {
                conectar.close();
            }
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al cerrar la conexión: " + e.toString());
        }
    }
}

public class JavaApplication1 {
    public static void main(String[] args) {
        ConexionMySQL conexion = new ConexionMySQL();
        Connection con = conexion.establecerConexion();
        
        if (con != null) {
            try {
                Statement stmt = con.createStatement();
                String consultaSQL = "SELECT * FROM cita"; // Reemplaza 'tu_tabla' con el nombre de la tabla que deseas consultar
                stmt.executeQuery(consultaSQL);
                
                // Resto de tu código para procesar el resultado de la consulta
            } catch (SQLException e) {
                JOptionPane.showMessageDialog(null, "Error SQL: " + e.toString());
            } finally {
                conexion.cerrarConexion();
            }
        }
    }
}


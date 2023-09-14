/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.callbuc_dial;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Callbuc_Dial {

    public static void main(String[] args) {
        // Datos de conexión (puedes mover estos valores a un archivo de configuración)
        String usuario = "root";
        String password = ""; // Agrega tu contraseña si está configurada
        String url = "jdbc:mysql://localhost:3306/Callbuc_Dial"; // Cambia el puerto si es diferente

        try (
            // Establecer la conexión a la base de datos
            Connection conexion = DriverManager.getConnection(url, usuario, password);
            // Crear una declaración SQL
            Statement statement = conexion.createStatement();
            // Ejecutar una consulta (ejemplo)
            ResultSet rs = statement.executeQuery("SELECT * FROM tabla_ejemplo")
        ) {
            // Procesar los resultados (ejemplo)
            while (rs.next()) {
                int id = rs.getInt("id");
                String nombre = rs.getString("nombre");
                System.out.println("ID: " + id + ", Nombre: " + nombre);
            }
        } catch (SQLException ex) {
            // Manejar errores de SQL
            Logger.getLogger(Callbuc_Dial.class.getName()).log(Level.SEVERE, "Error de SQL: " + ex.getMessage(), ex);
        } catch (Exception ex) {
            // Manejar otras excepciones
            Logger.getLogger(Callbuc_Dial.class.getName()).log(Level.SEVERE, "Error: " + ex.getMessage(), ex);
        }
    }
}


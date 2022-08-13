/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.argprog.Interface;

import com.portfolio.argprog.entity.Persona;
import java.util.List;

public interface IPersonaService {
    // Lista de Personas
    public List<Persona> getPersona(); 
    
    // Guardar obj Persona
    
    public void savePersona(Persona persona);
    
    // Eliminar obj por Id
    
    public void deletePersona(Long id);
    
    // Buscar Persona por Id
    
    public Persona findPersona(Long id);
    
    
}

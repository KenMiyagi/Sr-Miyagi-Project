function loginValidation(userData){
    const errors = {};
    //Email errors
    if(!(/\S+@\S+\.\S+/).test(userData.meil)) errors.meil = "Debe ser un correo válido"
    if(!userData.meil) errors.meil = "Debe proporcionar un correo."
    if(userData.meil.length >35) errors.meil = "El correo es mayor a 35 carácteres."
    //Password errors
    if(!userData.password) errors.password = "Debe ingresar una contraseña"
        
    return errors;
}

export default loginValidation
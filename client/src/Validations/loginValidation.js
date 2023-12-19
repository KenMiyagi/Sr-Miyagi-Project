function loginValidation(userData){
    const errors = {};
    //Email errors
    if(!(/\S+@\S+\.\S+/).test(userData.email)) errors.email = "Debe ser un email válido"
    if(!userData.email) errors.email = "Debe proporcionar un email."
    if(userData.email.length >35) errors.email = "El correo es mayor a 35 carácteres."
    //Password errors
    if(!userData.password) errors.password = "Debe ingresar una contraseña"
        
    return errors;
}

export default loginValidation
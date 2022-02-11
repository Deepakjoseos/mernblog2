function validation(formValues){

    const errors = {};
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!formValues.username)
    {
        errors.username = "Usename is required";
    }
    if(!formValues.email){
        errors.email = "Email is Required";
    }else if(!regex.test(formValues.email)){
        errors.email ="Email is Invalid";
    }
    if(!formValues.password){
        errors.password ="Password is required";
    }
    else if(formValues.password.length < 5){
        errors.password ="Password is too short";
    }

    return errors;
}
export default validation;
export const validate = (data, type) => {

    const errors = {};

    if (!data.email) {
        errors.email = "Email is empty, please put your email to proceed.";
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(data.email).toLowerCase())) {
        errors.email = "Email address is not acceptable.";
    } else {
        delete errors.email;
    }

    if (!data.password) {
        errors.password = "Password is required";
    } else if (!(data.password.length > 6)) {
        errors.password = "Your password is too short, must be greater than 6 digits.";
    } else {
        delete errors.password;
    }

    if (type === "register") {

        if (!data.name.trim()) {
            errors.name = "Username field is empty, please fill it up to proceed";
        } else if (data.name.length < 5) {
            errors.name = "Username is too short, not less than 5 characters";
        }
        else if (data.name.length > 12) {
            errors.name = "Username must not more than 12 characters";
        } 
        else {
            delete errors.name;
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "Confirm the password";
        } else if (!(data.confirmPassword === data.password)) {
            errors.confirmPassword = "Password and confirm password are not matched.";
        } else {
            delete errors.confirmPassword;
        }

        if (data.isAccepted) {
            delete errors.isAccepted;
        } else {
            errors.isAccepted = "Accept the terms of service to proceed.";
        }
    }

    return errors;
};
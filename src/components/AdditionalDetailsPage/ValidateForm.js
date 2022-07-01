export const validation = (values) => {

    const errors = {};

    if(!values.preferedname) {
        errors.preferedname = "Your name is required"
    }

    if (!values.thecompany) {
        errors.thecompany = "Your company's name is required"
    }

    if (!values.experience) {
        errors.experience = "Your experience is required"
    } else if (!values.experience.length > 2) {
        errors.experience = "Your experience does not make sense"
    }

    if (!values.occupation) {
        errors.occupation = "Your occupation is required"
    }

    if (!values.country) {
        errors.country = "Your country is required"
    }

    /* dropdown menus */

    if (!values.field) {
        errors.field = "Your field is required"
    }

    if (!values.skill) {
        errors.skill = "Your insterested skill of learning programming is required"
    }

    if (!values.total) {
        errors.total = "Your push notification is required"
    }

    if (!values.platform) {
        errors.platform = "Your prefered platform is required"
    }

    return  errors;
}

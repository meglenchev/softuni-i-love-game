export function validate(values) {
    let errors = {};

    //Validate Title Field
    if (!values.title) {
        errors['title'] = 'Title is required!';
    }

    //Validate Genre Field
    if (!values.genre) {
        errors['genre'] = 'Genre is required!';
    }

    //Validate Players Field
    if (!values.players || values.players <= 0) {
        errors['players'] = 'Players are required and their number must be greater than 0!';
    }

    //Validate Date Field
    if (!values.date) {
        errors['date'] = 'Date is required!';
    }

    //Validate Image Url Field
    if (!values.imageUrl) {
        errors['imageUrl'] = 'Image Url is required!';
    }

    //Validate summary Field
    if (!values.summary) {
        errors['summary'] = 'Summary is required!';
    }

    return errors;
}
export const createNewError = (name, message) => {
    const custom = new Error();
    custom.name = name;
    custom.message = message;
    return custom;
}


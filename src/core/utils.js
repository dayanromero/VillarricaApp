import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const emailValidator = (email) => {
    const re = /\S+@\S+\.\S+/;

    if (!email || email.length <= 0) return 'El correo no puede estar vacio.';
    if (!re.test(email)) return 'Ooops! Introduce un correo valido.';

    return '';
};

export const passwordValidator = (password) => {
    if (!password || password.length <= 0)
        return 'La clave no puede estar vacia.';

    return '';
};

export const formatDate = (date, type) => {
    let returnType = type === 'f' ? 'dd / MMMM / YYY' : 'HH:mm.aaaa';
    return date ? ('Format', format(date, returnType, { locale: es })) : null;
};

export const numValidator = (text) => {
    if (!text || text.length <= 0 || !/^([0-9])*$/.test(text))
        return 'Debe de ingresar un numero de cedula valido.';
    return '';
};

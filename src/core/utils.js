import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const IS_ANDROID = Platform.OS === 'android';
export const DEFAULT_CENTER_COORDINATE = [-76.481856, 3.006929];
export const API_KEY = 'pk.eyJ1IjoiZGF5cm9tIiwiYSI6ImNrYTc5aXg0YzAxM2oyeXFlZWYwejU4cTYifQ.uQCDALmLyuOI-QzPxo1_EA';

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
    let returnType = type === 'f' ? 'YYY-MM-dd' : 'hh:mm.aaaa';
    return date ? ('Format', format(date, returnType, { locale: es })) : null;
};

export const numValidator = (text) => {
    if (!text || text.length <= 0 || !/^([0-9])*$/.test(text))
        return 'Debe de ingresar un numero de cedula valido.';
    return '';
};

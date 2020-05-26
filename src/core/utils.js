import {format} from 'date-fns';
import {es} from 'date-fns/locale';

export const emailValidator = (email) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = (password) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const nameValidator = (name) => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};

export const formatDate = (date, type) => {
  let returnType = (type === 'f') ? 'dd/MMMM/YYY' : 'HH:mm.aaaa'
  return date ? 
    ('Format', format(date, returnType, {locale: es})) : null
};


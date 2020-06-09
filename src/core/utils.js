import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import mapboxClient from '@mapbox/mapbox-sdk';
import mapboxGeocodingClient from '@mapbox/mapbox-sdk/services/geocoding';
import ShowAlert from '../components/Alert/Alert';

export const IS_ANDROID = Platform.OS === 'android';
export const DEFAULT_CENTER_COORDINATE = [-76.481856, 3.006929];
export const API_KEY =
   'pk.eyJ1IjoiZGF5cm9tIiwiYSI6ImNrYTc5aXg0YzAxM2oyeXFlZWYwejU4cTYifQ.uQCDALmLyuOI-QzPxo1_EA';
const clientKey = mapboxClient({ accessToken: API_KEY });

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

export const getAddress = async (location) => {
   const geoCodingClient = mapboxGeocodingClient(clientKey);
   const {
      features: [feature],
   } = await geoCodingClient
      .reverseGeocode({
         query: [location.lon, location.lat],
         types: ['address', 'poi'],
      })
      .send()
      .then((response) => response.body);

   if (feature) {
      const { place_name: address } = feature;
      return address;
   }
   return 'Tu direccion no fue encontrada, pero utilizaremos las coordenadas para ubicarte en el mapa.';
};

export const alertCreation = (registro, error) => {
   if (registro) {
      return <ShowAlert msg={'Registro exitoso'} setE={this.hideAlert} />;
   } else if (error) {
      return (
         <ShowAlert
            msg={'Hubo un error, intente nuevamente.'}
            setE={this.hideAlert}
         />
      );
   }
   return null;
};

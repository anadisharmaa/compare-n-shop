export const errorCodes = {
  SUCCESS: 0,
  ERROR: 1,
  SQL_ERROR: 2,
  USER_ALREADY_PRESENT: 3,
  DUPLICATE: 4,
  INVALID_PASSWORD: 5,
  INVALID_USER: 6,
  USER_NOT_PRESENT: 7,
  USER_SESSION_INVALID: 8
};

export const errorCodeMessages = {
  EN_US: {
    ERROR: 'This service is currently unavailable. Please try again later!',
    SQL_ERROR: 'This service is currently unavailable. Please try again later!',
    USER_ALREADY_PRESENT: 'This user is already registered. Please try signing in!',
    DUPLICATE: '',
    INVALID_PASSWORD: 'The password you entered is incorrect!',
    INVALID_USER: 'The username/email you entered is incorrect!',
    USER_NOT_PRESENT: 'This user is not registered!',
    USER_SESSION_INVALID: 'Session Expired. Please signin again to continue!'
  },
  EN_ES: {
    ERROR: 'Este servicio no está disponible actualmente. ¡Por favor, inténtelo de nuevo más tarde!',
    SQL_ERROR: 'Este servicio no está disponible actualmente. ¡Por favor, inténtelo de nuevo más tarde!',
    USER_ALREADY_PRESENT: 'Este usuario ya está registrado. Por favor, intente iniciar sesión!',
    DUPLICATE: '',
    INVALID_PASSWORD: '¡La contraseña que ha ingresado es incorrecta!',
    INVALID_USER: 'El nombre de usuario / correo electrónico que ingresaste es incorrecto!',
    USER_NOT_PRESENT: 'Este usuario no está registrado!',
    USER_SESSION_INVALID: 'Sesión expirada. Por favor, vuelva a iniciar sesión para continuar!'
  }
};

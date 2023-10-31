

const validateEmail = ({ email, setEmailError }) => {
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|([a-zA-Z]{2,}\.[a-zA-Z]{2,})))$/

  return email && !email.match(emailRegex)
    ? setEmailError('Email not valid')
    : setEmailError('')
}

const validatePhone = ({ phone, setPhoneError }) => {
  const phoneRegex = /^(?:([0-9]{4}))[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/
  return phone && !phone.match(phoneRegex)
    ? setPhoneError('Phone Number not valid')
    : setPhoneError('')
}

const validateFirstName = ({ firstName, setFirstNameError }) => {
  return firstName && firstName.length < 1
    ? setFirstNameError('First name is too short')
    : firstName.length > 20
    ? setFirstNameError('Try to make it shorter and meaningful')
    : setFirstNameError('')
}

const validateLastName = ({ lastName, setLastNameError }) => {
  return lastName && lastName.length < 1
    ? setLastNameError('Last name is too short')
    : lastName.length > 20
    ? setLastNameError('Try to make it shorter and meaningful')
    : setLastNameError('')
}

const validateMessage = ({ message, setMessageError }) => {
  return message && message.length < 5
    ? setMessageError('message is too short')
    : message.length > 250
    ? setMessageError('Try to make shorter and meaningful')
    : setMessageError('')
}

export {
  validateEmail,
  validatePhone,
  validateFirstName,
  validateLastName,
  validateMessage,
}

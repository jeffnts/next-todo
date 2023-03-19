import * as Yup from 'yup'

import { forms } from 'consts/errors'

import { required } from 'utils/yup'

export default Yup.object({
    name: required,
    email: required.email(forms.INVALID_EMAIL),
    emailConfirmation: required.oneOf([Yup.ref('email'), forms.EMAIL_NOT_MATCH]),
    password: required.min(6, forms.INVALID_PASSWORD),
    passwordConfirmation: required.oneOf([Yup.ref('password'), forms.PASSWORD_NOT_MATCH])
})
import * as Yup from 'yup'

import { forms } from 'consts/errors'

import { required } from 'utils/yup'

export default Yup.object({
    email: required.email(forms.INVALID_EMAIL),
    password: required.min(6, forms.INVALID_PASSWORD)
})
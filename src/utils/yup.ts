import * as Yup from 'yup'

import { forms } from 'consts/errors'

export const required = Yup.string().required(forms.REQUIRED)
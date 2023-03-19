import * as Yup from 'yup'

import { required } from 'utils/yup'

export default Yup.object({
    name: required,
})
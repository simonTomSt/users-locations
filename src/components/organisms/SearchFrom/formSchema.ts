import ipRegex from 'ip-regex'
import * as Yup from 'yup'

export type FormValues = { ipAddress: string }

export const validationSchema = Yup.object().shape({
  ipAddress: Yup.string()
    .required('Ip Address/Hostname is required')
    .test('is-ip-address-or-hostname', 'Invalid IP Address', value =>
      value ? ipRegex().test(value) : false
    )
})

export const initialValues: FormValues = { ipAddress: '' }

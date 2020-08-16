import * as Yup from 'yup'

import * as Locale from '../_locale/en.json'

export default function UserformSchema() {
  return Yup.object().shape({
    username: Yup.string()
      .min(2, Locale.default.errors.minUsername)
      .max(25, Locale.default.errors.maxUsername)
      .matches(/^[a-zA-Z]*$/, {
        message: Locale.default.errors.formatUsername,
        excludeEmptyString: true,
      })
      .required(Locale.default.errors.requiredUsername),
    age: Yup.string().nullable(true).required('Please enter date of age'),
    salary: Yup.string()
      .matches(/^([1-9][0-9]{0,5}|1000000)$/, {
        message: Locale.default.errors.formatSalary,
        excludeEmptyString: true,
      })
      .required(Locale.default.errors.requiredSalary),
  })
}

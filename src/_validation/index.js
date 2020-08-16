export default function validate(getValidationSchema, state) {
  return (values) => {
    const validationSchema = getValidationSchema(values, state)
    try {
      validationSchema.validateSync(values, {abortEarly: false})
      return {}
    } catch (error) {
      return getErrorsFromValidationError(error)
    }
  }
}

function getErrorsFromValidationError(validationError) {
  const FIRST_ERROR = 0
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    }
  }, {})
}

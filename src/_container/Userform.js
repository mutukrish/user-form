import React, {useState, useEffect} from 'react'
import {FormContainer, FormHeader, SuccessMessage} from './Userform.style'
import TextInput from '../_components/FloatingInput'
import Button from '../_components/Button'
import FormGroup from '../_components/FormGroup'
import ErrorMessage from '../_components/ErrorMessage'

import {Formik, Form} from 'formik'
import DatePicker from 'react-datepicker'
import {useTranslation, withTranslation} from 'react-i18next'
import validate from '../_validation'
import UserformSchema from '../_validation/Userform'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDispatch, connect} from 'react-redux'
import {userActions, alertActions} from '../_actions'

import 'react-datepicker/dist/react-datepicker.css'

export const Userform = ({alert}) => {
  const {t} = useTranslation()
  const [formValues] = useState({
    username: '',
    age: '',
    salary: '',
  })
  const [registerResponse, setregisterResponse] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (alert.data && alert.data.id) {
      setSubmitting(false)
      setregisterResponse(alert.data)
    }
  }, [alert, registerResponse])

  const submitForm = (values) => {
    setSubmitting(true)
    dispatch(userActions.register(values))
  }

  const clearMessage = () => {
    dispatch(alertActions.clear())
    setregisterResponse({})
  }

  return (
    <FormContainer data-testid="formContainer">
      {registerResponse.id ? (
        <SuccessMessage>
          <FontAwesomeIcon icon={faCheckCircle} className="successIcon" />
          <h3>{t('registerSuccess')}</h3>
          <p>
            {t('userId')} {registerResponse.id}
          </p>
          <Button onClick={clearMessage} text={t('anotherRequest')} />
        </SuccessMessage>
      ) : (
        <Formik
          initialValues={formValues}
          validate={validate(UserformSchema)}
          onSubmit={(values) => {
            submitForm(values)
          }}
          validateOnChange
        >
          {({
            setFieldValue,
            values,
            handleChange,
            isValid,
            errors,
            touched,
            handleBlur,
          }) => (
            <Form name="Userform" autoComplete="off">
              <FormHeader>{t('userFormName')}</FormHeader>
              <FormGroup>
                <TextInput
                  id="username"
                  name="username"
                  value={values.username}
                  label={t('username')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.username && errors.username && (
                  <ErrorMessage
                    data-testid="usernameError"
                    name="username"
                    text={errors.username}
                  />
                )}
              </FormGroup>
              <FormGroup>
                <TextInput
                  id="salary"
                  name="salary"
                  value={values.salary}
                  label={t('salary')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.salary && errors.salary && (
                  <ErrorMessage text={errors.salary} />
                )}
              </FormGroup>
              <FormGroup>
                <DatePicker
                  selected={values.age}
                  id="age"
                  name="age"
                  customInput={
                    <TextInput id="dob" label={t('age')} value={values.age} />
                  }
                  onChange={(event) => {
                    setFieldValue('age', event)
                  }}
                />
                {touched.age && errors.age && (
                  <ErrorMessage text={errors.age} />
                )}
              </FormGroup>

              <Button
                isSubmitting={submitting}
                disabled={!isValid}
                type="submit"
                text={t('submit')}
              />
            </Form>
          )}
        </Formik>
      )}
    </FormContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  }
}

export default connect(mapStateToProps, null)(withTranslation()(Userform))

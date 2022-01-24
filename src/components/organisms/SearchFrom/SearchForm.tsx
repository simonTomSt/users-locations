import tw from 'twin.macro'
import { Formik, FormikHelpers, Form as FormikForm, ErrorMessage } from 'formik'
import { Paper, Button } from 'components/atoms'
import { FormField } from 'components/molecules'
import { useDispatch, useSelector } from 'react-redux'
import { useStatusState } from 'shared/hooks'
import { fetchLocation, selectSearchLocations } from 'shared/store'
import { FormValues, initialValues, validationSchema } from './formSchema'

const Form = tw(FormikForm)`
    flex
    justify-between
    items-center
    w-full
    h-36
`

export const SearchForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const { status, error } = useSelector(selectSearchLocations)
  const { pending, rejected } = useStatusState(status)

  const onSubmit = (
    { ipAddress }: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    dispatch(fetchLocation(ipAddress))
    resetForm()
  }

  return (
    <Paper className="flex">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <FormField
            name="ipAddress"
            label="Provide IP Address:"
            placeholder="Type ip to search its location"
            errorMessage={error?.info}
            error={rejected}
            className="h-24"
          />

          <Button loading={pending} type="submit" className="!ml-4 mt4">
            Search
          </Button>
        </Form>
      </Formik>
    </Paper>
  )
}

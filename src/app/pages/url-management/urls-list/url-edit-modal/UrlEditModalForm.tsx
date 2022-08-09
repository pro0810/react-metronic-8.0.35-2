import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {initialUrl, Url} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {UrlsListLoading} from '../components/loading/UrlsListLoading'
import {createUrl, updateUrl} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isUrlLoading: boolean
  url: Url
}

const editUrlSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  url: Yup.string()
    // .url(
    //   // /((http|https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //   'Enter correct url!'
    // )
    .required('Url is required'),
})

const UrlEditModalForm: FC<Props> = ({url, isUrlLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [urlForEdit] = useState<Url>({
    ...url,
    url: url.url || initialUrl.url,
    email: url.email || initialUrl.email,
    avatar: url.avatar || initialUrl.avatar,
    name: url.name || initialUrl.name,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  const urlAvatarImg = toAbsoluteUrl(`/media/${urlForEdit.avatar}`)

  const formik = useFormik({
    initialValues: urlForEdit,
    validationSchema: editUrlSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateUrl(values)
        } else {
          await createUrl(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  return (
    <>
      <form id='kt_modal_add_url_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_url_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_url_header'
          data-kt-scroll-wrappers='#kt_modal_add_url_scroll'
          data-kt-scroll-offset='300px'
        >
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='d-block fw-bold fs-6 mb-5'>Avatar</label>
            {/* end::Label */}

            {/* begin::Image input */}
            <div
              className='image-input image-input-outline'
              data-kt-image-input='true'
              style={{backgroundImage: `url('${blankImg}')`}}
            >
              {/* begin::Preview existing avatar */}
              <div
                className='image-input-wrapper w-125px h-125px'
                style={{backgroundImage: `url('${urlAvatarImg}')`}}
              ></div>
              {/* end::Preview existing avatar */}

              {/* begin::Label */}
              {/* <label
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='change'
              data-bs-toggle='tooltip'
              title='Change avatar'
            >
              <i className='bi bi-pencil-fill fs-7'></i>

              <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
              <input type='hidden' name='avatar_remove' />
            </label> */}
              {/* end::Label */}

              {/* begin::Cancel */}
              {/* <span
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='cancel'
              data-bs-toggle='tooltip'
              title='Cancel avatar'
            >
              <i className='bi bi-x fs-2'></i>
            </span> */}
              {/* end::Cancel */}

              {/* begin::Remove */}
              {/* <span
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='remove'
              data-bs-toggle='tooltip'
              title='Remove avatar'
            >
              <i className='bi bi-x fs-2'></i>
            </span> */}
              {/* end::Remove */}
            </div>
            {/* end::Image input */}

            {/* begin::Hint */}
            {/* <div className='form-text'>Allowed file types: png, jpg, jpeg.</div> */}
            {/* end::Hint */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Url</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Url'
              {...formik.getFieldProps('url')}
              type='text'
              name='url'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.url && formik.errors.url},
                {
                  'is-valid': formik.touched.url && !formik.errors.url,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isUrlLoading}
            />
            {formik.touched.url && formik.errors.url && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.url}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Email</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Email'
              {...formik.getFieldProps('email')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.email && formik.errors.email},
                {
                  'is-valid': formik.touched.email && !formik.errors.email,
                }
              )}
              type='email'
              name='email'
              autoComplete='off'
              disabled={formik.isSubmitting || isUrlLoading}
            />
            {/* end::Input */}
            {formik.touched.email && formik.errors.email && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.email}</span>
              </div>
            )}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Type</label>
            {/* end::Label */}

            {/* begin::Input */}
            {/* onst urlTypes = ['Blocked', 'Blank', 'Slow', 'Broken', 'Other'];
const urlStatus = ['Pending', 'Accepted', 'Rejected', 'Approved', 'Cancelled']; */}

            <select
              className='form-select form-select-solid fw-bolder'
              {...formik.getFieldProps('type')}
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-url-table-type-option='type'
              data-hide-search='true'
              // onChange={(e) => setRole(e.target.value)}
              // value={role}
              disabled={formik.isSubmitting || isUrlLoading}
            >
              <option></option>
              <option value='Blocked'>Blocked</option>
              <option value='Blank'>Blank</option>
              <option value='Slow'>Slow</option>
              <option value='Broken'>Broken</option>
              <option value='Other'>Other</option>
            </select>
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Status</label>
            {/* end::Label */}

            {/* begin::Input */}
            {/* onst urlTypes = ['Blocked', 'Blank', 'Slow', 'Broken', 'Other'];
const urlStatus = ['Pending', 'Accepted', 'Rejected', 'Approved', 'Cancelled']; */}

            <select
              className='form-select form-select-solid fw-bolder'
              {...formik.getFieldProps('status')}
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-url-table-status-option='status'
              data-hide-search='true'
              // onChange={(e) => setRole(e.target.value)}
              // value={role}
              disabled={formik.isSubmitting || isUrlLoading}
            >
              <option></option>
              <option value='Pending'>Pending</option>
              <option value='Accepted'>Accepted</option>
              <option value='Rejected'>Rejected</option>
              <option value='Approved'>Approved</option>
            </select>
            {/* end::Input */}
          </div>
          {/* end::Input group */}
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-urls-modal-action='cancel'
            disabled={formik.isSubmitting || isUrlLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-urls-modal-action='submit'
            disabled={isUrlLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isUrlLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isUrlLoading) && <UrlsListLoading />}
    </>
  )
}

export {UrlEditModalForm}

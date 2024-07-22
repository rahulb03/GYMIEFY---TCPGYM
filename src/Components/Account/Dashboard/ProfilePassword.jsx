import { Form, Formik } from 'formik';
// import SimpleInputField from '../InputFields/SimpleInputField';
import { YupObject, nameSchema } from '@/Utils/Validation/ValidationSchemas';
import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
import Btn from '@/Elements/Buttons/Btn';
import { useTranslation } from '@/app/i18n/client';


const ProfilePassword = () => {
    const { t } = useTranslation("common");
    return (
        <Formik
            enableReinitialize
            initialValues={{
                current_password: "",
                password: "",
                password_confirmation: ""
            }}
            validationSchema={YupObject({
                current_password: nameSchema,
                password: nameSchema,
                password_confirmation: nameSchema
            })}
            onSubmit={(values) => {
                values["_method"] = "put";
                // Put Add Or Update Logic Here
            }}>
            {({ values, setFieldValue }) => (
                <Form className="theme-form theme-form-2 mega-form">
                    <SimpleInputField nameList={[{ name: 'current_password', title: 'CurrentPassword', placeholder: t('EnterCurrentPassword'), require: "true" }, { name: 'password', title: 'Password', require: "true", placeholder: t("EnterNewPassword") }, { name: 'password_confirmation', title: 'ConfirmPassword', require: "true", placeholder: t("EnterConfirmPassword") }]} />
                    <Btn className="btn btn-theme ms-auto mt-4" type="submit" title="Save" />
                </Form>
            )}
        </Formik>
    )
}

export default ProfilePassword;
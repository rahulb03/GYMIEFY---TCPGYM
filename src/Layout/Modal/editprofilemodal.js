// import { useState } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// const EditProfileModal = ({ isOpen, toggle, accountData }) => {
//   const [formData, setFormData] = useState({ ...accountData });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     // Save the changes (you can add your save logic here)
//     console.log('Saved data:', formData);
//     toggle();
//   };

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Edit Profile</ModalHeader>
//       <ModalBody>
//         <Form>
//           <FormGroup>
//             <Label for="name">Name</Label>
//             <Input type="text" name="name" id="name" value={formData.name || ''} onChange={handleChange} />
//           </FormGroup>
//           <FormGroup>
//             <Label for="phone">Phone Number</Label>
//             <Input type="text" name="phone" id="phone" value={formData.phone || ''} onChange={handleChange} />
//           </FormGroup>
//           <FormGroup>
//             <Label for="address">Address</Label>
//             <Input type="text" name="address" id="address" value={formData.address || ''} onChange={handleChange} />
//           </FormGroup>
//         </Form>
//       </ModalBody>
//       <ModalFooter>
//         <Button color="primary" onClick={handleSave}>Save</Button>
//         <Button color="secondary" onClick={toggle}>Cancel</Button>
//       </ModalFooter>
//     </Modal>
//   );
// };

// export default EditProfileModal;



import { Form, Formik } from 'formik';
// import SimpleInputField from '../InputFields/SimpleInputField';
import { YupObject, nameSchema } from '@/Utils/Validation/ValidationSchemas';
import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
import Btn from '@/Elements/Buttons/Btn';
import { useTranslation } from '@/app/i18n/client';


const EditProfileModal = () => {
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

export default EditProfileModal;
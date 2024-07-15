// import { Field } from 'formik';
// import InputWrapper from '../../../Utils/HOC/InputWrapper';
// import { ReactstrapInput } from '../../ReactstrapFormik';

// const InputField = ({ name, ...rest }) => {
//   return <Field type='text' name={name} id={name} {...rest} component={ReactstrapInput} />;
// };
// export default InputWrapper(InputField);




import React from 'react';
import { Field } from 'formik';
import InputWrapper from '../../../Utils/HOC/InputWrapper';
import { ReactstrapInput } from '../../ReactstrapFormik';
 
import './inputfield.css'; // Import your custom CSS file

const InputField = ({ name, type, icon, onClick, ...rest }) => {
  return (
    <div className="custom-input-container">
      <Field
        type={type || 'text'}
        name={name}
        id={name}
        {...rest}
        component={ReactstrapInput}
      />
      {icon && (
        <div onClick={onClick} className="icon-container" >
         
          {icon}
         
        </div>
      )}
    </div>
  );
};

export default InputWrapper(InputField);

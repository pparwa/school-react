import * as Yup from "yup";

export const LoginValidate = Yup.object().shape({
    name:Yup.string().min(3,"اسم حداقل باید سه حرف باشد").max(12,"اسم نمیتواند بیش از12 حرف داشته باشد").required('این کادر نباید خالی باشد'),
    role:Yup.string().required('این کادر نباید خالی باشد'),
    pass:Yup.string().required('این کادر نباید خالی باشد')

})
export const registershcema = Yup.object().shape({
    name:Yup.string().min(3,"اسم حداقل باید سه حرف باشد").max(12,"اسم نمیتواند بیش از12 حرف داشته باشد").required('این کادر نباید خالی باشد'),
    lastname:Yup.string().min(3,"اسم حداقل باید سه حرف باشد").max(12,"اسم نمیتواند بیش از12 حرف داشته باشد").required('این کادر نباید خالی باشد'),
    pass:Yup.string().required('این کادر نباید خالی باشد'),
    role:Yup.string().required('این کادر نباید خالی باشد'),
    grade:Yup.string().required('این کادر نباید خالی باشد')
})

export const CardValid = Yup.object().shape({
    money:Yup.string().required('مبلغ مورد نظر باید حتما وارد شود'),
    cardnumber:Yup.string().length(16,'').required('وارد کردن شماره کارت الزامی است'),
    vnumber:Yup.string().length(4,'شماره cvv2 4رقم میباشد').required('این فیلد باید حتما تکمیل شود'),
    securitcode:Yup.string().required('کد امنیتی حتما باید وارد شود'),
    pass:Yup.string().required('وارد کردن رمز الزامی است')
})
import * as Yup from "yup"

export const schemaLogin = Yup.object().shape({
    email: Yup.string().required("O e-mail é obrigatório").email("E-mail inválido"),
    password: Yup.string()
        .required("A senha é obrigatória")
        .min(6, "A senha deve ter ao menos 6 caracteres"),
})

export const schemaSignin = Yup.object().shape({
    email: Yup.string().required("O e-mail é obrigatório").email("E-mail inválido"),
    password: Yup.string()
        .required("A senha é obrigatória")
        .min(6, "A senha deve ter ao menos 6 caracteres"),
    confirmPassword: Yup.string()
        .required("Digite a novamente a senha")
        .oneOf([Yup.ref("password")], "As senhas devem ser iguais!"),
})

export const schemaForgotPass = Yup.object().shape({
    email: Yup.string().required("O e-mail é obrigatório").email("E-mail inválido"),
})

export const schemaResetPass = Yup.object().shape({
    password: Yup.string()
        .required("A senha é obrigatória")
        .min(6, "A senha deve ter ao menos 6 caracteres"),
    confirmPassword: Yup.string()
        .required("Digite a novamente a senha")
        .oneOf([Yup.ref("password")], "As senhas devem ser iguais!"),
})

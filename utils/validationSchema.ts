import * as Yup from "yup"

export const schemaLogin = Yup.object().shape({
    email: Yup.string().required("O e-mail é obrigatório").email("E-mail inválido"),
    password: Yup.string()
        .required("A senha é obrigatória")
        .min(6, "A senha deve ter ao menos 6 caracteres"),
})

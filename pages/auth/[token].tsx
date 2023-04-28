import TextFormInput from "@/components/FormInputs/TextFormInput"
import { Button, Flex } from "@chakra-ui/react"
import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaResetPass } from "utils/validationSchema"
import AuthPagesComponents from "@/components/authPagesComponents"

export default function ResetPassword() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaResetPass),
    })

    function handleReset(data: any) {
        console.log("data", data)
    }

    return (
        <AuthPagesComponents title="REDEFINIR A SENHA">
            <form
                onSubmit={handleSubmit(handleReset)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                    width: "100%",
                }}
            >
                <TextFormInput
                    control={control}
                    validate={errors.password}
                    errors={errors.password?.message}
                    name="password"
                    label="Nova senha"
                    type="password"
                    placeHolder="Crie uma nova senha..."
                    isRequired
                />
                <TextFormInput
                    control={control}
                    validate={errors.confirmPassword}
                    errors={errors.confirmPassword?.message}
                    name="confirmPassword"
                    label="Confirmar senha"
                    type="password"
                    placeHolder="Digite novamente a senha..."
                    isRequired
                />
                <Button
                    type="submit"
                    w={"100%"}
                    colorScheme="blackAlpha"
                    isDisabled={
                        errors.password || errors.email || errors.confirmPassword
                            ? true
                            : false
                    }
                >
                    REDEFINIR A SENHA
                </Button>
            </form>
        </AuthPagesComponents>
    )
}

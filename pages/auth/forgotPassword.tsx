import TextFormInput from "@/components/FormInputs/TextFormInput"
import { Button, Center } from "@chakra-ui/react"
import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaForgotPass } from "utils/validationSchema"
import { useRouter } from "next/router"
import AuthPagesComponents from "@/components/authPagesComponents"

export default function forgotPassword() {
    const router = useRouter()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaForgotPass),
    })

    function handleForgotPass(data: any) {
        console.log("data", data)
    }

    const handleClick = () => {
        router.push("/auth/login")
    }

    return (
        <AuthPagesComponents title="ESQUECI A SENHA">
            <form
                onSubmit={handleSubmit(handleForgotPass)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                    width: "100%",
                }}
            >
                <TextFormInput
                    control={control}
                    validate={errors.email}
                    errors={errors.email?.message}
                    name="email"
                    label="Email"
                    placeHolder="Digite seu email..."
                    isRequired
                />
                <Button
                    type="submit"
                    w={"100%"}
                    colorScheme="blackAlpha"
                    isDisabled={errors.password || errors.email ? true : false}
                >
                    ENVIAR
                </Button>
            </form>
            <Center gap={"1em"} w={"100%"} color={"primary.800"}>
                Lembrou a senha?
                <Button
                    type="button"
                    w={"fit-content"}
                    variant={"link"}
                    color={"primary.900"}
                    onClick={handleClick}
                >
                    Fazer login
                </Button>
            </Center>
        </AuthPagesComponents>
    )
}

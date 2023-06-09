import TextFormInput from "@/components/FormInputs/TextFormInput"
import { Button, Flex } from "@chakra-ui/react"
import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaSignin } from "utils/validationSchema"
import { useRouter } from "next/router"
import AuthPagesComponents from "@/components/authPagesComponents"

export default function Signin() {
    const router = useRouter()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaSignin),
    })

    function handleSignin(data: any) {
        console.log("data", data)
    }

    const handleClick = () => {
        router.push("/auth/login")
    }

    return (
        <AuthPagesComponents title="CADASTRAR">
            <form
                onSubmit={handleSubmit(handleSignin)}
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
                <TextFormInput
                    control={control}
                    validate={errors.password}
                    errors={errors.password?.message}
                    name="password"
                    label="Senha"
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
                    CRIAR CONTA
                </Button>
            </form>
            <Flex gap={"1em"} w={"100%"} color={"primary.800"}>
                Já possui conta?
                <Button
                    type="button"
                    w={"fit-content"}
                    variant={"link"}
                    color={"primary.900"}
                    onClick={handleClick}
                >
                    Fazer login
                </Button>
            </Flex>
        </AuthPagesComponents>
    )
}

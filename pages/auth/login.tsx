import TextFormInput from "@/components/FormInputs/TextFormInput"
import { Button, Flex } from "@chakra-ui/react"
import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaLogin } from "utils/validationSchema"
import { useRouter } from "next/router"
import AuthPagesComponents from "@/components/authPagesComponents"

export default function Login() {
    const router = useRouter()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaLogin),
    })

    function handleLogin(data: any) {
        console.log("data", data)
    }

    const handleClick = (page: string) => {
        router.push(`/auth/${page}`)
    }

    return (
        <AuthPagesComponents title="LOGIN">
            <form
                onSubmit={handleSubmit(handleLogin)}
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
                    placeHolder="Digite sua senha..."
                    isRequired
                />
                <Button
                    type="submit"
                    w={"100%"}
                    colorScheme="blackAlpha"
                    isDisabled={errors.password || errors.email ? true : false}
                >
                    ENTRAR
                </Button>
            </form>
            <Flex gap={"1em"} w={"100%"}>
                <Button
                    type="button"
                    w={"fit-content"}
                    variant={"link"}
                    colorScheme="blackAlpha"
                    color={"primary.800"}
                    onClick={() => handleClick("forgotPassword")}
                >
                    Esqueci a senha
                </Button>
                <Button
                    type="button"
                    w={"fit-content"}
                    variant={"outline"}
                    colorScheme="blackAlpha"
                    color={"primary.800"}
                    onClick={() => handleClick("signin")}
                >
                    Cadastrar
                </Button>
            </Flex>
        </AuthPagesComponents>
    )
}

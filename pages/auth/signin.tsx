import TextFormInput from "@/components/FormInputs/TextFormInput"
import { Button, Flex, Heading, Image } from "@chakra-ui/react"
import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaSignin } from "utils/validationSchema"
import { useRouter } from "next/router"

export default function Signin() {
    const router = useRouter()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaSignin),
    })

    function handleLogin(data: any) {
        console.log("data", data)
    }

    const handleClick = () => {
        router.push("/auth/login")
    }

    return (
        <Flex bg={"primary.200"} minH={"100vh"} align={"center"} justify={"center"}>
            <Flex
                bg={"primary.500"}
                align={"center"}
                justify={"center"}
                direction={"column"}
                gap={"1em"}
                p={"2em"}
                borderRadius={"md"}
                shadow={"2xl"}
            >
                {/* <Image src="/MoneyMaster_logo.svg" alt="MoneyMaster logo" /> */}
                <Heading size={"xl"} color={"primary.900"} cursor={"default"}>
                    CADASTRAR
                </Heading>
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
                    />
                    <TextFormInput
                        control={control}
                        validate={errors.password}
                        errors={errors.password?.message}
                        name="password"
                        label="Senha"
                        type="password"
                        placeHolder="Crie uma nova senha..."
                    />
                    <TextFormInput
                        control={control}
                        validate={errors.confirmPassword}
                        errors={errors.confirmPassword?.message}
                        name="confirmPassword"
                        label="Confirmar senha"
                        type="password"
                        placeHolder="Digite novamente a senha..."
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
            </Flex>
        </Flex>
    )
}

import TextFormInput from "@/components/FormInputs/TextFormInput"
import { Button, Flex, Heading, Image } from "@chakra-ui/react"
import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaLogin } from "utils/validationSchema"

export default function Login() {
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

    return (
        <Flex bg={"primary.100"} minH={"100vh"} align={"center"} justify={"center"}>
            <Flex
                bg={"primary.500"}
                align={"center"}
                justify={"center"}
                direction={"column"}
                gap={"1em"}
                p={"2em"}
                borderRadius={"md"}
                shadow={"2xl"}
                
                w={"fit-content"}
            >
                {/* <Image src="/MoneyMaster_logo.svg" alt="MoneyMaster logo" /> */}
                <Heading size={"xl"} color={"primary.900"} cursor={"default"}>
                    LOGIN
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
                        placeHolder="Digite sua senha..."
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
                    >
                        Esqueci a senha
                    </Button>
                    <Button
                        type="button"
                        w={"fit-content"}
                        variant={"outline"}
                        colorScheme="blackAlpha"
                    >
                        Cadastrar
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

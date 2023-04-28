import { Flex, HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import React from "react"

type AuthPagesComponentsProps = {
    children: any
    title: string
}

export default function AuthPagesComponents({
    children,
    title,
}: AuthPagesComponentsProps) {
    return (
        <Flex
            bg={"primary.200"}
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            direction={"column"}
            gap={"3em"}
        >
            <VStack color={"primary.800"} cursor={"default"}>
                <Heading fontWeight={"light"} size={"4xl"}>
                    Money Master
                </Heading>
                <Text fontWeight={"light"} fontSize={"3xl"}>
                    Profissionalize suas finanças
                </Text>
            </VStack>
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
                <Heading size={"xl"} color={"primary.900"} cursor={"default"}>
                    {title}
                </Heading>
                {children}
            </Flex>
            <Image src="/MoneyMaster_logo.svg" alt="MoneyMaster logo" />
        </Flex>
    )
}

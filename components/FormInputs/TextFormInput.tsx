import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Tooltip,
} from "@chakra-ui/react"
import React, { useState } from "react"
import {
    Controller,
    Control,
    FieldValues,
    FieldError,
    Merge,
    FieldErrorsImpl,
} from "react-hook-form"

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs"

type textFormInputProps = {
    name: string
    control: Control<FieldValues, any>
    label?: string
    type?: "email" | "text" | "password"
    placeHolder?: string
    autoFocus?: boolean
    validate?: any
    errors?: any
}

export default function TextFormInput({
    name,
    control,
    label,
    type,
    placeHolder,
    autoFocus,
    validate,
    errors,
}: textFormInputProps) {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) => (
                <FormControl w={"100%"} color={errors && "red.600"} isInvalid={validate}>
                    {label && <FormLabel>{label}</FormLabel>}
                    {type === "password" ? (
                        <InputGroup>
                            <Tooltip hasArrow label={errors}>
                                <ComplexInput
                                    control={control}
                                    name={name}
                                    onChange={onChange}
                                    value={value}
                                    autoFocus={autoFocus}
                                    errors={errors}
                                    placeHolder={placeHolder}
                                    type={show ? "text" : "password"}
                                    validate={validate}
                                />
                            </Tooltip>
                            <InputRightElement>
                                <IconButton
                                    aria-label="Show Hidden Passowrd"
                                    color={errors && "red.600"}
                                    icon={
                                        show ? <BsFillEyeFill /> : <BsFillEyeSlashFill />
                                    }
                                    variant={"ghost"}
                                    colorScheme="blackAlpha"
                                    onClick={handleClick}
                                />
                            </InputRightElement>
                        </InputGroup>
                    ) : (
                        <ComplexInput
                            control={control}
                            name={name}
                            onChange={onChange}
                            value={value}
                            autoFocus={autoFocus}
                            errors={errors}
                            placeHolder={placeHolder}
                            type={type}
                            validate={validate}
                        />
                    )}
                </FormControl>
            )}
        />
    )
}

type ComplexInputProps = {
    name: string
    control: Control<FieldValues, any>
    type?: "email" | "text" | "password"
    placeHolder?: string
    autoFocus?: boolean
    validate: any
    errors: any
    value: string | number
    onChange: (...event: any[]) => void
}

function ComplexInput({
    name,
    type,
    placeHolder,
    autoFocus,
    errors,
    value,
    onChange,
}: ComplexInputProps) {
    return (
        <Tooltip hasArrow label={errors} bg={"red.100"} color={"red.800"}>
            <Input
                id={name}
                borderColor={"primary.900"}
                type={type || "text"}
                value={value}
                placeholder={placeHolder}
                autoFocus={autoFocus}
                onChange={onChange}
                _hover={{ borderColor: "none" }}
                _placeholder={{
                    color: errors ? "red.600" : "primary.700",
                    opacity: errors && 0.5,
                }}
            />
        </Tooltip>
    )
}

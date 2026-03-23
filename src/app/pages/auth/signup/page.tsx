import useSignupForm from "@forms/auth/signup.form";
import { useCallback } from "react";
import { Box, Flex, Text, Stack, Icon, Button, Input, Field, HStack } from "@chakra-ui/react";
import { PasswordInput } from "@components/ui/password-input";
import { useNavigate } from "react-router";
import type { AuthState, SignupFormData } from "@type/auth.type";
import { AuthHook } from "@hooks/auth.hook";
import useAuthStore from "@stores/auth.store";
import SubmitButton from "@components/shared/buttons/SubmitButton";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const SignupPage = () => {
    const { register, handleSubmit, formState: { errors } } = useSignupForm();
    const navigate = useNavigate();
    const { setAuth } = useAuthStore();
    const { mutateAsync: signup, isPending } = AuthHook.useSignup({
        onSuccess: (data) => {
            setAuth(data as AuthState);
            navigate("/");
        }
    });

    const onSubmit = useCallback((data: SignupFormData) => {
        signup(data);
    }, [])

    return (
        <Box 
            w="1440px" 
            h="1024px" 
            position="relative" 
            bg="gray.50"
            overflow="hidden"
        >
            {/* Background Image Layout */}
            <Box 
                w="1440px" 
                h="1024px" 
                position="absolute" 
                top="0" 
                left="0"
                backgroundImage="url('/images/auth-bg.jpg')" // Assuming a background image exists or needs to be provided
                backgroundSize="cover"
                backgroundPosition="center"
                opacity="1"
            />

            {/* Signup Form Container */}
            <Box
                w="526px"
                h="624px"
                position="absolute"
                top="200px"
                left="457px"
                bg="white"
                borderRadius="8px"
                p="32px"
                boxShadow="xl"
                zIndex="1"
            >
                <Flex 
                    direction="column" 
                    w="462px" 
                    h="560px" 
                    gap="40px"
                >
                    {/* Header Text */}
                    <Stack w="462px" h="60px" gap="4px">
                        <Text
                            w="462px"
                            h="32px"
                            fontFamily="body"
                            fontWeight="semibold"
                            fontSize="2xl"
                            lineHeight="32px"
                            letterSpacing="0%"
                            textAlign="center"
                            color="var(--gray-900, #18181B)"
                        >
                            Create Account
                        </Text>
                        <Text
                            w="462px"
                            h="24px"
                            fontFamily="body"
                            fontWeight="normal"
                            fontSize="md"
                            lineHeight="24px"
                            letterSpacing="0%"
                            textAlign="center"
                            color="#333232"
                        >
                            Join AURELIA and enjoy a seamless shopping experience.
                        </Text>
                    </Stack>

                    {/* Form and Social Buttons Container */}
                    <Stack w="462px" h="320px" gap="24px">
                        {/* Social Buttons */}
                        <HStack w="462px" h="44px" gap="10px">
                            <Button
                                w="226px"
                                h="44px"
                                variant="outline"
                                borderRadius="l2"
                                py="10px"
                                px="18px" // Spacing/4_5 is 18px
                                gap="8px"
                                borderColor="var(--border-default, #E4E4E7)"
                                _hover={{ bg: "gray.50" }}
                            >
                                <HStack w="86px" h="24px" gap="10px">
                                    <Icon as={FcGoogle} w="24px" h="24px" borderRadius="6px" />
                                    <Text
                                        w="52px"
                                        h="20px"
                                        fontFamily="body"
                                        fontWeight="normal"
                                        fontSize="sm"
                                        lineHeight="20px"
                                        color="#61677D"
                                    >
                                        Google
                                    </Text>
                                </HStack>
                            </Button>
                            <Button
                                w="226px"
                                h="44px"
                                variant="outline"
                                borderRadius="l2"
                                py="10px"
                                px="18px"
                                gap="8px"
                                borderColor="var(--border-default, #E4E4E7)"
                                _hover={{ bg: "gray.50" }}
                            >
                                <HStack w="75px" h="27px" gap="10px">
                                    <Icon as={FaApple} w="24px" h="27px" />
                                    <Text
                                        w="38px"
                                        h="27px"
                                        fontFamily="body"
                                        fontWeight="normal"
                                        fontSize="sm"
                                        lineHeight="20px"
                                        color="#61677D"
                                        display="flex"
                                        alignItems="center"
                                    >
                                        Apple
                                    </Text>
                                </HStack>
                            </Button>
                        </HStack>

                        {/* Separator */}
                        <HStack w="461.7733459472656px" h="22px" gap="12px" align="center">
                            <Box w="204.8866729736328px" h="0px" borderBottom="1px solid #E0E5EC" />
                            <Text
                                w="28px"
                                h="22px"
                                fontFamily="body"
                                fontWeight="normal"
                                fontSize="xs"
                                lineHeight="16px"
                                color="#262626"
                                textAlign="center"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Or
                            </Text>
                            <Box w="204.8866729736328px" h="0px" borderBottom="1px solid #E0E5EC" />
                        </HStack>

                        {/* Signup Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack w="462px" h="206px" gap="21px">
                                <Field.Root invalid={!!errors.name?.message}>
                                    <Input 
                                        {...register("name")} 
                                        placeholder="Full Name"
                                        h="44px"
                                        borderRadius="l2"
                                        borderColor="var(--border-default, #E4E4E7)"
                                    />
                                    <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                                </Field.Root>
                                <Field.Root invalid={!!errors.email?.message}>
                                    <Input 
                                        type="email" 
                                        {...register("email")} 
                                        placeholder="Email Address"
                                        h="44px"
                                        borderRadius="l2"
                                        borderColor="var(--border-default, #E4E4E7)"
                                    />
                                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                                </Field.Root>
                                <Field.Root invalid={!!errors.password?.message}>
                                    <PasswordInput 
                                        {...register("password")} 
                                        placeholder="Password"
                                        h="44px"
                                        borderRadius="l2"
                                        borderColor="var(--border-default, #E4E4E7)"
                                    />
                                    <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
                                </Field.Root>
                                <SubmitButton 
                                    loading={isPending} 
                                    loadingText="Signing up" 
                                    type="submit"
                                    w="full"
                                    h="44px"
                                    bg="var(--gray-900, #18181B)"
                                    color="white"
                                    borderRadius="l2"
                                >
                                    Signup
                                </SubmitButton>
                            </Stack>
                        </form>
                    </Stack>
                </Flex>
            </Box>
        </Box>
    )
}

export default SignupPage;

import useSignupForm from "@forms/auth/signup.form";
import { useCallback } from "react";
import { Box, Flex, Text, Stack, Icon, Button, Input, Field, HStack, Checkbox } from "@chakra-ui/react";
import { PasswordInput } from "@components/ui/password-input";
import { useNavigate, Link } from "react-router";
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
                backgroundImage="url('/images/abecfd74d6e16976cbe6f8b79c4e3fb82985a96c.jpg')"
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
                    gap="10px"
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
                                {/* Email Field */}
                                <Stack w="462px" h="74px" gap="6px">
                                    <Text
                                        w="95px"
                                        h="20px"
                                        fontFamily="body"
                                        fontWeight="500"
                                        fontSize="sm"
                                        lineHeight="20px"
                                        letterSpacing="0%"
                                        color="#000000"
                                    >
                                        Email Address
                                    </Text>
                                    <Field.Root invalid={!!errors.email?.message}>
                                        <Input 
                                            type="email" 
                                            {...register("email")} 
                                            placeholder="Enter your email"
                                            w="462px"
                                            h="48px"
                                            borderRadius="l2"
                                            border="1px solid"
                                            borderColor="var(--border-default, #E4E4E7)"
                                            py="10px"
                                            px="18px"
                                            fontSize="md"
                                            fontWeight="normal"
                                            lineHeight="24px"
                                            _placeholder={{
                                                color: "var(--fg-subtle, #A1A1AA)",
                                                fontSize: "md",
                                                fontWeight: "normal"
                                            }}
                                        />
                                        <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                                    </Field.Root>
                                </Stack>

                                {/* Password Field */}
                                <Stack w="462px" h="74px" gap="6px">
                                    <Text
                                        w="66px"
                                        h="20px"
                                        fontFamily="body"
                                        fontWeight="500"
                                        fontSize="sm"
                                        lineHeight="20px"
                                        letterSpacing="0%"
                                        color="#000000"
                                    >
                                        Password
                                    </Text>
                                    <Field.Root invalid={!!errors.password?.message}>
                                        <PasswordInput 
                                            {...register("password")} 
                                            placeholder="Enter your password"
                                            w="462px"
                                            h="48px"
                                            borderRadius="l2"
                                            border="1px solid"
                                            borderColor="var(--border-default, #E4E4E7)"
                                            py="10px"
                                            px="18px"
                                            fontSize="md"
                                            fontWeight="normal"
                                            lineHeight="24px"
                                            _placeholder={{
                                                color: "var(--fg-subtle, #A1A1AA)",
                                                fontSize: "md",
                                                fontWeight: "normal"
                                            }}
                                        />
                                        <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
                                    </Field.Root>
                                </Stack>

                                {/* Checkbox */}
                                <HStack w="462px" h="16px" gap="8px" align="center">
                                    <Checkbox.Root 
                                        size="sm" 
                                        defaultChecked={false}
                                    >
                                        <Checkbox.Control 
                                            w="16px" 
                                            h="16px"
                                            borderRadius="l1"
                                            bg="var(--gray-solid, #18181B)"
                                            border="none"
                                        >
                                            <Checkbox.Indicator color="white" />
                                        </Checkbox.Control>
                                    </Checkbox.Root>
                                    <HStack gap="4px" h="16px">
                                        <Text
                                            fontFamily="body"
                                            fontWeight="400"
                                            fontSize="xs"
                                            lineHeight="16px"
                                            letterSpacing="0%"
                                            color="#2E3139"
                                        >
                                            I agree to the
                                        </Text>
                                        <Text
                                            fontFamily="body"
                                            fontWeight="500"
                                            fontSize="xs"
                                            lineHeight="16px"
                                            letterSpacing="0%"
                                            color="var(--gray-900, #18181B)"
                                        >
                                            Terms & Conditions
                                        </Text>
                                    </HStack>
                                </HStack>
                            </Stack>
                        </form>

                        {/* Button and Login Section */}
                        <Stack w="462px" h="100px" gap="16px">
                            {/* Create Account Button */}
                            <SubmitButton 
                                loading={isPending} 
                                loadingText="Creating account" 
                                onClick={() => handleSubmit(onSubmit)()}
                                w="462px"
                                h="64px"
                                minW="64px"
                                bg="var(--gray-solid, #18181B)"
                                color="var(--gray-contrast, #FFFFFF)"
                                borderRadius="l2"
                                fontSize="lg"
                                fontWeight="500"
                                lineHeight="28px"
                                textAlign="center"
                                gap="12px"
                                py="2px"
                                px="28px"
                                _hover={{
                                    bg: "var(--gray-950, #09090b)"
                                }}
                            >
                                Create Account
                            </SubmitButton>

                            {/* Already have account section */}
                            <HStack w="full" h="20px" gap="4px" justify="center">
                                <Text
                                    fontFamily="body"
                                    fontWeight="400"
                                    fontSize="sm"
                                    lineHeight="20px"
                                    letterSpacing="0%"
                                    color="var(--gray-700, #3F3F46)"
                                >
                                    Already have an account?
                                </Text>
                                <Link
                                    to="/auth/login"
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        fontWeight: 500,
                                        fontSize: "0.875rem",
                                        lineHeight: "20px",
                                        color: "var(--gray-900, #18181B)",
                                        textDecoration: "none"
                                    }}
                                >
                                    Login
                                </Link>
                            </HStack>
                        </Stack>
                    </Stack>
                </Flex>
            </Box>
        </Box>
    )
}

export default SignupPage;

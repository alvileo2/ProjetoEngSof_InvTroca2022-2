import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Faça a autenticação do usuário com os dados do formulário
    // Simulando um login bem sucedido
    if (email === "user@example.com" && password === "senha123") {
      history.push("/dashboard");
    } else {
      alert("E-mail ou senha incorretos.");
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p="8"
        width={{ base: "90%", sm: "80%", md: "50%" }}
      >
        <Heading textAlign="center" size="lg" mb="8">
          Faça login na sua conta
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>
          <FormControl id="password" mt="4" isRequired>
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" mt="8" type="submit" width="full">
            Fazer login
          </Button>
        </form>
        <Divider my="8" />
        <Text textAlign="center">
          Ainda não tem uma conta?{" "}
          <Link as={ReactRouterLink} to="/signup">
            Cadastre-se aqui.
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}

export default Login;

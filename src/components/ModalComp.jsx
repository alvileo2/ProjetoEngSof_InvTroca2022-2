import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";

export const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [produto, setproduto] = useState(dataEdit.produto || "");
  const [quantidade, setquantidade] = useState(dataEdit.quantidade || "");

  const handleSave = () => {
    if (!produto || !quantidade) return;

    if (quantidadeAlreadyExists()) {
      return alert("Quantidade já cadastrado!");
    }

    if (Object.keys(dataEdit).lenght) {
      data[dataEdit.index] = { produto, quantidade };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { produto, quantidade }]
      : [...(data ? data : [])];

    localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));

    setData(newDataArray);

    onClose();
  };

  const quantidadeAlreadyExists = () => {
    if (dataEdit.quantidade !== quantidade && data?.lenght) {
      return data.find((item) => item.quantidade === quantidade);
    }

    return false;
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Produtos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Produtos</FormLabel>
                <Input
                  type="text"
                  value={produto}
                  onChange={(e) => setproduto(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Quantidade</FormLabel>
                <Input
                  type="quantidade"
                  value={quantidade}
                  onChange={(e) => setquantidade(e.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="start">
            <Button colorScheme="green" mr={3} onClick={handleSave}>
              SALVAR
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

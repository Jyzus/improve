import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useAuthStore } from "../../store/auth";

export const LoggoutModal = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { logout } = useAuthStore();
  return (
    <>
      <Button color="danger" className="w-fit mx-auto" onPress={onOpen}>
        Salir
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>Salir</ModalHeader>
          <ModalBody>
            <p className="font-semibold">¿Deseas cerrar sesión?</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="bordered" color="primary" onPress={onClose}>
              Cancelar
            </Button>
            <Button color="danger" onClick={logout}>
              Salir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

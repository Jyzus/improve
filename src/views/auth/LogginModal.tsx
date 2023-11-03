import {
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import { useAuthStore } from "../../store/auth";
import { useForm, FieldValues } from "react-hook-form";

export const LogginModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { startAsAnonymous } = useAuthStore((state) => state);

  const { handleSubmit, register } = useForm();

  const handleAnonymously = (value: FieldValues) => {
    // console.log(value);
    startAsAnonymous(value.username);
  };
  return (
    <>
      <Button onPress={onOpen} color="primary">
        Iniciar sesión
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>Iniciar sesión</ModalHeader>{" "}
          <ModalBody>
            <Tabs aria-label="Options">
              <Tab key="login" title="Iniciar Sesión">
                <Card>
                  <CardBody>
                    <Button
                      color="primary"
                      variant="bordered"
                      startContent={
                        <img src="/icons/googleIcon.svg" className="w-5 h-5" />
                      }
                    >
                      Inicia sesión con Google
                    </Button>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="anonymous" title="Anónimo">
                <Card>
                  <CardBody>
                    <form onSubmit={handleSubmit(handleAnonymously)}>
                      <Input
                        {...register("username", { required: true })}
                        type="text"
                        label="Nombre de usuario"
                      />
                      <Button className="mt-2" color="primary" type="submit">
                        Iniciar de forma anónima
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

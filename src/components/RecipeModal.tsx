import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import RecipeModalSkeleton from "./RecipeModalSkeleton";
import RecipeModalContent from "./RecipeModalContent";
import { MealDetails } from "../type";

type Props = {
  data: MealDetails | undefined;
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
};

const RecipeModal = ({ isOpen, onClose, loading, data }: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {loading ? <RecipeModalSkeleton /> : 
          // se coloca && por si es undefined no muestre nada (y no de error)
          data && <RecipeModalContent data={data} />}
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RecipeModal;

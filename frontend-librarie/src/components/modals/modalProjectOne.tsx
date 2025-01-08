import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon } from "@/components/icons.tsx";

interface IModalProject {
  isOpen: boolean; // Renommé de isOpenModal1
  onOpenChange: (isOpen: boolean) => void; // Renommé de onOpenChange1
}

const ModalProjectOne: React.FC<IModalProject> = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Portfolio</ModalHeader>
            <ModalBody className="text-justify">
              <p>
                Réalisé avec React et TypeScript suite à mes connaissances
                développer développer pendant ma formation de Concepteur
                Développeur d&#39;Application.
              </p>
              <p>
                Mise en place également d&#39;un workflow, à l&#39;aide de
                GitHubAction afin de bénéficier d&#39;une intégration et
                déploiement continue.
              </p>
              <p>
                Utilisation de NextUI pour l&#39;interface utilisateur du projet.
              </p>
            </ModalBody>
            <ModalFooter>
              <Link
                isExternal
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                })}
                href={"https://github.com/AurelieMous/portfolio-react"}
              >
                <GithubIcon size={20} />
                Mon repo
              </Link>
              <Button color="danger" variant="light" onPress={onClose}>
                Fermer
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalProjectOne;

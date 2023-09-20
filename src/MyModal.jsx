import { Modal } from "@mui/material";

import Checklist from "./Componentes/Checklists/Checklist";

const MyModal = ({ cardId, modal, handleClose }) => {
  return (
    <Modal cardId={cardId} open={modal} onClose={handleClose}>
      <div
        style={{
          width: 500,
          height: "auto",
          backgroundColor: "white",
          margin: "auto",
          marginTop: 100,
        }}
      >
        <Checklist cardId={cardId} />
      </div>
    </Modal>
  );
};

export default MyModal;

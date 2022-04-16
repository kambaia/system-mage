
import { useUI } from "@contexts/ui.context";
const CallCourierView = () => {


  const { closeModal, modalData } = useUI();
  
  async function handleConfirm() {

    closeModal();
  }
  
  return (
   <h2>Nenum ainda</h2>
  );
};

export default CallCourierView;

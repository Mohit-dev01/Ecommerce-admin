"use client";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import { useStoreModal } from "../../hooks/use-store-model";
import { useEffect } from "react";

// const modalProps = {
//   title: "track",
//   description: "clotes",
//   isOpen: true,
//   onClose: () => void
// }
const SetupPage =() => {
  // const onOpen = useStoreModal((state) => state.onOpen);
  // const isOpen = useStoreModal((state) => state.isOpen);

  // useEffect(() => {
  //   if (!isOpen) {
  //     onOpen();
  //   }
  // }, [isOpen, onOpen]);
  // return <>null</>;

  const onOpen = useStoreModal( (state) => state.onOpen)
  const isOpen = useStoreModal( (state) => state.isOpen)

  useEffect(() => {
    if(!isOpen){
      onOpen()
    }
  },[isOpen, onOpen])
return(
  <>
  
  {/* <Modal title="tesr" description="dtsuwo" isOpen onClose={() => {}}>
    children
  </Modal>; */}

 
  </>
)
  
}

export default SetupPage
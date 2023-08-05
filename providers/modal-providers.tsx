"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/modal/preview-modal";

const ModalProviders = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProviders;

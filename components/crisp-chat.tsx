"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";



export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e9e50cf0-2581-41e9-a1b8-206a3e6ea431");
  }, []);

  return null;
};
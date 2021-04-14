import React, { useState, useRef } from "react";

export type Result = {
  fileContent: string;
  isReading: boolean;
  error: any;
  trigger: () => void;
};

const createFileInput = () => {
  const $fileInput = document.createElement("input");
  $fileInput.type = "file";
  return $fileInput;
};

const useTextFileReader = (): Result => {
  const [fileContent, setFileContent] = useState<string>("");
  const [isReading, setIsReading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fileInputRef = useRef(createFileInput());

  const handleFileReader = async (e) => {
    setIsReading(true);
    try {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        setFileContent(e.target!.result as string);
      };
      reader.readAsText(file);
    } catch (error) {
      setError(error);
    } finally {
      setIsReading(false);
    }
  };

  fileInputRef.current.onchange = handleFileReader;

  const trigger = () => {
    fileInputRef.current.click();
  };

  return {
    fileContent,
    isReading,
    error,
    trigger,
  };
};

export default useTextFileReader;
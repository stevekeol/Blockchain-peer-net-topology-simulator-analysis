import React, { useState, useRef } from "react";

/**
 * @TODO
 * try-catch
 */
const fileReader = async () => {
  // const [value, setValue] = useGlobalValue();

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.onchange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = e => {
      console.log(e.target!.result)
      // setValue(e.target!.result)
      return e.target!.result;
    }
  }

  fileInput.click();
}

export default fileReader;
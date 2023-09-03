"use client";

import React from "react";
import Button, { ButtonTheme } from "@/components/Buttons/Button";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <Button theme={ButtonTheme.YELLOW} onClick={() => reset()}>
          Try again
        </Button>
      </body>
    </html>
  );
};

export default GlobalError;

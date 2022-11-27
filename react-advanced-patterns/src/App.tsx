import React from "react";
import { Box } from "./Box";

export const App = () => {
  const boxRef = React.useRef<HTMLAnchorElement | null>(null);

  return (
    <div>
      <Box
        component={"a"}
        color={"blue"}
        href="https://askmaesenior.com"
        ref={boxRef}
      >
        Sample Polymorphic Component
      </Box>
    </div>
  );
};

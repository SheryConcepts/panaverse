"use client";

import { ReactNode } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Source_Code_Pro } from "@next/font/google";
import { Comfortaa } from "@next/font/google";

const scp = Source_Code_Pro({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function Page({ children }: { children: ReactNode }) {
  const theme = extendTheme(
    {
      colors: {
        dark: {
          1: "#1e2124",
          2: "#282b30",
          3: "#36393e",
          4: "#424549",
        },
        light: {
          1: "#DF0071",
          2: "#f0028d",
          3: "#f14fa3",
          4: "#f386be",
        },
      },
    },
    {
      fonts: {
        heading: comfortaa.style.fontFamily,
        body: scp.style.fontFamily,
      },
    }
  );
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

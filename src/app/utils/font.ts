import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

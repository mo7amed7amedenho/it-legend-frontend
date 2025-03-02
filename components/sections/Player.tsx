import * as Import from "../import";
import { useTheme } from "@/app/context/ThemeContext";
export default function Player() {
  const { isChecked } = useTheme();
  return (
    <div
      className={`aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg ${
        isChecked ? "max-sm:sticky max-sm:top-0" : ""
      } `}
    >
      <Import.ReactPlayer
        url="https://www.youtube.com/watch?v=P0uaLRO6V1U"
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
}

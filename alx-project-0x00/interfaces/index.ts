export interface PillProps {
  title: string;
}

export interface ButtonProps {
  styles: string;
  size: "small" | "medium" | "large" | "full"; // Button sizes
  shape: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full"; // Button styles
}

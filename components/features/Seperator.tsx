// file: components/ui/Separator.tsx

import { cn } from "@/lib/utils"; // Assuming you have a utility for merging class names. If not, you can just use string templates.

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div
      className={cn(
       "w-11/12 mx-auto h-px bg-gray-200 my-8",
        className
      )}
      {...props}
    />
  );
}
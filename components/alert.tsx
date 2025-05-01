import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  className?: string;
}

export function Alert({ children, className }: AlertProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 p-4 border rounded-lg",
        "bg-muted/10 border-muted/20 text-muted-foreground",
        className
      )}
    >
      <AlertCircle className="h-5 w-5 text-muted-foreground" />
      <div>{children}</div>
    </div>
  );
}

interface AlertDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function AlertDescription({
  children,
  className,
}: AlertDescriptionProps) {
  return <p className={cn("text-sm leading-relaxed", className)}>{children}</p>;
}

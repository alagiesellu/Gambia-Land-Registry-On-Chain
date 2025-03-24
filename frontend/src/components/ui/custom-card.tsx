
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card = ({ children, className, hoverEffect = false }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-slate-800 rounded-xl border border-border overflow-hidden shadow-sm",
        hoverEffect && "transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CardImage = ({ src, alt, className }: CardImageProps) => (
  <div className={cn("w-full aspect-video relative overflow-hidden", className)}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent = ({ children, className }: CardContentProps) => (
  <div className={cn("p-5", className)}>{children}</div>
);

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle = ({ children, className }: CardTitleProps) => (
  <h3 className={cn("text-lg font-semibold mb-2", className)}>{children}</h3>
);

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const CardDescription = ({ children, className }: CardDescriptionProps) => (
  <p className={cn("text-muted-foreground", className)}>{children}</p>
);

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter = ({ children, className }: CardFooterProps) => (
  <div className={cn("px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-border", className)}>
    {children}
  </div>
);

export { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter };

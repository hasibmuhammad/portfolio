import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  external = false,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none rounded-full";
  
  const variants = {
    primary: "bg-foreground text-background hover:opacity-90",
    secondary: "bg-accents-2 text-foreground hover:bg-accents-3",
    outline: "border border-accents-2 hover:bg-accents-1 text-foreground",
    ghost: "hover:bg-accents-1 text-accents-6 hover:text-foreground",
  };

  const sizes = {
    sm: "h-8 px-4 text-sm",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

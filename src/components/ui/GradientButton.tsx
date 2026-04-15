import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface GradientButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const GradientButton = ({ children, to, onClick, variant = "primary", size = "md", className = "" }: GradientButtonProps) => {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variantClasses = {
    primary: "bg-gradient-brand text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02]",
    outline: "border border-primary/30 text-foreground font-medium hover:border-primary/60 hover:bg-primary/5",
    ghost: "text-muted-foreground font-medium hover:text-foreground hover:bg-secondary/50",
  };

  const base = `inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={base}>{children}</Link>;
  }
  return <button onClick={onClick} className={base}>{children}</button>;
};

export default GradientButton;

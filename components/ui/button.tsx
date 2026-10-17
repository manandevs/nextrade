import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold',
    'transition-all duration-200 select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DDC97]',
    'focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F0D]',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        // Primary CTA (brand yellow)
        default:
          'bg-[#FFD43B] text-[#0A0F0D] shadow-[0_8px_30px_rgba(255,212,59,0.25)] hover:bg-[#FFE066] hover:-translate-y-px',
        // Emerald solid
        emerald:
          'bg-[#3DDC97] text-[#0A0F0D] hover:bg-[#5BE8AB] hover:-translate-y-px',
        // White solid (navbar "Start a challenge")
        light: 'bg-white text-[#0A0F0D] hover:scale-[1.03]',
        // Outlined
        outline:
          'border border-white/40 bg-black/30 text-white hover:bg-white/10',
        // Emerald outline
        secondary:
          'border border-[#3DDC97] text-[#3DDC97] hover:bg-[#3DDC97]/15',
        // Transparent
        ghost: 'text-[#9AA8A1] hover:bg-white/10 hover:text-white',
        // Text link
        link: 'text-[#3DDC97] underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        default: 'h-10 px-5 text-[13px]',
        lg: 'h-12 px-8 text-sm',
        xl: 'h-14 px-10 text-base',
        icon: 'h-10 w-10',
      },
      shape: {
        rounded: 'rounded-xl',
        pill: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shape: 'rounded',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size, shape }), className)}
      {...props}
    />
  )
);
Button.displayName = 'Button';

export { Button };
import React from 'react'

const variants = {
  default: 'text-white hover:brightness-90',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  primary: 'bg-[var(--color-primary)] text-white hover:brightness-90',
  secondary: 'bg-[var(--color-secondary)] text-white hover:brightness-90',
  accent: 'bg-[var(--color-accent)] text-white hover:brightness-90',
  cream: 'bg-[var(--color-cream)] text-black hover:brightness-90',
} as const

type VariantKeys = keyof typeof variants

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantKeys
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  children,
  className = '',
  ...props
}) => {
  const baseClass =
    'px-2 py-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantClass = variants[variant]

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  )
}

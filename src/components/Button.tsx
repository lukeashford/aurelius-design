import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
}

function cx(...classes: Array<string | number | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, className, disabled, children, ...rest }, ref) => {
    const isDisabled = disabled || loading
    const variantClass =
      variant === 'primary'
        ? 'btn-primary'
        : variant === 'secondary'
        ? 'btn-secondary'
        : variant === 'ghost'
        ? 'btn-ghost'
        : // danger uses error background with white text per spec
          'bg-error text-white hover:bg-error/90 focus-visible:ring-2 focus-visible:ring-error focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'

    const sizeClass = `btn-${size}`

    return (
      <button
        ref={ref}
        className={cx('btn', variantClass, sizeClass, loading && 'opacity-80', className)}
        disabled={isDisabled}
        {...rest}
      >
        {loading && (
          <span className="mr-2 inline-block h-4 w-4 animate-pulse rounded-full bg-gold" aria-hidden />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

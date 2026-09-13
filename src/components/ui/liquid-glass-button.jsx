import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva('ui-button', {
  variants: {
    variant: {
      default: 'ui-button-default',
      destructive: 'ui-button-destructive',
      cool: 'ui-button-cool',
      outline: 'ui-button-outline',
      secondary: 'ui-button-secondary',
      ghost: 'ui-button-ghost',
      link: 'ui-button-link',
    },
    size: {
      default: 'ui-button-default-size',
      sm: 'ui-button-sm',
      lg: 'ui-button-lg',
      icon: 'ui-button-icon',
    },
  },
  defaultVariants: { variant: 'default', size: 'default' },
})

export const Button = React.forwardRef(function Button(
  { className, variant, size, asChild = false, ...props },
  ref,
) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})

const liquidButtonVariants = cva('liquid-button', {
  variants: {
    variant: {
      default: 'liquid-button-default',
      destructive: 'liquid-button-destructive',
      outline: 'liquid-button-outline',
      secondary: 'liquid-button-secondary',
      ghost: 'liquid-button-ghost',
      link: 'liquid-button-link',
    },
    size: {
      default: 'liquid-button-default-size',
      sm: 'liquid-button-sm',
      lg: 'liquid-button-lg',
      xl: 'liquid-button-xl',
      xxl: 'liquid-button-xxl',
      icon: 'liquid-button-icon',
    },
  },
  defaultVariants: { variant: 'default', size: 'xxl' },
})

export function LiquidButton({ className, variant, size, asChild = false, children, ...props }) {
  const child = asChild ? React.Children.only(children) : null
  const label = asChild ? child.props.children : children
  const content = (
    <>
      <span className="liquid-button-surface" aria-hidden="true" />
      <span className="liquid-button-backdrop" aria-hidden="true" />
      <span className="liquid-button-label">{label}</span>
      <GlassFilter />
    </>
  )

  if (asChild) {
    return React.cloneElement(child, {
      ...props,
      'data-slot': 'button',
      className: cn(liquidButtonVariants({ variant, size, className }), child.props.className),
      children: content,
    })
  }

  return (
    <button data-slot="button" className={cn(liquidButtonVariants({ variant, size, className }))} {...props}>
      {content}
    </button>
  )
}

function GlassFilter() {
  return (
    <svg className="liquid-button-filter" aria-hidden="true">
      <defs>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="70" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}

const colorVariants = {
  default: { outer: 'metal-default-outer', inner: 'metal-default-inner', button: 'metal-default-button', text: 'metal-light-text' },
  primary: { outer: 'metal-primary-outer', inner: 'metal-primary-inner', button: 'metal-primary-button', text: 'metal-light-text' },
  success: { outer: 'metal-success-outer', inner: 'metal-success-inner', button: 'metal-success-button', text: 'metal-light-text' },
  error: { outer: 'metal-error-outer', inner: 'metal-error-inner', button: 'metal-error-button', text: 'metal-light-text' },
  gold: { outer: 'metal-gold-outer', inner: 'metal-gold-inner', button: 'metal-gold-button', text: 'metal-light-text' },
  bronze: { outer: 'metal-bronze-outer', inner: 'metal-bronze-inner', button: 'metal-bronze-button', text: 'metal-light-text' },
}

export const MetalButton = React.forwardRef(function MetalButton(
  { children = 'Button', className, variant = 'default', ...props },
  ref,
) {
  const [isPressed, setIsPressed] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)
  const [isTouchDevice, setIsTouchDevice] = React.useState(false)
  const colors = colorVariants[variant] || colorVariants.default

  React.useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  return (
    <span className={cn('metal-button-wrap', colors.outer, isPressed && 'is-pressed', isHovered && !isTouchDevice && 'is-hovered')}>
      <span className={cn('metal-button-inner', colors.inner)} aria-hidden="true" />
      <button
        ref={ref}
        className={cn('metal-button', colors.button, colors.text, className)}
        {...props}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => {
          setIsPressed(false)
          setIsHovered(false)
        }}
        onMouseEnter={() => {
          if (!isTouchDevice) setIsHovered(true)
        }}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        onTouchCancel={() => setIsPressed(false)}
      >
        <span className={cn('metal-button-shine', isPressed && 'is-visible')} aria-hidden="true" />
        {children}
      </button>
    </span>
  )
})

export { buttonVariants, liquidButtonVariants }
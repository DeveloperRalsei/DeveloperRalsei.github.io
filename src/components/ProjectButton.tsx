import { Button, ButtonVariant, DefaultMantineColor, useMantineTheme } from '@mantine/core'

export const ProjectButton = ({
  variant,
  color,
  children,
  icon,
  iconRight,
  href
}: {
  variant?: ButtonVariant,
  color?: DefaultMantineColor
  children: React.ReactNode
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  href: string
}) => {
  const theme = useMantineTheme()

  return <Button
    variant={variant}
    component='a'
    href={href}
    color={color || theme.colors.dark[5]}
    leftSection={icon}
    rightSection={iconRight}
    target='_blank'
  >
    {children}
  </Button>
}
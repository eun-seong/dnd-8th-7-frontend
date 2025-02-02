import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { ArrowLeftIcon, ExitIcon, MoreVerticalIcon } from '@/components/Icons'
import { noop } from '@/utils'

export const buttonOptions = ['none', 'exit', 'more', 'back'] as const
type ButtonType = (typeof buttonOptions)[number]

interface Props {
  title: string
  leftButton?: ButtonType
  rightButton?: ButtonType
  onLeftButtonClick?: () => void
  onRightButtonClick?: () => void
}

const Header = ({
  title,
  leftButton = 'none',
  rightButton = 'none',
  onLeftButtonClick = noop,
  onRightButtonClick = noop,
}: Props) => {
  return (
    <header
      className={clsx(
        'fixed',
        'flex',
        'top-0',
        'left-0',
        'right-0',
        'items-center',
        'justify-center',
        'z-10',
        'w-full',
        'h-[56px]',
        'px-5',
        'bg-white',
      )}
    >
      <HeaderButton type={leftButton} onClick={onLeftButtonClick} />
      <p className="text-black text-xl font-bold min-w-[calc(100%_-_40px)] text-center">
        {title}
      </p>
      <HeaderButton type={rightButton} onClick={onRightButtonClick} />
    </header>
  )
}

const ButtonIcon = ({ type }: { type: ButtonType }) => {
  if (type === 'exit') return <ExitIcon />
  if (type === 'more') return <MoreVerticalIcon />
  if (type === 'back') return <ArrowLeftIcon />
  else return null
}

const HeaderButton = ({
  type,
  onClick,
}: PropsWithChildren<{ type: ButtonType; onClick?: () => void }>) => {
  return (
    <button type="button" className="min-w-[24px]" onClick={onClick}>
      <ButtonIcon type={type} />
    </button>
  )
}

export default Header

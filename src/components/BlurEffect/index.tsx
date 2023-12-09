import { ComponentProps } from 'react'
import { BlurEffectContainer, Circle } from './styles'

type IBlurEffectProps = ComponentProps<'div'>

export function BlurEffect({ ...props }: IBlurEffectProps) {
  return (
    <BlurEffectContainer {...props}>
      <Circle color='yellow' position='left' />
      <Circle color='blue' position='center' />
      <Circle color='green' position='right' />
    </BlurEffectContainer>
  )
}
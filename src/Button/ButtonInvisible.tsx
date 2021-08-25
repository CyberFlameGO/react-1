import styled from 'styled-components'
import {get} from '../constants'
import sx, {SxProp} from '../sx'
import {ComponentProps} from '../utils/types'
import ButtonBase, {ButtonBaseProps, ButtonSystemProps, buttonSystemProps} from './ButtonBase'

const ButtonInvisible = styled(ButtonBase)<ButtonBaseProps & ButtonSystemProps & SxProp>`
  color: ${get('colors.btn.text')};
  background-color: transparent;
  border: 0;
  border-radius: ${get('radii.2')};
  box-shadow: none;

  &:hover {
    background-color: ${get('colors.btn.hoverBg')};
  }

  &:active {
    background-color: ${get('colors.btn.selectedBg')};
  }

  &:disabled {
    background-color: transparent;
    color: ${get('colors.text.disabled')};
  }

  ${buttonSystemProps};
  ${sx}
`

export type ButtonInvisibleProps = ComponentProps<typeof ButtonInvisible>
export default ButtonInvisible

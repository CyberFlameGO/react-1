import styled from 'styled-components'
import {get} from '../constants'
import sx, {SxProp} from '../sx'
import {ComponentProps} from '../utils/types'
import ButtonBase, {ButtonBaseProps, ButtonSystemProps, buttonSystemProps} from './ButtonBase'

const ButtonInvisible = styled(ButtonBase)<ButtonBaseProps & ButtonSystemProps & SxProp>`
  color: ${get('colors.accent.fg')};
  background-color: transparent;
  border: 0;
  border-radius: ${get('radii.2')};
  box-shadow: none;

  &:disabled {
    color: ${get('colors.fg.muted')};
  }

  &:focus {
    box-shadow: ${get('shadows.btn.focusShadow')};
  }

  ${buttonSystemProps};
  ${sx}
`

export type ButtonInvisibleProps = ComponentProps<typeof ButtonInvisible>
export default ButtonInvisible

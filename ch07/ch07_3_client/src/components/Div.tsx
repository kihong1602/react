import {DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren} from 'react'
import {WidthHeight} from './WidthHeight.ts'
import {LeftRightTopBottom} from './LeftRightTopBottom.ts'
import {MinMaxWidthHeight} from './MinMaxWidthHeight.ts'


export type ReactDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type Divprops = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBottom &
  MinMaxWidthHeight & {
  src?: string
}

export const Div: FC<Divprops> = (
  {
    width, height,
    style: _style,
    src,
    className: _className,
    left, right, top, bottom,
    minWidth, maxWidth, minHeight, maxHeight,
    ...props
  }) => {
  const style = {
    ..._style,
    width, height,
    backgroundImage: src && `url(${src})`,
    left, right, top, bottom,
    minWidth, maxWidth, minHeight, maxHeight
  }
  const className = ['box-sizing', src && 'bg-gray-300', _className].join(' ')
  return <div {...props} className={className} style={style} />
}
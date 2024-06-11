import {DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren} from "react";
import {WidthHeight} from "./WidthHeight.ts";


export type ReactDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type Divprops = ReactDivProps & PropsWithChildren<WidthHeight> & {
  src?: string
}

export const Div: FC<Divprops> = (
    {width, height, style: _style, src, className: _className, ...props}) => {
  const style = {..._style, width, height, backgroundImage: src && `url(${src})`}
  const className = ['box-sizing', src && 'bg-gray-300', _className].join(' ')
  return <div {...props} className={className} style={style}/>
}
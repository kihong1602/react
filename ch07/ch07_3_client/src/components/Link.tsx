import {Link as RRLink, LinkProps as RRLinkProps, useMatch, useResolvedPath} from 'react-router-dom'
import {FC} from 'react'

export type LinkProps = RRLinkProps & {}

export const Link: FC<LinkProps> = ({className: _className, to, ...props}) => {
  const resolved = useResolvedPath(to)
  console.log('resolved', resolved)
  const match = useMatch({path: resolved.pathname, end: true})
  console.log('match', match)
  const className = [_className, match ? 'btn-active' : ''].join(' ')
  return <RRLink to={to} {...props} className={className} />
}
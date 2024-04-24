import './Link.scss'

export const Link: React.FC<{children: string, href: string}> = ({children, href}): JSX.Element => {
    return (
        <a className="link" href={href}>{children}</a>
    )
}
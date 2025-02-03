type Props = {
    title: string
    onClick?: () => void
    disabled?: boolean
}

export const Button = ({title, onClick, disabled}: Props) => {
    const isDisabled = disabled ? disabled : false

    return (<button
        onClick={onClick}
        disabled={isDisabled}>
        {title}
    </button>)
}

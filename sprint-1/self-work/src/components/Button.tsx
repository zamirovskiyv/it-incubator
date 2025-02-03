
type ButtonType = {
    title: string
    onClick?: () => void
    disabled?: boolean
}
export const Button = (props:ButtonType) => {
    return (
        <button>
            {props.title}
        </button>
    );
};

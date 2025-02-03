import React from 'react';

type ButtonProps = {
    name: string;
    callBack: () => void;
}

export const Button = (props: ButtonProps) => {
    const onClickHundler = () => {
        props.callBack();
    }

    return (
        <button onClick={onClickHundler}>
            {props.name}
        </button>
    );
};

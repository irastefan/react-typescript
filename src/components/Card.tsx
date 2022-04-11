import React, {FC} from "react";

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({variant, onClick, width, height, children}) => {
    return (
        <div onClick={() => onClick(0)} style={{
            display: 'inline-block',
            margin: '10px', 
            padding: '10px', 
            width, height, 
            background: variant === CardVariant.primary ? '#eee' : '',
            border: variant === CardVariant.outlined ? '1px solid #eee' : 'none'
            }}>
            {children}
        </div>
    )
}

export default Card
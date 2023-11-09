import { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss'
import { ButtonProps } from '../../../types/button.types';

const cn = classNames.bind(styles);


const Button: FC<ButtonProps> = ({
    label,
    buttonStyles,
    action,
    customContainerStyles
}): ReactElement  => {
    return (
        <button
            className={cn('button', { [`${buttonStyles}`]: buttonStyles })}
            onClick={action}
            style={customContainerStyles ? customContainerStyles : {}}
        >
            <span>
                {label}
            </span>
        </button>
    );
};

export { Button };
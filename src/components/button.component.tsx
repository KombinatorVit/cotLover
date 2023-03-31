import React, {ComponentProps, FC, PropsWithChildren} from 'react';
import {Button as ButtonFlowBite, Spinner} from 'flowbite-react'


interface ButtonProps {
    onClick?: ComponentProps<'button'>['onClick']
    color?: ComponentProps<typeof ButtonFlowBite>['color'];
    isLoading?: boolean
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({children, onClick, isLoading,color}) => {
    return (
        <ButtonFlowBite onClick={onClick} disabled={isLoading} color={color}>
            {isLoading ? <>
                <div className="mr-3">
                    <Spinner
                        size="sm"
                        light={true}
                    />
                </div>
                Loading ... </> : children}
        </ButtonFlowBite>


    );
};

export default Button;
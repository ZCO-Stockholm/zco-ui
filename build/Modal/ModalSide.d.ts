import React from 'react';
declare type ModalSide = 'right' | 'left';
interface ModalSideContainerProps {
    modalSide?: ModalSide;
    isActive: boolean;
    modalWidth?: string;
}
interface ModalSideProps extends ModalSideContainerProps {
    children: React.ReactNode;
}
declare const ModalSide: ({ modalSide, isActive, modalWidth, children, }: ModalSideProps) => JSX.Element;
export default ModalSide;

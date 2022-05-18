import React from 'react';
declare type MessageType = 'default' | 'error' | 'success';
interface MessageContainerProps {
    messageType?: MessageType;
    full?: boolean;
}
export declare type MessageData = {
    message: string | undefined;
    messageType: MessageType;
};
interface MessageProps extends MessageContainerProps {
    icon?: string;
    children: React.ReactNode;
}
declare const Message: ({ messageType, icon, children, full }: MessageProps) => JSX.Element;
export default Message;

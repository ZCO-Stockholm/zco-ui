import styled from 'styled-components'
import Icon from '../Icon/Icon'

type MessageType = 'default' | 'error' | 'success'

interface MessageContainerProps {
  messageType?: MessageType
}

const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  line-height: 16px;
  padding: 10px 20px;

  ${({ messageType, theme }) => {
    if (messageType === 'error') return `
      color: ${theme.colors.error};
      border: ${theme.borders.error};
    `

    if (messageType === 'success') return `
      color: ${theme.colors.success};
      border: ${theme.borders.success};
    `

    else return `
      color: ${theme.colors.secondary};
      border: ${theme.borders.regular};
    `
  }}

  svg {
    margin-right: 10px;
  }
`

interface MessageProps extends MessageContainerProps {
  icon?: string
  children: React.ReactNode
}

const Message = ({ messageType = 'default', icon, children }: MessageProps) => {
  return <MessageContainer messageType={messageType}>
    <Icon icon={icon || 'AlertCircle'} />
    <div>
      {children}
    </div>
  </MessageContainer>
}

export default Message
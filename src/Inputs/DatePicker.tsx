import React from 'react'
import styled from 'styled-components'
import OrigDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import Label from '../Typography/Label'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import { Container } from './style'
import media from '../styles/media'

const Styles = styled(Container)`
  input {
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => theme.borders.regular};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 17px 20px 16px;
    width: 100%;

    ${media.smallMax} {
      padding: 12px 15px 9px;
    }
  }

  .react-datepicker-popper {
    z-index: 1000;
  }

  .react-datepicker {
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow.primary};
    border: ${({ theme }) => theme.borders.light};
    padding: 30px;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day,
  .react-datepicker__day-name {
    width: calc(100% / 7);
    text-align: center;
    width: 30px;
    height: 30px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding-top: 1px;
  }

  .react-datepicker__day-names {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .react-datepicker__day {
    cursor: pointer;
  }

  .react-datepicker__day--today {
    border: ${({ theme }) => theme.borders.accent};
    color: ${({ theme }) => theme.colors.accent};
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.bg};
  }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  button {
    padding: 7px;
  }
`

const DatePickerHeader = ({
  monthDate,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  const month = monthDate?.toLocaleString('en', { month: 'long' })

  return <HeaderContainer>
    <Button
      buttonType="secondary"
      buttonSize="small"
      onClick={decreaseMonth}
      disabled={prevMonthButtonDisabled}
    >
      <Icon icon="ArrowLeft" />
    </Button>
    <div>{month}</div>
    <Button
      buttonType="secondary"
      buttonSize="small"
      onClick={increaseMonth}
      disabled={nextMonthButtonDisabled}
    >
      <Icon icon="ArrowRight" />
    </Button>
  </HeaderContainer>
}

interface DatePickerProps extends ReactDatePickerProps {
  label?: string
  required?: boolean
  full?: boolean
}

const DatePicker = ({ label, required, full, ...rest }: DatePickerProps) => {
  const labelFormatted = `${label}${required ? ' *' : ''}`

  return <Styles full={full}>
    {label && <Label labelSize="small" labelColor="secondary">{labelFormatted}</Label>}
    <OrigDatePicker
      {...rest}
      renderCustomHeader={DatePickerHeader}
    />
  </Styles>
}

export default DatePicker
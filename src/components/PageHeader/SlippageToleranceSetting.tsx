import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box, Button, Flex, Input, Text } from '@anpanswap/uikit'
import { ContextData } from 'contexts/Localization/types'
import { useUserSlippageTolerance } from 'state/user/hooks'
import QuestionHelper from '../QuestionHelper'

const MAX_SLIPPAGE = 5000
const RISKY_SLIPPAGE_LOW = 50
const RISKY_SLIPPAGE_HIGH = 500

const Option = styled.div`
  padding: 0 4px;
`

const Options = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${Option}:first-child {
    padding-left: 0;
  }

  ${Option}:last-child {
    padding-right: 0;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const predefinedValues = [
  { label: '0.1%', value: 0.1 },
  { label: '0.5%', value: 0.5 },
  { label: '1%', value: 1 },
]

type SlippageToleranceSettingsModalProps = {
  t: (key: string, data?: ContextData) => string
}

const SlippageToleranceSettings = ({ t }: SlippageToleranceSettingsModalProps) => {
  const [userSlippageTolerance, setUserslippageTolerance] = useUserSlippageTolerance()
  const [value, setValue] = useState(userSlippageTolerance / 100)
  const [error, setError] = useState<string | null>(null)
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = evt.target
    setValue(parseFloat(inputValue))
  }

  // Updates local storage if value is valid
  useEffect(() => {
    try {
      const rawValue = value * 100
      if (!Number.isNaN(rawValue) && rawValue > 0 && rawValue < MAX_SLIPPAGE) {
        setUserslippageTolerance(rawValue)
        setError(null)
      } else {
        setError(t('Enter a valid slippage percentage'))
      }
    } catch {
      setError(t('Enter a valid slippage percentage'))
    }
  }, [value, setError, setUserslippageTolerance, t])

  // Notify user if slippage is risky
  useEffect(() => {
    if (userSlippageTolerance < RISKY_SLIPPAGE_LOW) {
      setError(t('Your transaction may fail'))
    } else if (userSlippageTolerance > RISKY_SLIPPAGE_HIGH) {
      setError(t('Your transaction may be frontrun'))
    }
  }, [userSlippageTolerance, setError, t])

  return (
    <Box mb="16px">
      <Flex alignItems="center" mb="8px">
        <Text bold>{t('Slippage tolerance')}</Text>
        <QuestionHelper
          text={t(
            'Your transaction will revert if the price changes unfavorably by more than this percentage.'
          )}
        />
      </Flex>
      <Options>
        <Flex mb={['8px', '8px', 0]} mr={[0, 0, '8px']}>
          {predefinedValues.map(({ label, value: predefinedValue }) => {
            const handleClick = () => setValue(predefinedValue)

            return (
              <Option key={predefinedValue}>
                <Button variant={value === predefinedValue ? 'primary' : 'tertiary'} onClick={handleClick}>
                  {label}
                </Button>
              </Option>
            )
          })}
        </Flex>
        <Flex alignItems="center">
          <Option>
            <Input
              type="number"
              scale="lg"
              step={0.1}
              min={0.1}
              placeholder="5%"
              value={value}
              onChange={handleChange}
              isWarning={error !== null}
            />
          </Option>
          <Option>
            <Text fontSize="18px">%</Text>
          </Option>
        </Flex>
      </Options>
      {error && (
        <Text mt="8px" color="failure">
          {error}
        </Text>
      )}
    </Box>
  )
}

export default SlippageToleranceSettings

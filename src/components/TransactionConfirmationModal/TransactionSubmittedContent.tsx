import { ChainId } from '@anpanswap-libs/sdk'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Button, LinkExternal } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { ArrowUpCircle } from 'react-feather'
import { AutoColumn } from '../Column'
import { getBscScanLink } from '../../utils'
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers'

type TransactionSubmittedContentProps = {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
}

const TransactionSubmittedContent = ({ onDismiss, chainId, hash }: TransactionSubmittedContentProps) => {
  const theme = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>{t('Transaction Submitted')}</ContentHeader>
        <ConfirmedIcon>
          <ArrowUpCircle strokeWidth={0.5} size={97} color={theme.colors.primary} />
        </ConfirmedIcon>
        <AutoColumn gap="8px" justify="center">
          {chainId && hash && (
            <LinkExternal href={getBscScanLink(chainId, hash, 'transaction')}>{t('View on BscScan')}</LinkExternal>
          )}
          <Button onClick={onDismiss} mt="20px">
          {t('Close')}
          </Button>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default TransactionSubmittedContent

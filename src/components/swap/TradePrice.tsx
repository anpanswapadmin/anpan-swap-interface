import React from 'react'
import { Price } from '@anpanswap-libs/sdk'
import { SyncAltIcon, Text } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { StyledBalanceMaxMini } from './styleds'

interface TradePriceProps {
  price?: Price
  showInverted: boolean
  setShowInverted: (showInverted: boolean) => void
}

export default function TradePrice({ price, showInverted, setShowInverted }: TradePriceProps) {
  const formattedPrice = showInverted ? price?.toSignificant(6) : price?.invert()?.toSignificant(6)
  const { t } = useTranslation()

  const show = Boolean(price?.baseCurrency && price?.quoteCurrency)
  const label = showInverted
    ? 
    t('%assetA% per %assetB%', {
      assetA: price?.quoteCurrency?.symbol ?? '',
      assetB: price?.baseCurrency?.symbol ?? '',
    })
    : 
    t('%assetA% per %assetB%', {
      assetA: price?.baseCurrency?.symbol ?? '',
      assetB: price?.quoteCurrency?.symbol ?? '',
    })

  return (
    <Text fontSize="14px" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      {show ? (
        <>
          {formattedPrice ?? '-'} {label}
          <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
            <SyncAltIcon width="20px" color="primary" />
          </StyledBalanceMaxMini>
        </>
      ) : (
        '-'
      )}
    </Text>
  )
}

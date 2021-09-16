import React from 'react'
import styled from 'styled-components'
import { LinkExternal, Flex, Button } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-between;
    flex-direction: row;
  }
`

const Header = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Flex flexDirection={['column', 'column', 'row']} alignItems="center">
        <LinkExternal
          href="https://www.binance.org/en/bridge?utm_source=AnpanSwap"
          ml={[0, 0, '0px']}
          mt={['20px', '20px', 0]}
          mb={['8px', '8px', 0]}
        >
          {t('Convert ERC-20 to BEP-20')}
        </LinkExternal>
      </Flex>
      <Flex
        flexGrow={1}
        alignItems="center"
        width={['100%', '100%', '100%', 'auto']}
        justifyContent={['center', 'center', 'center', 'flex-end']}
      >
        <Button
          id="clickExchangeHelp"
          as="a"
          external
          href="https://docs.anpanswap.finance/#/products/anpanswap-exchange/exchange"
          variant="primary"
          height="32px"
        >
          {t('Need help ?')}
        </Button>
      </Flex>
    </Wrapper>
  )
}

export default Header

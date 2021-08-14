import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Wrapper, Section, BottomSection, ContentHeader } from './helpers'

type ConfirmationModalContentProps = {
  
  onDismiss: () => void
  topContent: () => React.ReactNode
  bottomContent: () => React.ReactNode
}

const ConfirmationModalContentA = ({bottomContent, onDismiss, topContent }: ConfirmationModalContentProps) => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>{t('Confirm Swap')}</ContentHeader>
        {topContent()}
      </Section>
      <BottomSection gap="12px">{bottomContent()}</BottomSection>
    </Wrapper>
  )
}

export default ConfirmationModalContentA

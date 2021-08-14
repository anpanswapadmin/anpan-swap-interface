import React from 'react'
import { Modal } from '@anpanswap/uikit'
import { ContextData } from 'contexts/Localization/types'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'
import AudioSetting from './AudioSetting'


type SettingsModalProps = {
  onDismiss?: () => void
  t: (key: string, data?: ContextData) => string
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss, t }: SettingsModalProps) => {
  return (
    <Modal title={t('Settings')} onDismiss={onDismiss}>
      <SlippageToleranceSetting t={t} />
      <TransactionDeadlineSetting t={t} />
      <AudioSetting t={t} />
    </Modal>
  )
}

export default SettingsModal

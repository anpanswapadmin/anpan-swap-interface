import React from 'react'
import { Box, Flex, Text, AnpansToggle, useMatchBreakpoints } from '@anpanswap/uikit'
import { ContextData } from 'contexts/Localization/types'
import { useAudioModeManager } from 'state/user/hooks'

type AudioSettingModalProps = {
  t: (key: string, data?: ContextData) => string
}

const AudioSetting = ({ t }: AudioSettingModalProps) => {
  const { isSm, isXs } = useMatchBreakpoints()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()

  return (
    <Box mb="16px">
      <Flex alignItems="center" mb="8px">
        <Text bold>{t('Audio')}</Text>
      </Flex>
      <Box>
        <AnpansToggle scale={isSm || isXs ? 'sm' : 'md'} checked={audioPlay} onChange={toggleSetAudioMode} />
      </Box>
    </Box>
  )
}

export default AudioSetting

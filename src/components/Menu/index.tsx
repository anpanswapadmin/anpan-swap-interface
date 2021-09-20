import React from 'react'
import { Menu as UikitMenu} from '@anpanswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import config from './config'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const profile = useGetLocalProfile()
  const { currentLanguage, setLanguage, t } = useTranslation()

  return (
    <UikitMenu
      links={config(t)}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      profile={profile}
      {...props}
    />
  )
}

export default Menu

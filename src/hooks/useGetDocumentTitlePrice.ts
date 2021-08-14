import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { ANPAN } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const anpanPriceUsd = priceData ? parseFloat(priceData.data[ANPAN.address].price) : 0

  const anpanPriceUsdString =
    Number.isNaN(anpanPriceUsd) || anpanPriceUsd === 0
      ? ''
      : ` - $${anpanPriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `AnpanSwap${anpanPriceUsdString}`
  }, [anpanPriceUsdString])
}
export default useGetDocumentTitlePrice

import React from 'react'
import { withTranslation } from '../../i18n'

const FooterComponent = () => {

  return (
    <div>
      Footer
    </div>
  )
}

FooterComponent.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation()(FooterComponent)

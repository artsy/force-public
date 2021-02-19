import React from "react"
import { AppContainer } from "v2/Apps/Components/AppContainer"
import { createFragmentContainer, graphql } from "react-relay"
import { Title } from "react-head"
import { PaymentApp_me } from "v2/__generated__/PaymentApp_me.graphql"
import { data as sd } from "sharify"
import { Box } from "@artsy/palette"
import { UserSettingsPaymentsFragmentContainer as UserSettingsPayments } from "v2/Components/Payment/UserSettingsPayments"
import { UserSettingsAddressesFragmentContainer as UserSettingsAddresses } from "v2/Components/UserSettings/UserSettingsAddresses"
// import { UserSettingsAddressesFragmentContainer as UserSettingsAddresses } from "v2/Components/UserSettings/UserSettingsAddresses"
import { UserSettingsTabs } from "v2/Components/UserSettings/UserSettingsTabs"

export interface PaymentAppProps {
  me: PaymentApp_me
}

const PaymentApp: React.FC<PaymentAppProps> = props => {
  const { me } = props

  // FIXME: the margins for Boxes below are added to make it consistent with
  // the purchase app. We need to move these to a component when we move all tabs
  // to apps
  return (
    <AppContainer>
      <Title>My payments | Artsy</Title>
      <Box mx={[1, 4]}>
        <Box mb={2} mt={1}>
          <UserSettingsTabs route={sd?.CURRENT_PATH} username={me?.name} />
        </Box>
        <UserSettingsAddresses
          me={me}
          addressCount={me?.addressCount?.totalCount}
        />
        <UserSettingsPayments me={me} />
      </Box>
    </AppContainer>
  )
}

export const PaymentAppFragmentContainer = createFragmentContainer(PaymentApp, {
  me: graphql`
    fragment PaymentApp_me on Me {
      name
      ...UserSettingsAddresses_me
      ...UserSettingsPayments_me
      addressCount: addressConnection {
        totalCount
      }
    }
  `,
})

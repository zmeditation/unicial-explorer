import { fetchFlags } from '@dcl/feature-flags'
import { setFeatureFlags } from '../state/actions'
import { store } from '../state/redux'
import { FF_APPLICATION_NAME } from '../state/types'
import { callOnce } from '../utils/callOnce'

export const initializeFeatureFlags = callOnce(async () => {
  // const ff = await fetchFlags({ applicationName: FF_APPLICATION_NAME })
  const ff = {
    flags: {
      'explorer-asset_bundles': true,
      'explorer-emotes_customization': true,
      'explorer-parcel-denylist': true,
      'explorer-procedural_skybox': true,
      'explorer-rollout-unity-renderer-version': true,
      'explorer-tutorial': true,
      'explorer-unsafe-request': true,
      'explorer-wearable_asset_bundles': true
    },
    variants: {
      'explorer-parcel-denylist': { name: 'all', payload: { type: 'string', value: '-27,-47' }, enabled: true },
      'explorer-rollout-unity-renderer-version': {
        name: '1.0.7792',
        payload: {
          type: 'json',
          value: '{"resolved": "https://cdn.decentraland.org/@dcl/unity-renderer/1.0.7792", "version": "1.0.7792" }'
        },
        enabled: true
      }
    }
  }
  store.dispatch(setFeatureFlags(ff))
})

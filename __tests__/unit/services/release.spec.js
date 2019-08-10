import nock from 'nock'
import errorCapturer from '../__utils__/error-capturer'

import release from '@/services/release'

const githubApiBase = 'https://api.github.com'
const releaseApiUrl = '/repos/blockpool-io/BPL-desktop/releases/latest'
const releaseUrl = 'https://github.com/blockpool-io/BPL-desktop/releases/latest'

beforeEach(() => {
  nock.cleanAll()
})

describe('Services > Release', () => {
  describe('latestReleaseApiUrl', () => {
    it('returns the URL of the latest release API endpoint', () => {
      expect(release.latestReleaseApiUrl).toEqual(`${githubApiBase}${releaseApiUrl}`)
    })
  })

  describe('latestReleaseUrl', () => {
    it('returns the URL of the latest release endpoint', () => {
      expect(release.latestReleaseUrl).toEqual(releaseUrl)
    })
  })

  describe('fetchLatestRelease', () => {
    it('should fetch the latest published release', async () => {
      const data = { tag_name: '2.0.0' }

      nock(githubApiBase)
        .get(releaseApiUrl)
        .reply(200, data)

      expect(await release.fetchLatestRelease()).toEqual(data)
    })

    describe('when the request or parsing fails', () => {
      it('should throw the Error', async () => {
        nock(githubApiBase)
          .persist()
          .get(releaseApiUrl)
          .reply(500)

        expect(await errorCapturer(release.fetchLatestRelease())).toThrow(/500/)
      })
    })
  })
})

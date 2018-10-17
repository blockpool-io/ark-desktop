const hooks = require('../hooks')

xdescribe('Accessibility', () => {
  hooks.createApp.bind(this)()

  before(() => {
    return hooks.beforeBlock.bind(this)()
  })

  after(() => {
    return hooks.afterBlock.bind(this)()
  })

  // TODO fix aria
  it('there are not any accessibility warnings or errors', () => {
    // Audit rules: https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules
    const options = {
      ignoreRules: ['AX_COLOR_01', 'AX_TITLE_01']
    }

    return this.app.client.windowByIndex(0)
      .auditAccessibility(options).then((audit) => {
        if (audit.failed) {
          throw Error('Failed accessibility audit\n' + audit.message)
        }
      })
  })

  // NOTE: this code could be used to check dynamic elements
  // beforeEach(() => {
  //
  //   app.client.addCommand('selectSection', (section) => {
  //     return this.click('button[data-section="' + section + '"]').pause(100)
  //       .waitForVisible('#' + section + '-section')
  //   })
  //
  //   this.app.client.addCommand('auditSectionAccessibility', (section, options) => {
  //     if (! options)
  //       options = {}
  //
  //     // Audit rules: https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules
  //     if (! options.ignoreRules)
  //       options.ignoreRules = ['AX_COLOR_01', 'AX_TITLE_01']
  //
  //     return this.selectSection(section)
  //       .auditAccessibility(options).then((audit) => {
  //         if (audit.failed)
  //           throw Error(section + ' section failed accessibility audit\n' + audit.message)
  //       })
  //   })
  // })
})

import '../src/shared/styles/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    exclude: ['className']
  },
  layout: 'centered'
}

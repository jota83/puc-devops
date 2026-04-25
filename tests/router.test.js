import router from '../src/router'

test('Router possui rotas', () => {
  const routes = router.getRoutes()
  expect(routes.length).toBeGreaterThan(0)
})
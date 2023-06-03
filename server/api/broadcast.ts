export default eventHandler(async () => {
  sseHooks.callHook("message", "Hello World!")

  return null
})

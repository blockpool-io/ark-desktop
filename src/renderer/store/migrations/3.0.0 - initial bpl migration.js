export default store => {
  console.log('Welcome to Blockpool...')

  // All successful migrations should update this property
  store.dispatch('app/setLatestAppliedMigration', '3.0.0')
}

// priority: 0

JEIEvents.hideItems(event => {
  var hiddenSurvivalistSawItems = [
    'survivalistessentials:basic_saw',
    'survivalistessentials:basic_saw_blade',
    'survivalistessentials:sharp_saw',
    'survivalistessentials:sharp_saw_blade'
  ]

  hiddenSurvivalistSawItems.forEach(item => {
    event.hide(item)
  })
})

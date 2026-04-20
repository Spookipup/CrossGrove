// priority: 885

ServerEvents.recipes(event => {
  // Crossroads material conversions are replaced by CrossGrove's stock and metallurgy chain.
  event.remove({ id: /^crossroads:base_materials\/(bronze|tin|raw_tin|copper|copshowium).+/ })
  event.remove({ id: /^crossroads:(smelting|blasting)\/(clump|dust|gravel)_(copper|gold|iron|tin)$/ })
  event.remove({ id: /^crossroads:(smelting|blasting)\/(raw_tin|tin_ore|copper_ore)$/ })
  event.remove({ id: /^crossroads:mill\/(raw|ingot|ore)_(copper|gold|iron|tin)$/ })

  // These pieces need authored gates or replacement machines before beta.
  event.remove({ id: 'crossroads:dynamo' })
  event.remove({ id: 'crossroads:water_centrifuge' })
  event.remove({ id: 'crossroads:winding_table' })
  event.remove({ id: /^crossroads:mechanisms\/(toggle_gear|toggle_gear_src|inv_toggle_gear|inv_toggle_gear_src|clutch|inv_clutch)_.+/ })
})

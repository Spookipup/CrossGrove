// priority: 900

ServerEvents.recipes(event => {
  event.remove({ id: /^crossroads:mechanisms\/(axle|axle_mount|small_gear|small_gear_single|large_gear|large_gear_single)_.+/ })

  CG_CROSSROADS_GEAR_METALS.forEach(metal => {
    event.shaped(cgCrossroadsMaterialStack('crossroads:axle', metal, 2), [
      ' R ',
      'RWR',
      ' R '
    ], {
      R: cgMetalFormIngredient('light_rods', metal),
      W: 'gtceu:wood_plate'
    }).id('crossgrove:metal_forms/crossroads/' + metal + '_axle_from_light_rod')

    event.shaped(cgCrossroadsMaterialStack('crossroads:axle_mount', metal, 8), [
      'PPP',
      'S S',
      ' P '
    ], {
      P: cgMetalFormIngredient('light_plates', metal),
      S: 'gtceu:wood_screw'
    }).id('crossgrove:metal_forms/crossroads/' + metal + '_axle_mount_from_light_plate')

    event.shapeless(cgCrossroadsMaterialItem('crossroads:gear_base', metal), [
      cgMetalFormIngredient('plates', metal),
      '#crossgrove:tools/files'
    ]).id('crossgrove:metal_forms/crossroads/' + metal + '_gear_from_plate')

    event.shapeless(cgCrossroadsMaterialItem('crossroads:gear_base_large', metal), [
      cgMetalFormIngredient('heavy_plates', metal),
      cgMetalFormIngredient('heavy_plates', metal),
      '#crossgrove:tools/files'
    ]).id('crossgrove:metal_forms/crossroads/' + metal + '_large_gear_from_double_plate')
  })
})

ServerEvents.tags('item', event => {
  CG_FORM_METALS.forEach(metal => {
    Object.keys(CG_FORM_ITEM_PATTERNS).forEach(form => {
      event.add(cgMetalFormTag(form, metal), cgMetalFormItem(metal, form))
    })

    Object.keys(CG_BILLET_ITEM_PATTERNS).forEach(form => {
      event.add(cgMetalFormTag(form, metal), cgMaterialItem(metal, CG_BILLET_ITEM_PATTERNS[form]))
    })
  })

  event.add('crossgrove:tools/files', [
    '#forge:tools/files',
    '#forge:tools/file'
  ])

  event.add('crossgrove:metals/basic', CG_BASIC_METALS.map(metal => '#forge:ingots/' + metal))
  event.add('crossgrove:metals/basic_alloys', CG_BASIC_ALLOYS.map(metal => '#forge:ingots/' + metal))

  CG_BASIC_METALS.forEach(metal => {
    Object.keys(CG_ORE_PROCESSING_ITEM_PATTERNS).forEach(form => {
      event.add(cgMetalFormTag(form, metal), cgMaterialItem(metal, CG_ORE_PROCESSING_ITEM_PATTERNS[form]))
    })

    event.add('crossgrove:ore_processing/raw_materials/' + metal, '#forge:raw_materials/' + metal)
    event.add('crossgrove:ore_processing/crushed_ores/' + metal, '#forge:crushed_ores/' + metal)
  })
})

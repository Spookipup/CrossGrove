// priority: 900

function cgCrossroadsBearingLiner(metal) {
  if (metal === 'iron' || metal === 'steel') {
    return 'bronze'
  }

  return null
}

ServerEvents.recipes(event => {
  event.remove({ id: /^crossroads:mechanisms\/(axle|axle_mount|small_gear|small_gear_single|large_gear|large_gear_single)_.+/ })

  if (Item.exists('gtceu:bronze_wire_cutter')) {
    event.shaped('gtceu:bronze_wire_cutter', [
      'P P',
      ' R ',
      'S S'
    ], {
      P: '#forge:plates/bronze',
      R: cgMetalFormIngredient('light_rods', 'bronze'),
      S: 'gtceu:wood_screw'
    }).id('crossgrove:metal_forms/tools/bronze_wire_cutter')
  }

  CG_FORM_METALS.forEach(metal => {
    event.shapeless('2x ' + cgMetalFormItem(metal, 'light_rods'), [
      cgMetalFormIngredient('rods', metal),
      '#crossgrove:tools/files'
    ]).id('crossgrove:metal_forms/stock/' + metal + '_light_rods_from_rod')

    event.shapeless('2x ' + cgMetalFormItem(metal, 'light_plates'), [
      cgMetalFormIngredient('plates', metal),
      '#crossgrove:tools/files'
    ]).id('crossgrove:metal_forms/stock/' + metal + '_light_plates_from_plate')

    event.shaped(cgMetalFormItem(metal, 'heavy_plates'), [
      'P',
      'P',
      'H'
    ], {
      P: cgMetalFormIngredient('plates', metal),
      H: '#crossgrove:tools/hammers'
    }).id('crossgrove:metal_forms/stock/' + metal + '_double_plate_from_plates')

    event.shapeless(cgMetalFormItem(metal, 'threaded_rods'), [
      cgMetalFormIngredient('light_rods', metal),
      '#crossgrove:tools/files'
    ]).id('crossgrove:metal_forms/stock/' + metal + '_threaded_rod_from_light_rod')

    event.shapeless('2x ' + cgMetalFormItem(metal, 'heavy_wires'), [
      cgMetalFormIngredient('light_rods', metal),
      '#crossgrove:tools/cutters'
    ]).id('crossgrove:metal_forms/stock/' + metal + '_heavy_wire_from_light_rod')

    event.shapeless('2x ' + cgMetalFormItem(metal, 'fine_wires'), [
      cgMetalFormIngredient('heavy_wires', metal),
      '#crossgrove:tools/cutters'
    ]).id('crossgrove:metal_forms/stock/' + metal + '_fine_wire_from_heavy_wire')

    event.shapeless('2x ' + cgMetalFormItem(metal, 'bolts'), [
      cgMetalFormIngredient('threaded_rods', metal),
      '#crossgrove:tools/cutters'
    ]).id('crossgrove:metal_forms/stock/' + metal + '_bolts_from_threaded_rod')

    event.shapeless(cgMetalFormItem(metal, 'screws'), [
      cgMetalFormIngredient('bolts', metal),
      '#crossgrove:tools/files'
    ]).id('crossgrove:metal_forms/stock/' + metal + '_screw_from_bolt')
  })

  CG_CROSSROADS_GEAR_METALS.forEach(metal => {
    event.shaped(cgCrossroadsMaterialStack('crossroads:axle', metal, 2), [
      ' R ',
      'RWR',
      ' R '
    ], {
      R: cgMetalFormIngredient('light_rods', metal),
      W: 'gtceu:wood_plate'
    }).id('crossgrove:metal_forms/crossroads/' + metal + '_axle_from_light_rod')

    var bearingLiner = cgCrossroadsBearingLiner(metal)
    if (bearingLiner) {
      event.shaped(cgCrossroadsMaterialStack('crossroads:axle_mount', metal, 8), [
        'PPP',
        'B B',
        ' S '
      ], {
        B: cgMetalFormIngredient('light_plates', bearingLiner),
        P: cgMetalFormIngredient('light_plates', metal),
        S: 'gtceu:wood_screw'
      }).id('crossgrove:metal_forms/crossroads/' + metal + '_axle_mount_with_' + bearingLiner + '_bearing')
    } else {
      event.shaped(cgCrossroadsMaterialStack('crossroads:axle_mount', metal, 8), [
        'PPP',
        'S S',
        ' P '
      ], {
        P: cgMetalFormIngredient('light_plates', metal),
        S: 'gtceu:wood_screw'
      }).id('crossgrove:metal_forms/crossroads/' + metal + '_axle_mount_from_light_plate')
    }

    event.shaped(cgCrossroadsMaterialItem('crossroads:gear_base', metal), [
      'RPR',
      'PWP',
      'RPR'
    ], {
      P: cgMetalFormIngredient('plates', metal),
      R: cgMetalFormIngredient('rods', metal),
      W: '#crossgrove:tools/wrenches'
    }).id('crossgrove:metal_forms/crossroads/' + metal + '_gear_from_plates_and_rods')

    event.shaped(cgCrossroadsMaterialItem('crossroads:gear_base_large', metal), [
      'RPR',
      'PWP',
      'RPR'
    ], {
      P: cgMetalFormIngredient('heavy_plates', metal),
      R: cgMetalFormIngredient('rods', metal),
      W: '#crossgrove:tools/wrenches'
    }).id('crossgrove:metal_forms/crossroads/' + metal + '_large_gear_from_heavy_plates_and_rods')
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
    '#forge:tools/file',
    '#gtceu:tools/crafting_files'
  ])

  event.add('crossgrove:tools/hammers', [
    '#forge:tools/hammers',
    '#forge:tools/hammer',
    '#gtceu:tools/crafting_hammers'
  ])

  event.add('crossgrove:tools/cutters', [
    '#forge:tools/cutters',
    '#forge:tools/cutter',
    '#forge:tools/wire_cutters',
    '#forge:tools/wire_cutter',
    '#gtceu:tools/crafting_wire_cutters'
  ])
  cgAddExisting(event, 'crossgrove:tools/cutters', [
    'gtceu:bronze_wire_cutter',
    'gtceu:iron_wire_cutter',
    'gtceu:steel_wire_cutter'
  ])

  event.add('crossgrove:tools/wrenches', [
    '#forge:tools/wrenches',
    '#forge:tools/wrench',
    '#gtceu:tools/crafting_wrenches'
  ])
  cgAddExisting(event, 'crossgrove:tools/wrenches', [
    'essentials:wrench',
    'gtceu:bronze_wrench',
    'gtceu:iron_wrench',
    'gtceu:steel_wrench'
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

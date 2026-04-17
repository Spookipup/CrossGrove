// priority: 900

var CG_BASIC_METALS = [
  'copper',
  'tin',
  'iron',
  'zinc',
  'lead',
  'nickel',
  'gold'
]

var CG_BASIC_ALLOYS = [
  'bronze',
  'brass',
  'steel',
  'cupronickel'
]

var CG_FORM_METALS = CG_BASIC_METALS.concat(CG_BASIC_ALLOYS)

var CG_CROSSROADS_GEAR_METALS = [
  'bronze',
  'copper',
  'gold',
  'iron',
  'tin'
]

var CG_FORM_ITEM_PATTERNS = {
  metal_sponges: '%s_metal_sponge',
  hot_ingots: 'hot_%s_ingot',
  heavy_plates: 'double_%s_plate',
  plates: '%s_plate',
  light_plates: 'light_%s_plate',
  rods: '%s_rod',
  light_rods: 'light_%s_rod',
  threaded_rods: 'threaded_%s_rod',
  heavy_wires: 'heavy_%s_wire',
  fine_wires: 'fine_%s_wire',
  bolts: '%s_bolt',
  screws: '%s_screw'
}

var CG_BILLET_ITEM_PATTERNS = {
  small_raw_billets: 'small_raw_%s_billet',
  raw_billets: 'raw_%s_billet',
  large_raw_billets: 'large_raw_%s_billet',
  small_billets: 'small_%s_billet',
  billets: '%s_billet',
  large_billets: 'large_%s_billet',
  small_precision_billets: 'small_precision_%s_billet',
  precision_billets: 'precision_%s_billet',
  large_precision_billets: 'large_precision_%s_billet'
}

function cgMaterialItem(metal, pattern) {
  return 'gtceu:' + pattern.replace('%s', metal)
}

function cgMetalFormItem(metal, form) {
  return cgMaterialItem(metal, CG_FORM_ITEM_PATTERNS[form])
}

function cgMetalFormTag(form, metal) {
  return 'crossgrove:metal_forms/' + form + '/' + metal
}

function cgCrossroadsMaterialItem(item, material) {
  return Item.of(item, '{material:"' + material + '"}')
}

function cgCrossroadsMaterialStack(item, material, count) {
  return Item.of(item, count, '{material:"' + material + '"}')
}

function cgMetalFormIngredient(form, metal) {
  return '#' + cgMetalFormTag(form, metal)
}

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
})

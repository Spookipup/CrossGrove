// priority: 0

ServerEvents.recipes(event => {
  function lso(id) {
    return 'legendarysurvivaloverhaul:' + id
  }

  function remove(id) {
    event.remove({ id: lso(id) })
  }

  [
    'purified_water_bottle_from_blasting_potion',
    'purified_canteen_from_purification_blasting_canteen',
    'purified_large_canteen_from_purification_blasting_large_canteen'
  ].forEach(remove)

  remove('canteen')
  event.shaped(lso('canteen'), [
    ' P ',
    'L L',
    'LLL'
  ], {
    P: '#forge:plates/iron',
    L: 'minecraft:leather'
  }).id('crossgrove:lso/canteen')

  remove('large_canteen')
  event.shaped(lso('large_canteen'), [
    ' R ',
    'SCS',
    'LLL'
  ], {
    R: 'gtceu:lv_fluid_regulator',
    S: '#forge:plates/steel',
    C: lso('canteen'),
    L: 'minecraft:leather'
  }).id('crossgrove:lso/large_canteen')

  event.shaped(lso('water_purifier'), [
    'GFG',
    'PCP',
    'GFG'
  ], {
    G: '#forge:glass',
    F: 'gtceu:lv_fluid_regulator',
    P: '#forge:plates/iron',
    C: 'minecraft:charcoal'
  }).id('crossgrove:lso/water_purifier')

  remove('sewing_table')
  event.shaped(lso('sewing_table'), [
    'PPP',
    'MSP',
    'WWW'
  ], {
    P: '#forge:plates/iron',
    M: 'gtceu:lv_electric_motor',
    S: 'minecraft:string',
    W: '#crossgrove:raw_wood_planks'
  }).id('crossgrove:lso/sewing_table')

  remove('thermometer')
  event.shaped(lso('thermometer'), [
    'GGG',
    'RSR',
    'IPI'
  ], {
    G: '#forge:glass',
    R: 'minecraft:redstone',
    S: 'gtceu:lv_sensor',
    I: '#forge:plates/iron',
    P: '#forge:plates/gold'
  }).id('crossgrove:lso/thermometer')

  remove('seasonal_calendar')
  event.shaped(lso('seasonal_calendar'), [
    'PPP',
    'PCP',
    'PSP'
  ], {
    P: 'minecraft:paper',
    C: 'minecraft:clock',
    S: 'gtceu:lv_sensor'
  }).id('crossgrove:lso/seasonal_calendar')

  remove('heater')
  event.shaped(lso('heater'), [
    'PEP',
    'ICI',
    'IWI'
  ], {
    P: '#forge:plates/iron',
    E: 'gtceu:lv_emitter',
    I: '#forge:plates/steel',
    C: 'minecraft:campfire',
    W: 'minecraft:coal_block'
  }).id('crossgrove:lso/heater')

  remove('cooler')
  event.shaped(lso('cooler'), [
    'PSP',
    'PRP',
    'PMP'
  ], {
    P: '#forge:plates/iron',
    S: 'minecraft:snow_block',
    R: 'gtceu:lv_fluid_regulator',
    M: 'gtceu:lv_electric_motor'
  }).id('crossgrove:lso/cooler')

  remove('heating_coat_1')
  event.shaped(lso('heating_coat_1'), [
    ' PS',
    'PSW',
    'SWW'
  ], {
    P: '#forge:plates/iron',
    S: 'minecraft:stick',
    W: lso('warm_string')
  }).id('crossgrove:lso/heating_coat_1')

  remove('cooling_coat_1')
  event.shaped(lso('cooling_coat_1'), [
    ' PS',
    'PSC',
    'SCC'
  ], {
    P: '#forge:plates/iron',
    S: 'minecraft:stick',
    C: lso('cold_string')
  }).id('crossgrove:lso/cooling_coat_1')

  remove('desert_helmet')
  event.shaped(lso('desert_helmet'), [
    'RLR',
    'R R'
  ], {
    R: '#crossgrove:primitive_string',
    L: 'minecraft:leather'
  }).id('crossgrove:lso/desert_helmet')

  remove('desert_chestplate')
  event.shaped(lso('desert_chestplate'), [
    'R R',
    'LRL',
    'LLL'
  ], {
    R: '#crossgrove:primitive_string',
    L: 'minecraft:leather'
  }).id('crossgrove:lso/desert_chestplate')

  remove('desert_leggings')
  event.shaped(lso('desert_leggings'), [
    'LLL',
    'LLL',
    'R R'
  ], {
    R: '#crossgrove:primitive_string',
    L: 'minecraft:leather'
  }).id('crossgrove:lso/desert_leggings')

  remove('desert_boots')
  event.shaped(lso('desert_boots'), [
    'R R',
    'L L'
  ], {
    R: '#crossgrove:primitive_string',
    L: 'minecraft:leather'
  }).id('crossgrove:lso/desert_boots')

  remove('heating_coat_2')
  event.shaped(lso('heating_coat_2'), [
    'DB',
    'B#',
    'C#'
  ], {
    D: 'minecraft:diamond',
    B: 'minecraft:blaze_rod',
    C: 'gtceu:good_electronic_circuit',
    '#': lso('heating_coat_1')
  }).id('crossgrove:lso/heating_coat_2')

  remove('cooling_coat_2')
  event.shaped(lso('cooling_coat_2'), [
    'DB',
    'B#',
    'C#'
  ], {
    D: 'minecraft:diamond',
    B: 'minecraft:blaze_rod',
    C: 'gtceu:good_electronic_circuit',
    '#': lso('cooling_coat_1')
  }).id('crossgrove:lso/cooling_coat_2')

  remove('heating_coat_3')
  event.shaped(lso('heating_coat_3'), [
    'NE',
    'E#',
    'C#'
  ], {
    N: 'minecraft:netherite_ingot',
    E: 'minecraft:end_rod',
    C: 'gtceu:advanced_integrated_circuit',
    '#': lso('heating_coat_2')
  }).id('crossgrove:lso/heating_coat_3')

  remove('cooling_coat_3')
  event.shaped(lso('cooling_coat_3'), [
    'NE',
    'E#',
    'C#'
  ], {
    N: 'minecraft:netherite_ingot',
    E: 'minecraft:end_rod',
    C: 'gtceu:advanced_integrated_circuit',
    '#': lso('cooling_coat_2')
  }).id('crossgrove:lso/cooling_coat_3')

  remove('thermal_coat_1')
  event.shapeless(lso('thermal_coat_1'), [
    lso('cooling_coat_1'),
    lso('heating_coat_1'),
    'gtceu:lv_sensor'
  ]).id('crossgrove:lso/thermal_coat_1')

  remove('thermal_coat_2')
  event.shapeless(lso('thermal_coat_2'), [
    lso('cooling_coat_2'),
    lso('heating_coat_2'),
    'gtceu:mv_sensor'
  ]).id('crossgrove:lso/thermal_coat_2')

  remove('thermal_coat_3')
  event.shapeless(lso('thermal_coat_3'), [
    lso('cooling_coat_3'),
    lso('heating_coat_3'),
    'gtceu:hv_sensor'
  ]).id('crossgrove:lso/thermal_coat_3')

  remove('thermal_resistance_ring')
  event.shaped(lso('thermal_resistance_ring'), [
    'WHR',
    'CTW',
    'ISC'
  ], {
    W: lso('warm_string'),
    C: lso('cold_string'),
    H: lso('heat_resistance_ring'),
    I: lso('cold_resistance_ring'),
    T: {
      type: 'forge:partial_nbt',
      item: 'minecraft:potion',
      nbt: '{Potion:"legendarysurvivaloverhaul:temperature_immunity"}'
    },
    R: 'gtceu:mv_sensor',
    S: 'gtceu:mv_field_generator'
  }).id('crossgrove:lso/thermal_resistance_ring')

  remove('plaster')
  event.shaped(lso('plaster'), [
    'SS',
    'WW'
  ], {
    S: '#crossgrove:primitive_string',
    W: '#minecraft:wool'
  }).id('crossgrove:lso/plaster')

  remove('bandage')
  event.shaped(lso('bandage'), [
    ' P',
    'H ',
    'P '
  ], {
    P: lso('plaster'),
    H: lso('healing_herbs')
  }).id('crossgrove:lso/bandage')

  remove('tonic')
  event.shaped(lso('tonic'), [
    ' H ',
    'PVB',
    ' S '
  ], {
    H: lso('healing_herbs'),
    P: 'gtceu:plant_ball',
    V: 'gtceu:glass_vial',
    B: 'minecraft:honey_bottle',
    S: 'minecraft:sugar'
  }).id('crossgrove:lso/tonic')

  remove('morphine')
  event.shaped(lso('morphine'), [
    '  V',
    ' T ',
    'F  '
  ], {
    V: 'gtceu:glass_vial',
    T: lso('tonic'),
    F: 'gtceu:sterilizing_filter_casing'
  }).id('crossgrove:lso/morphine')

  remove('medkit')
  event.shaped(lso('medkit'), [
    'FBF',
    'TML',
    'PPP'
  ], {
    F: 'gtceu:mask_filter',
    B: lso('bandage'),
    T: lso('tonic'),
    M: lso('morphine'),
    L: 'minecraft:leather',
    P: lso('plaster')
  }).id('crossgrove:lso/medkit')
})

ServerEvents.tags('item', event => {
  event.add('crossgrove:primitive_string', [
    'minecraft:string',
    'survivalistessentials:plant_string'
  ])
})

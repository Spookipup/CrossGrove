// priority: 790

ServerEvents.recipes(event => {
  var bronzeAxle = cgCrossroadsMaterialItem('crossroads:axle', 'bronze')
  var bronzeGear = cgCrossroadsMaterialItem('crossroads:gear_base', 'bronze')
  var bronzeAxleMount = cgCrossroadsMaterialItem('crossroads:axle_mount', 'bronze')

  ;[
    'crossroads:hand_crank',
    'crossroads:millstone',
    'crossroads:master_axis',
    'crossroads:fluid_tube',
    'crossroads:rotary_pump',
    'crossroads:firebox',
    'crossroads:heating_crucible',
    'crossroads:heating_chamber',
    'crossroads:steam_boiler',
    'crossroads:steam_turbine',
    'crossroads:stamp_mill',
    'crossroads:rotary_drill',
    'crossroads:winding_table',
    'crossroads:mainspring'
  ].forEach(output => {
    event.remove({ output: output })
  })

  cgCrossroadsFireMold(
    event,
    'ingot_casting_mold',
    'crossgrove_integrations:unfired_ingot_clay_mold',
    'crossgrove_integrations:ingot_casting_mold'
  )

  event.shapeless('2x gtceu:bronze_rod', [
    'crossgrove_integrations:rough_bronze_axle_blank',
    '#crossgrove:tools/files'
  ]).id('crossgrove:bronze_mechanics/bronze_rod_from_rough_axle_blank')

  event.shapeless(cgCrossroadsMaterialStack('crossroads:axle', 'bronze', 2), [
    'crossgrove_integrations:rough_bronze_axle_blank',
    'gtceu:wood_plate',
    '#crossgrove:tools/files'
  ]).id('crossgrove:bronze_mechanics/bronze_axle_from_rough_axle_blank')

  event.shapeless(bronzeGear, [
    'crossgrove_integrations:rough_bronze_gear_blank',
    '#forge:rods/bronze',
    '#crossgrove:tools/files'
  ]).id('crossgrove:bronze_mechanics/bronze_gear_from_rough_gear_blank')

  event.shapeless(cgCrossroadsMaterialStack('crossroads:axle_mount', 'bronze', 4), [
    'crossgrove_integrations:rough_bronze_bushing_blank',
    'gtceu:wood_plate',
    'gtceu:wood_screw',
    '#crossgrove:tools/files'
  ]).id('crossgrove:bronze_mechanics/bronze_axle_mount_from_rough_bushing_blank')

  event.shaped('crossroads:hand_crank', [
    '  S',
    ' BA',
    'S  '
  ], {
    A: bronzeAxle,
    B: 'survivalistessentials:rock_stone',
    S: 'minecraft:stick'
  }).id('crossgrove:crossroads/mechanical/hand_crank')

  event.shaped('crossroads:millstone', [
    'SMS',
    'GAG',
    'SMS'
  ], {
    A: bronzeAxle,
    G: bronzeGear,
    M: bronzeAxleMount,
    S: 'minecraft:stone'
  }).id('crossgrove:crossroads/mechanical/millstone')

  CG_BASIC_METALS.forEach(metal => {
    var output = cgCrushedOreItem(metal)
    if (Item.exists(output)) {
      cgCrossroadsMill(
        event,
        'crushed_' + metal + '_ore_from_raw_' + metal,
        {
          tag: 'forge:raw_materials/' + metal
        },
        output,
        1
      )
    }
  })

  event.shaped('crossroads:master_axis', [
    'PGP',
    'GAG',
    'PSP'
  ], {
    A: bronzeAxle,
    G: bronzeGear,
    P: '#forge:plates/iron',
    S: 'minecraft:stone'
  }).id('crossgrove:crossroads/mechanical/master_axis')

  event.shaped('8x crossroads:fluid_tube', [
    'CCC',
    'B B',
    'CCC'
  ], {
    B: 'crossgrove_integrations:rough_bronze_bushing_blank',
    C: '#forge:plates/copper'
  }).id('crossgrove:crossroads/fluid/fluid_tube')

  event.shaped('crossroads:rotary_pump', [
    'BTB',
    'GAG',
    'BTB'
  ], {
    A: bronzeAxle,
    B: 'crossgrove_integrations:rough_bronze_bushing_blank',
    G: bronzeGear,
    T: 'crossroads:fluid_tube'
  }).id('crossgrove:crossroads/fluid/rotary_pump')

  event.shaped('crossroads:firebox', [
    'FCF',
    'SBS',
    'FFF'
  ], {
    B: 'minecraft:furnace',
    C: '#forge:plates/copper',
    F: 'gtceu:firebrick',
    S: '#forge:plates/iron'
  }).id('crossgrove:crossroads/heat/firebox')

  event.shaped('crossroads:heating_crucible', [
    'F F',
    'FCF',
    'FFF'
  ], {
    C: 'minecraft:cauldron',
    F: 'gtceu:firebrick'
  }).id('crossgrove:crossroads/heat/heating_crucible')

  event.shaped('crossroads:heating_chamber', [
    'SCS',
    'SFS',
    'BBB'
  ], {
    B: 'gtceu:firebrick',
    C: '#forge:plates/copper',
    F: 'minecraft:furnace',
    S: '#forge:plates/iron'
  }).id('crossgrove:crossroads/heat/heating_chamber')

  if (Item.exists('gtceu:steel_spring')) {
    event.shaped('gtceu:steel_spring', [
      ' R ',
      'R R',
      ' R '
    ], {
      R: '#forge:rods/steel'
    }).id('crossgrove:steel_mechanics/steel_spring_from_rods')
  }

  event.shaped('crossroads:mainspring', [
    ' R ',
    'RGR',
    ' R '
  ], {
    G: bronzeGear,
    R: '#forge:rods/steel'
  }).id('crossgrove:steel_mechanics/mainspring')

  event.shaped('crossroads:winding_table', [
    'SGS',
    'AKA',
    'PPP'
  ], {
    A: bronzeAxle,
    G: bronzeGear,
    K: 'crossroads:hand_crank',
    P: '#forge:plates/iron',
    S: '#forge:rods/steel'
  }).id('crossgrove:crossroads/steel_mechanical/winding_table')

  event.shaped('crossroads:steam_boiler', [
    'SSS',
    'T T',
    'FCF'
  ], {
    C: 'minecraft:cauldron',
    F: 'gtceu:firebrick',
    S: '#forge:plates/steel',
    T: 'crossroads:fluid_tube'
  }).id('crossgrove:crossroads/steam/steam_boiler')

  event.shaped('crossroads:steam_turbine', [
    'SRS',
    'GPG',
    'SRS'
  ], {
    G: bronzeGear,
    P: 'crossroads:rotary_pump',
    R: '#forge:rods/steel',
    S: '#forge:plates/steel'
  }).id('crossgrove:crossroads/steam/steam_turbine')

  event.shaped('crossroads:stamp_mill', [
    'PAP',
    'PSP',
    'BIB'
  ], {
    A: bronzeAxle,
    B: 'minecraft:stone',
    I: '#forge:storage_blocks/iron',
    P: '#forge:plates/iron',
    S: '#forge:plates/steel'
  }).id('crossgrove:crossroads/steel_mechanical/stamp_mill')

  event.shaped('2x crossroads:rotary_drill', [
    ' S ',
    'SRS',
    ' G '
  ], {
    G: bronzeGear,
    R: '#forge:rods/steel',
    S: '#forge:plates/steel'
  }).id('crossgrove:crossroads/steel_mechanical/rotary_drill')
})

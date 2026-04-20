// priority: 840

var CG_ESSENTIALS_LOCKED_ITEMS = [
  'essentials:auto_crafter',
  'essentials:basic_fluid_splitter',
  'essentials:basic_item_splitter',
  'essentials:circuit_wrench',
  'essentials:fluid_shifter',
  'essentials:fluid_splitter',
  'essentials:hopper_filter',
  'essentials:item_chute',
  'essentials:item_shifter',
  'essentials:item_splitter',
  'essentials:linking_tool',
  'essentials:multi_piston',
  'essentials:multi_piston_sticky',
  'essentials:redstone_receiver',
  'essentials:redstone_transmitter',
  'essentials:slotted_chest',
  'essentials:sorting_hopper',
  'essentials:speed_hopper',
  'essentials:wire_circuit',
  'essentials:wither_cannon',
  'essentials:obsidian_cutting_kit',
  'essentials:bricks_bronze',
  'essentials:bricks_copshowium',
  'essentials:bricks_gold',
  'essentials:bricks_iron',
  'essentials:bricks_tin',
  'essentials:fertile_soil_acacia',
  'essentials:fertile_soil_beetroot',
  'essentials:fertile_soil_berry',
  'essentials:fertile_soil_birch',
  'essentials:fertile_soil_brown_mushroom',
  'essentials:fertile_soil_carrot',
  'essentials:fertile_soil_dark_oak',
  'essentials:fertile_soil_jungle',
  'essentials:fertile_soil_netherwart',
  'essentials:fertile_soil_oak',
  'essentials:fertile_soil_potato',
  'essentials:fertile_soil_red_mushroom',
  'essentials:fertile_soil_spruce',
  'essentials:fertile_soil_wheat'
]

ServerEvents.recipes(event => {
  ;[
    'auto_crafter',
    'basic_fluid_splitter',
    'basic_item_splitter',
    'circuit_wrench',
    'fluid_shifter',
    'fluid_splitter',
    'hopper_filter',
    'item_chute',
    'item_shifter',
    'item_splitter',
    'linking_tool',
    'multi_piston',
    'multi_piston_sticky',
    'multi_piston_sticky_base',
    'obsidian_cutting_kit',
    'piston',
    'redstone_receiver',
    'redstone_transmitter',
    'slotted_chest',
    'sorting_hopper',
    'speed_hopper',
    'wire_circuit',
    'wither_cannon',
    'wrench'
  ].forEach(id => {
    event.remove({ id: 'essentials:' + id })
  })

  event.remove({ id: /^essentials:bricks_.+/ })
  event.remove({ id: /^essentials:fertile_soil_.+/ })

  event.shaped('essentials:wrench', [
    'P P',
    'PRP',
    ' R '
  ], {
    P: '#crossgrove:metal_forms/plates/iron',
    R: '#crossgrove:metal_forms/light_rods/iron'
  }).id('crossgrove:essentials/wrench_from_iron_plate_and_light_rod')
})

ServerEvents.tags('item', event => {
  event.add('crossgrove:removed/essentials_automation', CG_ESSENTIALS_LOCKED_ITEMS)
})

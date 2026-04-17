// priority: 0

JEIEvents.hideItems(event => {
  var gtElectricTiers = [
    'lv',
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv',
    'uhv',
    'uev',
    'uiv',
    'uxv',
    'opv'
  ]

  var gtAbsorbedMachineTypes = [
    'alloy_smelter',
    'assembler',
    'bender',
    'canner',
    'centrifuge',
    'compressor',
    'cutter',
    'electrolyzer',
    'extractor',
    'extruder',
    'fluid_heater',
    'fluid_solidifier',
    'forge_hammer',
    'forming_press',
    'lathe',
    'macerator',
    'ore_washer',
    'packer',
    'sifter',
    'thermal_centrifuge',
    'wiremill'
  ]

  var hiddenGtMachines = [
    'gtceu:lp_steam_alloy_smelter',
    'gtceu:lp_steam_compressor',
    'gtceu:lp_steam_extractor',
    'gtceu:lp_steam_forge_hammer',
    'gtceu:lp_steam_macerator',
    'gtceu:hp_steam_alloy_smelter',
    'gtceu:hp_steam_compressor',
    'gtceu:hp_steam_extractor',
    'gtceu:hp_steam_forge_hammer',
    'gtceu:hp_steam_macerator',
    'gtceu:large_assembler',
    'gtceu:large_centrifuge',
    'gtceu:large_cutter',
    'gtceu:large_electrolyzer',
    'gtceu:large_extractor',
    'gtceu:large_extruder',
    'gtceu:large_packer',
    'gtceu:large_wiremill',
    'gtceu:implosion_compressor'
  ]

  gtElectricTiers.forEach(tier => {
    gtAbsorbedMachineTypes.forEach(type => {
      hiddenGtMachines.push('gtceu:' + tier + '_' + type)
    })
  })

  var hiddenOvergearedItems = [
    'overgeared:alloy_furnace',
    'overgeared:casting_furnace',
    'overgeared:nether_alloy_furnace',
    'overgeared:crude_steel',
    'overgeared:heated_crude_steel',
    'overgeared:heated_steel_ingot',
    'overgeared:netherite_alloy',
    'overgeared:heated_netherite_alloy',
    'overgeared:steel_arrow',
    'overgeared:steel_arrow_head',
    'overgeared:steel_axe',
    'overgeared:steel_axe_head',
    'overgeared:steel_boots',
    'overgeared:steel_chestplate',
    'overgeared:steel_hammer_head',
    'overgeared:steel_helmet',
    'overgeared:steel_hoe',
    'overgeared:steel_hoe_head',
    'overgeared:steel_ingot',
    'overgeared:steel_leggings',
    'overgeared:steel_nugget',
    'overgeared:steel_pickaxe',
    'overgeared:steel_pickaxe_head',
    'overgeared:steel_plate',
    'overgeared:steel_shovel',
    'overgeared:steel_shovel_head',
    'overgeared:steel_sword',
    'overgeared:steel_sword_blade',
    'overgeared:steel_block',
    'overgeared:steel_tong',
    'overgeared:steel_tongs'
  ]

  var hiddenSurvivalistSawItems = [
    'survivalistessentials:basic_saw',
    'survivalistessentials:basic_saw_blade',
    'survivalistessentials:sharp_saw',
    'survivalistessentials:sharp_saw_blade'
  ]

  var hiddenScannableItems = [
    'scannable:scanner',
    'scannable:blank_module',
    'scannable:block_module',
    'scannable:chest_module',
    'scannable:common_ores_module',
    'scannable:entity_module',
    'scannable:fluid_module',
    'scannable:friendly_entity_module',
    'scannable:hostile_entity_module',
    'scannable:range_module',
    'scannable:rare_ores_module'
  ]

  var hiddenStorageUtilityItems = [
    'functionalstorage:storage_controller',
    'functionalstorage:controller_extension',
    'functionalstorage:framed_storage_controller',
    'functionalstorage:framed_controller_extension',
    'functionalstorage:simple_compacting_drawer',
    'functionalstorage:compacting_drawer',
    'functionalstorage:framed_simple_compacting_drawer',
    'functionalstorage:compacting_framed_drawer',
    'functionalstorage:ender_drawer',
    'functionalstorage:armory_cabinet',
    'functionalstorage:fluid_1',
    'functionalstorage:fluid_2',
    'functionalstorage:fluid_4',
    'functionalstorage:framed_1',
    'functionalstorage:framed_2',
    'functionalstorage:framed_4',
    'functionalstorage:copper_upgrade',
    'functionalstorage:gold_upgrade',
    'functionalstorage:diamond_upgrade',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:iron_downgrade',
    'functionalstorage:void_upgrade',
    'functionalstorage:redstone_upgrade',
    'functionalstorage:pusher_upgrade',
    'functionalstorage:puller_upgrade',
    'functionalstorage:collector_upgrade',
    'functionalstorage:configuration_tool',
    'functionalstorage:linking_tool',
    'functionalstorage:rubber_1',
    'functionalstorage:rubber_2',
    'functionalstorage:rubber_4',
    'functionalstorage:treated_1',
    'functionalstorage:treated_2',
    'functionalstorage:treated_4',
    'miapi:modular_work_bench'
  ]

  var hiddenEssentialsAutomationItems = [
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

  hiddenGtMachines.forEach(item => {
    event.hide(item)
  })

  hiddenOvergearedItems.forEach(item => {
    event.hide(item)
  })

  hiddenSurvivalistSawItems.forEach(item => {
    event.hide(item)
  })

  hiddenScannableItems.forEach(item => {
    event.hide(item)
  })

  hiddenStorageUtilityItems.forEach(item => {
    event.hide(item)
  })

  hiddenEssentialsAutomationItems.forEach(item => {
    event.hide(item)
  })
})

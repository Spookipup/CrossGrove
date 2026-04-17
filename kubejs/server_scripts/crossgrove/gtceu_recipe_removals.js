// priority: 1000

var CG_GT_ELECTRIC_TIERS = [
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

var CG_GT_STEAM_MACHINE_IDS = [
  'gtceu:lp_steam_alloy_smelter',
  'gtceu:lp_steam_compressor',
  'gtceu:lp_steam_extractor',
  'gtceu:lp_steam_forge_hammer',
  'gtceu:lp_steam_macerator',
  'gtceu:hp_steam_alloy_smelter',
  'gtceu:hp_steam_compressor',
  'gtceu:hp_steam_extractor',
  'gtceu:hp_steam_forge_hammer',
  'gtceu:hp_steam_macerator'
]

var CG_GT_ABSORBED_MACHINE_TYPES = [
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

var CG_GT_ABSORBED_RECIPE_TYPES = CG_GT_ABSORBED_MACHINE_TYPES.concat([
  'primitive_blast_furnace'
])

var CG_GT_FORM_BYPASS_MATERIAL_PATTERN = [
  'copper',
  'tin',
  'iron',
  'zinc',
  'lead',
  'nickel',
  'gold',
  'bronze',
  'brass',
  'steel',
  'cupronickel',
  'aluminium',
  'aluminum',
  'titanium'
].join('|')

var CG_GT_FORM_BYPASS_OUTPUT_PATTERNS = [
  '^gtceu:(' + CG_GT_FORM_BYPASS_MATERIAL_PATTERN + ')_(bolt|foil|gear|plate|ring|rod|rotor|round|screw|small_gear|small_spring|spring)$',
  '^gtceu:(double|dense)_(' + CG_GT_FORM_BYPASS_MATERIAL_PATTERN + ')_plate$',
  '^gtceu:(fine|long)_(' + CG_GT_FORM_BYPASS_MATERIAL_PATTERN + ')_(wire|rod)$',
  '^gtceu:(1x|2x|4x|8x|16x)_(' + CG_GT_FORM_BYPASS_MATERIAL_PATTERN + ')_(cable|wire)$'
]

function cgGtMachineIds() {
  var ids = []

  CG_GT_STEAM_MACHINE_IDS.forEach(id => ids.push(id))

  CG_GT_ELECTRIC_TIERS.forEach(tier => {
    CG_GT_ABSORBED_MACHINE_TYPES.forEach(type => {
      ids.push('gtceu:' + tier + '_' + type)
    })
  })

  ids.push('gtceu:large_assembler')
  ids.push('gtceu:large_centrifuge')
  ids.push('gtceu:large_cutter')
  ids.push('gtceu:large_electrolyzer')
  ids.push('gtceu:large_extractor')
  ids.push('gtceu:large_extruder')
  ids.push('gtceu:large_packer')
  ids.push('gtceu:large_wiremill')
  ids.push('gtceu:implosion_compressor')

  return ids
}

ServerEvents.recipes(event => {
  CG_GT_ABSORBED_RECIPE_TYPES.forEach(type => {
    event.remove({ type: 'gtceu:' + type })
  })

  cgGtMachineIds().forEach(id => {
    event.remove({ output: id })
  })

  CG_GT_FORM_BYPASS_OUTPUT_PATTERNS.forEach(pattern => {
    event.remove({ output: new RegExp(pattern) })
  })
})

ServerEvents.tags('item', event => {
  event.add('crossgrove:removed/gtceu_absorbed_machines', cgGtMachineIds())
})

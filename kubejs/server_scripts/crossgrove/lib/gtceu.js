// priority: 9980

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
  '^gtceu:(' + CG_GT_FORM_BYPASS_MATERIAL_PATTERN + ')_(bolt|foil|gear|plate|ring|rod|rotor|round|small_gear|small_spring|spring)$',
  '^gtceu:(double|dense)_(' + CG_GT_FORM_BYPASS_MATERIAL_PATTERN + ')_plate$',
  '^gtceu:(fine|long)_(' + CG_GT_FORM_BYPASS_MATERIAL_PATTERN + ')_(wire|rod)$',
  '^gtceu:(1x|2x|4x|8x|16x)_(' + CG_GT_FORM_BYPASS_MATERIAL_PATTERN + ')_(cable|wire)$'
]

var CG_GT_HOT_INGOT_MATERIALS = [
  'aluminium',
  'americium',
  'annealed_copper',
  'battery_alloy',
  'beryllium',
  'bismuth',
  'black_bronze',
  'black_steel',
  'blue_steel',
  'brass',
  'bronze',
  'cadmium',
  'chrome',
  'cobalt',
  'cobalt_brass',
  'copper',
  'cupronickel',
  'damascus_steel',
  'darmstadtium',
  'duranium',
  'electrum',
  'europium',
  'gallium',
  'gold',
  'hsse',
  'hssg',
  'hsss',
  'indium',
  'invar',
  'iridium',
  'iron',
  'kanthal',
  'lead',
  'magnalium',
  'manganese',
  'naquadah',
  'naquadah_alloy',
  'naquadah_enriched',
  'naquadria',
  'neodymium',
  'neutronium',
  'nichrome',
  'nickel',
  'niobium',
  'osmium',
  'palladium',
  'platinum',
  'plutonium',
  'plutonium_241',
  'red_alloy',
  'red_steel',
  'rose_gold',
  'ruridit',
  'ruthenium',
  'samarium',
  'silver',
  'stainless_steel',
  'steel',
  'sterling_silver',
  'tin',
  'titanium',
  'trinium',
  'tungsten',
  'tungsten_carbide',
  'tungsten_steel',
  'ultimet',
  'uranium',
  'uranium_235',
  'uranium_238',
  'vanadium',
  'vanadium_steel',
  'wrought_iron',
  'yttrium',
  'yttrium_barium_cuprate',
  'zinc'
]

var CG_GT_HAMMER_MATERIALS = [
  'aluminium',
  'blue_steel',
  'bronze',
  'cobalt_brass',
  'damascus_steel',
  'diamond',
  'duranium',
  'hsse',
  'invar',
  'iron',
  'naquadah_alloy',
  'netherite',
  'neutronium',
  'red_steel',
  'rose_gold',
  'stainless_steel',
  'steel',
  'sterling_silver',
  'titanium',
  'tungsten_carbide',
  'tungsten_steel',
  'ultimet',
  'vanadium_steel',
  'wrought_iron'
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

function cgGtHammers() {
  return CG_GT_HAMMER_MATERIALS.map(material => 'gtceu:' + material + '_hammer')
}

function cgGtHotIngots() {
  return CG_GT_HOT_INGOT_MATERIALS.map(material => 'gtceu:hot_' + material + '_ingot')
}

function cgGtInputItem(input) {
  if (typeof input === 'string') {
    var countedInput = input.match(/^(\d+)x\s+(.+)$/)
    if (countedInput) {
      return Ingredient.of(Ingredient.of(countedInput[2]), parseInt(countedInput[1]))
    }
  }

  return Ingredient.of(input)
}

function cgGtInputItems(recipe, inputs) {
  return recipe.itemInputs(cgArray(inputs).map(input => cgGtInputItem(input)))
}

function cgGtOutputItems(recipe, outputs) {
  return recipe.itemOutputs(cgArray(outputs).map(output => Item.of(output)))
}

function cgGtPrimitiveBlastFurnace(event, id, inputs, outputs, duration) {
  var recipe = event.recipes.gtceu.primitive_blast_furnace(id)
  cgGtInputItems(recipe, inputs)
  cgGtOutputItems(recipe, outputs)
  return recipe.duration(duration)
}

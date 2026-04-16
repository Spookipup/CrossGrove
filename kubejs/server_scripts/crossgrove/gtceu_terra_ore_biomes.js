// priority: 0

var BiomeWeightModifier = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.BiomeWeightModifier')
var ArrayList = Java.loadClass('java.util.ArrayList')
var OreVeinUtil = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.ores.OreVeinUtil')
var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

var TERRA_GTCEU_ORE_TAG_PREFIX = '#crossgrove:gtceu_ore_biomes/'

var APATITE = 'gtceu:apatite_vein'
var CASSITERITE = 'gtceu:cassiterite_vein'
var COAL = 'gtceu:coal_vein'
var COPPER_TIN = 'gtceu:copper_tin_vein'
var GALENA = 'gtceu:galena_vein'
var GARNET_TIN = 'gtceu:garnet_tin_vein'
var GARNET = 'gtceu:garnet_vein'
var IRON = 'gtceu:iron_vein'
var LUBRICANT = 'gtceu:lubricant_vein'
var MAGNETITE = 'gtceu:magnetite_vein_ow'
var MINERAL_SAND = 'gtceu:mineral_sand_vein'
var NICKEL = 'gtceu:nickel_vein'
var SALTS = 'gtceu:salts_vein'
var OILSANDS = 'gtceu:oilsands_vein'
var COPPER = 'gtceu:copper_vein'
var DIAMOND = 'gtceu:diamond_vein'
var LAPIS = 'gtceu:lapis_vein'
var MANGANESE = 'gtceu:manganese_vein_ow'
var MICA = 'gtceu:mica_vein'
var OLIVINE = 'gtceu:olivine_vein'
var REDSTONE = 'gtceu:redstone_vein_ow'
var SAPPHIRE = 'gtceu:sapphire_vein'

var TERRA_ORE_VEIN_WEIGHTS = {}
TERRA_ORE_VEIN_WEIGHTS[APATITE] = 30
TERRA_ORE_VEIN_WEIGHTS[CASSITERITE] = 35
TERRA_ORE_VEIN_WEIGHTS[COAL] = 35
TERRA_ORE_VEIN_WEIGHTS[COPPER_TIN] = 45
TERRA_ORE_VEIN_WEIGHTS[GALENA] = 40
TERRA_ORE_VEIN_WEIGHTS[GARNET_TIN] = 35
TERRA_ORE_VEIN_WEIGHTS[GARNET] = 35
TERRA_ORE_VEIN_WEIGHTS[IRON] = 35
TERRA_ORE_VEIN_WEIGHTS[LUBRICANT] = 35
TERRA_ORE_VEIN_WEIGHTS[MAGNETITE] = 50
TERRA_ORE_VEIN_WEIGHTS[MINERAL_SAND] = 65
TERRA_ORE_VEIN_WEIGHTS[NICKEL] = 45
TERRA_ORE_VEIN_WEIGHTS[SALTS] = 65
TERRA_ORE_VEIN_WEIGHTS[OILSANDS] = 60
TERRA_ORE_VEIN_WEIGHTS[COPPER] = 45
TERRA_ORE_VEIN_WEIGHTS[DIAMOND] = 25
TERRA_ORE_VEIN_WEIGHTS[LAPIS] = 35
TERRA_ORE_VEIN_WEIGHTS[MANGANESE] = 45
TERRA_ORE_VEIN_WEIGHTS[MICA] = 35
TERRA_ORE_VEIN_WEIGHTS[OLIVINE] = 50
TERRA_ORE_VEIN_WEIGHTS[REDSTONE] = 35
TERRA_ORE_VEIN_WEIGHTS[SAPPHIRE] = 35

var TERRA_ORE_PROFILES = {
  active_volcanic: {
    reason: 'fresh volcanic terrain: mafic/ultramafic and hydrothermal ores',
    biomes: [
      'active_volcano_base',
      'active_volcano_base_edge',
      'active_volcano_pit',
      'active_volcano_pit_edge'
    ],
    veins: [OLIVINE, NICKEL, MAGNETITE, COPPER, COPPER_TIN, REDSTONE, DIAMOND]
  },
  caldera_geothermal: {
    reason: 'older calderas and hot-spring terrain: hydrothermal metals and altered volcanic rocks',
    biomes: [
      'caldera_volcano_base',
      'caldera_volcano_base_edge',
      'caldera_volcano_pit',
      'caldera_volcano_pit_edge',
      'yellowstone'
    ],
    veins: [OLIVINE, NICKEL, MAGNETITE, COPPER, GALENA, REDSTONE, LAPIS]
  },
  badlands_iron_copper: {
    reason: 'oxidized sedimentary highlands: iron, copper, lead, evaporites, and oil sands',
    biomes: [
      'badlands_buttes',
      'badlands_mountains',
      'badlands_mountains_river',
      'cracked_badlands_plateau',
      'eroded_badlands_buttes',
      'terracotta_sea_arches',
      'terracotta_sea_caves',
      'wooded_buttes'
    ],
    veins: [IRON, COPPER, COPPER_TIN, GALENA, REDSTONE, OILSANDS, SALTS]
  },
  hot_desert_evaporite: {
    reason: 'arid basins: salts, oil sands, copper, red beds, and placer sands',
    biomes: [
      'desert',
      'desert_flats',
      'desert_pillars',
      'desert_spikes',
      'desert_spikes_gold',
      'rocky_desert',
      'salt_flats'
    ],
    veins: [SALTS, OILSANDS, MINERAL_SAND, COPPER_TIN, COPPER, REDSTONE]
  },
  xeric_scrub_and_highlands: {
    reason: 'dry scrub and rocky arid uplands: copper, redstone, iron, and evaporite/oil-sand basins',
    biomes: [
      'arid_highlands',
      'arid_spikes',
      'chaparral',
      'chaparral_flats',
      'low_chaparral',
      'moorland',
      'shrubland',
      'xeric_hills',
      'xeric_low_hills',
      'xeric_mountains',
      'xeric_mountains_river',
      'xeric_plains'
    ],
    veins: [COPPER_TIN, COPPER, IRON, SALTS, OILSANDS, REDSTONE]
  },
  temperate_dry_plains: {
    reason: 'open grassland and steppe: shallow sedimentary/organic deposits with some iron',
    biomes: [
      'oak_savanna',
      'plains',
      'prairie',
      'steppe',
      'sunflower_plains'
    ],
    veins: [APATITE, COAL, IRON, COPPER_TIN]
  },
  savanna: {
    reason: 'warm seasonal grasslands: phosphate, coal, iron, copper, and weathered tin/copper systems',
    biomes: [
      'grass_savanna',
      'grass_savanna_hills',
      'grass_savanna_low_hills',
      'savanna',
      'savanna_hills',
      'savanna_low_hills',
      'savanna_overhangs'
    ],
    veins: [APATITE, COAL, IRON, COPPER_TIN, COPPER, GARNET_TIN]
  },
  temperate_forest: {
    reason: 'temperate forest and forested hills: coal/phosphate lowlands with modest base-metal prospects',
    biomes: [
      'dark_forest',
      'dark_forest_hills',
      'eucalyptus_forest',
      'forest',
      'forest_flats',
      'forest_hills'
    ],
    veins: [COAL, APATITE, IRON, GALENA]
  },
  boreal_forest: {
    reason: 'cool forests and taiga: coal, iron, garnet/tin, sapphire, and nickel-bearing hard rock',
    biomes: [
      'autumnal_flats',
      'autumnal_forest',
      'autumnal_forest_hills',
      'birch_flats',
      'birch_forest',
      'birch_forest_hills',
      'evergreen_flats',
      'evergreen_forest',
      'evergreen_forest_hills',
      'flowering_autumnal_forest_hills',
      'redwood_forest_hills',
      'taiga',
      'taiga_flats',
      'taiga_hills'
    ],
    veins: [COAL, APATITE, IRON, GARNET_TIN, SAPPHIRE, NICKEL]
  },
  flowering_forest: {
    reason: 'flowering and semi-humid forest: organic sediments with gem/mica prospects in hills',
    biomes: [
      'flowering_flats',
      'flowering_forest',
      'flowering_forest_hills'
    ],
    veins: [COAL, APATITE, SAPPHIRE, MICA, GARNET]
  },
  xerophytic_forest: {
    reason: 'dry thorn/scrub forest: arid sedimentary deposits with modest iron and copper/tin',
    biomes: [
      'xerophytic_forest',
      'xerophytic_forest_hills'
    ],
    veins: [COAL, APATITE, COPPER_TIN, IRON, SALTS, OILSANDS]
  },
  sakura_mountain: {
    reason: 'Sakura Mountains are treated as scenic metamorphic mountains, not generic rocky terrain',
    biomes: [
      'sakura_mountains'
    ],
    veins: [SAPPHIRE, MICA, GARNET, GALENA, IRON]
  },
  jungle_lowland: {
    reason: 'wet tropical lowlands: organic deposits, phosphate, and weathered copper/tin',
    biomes: [
      'bamboo_jungle',
      'bamboo_jungle_flats',
      'bamboo_ponds',
      'jungle',
      'jungle_flats',
      'palm_forest',
      'rainforest'
    ],
    veins: [COAL, APATITE, LUBRICANT, COPPER_TIN, MANGANESE]
  },
  jungle_mountains: {
    reason: 'tropical mountains: tin/copper, lead, cassiterite, garnet, sapphire, and iron',
    biomes: [
      'bamboo_jungle_hills',
      'bamboo_jungle_mountains',
      'cerros_de_mavecure',
      'dry_wild_highlands',
      'jungle_hills',
      'jungle_mountains',
      'overgrown_cliffs',
      'rainforest_hills',
      'wild_highlands'
    ],
    veins: [APATITE, COAL, COPPER_TIN, GALENA, GARNET, CASSITERITE, SAPPHIRE, IRON]
  },
  monsoon_mountains: {
    reason: 'humid subtropical mountains: base-metal veins, tin, nickel, mica, and sapphires',
    biomes: [
      'large_monsoon_mountains',
      'monsoon_mountains'
    ],
    veins: [COPPER_TIN, GALENA, CASSITERITE, NICKEL, SAPPHIRE, MICA, IRON]
  },
  temperate_mountains: {
    reason: 'temperate rocky mountains: classic hard-rock GT vein country',
    biomes: [
      'dry_rocky_bumpy_mountains',
      'dry_temperate_mountains',
      'dry_temperate_mountains_river',
      'dry_temperate_white_mountains',
      'dry_temperate_white_mountains_river',
      'evergreen_overhangs',
      'highlands',
      'mountains',
      'mountains_river',
      'rocky_bumpy_mountains',
      'temperate_alpha_mountains',
      'temperate_mountains',
      'temperate_mountains_river',
      'wild_bumpy_mountains'
    ],
    veins: [CASSITERITE, GALENA, GARNET, GARNET_TIN, IRON, MICA, SAPPHIRE, COPPER_TIN]
  },
  cold_mountains: {
    reason: 'cold alpine terrain: magnetite, garnet/tin, sapphire, mica, nickel, and cassiterite',
    biomes: [
      'ice_spikes',
      'snowy_eroded_terraced_mountains',
      'snowy_eroded_terraced_mountains_river',
      'snowy_mountains',
      'snowy_mountains_river',
      'snowy_terraced_mountains',
      'snowy_terraced_mountains_river',
      'tundra_hills'
    ],
    veins: [GARNET_TIN, IRON, MAGNETITE, SAPPHIRE, MICA, NICKEL, CASSITERITE]
  },
  polar_lowlands: {
    reason: 'cold open lowlands: sparse organics, phosphate, iron, and minor sapphire prospects',
    biomes: [
      'snowy_meadow',
      'snowy_plains',
      'tundra_midlands',
      'tundra_plains'
    ],
    veins: [COAL, APATITE, IRON, SAPPHIRE]
  },
  swamp_wetland: {
    reason: 'swamps, marshes, and wetlands: organic sediments, lubricant/oil affinity, manganese, and phosphates',
    biomes: [
      'frozen_marsh',
      'frozen_wetlands',
      'mangrove_swamp',
      'marsh',
      'rocky_wetlands',
      'sandstone_wetlands',
      'swamp',
      'wetlands'
    ],
    veins: [COAL, LUBRICANT, APATITE, MANGANESE, OILSANDS, SAPPHIRE]
  },
  river_sediment: {
    reason: 'river channels: placer sands, manganese, lapis/sapphire gravels, and phosphates',
    biomes: [
      'frozen_river',
      'river'
    ],
    veins: [MINERAL_SAND, SAPPHIRE, LAPIS, MANGANESE, APATITE]
  },
  beach: {
    reason: 'beaches: mineral sands, evaporites, manganese, lapis gravels, and coastal oil sands',
    biomes: [
      'beach',
      'frozen_beach',
      'palm_beach',
      'shale_beach',
      'shrub_beach'
    ],
    veins: [MINERAL_SAND, SALTS, LAPIS, MANGANESE, OILSANDS]
  },
  archipelago: {
    reason: 'islands and archipelagos: coastal placers with some sedimentary and shallow-marine metals',
    biomes: [
      'archipelago',
      'frozen_archipelago',
      'rocky_archipelago',
      'sandstone_archipelago'
    ],
    veins: [MINERAL_SAND, LAPIS, MANGANESE, COPPER, OILSANDS, SALTS]
  },
  rocky_coast: {
    reason: 'rocky sea arches/caves: coastal placers plus exposed hard-rock and oceanic crust affinity',
    biomes: [
      'lush_sea_caves',
      'rocky_sea_arches',
      'rocky_sea_caves',
      'snowy_sea_arches',
      'snowy_sea_caves',
      'temperate_sea_arches'
    ],
    veins: [MINERAL_SAND, LAPIS, MANGANESE, NICKEL, OLIVINE, COPPER, SAPPHIRE]
  },
  ocean: {
    reason: 'shallow oceans: marine sands, lapis, and manganese',
    biomes: [
      'cold_ocean',
      'frozen_ocean',
      'ocean',
      'subtropical_ocean',
      'tropical_ocean'
    ],
    veins: [MINERAL_SAND, LAPIS, MANGANESE]
  },
  deep_ocean: {
    reason: 'deep oceans: manganese nodules, lapis, and mafic/ultramafic ocean-floor affinity',
    biomes: [
      'cold_deep_ocean',
      'deep_ocean',
      'frozen_deep_ocean',
      'iceberg_ocean',
      'subtropical_deep_ocean',
      'tropical_deep_ocean'
    ],
    veins: [LAPIS, MANGANESE, NICKEL, OLIVINE, MINERAL_SAND]
  },
  coral_ocean: {
    reason: 'coral shelves: carbonate/phosphate settings with marine sands and manganese',
    biomes: [
      'coral_ocean'
    ],
    veins: [MINERAL_SAND, LAPIS, MANGANESE, APATITE]
  },
  mushroom_island: {
    reason: 'mushroom islands: unusual organic/sedimentary terrain with limited gem and mica prospects',
    biomes: [
      'mushroom_coast',
      'mushroom_fields',
      'mushroom_hills',
      'mushroom_mountains'
    ],
    veins: [APATITE, COAL, LUBRICANT, MICA, SAPPHIRE]
  },
  lush_cave: {
    reason: 'lush caves: wet cave systems with gems, lapis, manganese, organics, and phosphate',
    biomes: [
      'lush_caves'
    ],
    veins: [COAL, APATITE, DIAMOND, LAPIS, SAPPHIRE, MANGANESE]
  },
  dripstone_cave: {
    reason: 'dripstone caves: carbonate cave systems with copper, iron, lead, mica, and gems',
    biomes: [
      'dripstone_caves'
    ],
    veins: [COPPER, IRON, GALENA, DIAMOND, MICA, SAPPHIRE]
  },
  deep_dark_cave: {
    reason: 'deep dark: deep deepslate cave environment, biased toward deep GT veins',
    biomes: [
      'deep_dark'
    ],
    veins: [DIAMOND, REDSTONE, LAPIS, MICA, MANGANESE]
  }
}

function addBiomeName(map, veinId, biomeName) {
  if (!map[veinId]) {
    map[veinId] = {}
  }

  map[veinId][biomeName] = true
}

function tagNameForVein(veinId) {
  return TERRA_GTCEU_ORE_TAG_PREFIX + veinId.split(':')[1]
}

function addTerraOreWeight(event, veinId) {
  var biomeList = new ArrayList()
  biomeList.add(tagNameForVein(veinId))

  var supplier = OreVeinUtil.resolveBiomes(biomeList)

  event.modify(new ResourceLocation(veinId), function(vein) {
    vein.biomeWeightModifier(new BiomeWeightModifier(supplier, TERRA_ORE_VEIN_WEIGHTS[veinId]))
  })
}

GTCEuServerEvents.oreVeins(function(event) {
  var veinBiomeMap = {}

  Object.keys(TERRA_ORE_PROFILES).forEach(function(profileName) {
    var profile = TERRA_ORE_PROFILES[profileName]

    profile.biomes.forEach(function(biomeName) {
      profile.veins.forEach(function(veinId) {
        addBiomeName(veinBiomeMap, veinId, biomeName)
      })
    })
  })

  Object.keys(veinBiomeMap).forEach(function(veinId) {
    addTerraOreWeight(event, veinId)
  })
})

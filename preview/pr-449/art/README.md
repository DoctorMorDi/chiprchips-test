# Web art pack

Built by `tools/art/build_web_pack.py` (issue #55) from local-only sources; rerun it after new renders or cutouts.

- `characters/<slug>/<pose>.webp`: full-body cutouts, 768 x 1152 (2:3), alpha, feet at 97 % of the height.
  `<slug>` is the speaker name in lower case with dashes (`juan-pablo`, `mei-ling`); `SLUG_ALIASES` in the script maps
  source folders that differ (corvus `meiling`). Sources: AI-generated with Codex image_gen (own work), see
  `pose-set.md` in the project folder `art/character-images/`.
  The grey halo of the source mattes is removed (edge colours pulled from the figure, matte cleaned and choked 1 px).
- `backgrounds/<id>.webp`: Episode 0 and 1 scene backgrounds at 1080 px high (shots 1920 x 1080,
  panoramas 4114 x 1080, 180-degree cylindrical strips).
- `backgrounds/<id>.json`: camera and placement table; every `*_px` and `px_per_*` value is already scaled to the web image
  (`web_scale`, `source_size` record the original render).
- `backgrounds/peeler/<state>/<shot>.webp` + `.json`: the Episode 1 peeler story states (stop, lockout, running, overfeed,
  small, normal_lot, inspect; see the `params` in each points file) for the shots each state is drawn for.
- `backgrounds/ep3/<state>/<shot>.webp` + `.json`: Episode 3 "Too Brown" story states `brown` (the problem) and
  `normal` (after the fix) for the sorter, the chips on its belt, its screen, the fry test, the cold store display and
  the thermometer check on Lars' bench.
- `backgrounds/<peeler|ep3>/<state>/<shot>.points.json`: observation hotspots for that image: per signal (peeler:
  rollers_glazed, bearing_failing, grease_puddle, jam, hopper_load, spill, beacon, hmi, isolator, lockout; ep3: chips,
  sorter_screen, fry_sample, fry_batches, fryer, colour_chart, fryer_meter, store_display, thermometer, ice_bath)
  `boxes_px`, one [x0, y0, x1, y1] per separate visible patch (two trays, chips at both ends of a belt; use these as
  click targets), `box_px` their union and `center_px`, all scaled to the web image; `not_visible` lists signals the
  state has but the shot cannot show, `not_in_state` those the state does not have. Pad a box a little for a click
  target.
- `manifest.json`: which backgrounds serve which game scene, the story states and their shots (`peeler_states`,
  `ep3_states`), and the cutout list.

Placing a character: pick a placement row (or interpolate), scale the cutout so `0.97 * height` =
`person_175_px * character_height_m / 1.75`, and put its bottom edge at `feet_y_px + 0.03 * scaled_height`.

## Kickabout (#143)

Built by `tools/art/build_football_pack.py` from the project folder `art/football/` (AI-generated with Codex image_gen,
2026-10-29/30, own work): `football/pitch.webp` (the top-down pitch in the match), `backgrounds/kickabout_fence.webp`
+ `.json` (after the match), `characters/<slug>/football/<look|talking|happy>.webp` (the players in their training
clothes, same cutout format as above) and the BuddyZone photos `content/buddyzone/photos/r-kickabout-happy*.webp`.

## Malaga company logos (#353)

`football/logos/<team>.webp` (128 px, trimmed and squared): the seven company logos of the teams from abroad in Malaga,
shown before each name in the tournament's tables. Source: AI-generated with Codex's built-in image generation (OpenAI
GPT Image) on corvus, 2026-11-16/17, for this project; own work, same licence as the rest of the game's art. Masters
(1254 px RGBA) and the prompts in the project folder `art/football/malaga-logos/`: `logo2-<team>.png` for
catenaccio, biscuit, dip, gurk, fizz, and `logo3-<team>.png` for siesta and mochi. Approved by the owner 2026-11-18.

Three more for the bigger pool (#369): `churros.webp`, `croissant.webp`, `surstromming.webp`, same format, and
`surstromming-large.webp` (256 px) for the big view before a match, with the green word STANK on the tin (the text is
drawn in the Creepster font, Font Diner, SIL Open Font License; it cannot be read at table size, so the tables use the
plain logo). Source: Codex (GPT Image) on corvus 2026-11-19/20, own work. Masters (1254 px RGBA) in the project folder
`art/codex-2026-11-20-natt/malaga-logos/`: `logo-churros-A.png`, `logo-croissant-A.png`, `logo-surstromming-A3.png`
and the text layer `stank-text/stank-text-green.png` (with the font and its licence). Approved by the owner 2026-11-20.

## Company football kit (#243)

`characters/<slug>/crc-kit/<neutral|talking|happy>.webp` for Happy, Vegard, Adam, Leo and Marek: the same players in
the company team's kit (navy jersey with orange trim, orange shorts, navy socks), worn in company matches (scene
`company_match` in `content/scene-art.json`). Built by `tools/art/build_football_pack.py` from the project folder
`art/football/<slug>_crc-kit_<pose>.png`. Source: AI-generated with Codex's built-in image generation (OpenAI GPT
Image) on corvus, 2026-11-05, for this project; own work, same licence as the rest of the game's art. Approved by the
owner 2026-11-06. Not recorded: the exact model version, and whether the backgrounds were removed in a separate step.
Eeli, the keeper (#249): `characters/eeli/crc-kit/<neutral|talking|happy>.webp`, in the keeper's green jersey with navy
shorts and socks. Built by the same script from `art/football/eeli_crc-kit_<pose>.png`. Source: AI-generated with
Codex's built-in image generation (OpenAI GPT Image) on corvus, 2026-11-13, for this project, with his approved look
(`assets-and-references/characters/eeli/`) as the identity reference; own work, same licence as the rest of the game's
art. The backgrounds came transparent from the generator; no separate background removal.
Susanne and Iben, on the bench since #415 (#420): `characters/<susanne|iben>/crc-kit/<neutral|talking|happy>.webp`,
built by the same script from `art/football/<slug>_crc-kit_<pose>.png`. Source: AI-generated with Codex's built-in
image generation (OpenAI GPT Image) on corvus via HUB, 2026-11-24, for this project (originals in `art/football/raw/`);
own work, same licence as the rest of the game's art.
The team's running figures on the pitch are rows of the map's people sheet: see `public/map-art/sprites/README.md`.

## Guitar sandbox (#169)

Built by `tools/art/build_guitar_pack.py` from the project folder `art/guitar/` (AI-generated with Codex image_gen,
2026-10-29, own work; prompts in `art/guitar/image-prompts.md`, approved by the owner 2026-10-30):
`guitar/highway.webp` (stage floor behind the lanes), `guitar/gem_<0|1|2>.webp` (notes, left to right),
`guitar/hitline.webp` + `hitline_lit.webp` (hit bar, idle and lit; where its pick targets sit: `BAR` in
`src/guitar/main.ts`) and `guitar/fx_hit.webp`, `fx_miss.webp`.
For 4 and 6 lanes (#200), cut and recoloured from the same sources by the same script, no new generation:
`guitar/floor.webp` (the highway with its painted lines filled in), `guitar/gem_<3|4|5>.webp` (green, blue,
violet: hue-turned copies of the teal gem), `guitar/target.webp` + `target_lit.webp` (one pick target from each bar)
and `guitar/rail.webp` (a piece of the bar between targets).
Guitar neck in perspective (#204, notes follow it: #172), from the project folder `art/codex-2026-11-20-natt/guitar/`
(AI-generated with Codex GPT Image on corvus, 2026-11-20, own work; approved by the owner 2026-11-20), converted to
WebP at full size (1024 x 1536): `guitar/neck_rosewood.webp` (beginner, neck-perspective-A), `neck_maple.webp` (easy,
B), `neck_ebony.webp` (medium, C) and `guitar/strings.webp` (strings-perspective-straight-B, six strings, drawn over the
neck on medium; fewer lanes draw their strings in code). Where the painted strings run: `NECK` in `src/guitar/neck.ts`.
Since #204 `highway.webp` and `floor.webp` are no longer drawn (kept for the build script).

## Robot fight, isometric (#231)

Built by `tools/art/build_robot_pack.py` from Blender renders (`tools/robots/render_iso.py`, Cycles, 2026-11-11), into
`robots/`: `arena.webp` (3072 x 1920, the fight table) and `bollen.webp`, `flipper.webp` (3840 x 480: eight 480 px
frames, one per facing, clockwise from north, shadow included). The robots are our own Tripo3D models (generated by the
owner from our own Codex concept sheets, cleaned and assembled in Blender; sources on corvus in
`assets-and-references/tripo3d/`, outside Git); the table is modelled by the render script. Own work. The raw renders are
in the project folder `art/robots/iso/`. Where things sit in these images: `ISO` in `src/robots/iso.ts`.

## Start screen cover (#188)

`cover/wide/` (16:9, 1664 x 936) and `cover/tall/` (9:16, 864 x 1536): `base.jpg` is the painting and `gull.png` the gull
cut from it (it glides on its own layer). Copied from the approved test pages in DoctorMorDi/chiprchips-test
(`preview/cover-test/layers/` and `preview/cover-test-9x16/layers/`, owner approval 2026-11-08). AI-generated with Codex
(GPT Image) from our own character references, own work; the layered PSDs are on corvus in `D:\Assets\Cover\`. The logo
on the cover is `public/brand/chipr-chips-logo.png`. Shown by `src/cover.ts`.

## Flavour lab (#195)

Built by `tools/art/build_flavour_pack.py` from the project folder `art/flavour/`, into `flavour/`:

- `bag/<colour>.webp` (640 x 736): one unprinted grey foil bag tinted to each bag colour (`COLOURS` in the script and in
  `src/flavour/bag.ts`), `chips.webp` (a pile of plain crisps) and `ingredients/<id>.webp` (256 x 256, one per spice in
  `content/flavour/lab.yml`). Sources `bag-blank.png`, `chips-pile.png` and `ingredients-sheet.png`: AI-generated with
  Codex (GPT Image) 2026-11-09 with the owner's bag designs as style reference, own work.
- `skipper.webp`: the Skipper Chips mascot, and `series/<id>.webp`: the twelve bags of the series. The owner's own brand
  art, from corvus `assets-and-references/decals/merkevare/` and `decals/produkter/` (the `_1024_` cutouts).

- `room.webp` (1600 x 900): the test kitchen behind the people, rendered from the Blender scene like the other
  backgrounds (2026-11-13, own work, issue #276). Source `lab-room-render.png` + `.json` (2560 x 1440): the fry test
  corner of the QC lab in `crc_plant_bg.blend`, rendered with the Blender project's `scripts/backgrounds/render_bg.py`
  (Cycles, 160 samples) and this camera, which is not in the project's `bg_cameras.py`:
  `dict(id="labw_fry_front", scene="plant", pos=(9.9, -36.5, 1.5), target=(9.9, -39.5, 1.5), lens=12.4, exposure=-0.6)`.
  The camera is level and wide, and the build script cuts the lower part of the frame (`ROOM_BOX`), because the lab
  shows people from the hips up with the speech bubble below: the bench has to sit high in the picture. The wrapper that
  runs the render without touching the Blender project is in the project folder
  `smakslaben/lab-background/render_fixed.py`.
  Re-rendered 2026-11-13 after the owner's review of the picture (#282). `smakslaben/lab-background/smak_fixes.py`
  dresses the room in memory before the render; the blend and the lab kit scripts are untouched, and the kit faults
  are listed for the WORLD pipeline. What it changes: the fire extinguisher (model and sign from the owned Cybernetic
  Walrus "Factory Interior" pack) hangs on the wall instead of half inside it, with its sign straight above it and
  the fire blanket box beside the sign, as one fire point at the end of the fry bench; a smaller
  food-waste step bin with a flush label stands clear of the bench leg; the socket trunking stands further out, is
  light grey and ends before the fire point; the
  shower and eyewash signs are larger and beside the shower; fridge and freezer are grey against the white wall; the
  eyewash has two heads over the bowl; the waste cans are grey with larger labels (`tex/T_SMAK_*.png`, own work).
  The lab's own stage shows the right part of the cut on narrow screens (`object-position` in
  `src/flavour/flavour.css`), so the fire point is whole on phones too.
  Rules for the next room: the `blender-room-rules` skill.
- `backgrounds/flavour_lab.webp` + `.json` (1920 x 1080): a wider cut of the same render (`SCENE_BOX`) with its placement
  table moved along, for the scene on the game's stage where Siri asks the player in (#282). People stand about 2 m
  from the camera: the bench and the fridges start at 2.5 m.

How a bag is put together from these: `bagSvg` in `src/flavour/bag.ts`. The name is set in Baloo 2 ExtraBold
(`@fontsource/baloo-2`, SIL OFL 1.1), squeezed a little, which comes close to the lettering on the series.

## BuddyZone event photos (#235)

`content/buddyzone/photos/r-<id>.webp` for the reaction posts in `content/buddyzone/reactions.yml` that react to what the
player did (batch P1: rubber rat, padlock, Blytung!, Luffe, the Friday pallet, coffee, Skipper's hairnet, spring sun, the
episode outcomes). AI-generated with Codex (GPT Image) 2026-11-10/11 from our own character references, own work; the
owner picked one of four variants per post and approved the finals on 2026-11-11. Prompts in the project folder
`buddyzone/event-photos/prompts-p1.md` and `prompts-p1-final.md`; full-size PNGs on corvus in
`test-results\buddyzone-event\finals\`. 1080 px wide, WebP q82. `lars-festival-song` and `noor-skipper-hairnet` have
more than one approved photo (`-1` ... `-4`); the post shows one of them (`photos:` in reactions.yml).

## Mackerel trip (#213)

In `fishing/`, made from the project folder `art/makrellturen/` (resized to WebP, nothing else changed). All AI-generated
with Codex (GPT Image) on 2026-11-11 for the side-activity art round, own work:

- `sea-chart.webp` (1000 x 700): the painted chart, laid out to match `sea` in `content/fishing/trip.yml` (islands,
  skerries, kelp, sand, deep water, Tom's jetty). Checked against the layout with `sea-chart-check-overlay.jpg`.
- `boat-top.webp` and `boat-side.webp`: Tom's little boat from above (bow up) and from the side (bow right).
- `gull-flying.webp`, `gull-diving.webp`, `gull-resting.webp`: gulls seen from above.
- `<id>.webp` (160 x 160): the eight catches and the three lures, named by `art` in the content.
- `jetty-grill.webp` (1280 x 720): the grill on the jetty.
- `people/<tom|jari|juan-pablo>-off-duty-<nn>-<mood>.webp` (768 x 1152): Tom, Jari and Juan Pablo off work, from their
  character refs (Juan Pablo's set 2026-11-12). Kept here, not in `characters/`, because Tom and Jari are not in the
  game's cast (no height) yet and the cast has no off-duty outfit.


## Sled race (#214, round 4)

Built by `tools/art/build_sled_pack.py` from the project folder `art/rattkjelke/source/` into `sled/`. All
AI-generated with Codex (GPT Image) on 2026-11-13 for the sled race's art round, own work, in style B ("simpler and
brighter", picked by the owner); full-size PNGs also on corvus in `test-results\rattkjelke-<sled|hill|luffe|winter>\`.
Seen from straight above, facing up the image, with no weather or sun baked in. Where things sit in them: `SLED`,
`WHEEL_Y`, `POLE_BASE` in `src/sled/art.ts`.

- `hill/`: `snow.webp` (512 x 512 seamless tile), `spruce-1`, `spruce-2`, `stone`, `hay`, `ice`, `slush`, `ramp` (lip
  at the bottom), `pole-red`, `pole-blue`, `finish` (the inflatable finish bar), each cut to what is in it.
- `sled/`: `runners-narrow`, `runners-wide`, `body`, `wheel`, `driver` (you, in a helmet: no face), `einar` (helmet
  with Luffe ears). Six layers in one shared frame (268 x 423, 1.5 x 2.36 m) that line up on top of each other.
- `luffe/`: `sitting`, `run-1`, `run-2` (two running frames), `peek` (in Einar's sweater, when he rides along).
- `people/<slug>-<nn>-<mood>.webp` (768 x 1152): Einar, Lars-Owe (parka, beanie, sunglasses, megaphone) and Vegard
  (orienteering jacket) in winter clothes, made from their character poses with the same framing. Einar's helmet is a
  separate source layer (`winter/einar/helmet-luffe.png`) that the script puts on each pose's head.

## Company orienteering (#215, round 2 #283)

Built by `tools/art/build_orienteering_pack.py` from the project folder `art/bedriftsorientering/` into `orienteering/`.
All AI-generated with Codex (GPT Image) on 2026-11-13, own work; full-size PNGs also on corvus in
`test-results\orientering-kit\`, prompts in the project folder
`plans/side-activities/bedriftsorientering/grafikk-runde-2.md`. No text, weather, sun or season is baked in (the fog
over the moose is a layer the page lays on). The map itself is not a picture: it is drawn from the data (`map.ts`).
The paths are in `src/orienteering/art.ts`.

- `people/<slug>-<talking|happy|look>.webp` (768 x 1152, the cutout format of `characters/`): Vegard (three poses),
  Marek (mud to the knees) and Yoshi (new white shoes, cap) in the company running kit the owner picked from four
  looks (A: orange top with graphite side panels, graphite tights), and Unni in her walking clothes (red wind jacket,
  rucksack, thermos). Identity references: their character poses.
- `finds/<id>.webp` (longest side 256 px): the ten things seen in the forest, by the ids of `finds` in
  `content/orienteering/forest.yml` (swim, boot, tower, moped, anthill, cairn, sheep, cache, bench, moose).
- `flag.webp`: the control flag on its stand with the pin punch. `start.webp` (1440 x 810): the start and finish on
  the meadow, no people.

## Home sandbox (#296)

`src/home/art/home_evening.webp` (1280 x 720, bundled by Vite so the preview pool cannot drop it): the evening half of the studio render `home_sheet.jpg` in the project
folder (Blender render of the player's flat; exact source scene to be confirmed by the owner). Stand-in until the home
gets its own render with empty spots. Souvenirs are emoji tokens for now.
The episode home scenes (`scene: home`, all episodes) use the same picture: `content/scene-art.json` points `home` at
`home_evening`, and `src/story/bundled.ts` gives the stage the bundled picture and its placement table
`src/home/art/home_evening.json` (estimated from the kitchen lines: no camera data for this render).

## Market sandbox (#293)

`src/market/art/` (bundled by Vite so the preview pool cannot drop them), imported in `src/market/art.ts`. All
AI-generated with Codex (GPT Image) on corvus on 2026-11-14, own work, approved by the owner; full-size files on corvus
in `D:\Assets\Art\codex-2026-11-14\market\` (local repo, branch `codex-art`). No brands or real products: the console
is a generic black-and-red cartridge console (remade once, the first try looked like a real one).

- `photo-<id>.webp` (960 x 640, from 1536 x 1024): the listing photos for the console (`console`), Lars-Owe's amp
  (`amp`), the scam e-bike as an overly glossy ad (`ebike`) and Anntu's crates by the barn (`crates`).
- `item-<id>.webp` (256 x 256, transparent, from 1024 x 1024): the same four things as cut-outs, shown small in the
  list of listings.

## Miniputt football (#280)

`miniputt/marie-saturday.webp`: Marie on a Saturday at the kids' match (open green parka, grey hoodie, jeans,
trainers, a coffee cup), 768 x 1152, transparent, the same framing as the character poses. AI-generated with Codex
(GPT Image) on 2026-11-14, own work, the version the owner picked. Original PNG in the project folder
`codex-marie-casual-2026-11-14.zip`.

The season (#349): `miniputt/marie-saturday-talking.webp` and `marie-saturday-happy.webp` (the same outfit, talking and
happy, 424 x 1144 (cropped to the figure on 2026-11-18 so she shows bigger), transparent; Codex/GPT Image, own work, owner OK 2026-11-15; originals in the project folder
`art/codex-2026-11-15/`). `miniputt/kid-<id>.webp` for the seven kids (Lucas, Selma, Nora, Ahmed, Vetle, Venla, Mats in
the club's green kit, Mats in a grey keeper's shirt), 224 x 476 (one crop box for all seven, so their heights still compare), transparent, scaled and cropped from Codex/GPT Image PNGs made on
2026-11-14, own work; originals in `miniputt-kids-349.zip` in the project folder.

Tuesday's drills (#349, owner asked 2026-11-18): `miniputt/drill-{spread,pass,home,shoot,free}.webp`, 640 x 480, the kids
doing each drill on the miniputt pitch. AI-generated with Codex (GPT Image) on 2026-11-18 from the pitch and kid
references, own work; 1024 x 768 PNG originals in `miniputt-drills-351.zip` in the project folder.

Round 4 (#372, owner asked 2026-11-18): `miniputt/logo-{timenes,smatroll,vind,bamser,raketter}.webp`, 256 x 256,
transparent, the five clubs' logos (flat, no shield or text: a pine and a ball, a troll, a wind face, a teddy bear, a
rocket). `kid-lucas.webp` replaced: the same picture with the white collar the other outfield kids have, cropped like
them. Both made with Codex (GPT Image) on 2026-11-18, own work; PNG originals in `miniputt-372.zip` in the project
folder.

## The city map (#294, painted map)

`citymap/kristiansand.webp` (1774 x 887, map v4, north up, no text): Kristiansand and around, from Søgne to the
Lillesand side, painted with Codex (GPT Image) on 2026-11-15, own work, traced from Kartverket N100 land cover.
**Kartdata © Kartverket (CC BY 4.0)**: the map page shows this credit on the map. The base has no landmark buildings.

`citymap/landmarks/*.webp` (11 files, longest side 384 px, transparent): cathedral, concert hall, fortress,
lighthouse, fish market, station, university, factory, zoo, airport and mall, painted by Codex on 2026-11-15 as
separate layers. The page puts them on the map from `landmarks:` in `content/citymap/places.yml` (x, y and width in
the base map's pixels), so one can be moved, resized or swapped without a new base map. The full-size PNG originals,
a contact sheet and the prompts are on corvus in `D:\Assets\Art\codex-2026-11-14\map-v4\`.

`citymap/winter/` (winter set, shown in the game's winter months, `src/citymap/winter.ts`): `kristiansand.webp`
(1774 x 887) and `landmarks/*.webp` (same 11 names and pixel sizes as the summer ones), the summer v4 files edited by
Codex (GPT Image) on 2026-11-16 to add snow and bare trees, own work (version v2b, owner approved 2026-11-16). Same
Kartverket credit as the summer map. The landmarks were fitted onto the summer cut-outs with
`tools/map/fit_winter_landmarks.py` so `x`, `y` and `w` in `places.yml` fit both. The 1024 px PNG originals and a
contact sheet are in the project folder `art/citymap-winter/codex-v2b/citymap-v4-winter-v2b.zip`; the brief is in
`plans/locations/map-v4-winter/prompts.md`.

Pins and district names are not in the picture: the page draws them from `content/citymap/places.yml`, in the
picture's pixels. The earlier v3 map is in the project folder `codex-kristiansand-map-2026-11-14.zip`.

## Side-page place pictures (#327)

`scenes/<id>.webp`: the place picture behind a side page on a PC (`src/design/side-backdrop.ts`), resized to WebP from
the project folder, nothing else changed. All AI-generated with Codex (GPT Image), own work.

- `quiz-pub.webp` (1672 x 941): the pub, from `art/quizkvelden/pub-interior.png` (2026-11).
- `kit-hobby-room.webp` (1671 x 941): the hobby room, from `art/byggesettet/hobby-room-v4.png` (2026-11).
- `stall-front.webp` (1672 x 941): the stall with the hatch open, from `art/dugnadsbua/stall-front.png` (2026-11).
- `plot-field.webp` (1672 x 941): the four rows from above, from `art/potetakeren/plot-topdown.png` (2026-11).
- `sled-hill.webp` (1672 x 941): Timenesbakken from the start, from `art/codex-2026-11-15/sled-hill.png` (2026-11-14).
- `miniputt-pitch.webp` (1536 x 1024): the kids' pitch, from corvus `D:\Assets\Art\codex-2026-11-14\miniputt\pitch.png`
  (2026-11-14).
- `guitar-garage.webp` (1536 x 1024): Lars-Owe's garage in Vennesla, from `art/guitar/garage_vennesla.png` (2026-10-29,
  made for the guitar sandbox #169), behind the guitar menu (#373).

Makrellturen uses its own `fishing/jetty-grill.webp`.

## Tab icons and phone stickers

`public/icons/<game|guitar|robot>-<32|180>.png`: the browser-tab icon (32 px) and home-screen icon (180 px) of
`index.html` (Skipper Chips), `guitar.html` (amber pick) and `robot.html` (the player's flipper robot).
`content/stickers/art/<id>.webp` (192 px, alpha): one picture per sticker in `content/stickers/stickers.yml`, shown in
the phone's sticker app once the player has it. Sources: the project folder `art/codex-2026-11-16-natt/` (icons cut
from 2x2 concept sheets, stickers one image each; `runde2/` holds the robot icon and the new coffee mug). AI-generated
with Codex's built-in image generation (OpenAI GPT Image) on corvus, 2026-11-15/16, for this project, with the
packaging Skipper, the game's robot renders and the Byggesettet stickers as references; own work, same licence as the
rest of the game's art. Picked by the owner 2026-11-16.

## gulls/ (Måsekrigen, #364)

Einar's webcam faces: head-and-shoulders crops of his off-duty all-year poses (`einar-allyear-*.png` in the project
folder `art/byggesettet/off-duty/`, made for the side gigs) on a dim room background, 320 x 240. Built by
`tools/art/build_gulls_pack.py`. Luffe on the keyboard reuses `sled/luffe/peek.webp`.

The painted art (#386): AI-generated with Codex (GPT Image) on 2026-11-19 via HUB, own work, prompts approved by the
owner (style "near-photoreal, painted"; prompts in the project folder
`plans/side-activities/einar-online/masekrigen-art/prompts.md`, originals in `art/masekrigen/codex-v1/` and
`masekrigen-art.zip`). Sliced on the sheets' fixed grids and trimmed by the same script: `beach.webp` (1536 x 922, 5:3),
`stand.webp`, `crate-{shrimp,chips,fishcakes}.webp`, `gull-{up,mid,down,landed,flee}.webp`,
`big-{up,down,landed,beaten}.webp`, `{you,einar}-{ready,swing}.webp`, `feather.webp` (the end screen's feather count)
and `logo.webp` (the first screen). Frames that swap share one trimmed box. Gulls face right; `src/gulls/draw.ts`
mirrors them and keeps the old shapes as a stand-in while a picture loads.

## Malaga ground (#376)

Codex (GPT Image) edits, own work, approved prompts by the owner 2026-11-18 (task t38 via HUB; prompts in
`/mnt/project-files/art/football/malaga-pitch/PROMPTS.md`):

- `football/pitch-grass.webp` (1407 x 1890): the Malaga match pitch, an edit of `football/pitch.webp` with the same
  lines and goals (grass, white wall, palms). The wall sits up to ~0.5 m inside the old fence line.
- `backgrounds/malaga_ground.webp` (1672 x 940) + `.json`: before and after a match in Malaga, an edit of
  `backgrounds/kickabout_fence.webp` with the same camera; the placement table is copied from it.
- `football/logos/crc.webp`: our heart from the shirt (`public/brand/chipr-chips-heart.png`), in the Malaga tables.

## 17. mai (#339)

Codex (GPT Image), own work, no text or brands, from the overnight batch of 2026-11-20 (owner approved the whole batch
2026-11-20; picks in `/mnt/project-files/art/codex-2026-11-20-natt/README.md`). Built by
`tools/art/build_may17_pack.py`:

- `backgrounds/torvet_17mai_stall.webp`, `backgrounds/torvet_17mai.webp` (1672 x 940) + `.json`: Torvet dressed for
  17 May, with and without the sports club's stall (takes A). The placement tables come from a camera guessed by eye.
- `backgrounds/backyard_posebyen.webp` + `.json`: the Posebyen backyard (base A) with the band gear (A) and the string
  lights (A) laid over it; `backgrounds/backyard_gig_night.webp` + `.json`: the finished evening gig (A).
- `layers/parade_17mai.webp`: the children's parade (A), trimmed; it slides across Torvet (`layers` in scene-art.json).
- `characters/kasper/`: Kasper Drange, Blytung!'s drummer: v3 neutral, talking, listening, happy, thinking (head held
  straight, owner 2026-11-20) and v2 worried. Annoyed and pointing are stand-ins (neutral, talking) until there is a take.
- `souvenirs/may17.webp`: the flag in a glass and the rosette (A), the home souvenir.

## Office wing (room review, 2026-11-24)

Blender renders from `crc_admin_wing_v2.blend` (room review, HUB on corvus): `backgrounds/corridor_main(_rev)`,
`meeting_room(_rev)`, `pano_meeting`, `per_office_desk/door`, and the new `your_office_desk/door` (the player's
office) and `production_office_desk/door` (`.webp` + `.json`). Third-party models in these rooms, CC BY:

- "Laptop" by viveksha (Fab).
- "Office Binder" by AshenCut.
- "Office Pack Vol.1" by MeikWModels.

Open: the licence of the VizPeople chairs in Per's office is not confirmed yet.

## Off-duty clothes (#394)

`characters/<slug>/off-duty/<neutral|talking|happy|worried|thinking>.webp`: colleagues in their own clothes on a day
off, worn in the 17. mai scenes (`torvet_stall`, `torvet_parade`, `backyard`, `backyard_gig`, outfit `off-duty` in
`content/scene-art.json`; its `who` list says who has a set, everyone else keeps their own poses). Built by
`tools/art/build_offduty_pack.py` from the project folder: Unni and Happy from `art/off-duty/`, Einar's all-year set
and Lars-Owe from `art/byggesettet/off-duty/`, and Marie's spring set (`art/off-duty/marie-off-*.png`, made
2026-11-20). Source: AI-generated with Codex's built-in image generation (OpenAI GPT Image), own work.

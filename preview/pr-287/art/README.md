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

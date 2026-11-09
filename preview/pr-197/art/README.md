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
+ `.json` (after the match), `characters/<slug>/football/<look|talking|happy>.webp` (the players in kit, same cutout
format as above) and the BuddyZone photos `content/buddyzone/photos/r-kickabout-happy*.webp`.

## Guitar sandbox (#169)

Built by `tools/art/build_guitar_pack.py` from the project folder `art/guitar/` (AI-generated with Codex image_gen,
2026-10-29, own work; prompts in `art/guitar/image-prompts.md`, approved by the owner 2026-10-30):
`guitar/highway.webp` (stage floor behind the lanes), `guitar/gem_<0|1|2>.webp` (notes, left to right),
`guitar/hitline.webp` + `hitline_lit.webp` (hit bar, idle and lit; where its pick targets sit: `BAR` in
`src/guitar/main.ts`) and `guitar/fx_hit.webp`, `fx_miss.webp`.

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

- `room.webp` (1600 x 900): the test kitchen behind the people. Source `lab-room.png`: AI-generated with Codex (GPT
  Image) 2026-11-09 from a description of the game's rendered rooms, own work. A stand-in: replace it with a render of
  the lab from the Blender scene when there is one (same file name, nothing else changes).

How a bag is put together from these: `bagSvg` in `src/flavour/bag.ts`. The name is set in Baloo 2 ExtraBold
(`@fontsource/baloo-2`, SIL OFL 1.1), squeezed a little, which comes close to the lettering on the series.

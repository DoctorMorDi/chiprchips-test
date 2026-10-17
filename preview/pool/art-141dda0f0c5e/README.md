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

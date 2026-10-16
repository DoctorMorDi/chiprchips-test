# Web art pack

Built by `tools/art/build_web_pack.py` (issue #55) from local-only sources; rerun it after new renders or cutouts.

- `characters/<slug>/<pose>.webp`: full-body cutouts, 768 x 1152 (2:3), alpha, feet at 97 % of the height.
  The grey halo of the source mattes is removed (edge colours pulled from the figure, matte cleaned and choked 1 px).
- `backgrounds/<id>.webp`: Episode 0 and 1 scene backgrounds at 1080 px high (shots 1920 x 1080,
  panoramas 4114 x 1080, 180-degree cylindrical strips).
- `backgrounds/<id>.json`: camera and placement table; every `*_px` and `px_per_*` value is already scaled to the web image
  (`web_scale`, `source_size` record the original render).
- `manifest.json`: which backgrounds serve which game scene, and the cutout list.

Placing a character: pick a placement row (or interpolate), scale the cutout so `0.97 * height` =
`person_175_px * character_height_m / 1.75`, and put its bottom edge at `feet_y_px + 0.03 * scaled_height`.

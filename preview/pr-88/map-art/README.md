# Map art

Top-down art of the whole site for the walk map. It is drawn over the flat room colours in `src/map.ts`.

- **Source:** the project's own 3D plant, rendered in Blender on corvus. No external assets; the licence is the project's own.
  - The scripts are `D:\Assets\Blender\Projects\CRC\scripts\gamemap\render_site_topdown.py` (straight-down render of the plant and of the office wing) and `compose_gamemap.py` (layers the two renders and cuts them into tiles).
  - The plant is `assets\backgrounds\crc_plant_bg.blend`: the hall plus every kit. The office wing is `assets\office\crc_admin_wing_v2.blend`.
- **Scale:** 64 art pixels per 1.5 m tile, twice the map's 32 px tiles, so zooming in stays sharp. Art pixel (0, 0) is the top-left corner of the walk grid (`plan.bounds` in `src/game/facility.ts`). Anything above head height (roofs, ceilings, lights) is left out.
- **Files:** `manifest.json` lists the 1024 px WebP tiles (fully transparent tiles are skipped).
- **To refresh:** re-run both scripts after the 3D plant changes, then `python3 tools/map/blocks.py` so the walk grid blocks what the new art draws (machines, racks, big furniture; issue #48).

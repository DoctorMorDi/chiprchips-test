# Audio

Game-ready MP3s, made from masters by `npm run audio:build -- <masters folder>` (`tools/audio/build.ts`, needs ffmpeg).
Never edit these files by hand: change the master and rebuild. Which sound plays where is set in `src/game/soundscape.ts`.

## Format (rules in `tools/audio/specs.ts`)

All files are MP3, 44.1 kHz. Loudness is fixed per folder; how loud each group plays is set in code.

| Folder | Channels | Bitrate | Level | Loop |
| --- | --- | --- | --- | --- |
| `music/` (background) | stereo | 192 kbps | -16 LUFS | yes |
| `music/collectibles/` | stereo | 192 kbps | -16 LUFS | no |
| `music/stings/` | stereo | 192 kbps | peak -1 dBFS | no |
| `ambience/` | stereo | 128 kbps | -24 LUFS | yes |
| `sounds/ui/`, `sounds/phone/`, `sounds/menus/` | mono | 128 kbps | peak -6 dBFS | no |
| `sounds/` (everything else) | mono | 128 kbps | peak -3 dBFS | only `*_looped` |
| `vo/` | mono | 96 kbps | -18 LUFS | no |

Loops get their last second crossfaded into the start, so they repeat without a seam. One-shots get leading silence trimmed and a 10 ms fade-out.

## Masters

WAV masters live outside Git on corvus in `D:\Assets\Audio\CRC\masters\`, in the same folders as here.
The full plan (file list, sources, what plays where) is the "CRC Audio Plan (MVP)" doc in the project.

## Sources and licences

| Files | Source | Licence |
| --- | --- | --- |
| `ambience/factory/machines/` (except the two below), `ambience/office/` (except `hygiene_looped`), `sounds/footsteps/` (except `boots_step`, `splash_step`), `sounds/menus/` | Earlier Unity version of CRC (Kaizen), `D:\Assets\Blender\Assets\Unity Imports\KaizenStandard\Audio` | own project |
| `ambience/factory/machines/washer_looped`, `peeler_faulty_looped`, `sounds/phone/card_reveal`, `sounds/hygiene/hairnet_snap`, `sounds/obs/crate_drag`, `music/stings/good_news` (4 s take 2, 2026-10-13) | Generated with ElevenLabs Sound Effects v2, picked by the owner 2026-10-12 (`peeler_faulty_looped` is a mix of two takes). Takes and prompts: `/mnt/project-files/audio/sfx-generated/2026-10-12/` | ElevenLabs paid plan, commercial use allowed |
| `ambience/factory/factory_ambience`, `ambience/office/hygiene_looped`, `ambience/exterior/`, `ambience/home/`, `sounds/day/shift_horn`, `shift_horn_overtime`, `sounds/peeler/start`, `stop`, `sounds/footsteps/boots_step`, `splash_step`, `sounds/hygiene/soap_pump`, `soap_pump_empty`, `hand_dryer`, `sounds/obs/drip_looped`, `forklift_beep_looped`, `forklift_horn`, `mop`, `tape_rip`, `bottle_pickup`, `sounds/phone/locked`, `music/stings/bad_news` | Generated with ElevenLabs Sound Effects v2 (issue #25), one of four takes picked by the owner 2026-10-13. Takes and prompts: `/mnt/project-files/audio/sfx-generated/2026-10-13/` | ElevenLabs paid plan, commercial use allowed |
| `sounds/phone/open` (Pixabay user 47313572, 316850), `sounds/phone/close` (litupsubway, 513359), `sounds/phone/bz_sticker` (vadim_makes_sound, 547860), `sounds/phone/bz_buddy_request` (Universfield, 352705), `sounds/phone/bz_buddy_accepted` (soundshelfstudio, 513565), `sounds/ui/click` (arnav_geddada, 374229), `sounds/ui/choice_confirm` (Universfield, 124464), `sounds/ui/hour_tick` (freesound_community, 88027), `sounds/day/alarm_looped` (freesound_community, 95792), `sounds/doors/office_door` (DRAGON-STUDIO, 450444 + 382723), `sounds/doors/badge_beep` (u_68csiaifb5, 410380), `sounds/doors/swing_door` (freesound_community, 38280), `sounds/hygiene/hand_wash` (freesound_community, 101868), `sounds/peeler/jam_thud` (floraphonic + DRAGON-STUDIO, 193356 + 504039), `sounds/obs/guard_click` (floraphonic, 200422), `sounds/obs/handled` (Universfield, 487898) | Pixabay sound effects (issue #43), cut and levelled from the downloads in `D:\Assets\Audio\CRC\pixabay sfx\` on corvus; owner-picked take. Author and Pixabay id per file; attributions in `/mnt/project-files/audio/pixabay-sfx-attributions.md` | Pixabay Content License: free for commercial use in games, no attribution required |
| `music/stings/collectible_unlock` | Cut from the Blytung! Malmtoget master (riff from 0:05.5, 4.9 s with a fade-out; also plays at episode end), issue #72; owner-picked take. Masters on corvus in `D:\Assets\Audio\CRC\masters\music\stings\` | own work |
| `sounds/doors/badge_denied` | Synthesised for the game (two low beeps), issue #43 | own work |
| `sounds/football/` (kick, fence, net, whistle, cheer) | Generated with ElevenLabs Sound Effects for the kickabout (#143), 2026-10-29; first take of each picked until the owner listens. Takes: `/mnt/project-files/audio/sfx-generated/2026-10-29-football/` | ElevenLabs paid plan, commercial use allowed |
| `vo/football.*` | Kickabout voice lines (#143), ElevenLabs Eleven v4 (owner's account), take a until the owner picks; Vegard and Leo voices picked by the owner. Takes a and b and the README: `/mnt/project-files/audio/vo/football/` | ElevenLabs commercial terms (paid plan) |
| `vo/` | Episode 0, Episode 1 (`ep01.*`) and Episode 2 (`ep02.*`) voice lines, ElevenLabs Eleven v4 (owner's account), take a of each line until the owner picks takes in the listening page; reception, Per's office and canteen recorded by the owner. Masters on corvus in `D:\Assets\Audio\CRC\ep00_voices\`. Line ids and text: the narrative production files (ep00-lines.csv, ep00-day-loop-lines.csv, ep01-lines.csv, ep02-lines.csv). Episode 1 and 2 masters (takes a and b): `/mnt/project-files/audio/vo/ep01_voices/`, `ep02_voices/`. | ElevenLabs commercial terms (paid plan) |

The current files were rebuilt from the earlier MP3s on 2026-10-05 to fix their levels (they ranged from -20 to -52 LUFS); rebuilding from the original WAVs will give slightly better quality.

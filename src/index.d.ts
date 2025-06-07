import Rig from "./rig";
import AnimationAsset from "./roblox/animation_asset";

export { AnimationTrack, animation_solver as solve_animation } from "./animation_solver";
export { LimbInfo, Identity as Rig } from "./rig";
export { Identity as AnimationAsset } from "./roblox/animation_asset";

export declare const load_keyframe_sequence: AnimationAsset["load_keyframe_sequence"];
export declare const create_rig: Rig["create_rig"];

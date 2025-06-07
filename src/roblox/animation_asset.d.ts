import type { Identity as rig_Identity } from "../rig";

export type PoseNode = {
	position: vector;
	quat_vector: vector;
	quat_scalar: number;
	easing_function: (alpha: number) => number;
};

export type Poses = Array<PoseNode>;

type KeyframeNode = {
	time: number;
	poses: Map<string, PoseNode>;
};

export type Identity = {
	keyframe_times: Array<number>;
	keyframe_poses: Array<Poses>;
	length: number;
};

interface AnimationAsset {
	load_keyframe_sequence: (keyframe_sequence: KeyframeSequence, rig: rig_Identity) => Identity;
}

declare const AnimationAsset: AnimationAsset;
export default AnimationAsset;

import { Identity } from "./rig";

export type AnimationTrack = {
	/** 0-1 */
	alpha: number;

	/** 0-1 */
	start_fade_time: number;
	stop_fade_time: number;
	weight: number;

	/** arbitrary number */
	priority: number;
};

declare const animation_solver: (rig: Identity, tracks: Map<Identity, AnimationTrack>, root: CFrame) => void;
export default animation_solver;

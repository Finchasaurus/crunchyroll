export type LimbInfo = {
	c0: CFrame;
	c1: CFrame;
	name: string;
	children?: Array<LimbInfo>;
};

export type Limb = {
	name: string;
	c0: CFrame;
	c1: CFrame;
	depends_on: string;
};

export type LimbTransform = {
	priority: number;
	position: vector;
	quat_vector: vector;
	quat_scalar: number;
};

export type Identity = {
	result_coordinate_frames: Map<string, CFrame>;
};

interface Rig {
	create_rig: (root: LimbInfo) => Identity;
}
declare const Rig: Rig;
export default Rig;

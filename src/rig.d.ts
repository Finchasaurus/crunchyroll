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
	_limbs: Array<Limb>;
	_limb_transforms: Array<LimbTransform>;
	_limb_name_to_index: Map<string, number>;
	result_coordinate_frames: Map<string, CFrame>;
};

export declare const create_rig: (root: LimbInfo) => Identity;

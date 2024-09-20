/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export const enum Preset {
  Bw = 0,
  Poster = 1,
  Photo = 2
}
export const enum ColorMode {
  Color = 0,
  Binary = 1
}
export const enum Hierarchical {
  Stacked = 0,
  Cutout = 1
}
export const enum PathSimplifyMode {
  None = 0,
  Polygon = 1,
  Spline = 2
}
export interface Config {
  /** True color image or binary image (black and white) */
  colorMode: ColorMode
  /** Hierarchial clustering or non-stacked. Only applicable to color images. */
  hierarchical: Hierarchical
  /** Discard patches smaller than X pixels in size (cleaner) */
  filterSpeckle: number
  /** The number of significant bits to use in an RGB channel (more accurate) */
  colorPrecision: number
  /** The color difference between gradient layers (less layers) */
  layerDifference: number
  /** Curve fitting mode */
  mode: PathSimplifyMode
  /** Minimum momentary angle (degree) to be considered a corner (smoother) */
  cornerThreshold: number
  /** Perform iterative subdivide smooth until all segments are shorter than this length */
  lengthThreshold: number
  /** The maximum number of iterations to perform */
  maxIterations: number
  /** Minimum angle displacement (degree) to splice a spline (less accurate) */
  spliceThreshold: number
  /** Number of decimal places to use in path string */
  pathPrecision?: number
}
export interface RawDataConfig {
  width: number
  height: number
}
export function vectorize(source: Buffer, config?: Config | Preset | undefined | null): Promise<string>
export function vectorizeRaw(source: Buffer, args: RawDataConfig, config?: Config | Preset | undefined | null): Promise<string>
export function vectorizeSync(source: Buffer, config?: Config | Preset | undefined | null): string
export function vectorizeRawSync(source: Buffer, args: RawDataConfig, config?: Config | Preset | undefined | null): string
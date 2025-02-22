import { TiledLayer } from "./Layer";
import { TiledFrame, TiledProperty } from "./Types";

export interface TilesetTile {
    id: number;
    type: string;
    image: string;
    imageheight: number;
    imagewidth: number;
    animation: TiledFrame[];
    properites: TiledProperty[];
    terrain: number[];
    objectgroup: TiledLayer;
    probability: number;
 }
import { FluidObject, FixedObject } from "gatsby-image";

export interface FluidImageQuery {
    data: {
        file: {
            childImageSharp: {
                fluid: FluidObject
            }
        }
    }
}

export interface FixedImageQuery {
    data: {
        file: {
            childImageSharp: {
                fixed: FixedObject
            }
        }
    }
}
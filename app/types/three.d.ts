// types/three.d.ts
import * as THREE from 'three';

declare module 'three' {
  interface Object3D {
    // Add any custom extensions here if needed
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      threeGlobe: any;
      group: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      mesh: any;
    }
  }
}
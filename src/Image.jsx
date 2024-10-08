import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as THREE from 'three';

const Image = () => {
    let tex = useTexture('./Frame 1.png')
    let cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta
    });
  return (
    <group rotation={[0,1.3, 0.3,]}>

    <mesh ref={cyl}>
    <cylinderGeometry args={[2, 2, 2,60 ,60, true,]} />
    <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}/>
  </mesh>
    </group>
  )
}

export default Image
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/assets/dance.glb
*/

import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./assets/dance2.glb')
  const { actions } = useAnimations(animations, group)
  
  useEffect(() => {
    actions.move.play();
  });
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={[0, -8, -15]}>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Ch46" geometry={nodes.Ch46.geometry} material={materials.Ch46_body} skeleton={nodes.Ch46.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./assets/dance2.glb')

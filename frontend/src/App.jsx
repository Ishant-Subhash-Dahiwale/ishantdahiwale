
import React,{ useRef } from 'react'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { MeshStandardMaterial, BoxGeometry } from 'three'





function App() {
  const reff = useRef();

  return (
    <>
      <Canvas style={{ background: '#5ca8b8', height: window.innerHeight - 20, width: window.innerWidth - 20 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 1, 0]} />
        <Def ref={reff} />
        <directionalLight color={'red'} intensity={5} position={[0, 0, 5]} 
        />
        <mesh ref={reff} >
          <icosahedronGeometry args={[1, 3, 3]}  />
          <meshStandardMaterial />
          <OrbitControls />
        </mesh>
      </Canvas>
    </>
  )
}

// Use forwardRef to accept the ref and attach it to the desired element
const Def = React.forwardRef((props, ref) => {
  useFrame((state, delta) => {
    if (ref && ref.current) {
      ref.current.rotation.x += 0.5* delta; 
    }
  });

  return null; // Since Def doesn't render anything, return null
});

export default App
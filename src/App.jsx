import { Canvas } from '@react-three/fiber'
import "./style.css";
import { OrbitControls, useTexture } from '@react-three/drei';
import Image from './Image';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

const App = () => {

  return (
    <>
    <Canvas camera={{ fov: 60 }}>
      <OrbitControls />
      <ambientLight />
      <Image />
      {/* <mesh>
        <cylinderGeometry args={[2, 2, 2,30 ,30, true,]} />
        <meshStandardMaterial map={tex} side={THREE.DoubleSide}/>

      </mesh> */}


      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={12.0} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        // blurPass={undefined} // A blur pass.
        // kernelSize={KernelSize.LARGE} // blur kernel size
        // mipmapBlur={false} // Enables or disables mipmap blur.
        // resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
        // resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
        />
        {/* <ToneMapping adaptive /> */}
      </EffectComposer>



    </Canvas>
    
    </>
  );
}

export default App
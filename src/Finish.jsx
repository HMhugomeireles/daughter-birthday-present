import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Model } from './components/Dance';

import { Environment, OrbitControls } from "@react-three/drei";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Finish() {
    const { width, height } = useWindowSize();

    // useEffect(() => {
    //     const music = document.getElementById('music');
    //     music.play();
    //     return () => music.pause();
    // })

    return (
        <>
            <h1 className="mt-5 font-bold text-5xl text-center">Parabéns Íris</h1>
            <audio id="music" src={'./assets/bones.mp3'} autoPlay />
            <ReactConfetti
                width={width}
                height={height}
            />
            <Canvas  style={{ height: '100vh' }}>
                <OrbitControls />
                <directionalLight intensity={0.5} />
                <ambientLight intensity={0.2} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <Environment preset="forest" />
            </Canvas>
            
        </>
    );
}

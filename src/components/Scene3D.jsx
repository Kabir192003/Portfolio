import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Float, Stars } from '@react-three/drei';

// A composition of floating wireframe shapes representing structure, form, and network - the core of web design.
const WebDesignElements = () => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.05;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
        }
    });

    const materialProps = {
        color: "#ffffff",
        roughness: 0.1,
        metalness: 0.8,
        wireframe: true,
        transparent: true,
    };

    return (
        <group ref={groupRef} position={[0, -2, -20]}>
            {/* Representing Layout / Grid (Box) */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[-10, 4, 0]}>
                    <boxGeometry args={[6, 6, 6]} />
                    <meshStandardMaterial {...materialProps} opacity={0.15} />
                </mesh>
            </Float>

            {/* Representing Connectivity / Network (Complex vertices via Icosahedron) */}
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
                <mesh position={[0, -2, -5]}>
                    <icosahedronGeometry args={[5, 1]} />
                    <meshStandardMaterial {...materialProps} opacity={0.2} color="#a0aec0" />
                </mesh>
            </Float>

            {/* Representing Content / Focus (Sphere) */}
            <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
                <mesh position={[10, 3, 2]}>
                    <sphereGeometry args={[4, 16, 16]} />
                    <meshStandardMaterial {...materialProps} opacity={0.15} />
                </mesh>
            </Float>

            {/* Decorative smaller elements */}
            <Float speed={3} rotationIntensity={2} floatIntensity={3}>
                <mesh position={[6, -6, 5]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial {...materialProps} opacity={0.1} />
                </mesh>
            </Float>
            <Float speed={1} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[-8, -5, -2]}>
                    <icosahedronGeometry args={[2, 0]} />
                    <meshStandardMaterial {...materialProps} opacity={0.1} />
                </mesh>
            </Float>
        </group>
    );
};

const Scene3D = () => {
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            {/* Lighting */}
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} />

            {/* Subtle particle background */}
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

            {/* The main abstract geometry */}
            <WebDesignElements />

            {/* Minimal controls that don't steal scroll */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.2}
                autoRotate={true}
                autoRotateSpeed={0.5}
            />

            <Environment preset="city" />
        </Canvas>
    );
};

export default Scene3D;

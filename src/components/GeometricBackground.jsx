import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// ─── Floating geometric shapes ────────────────────────────────────────────────
const Shape = ({ geo, position, rotationSpeed, scale, color, opacity, wireframe }) => {
    const meshRef = useRef();
    const startPos = useMemo(() => new THREE.Vector3(...position), [position]);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.elapsedTime;

        // Gentle float
        meshRef.current.position.x = startPos.x + Math.sin(t * 0.12 + startPos.y) * 0.3;
        meshRef.current.position.y = startPos.y + Math.cos(t * 0.1 + startPos.x) * 0.25;
        meshRef.current.position.z = startPos.z + Math.sin(t * 0.08 + startPos.z) * 0.15;

        // Slow rotation
        meshRef.current.rotation.x += rotationSpeed[0] * 0.003;
        meshRef.current.rotation.y += rotationSpeed[1] * 0.003;
        meshRef.current.rotation.z += rotationSpeed[2] * 0.002;
    });

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            {geo}
            <meshStandardMaterial
                color={color}
                transparent
                opacity={opacity}
                roughness={0.8}
                metalness={0.22}
                wireframe={wireframe}
            />
        </mesh>
    );
};

// ─── Wireframe grid plane ─────────────────────────────────────────────────────
const SubtleGrid = () => {
    const matRef = useRef();

    useFrame((state) => {
        if (matRef.current) {
            matRef.current.opacity = 0.12 + Math.sin(state.clock.elapsedTime * 0.2) * 0.03;
        }
    });

    return (
        <mesh rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -3, -5]}>
            <planeGeometry args={[40, 40, 30, 30]} />
            <meshBasicMaterial
                ref={matRef}
                color="#6e4fd1"
                wireframe
                transparent
                opacity={0.3}
            />
        </mesh>
    );
};

const SceneRig = ({ children }) => {
    const groupRef = useRef();
    const { camera, pointer } = useThree();
    const scrollProgress = useRef(0);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        const doc = document.documentElement;
        const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
        const next = window.scrollY / maxScroll;
        scrollProgress.current = THREE.MathUtils.lerp(scrollProgress.current, next, 0.06);

        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.08 + pointer.x * 0.25 + scrollProgress.current * 0.75;
            groupRef.current.rotation.x = Math.sin(t * 0.25) * 0.06 + pointer.y * 0.12;
            groupRef.current.position.y = -0.5 - scrollProgress.current * 1.4;
        }

        camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.45, 0.03);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.1 + scrollProgress.current * 0.35, 0.03);
        camera.lookAt(0, -0.25, -7.5);
    });

    return <group ref={groupRef}>{children}</group>;
};

// ─── Scene with floating geometries ───────────────────────────────────────────
const Scene = () => {
    // Carefully placed shapes — subtle, sparse, premium
    const shapes = useMemo(() => [
        // Octahedrons (diamond-like)
        { geo: <octahedronGeometry args={[0.6, 0]} />, pos: [-4, 2, -6], rot: [0.3, 0.5, 0.1], scale: 1, color: '#9e74ff', opacity: 0.48 },
        { geo: <octahedronGeometry args={[0.4, 0]} />, pos: [4.5, -1.5, -8], rot: [0.2, 0.7, 0.3], scale: 1, color: '#7f5cff', opacity: 0.42 },
        // Icosahedrons (soft spherical)
        { geo: <icosahedronGeometry args={[0.5, 0]} />, pos: [3, 3, -7], rot: [0.4, 0.2, 0.5], scale: 1, color: '#d4b7ff', opacity: 0.45 },
        { geo: <icosahedronGeometry args={[0.35, 0]} />, pos: [-3, -2, -9], rot: [0.1, 0.3, 0.4], scale: 1, color: '#7d52f4', opacity: 0.40 },
        // Tetrahedrons
        { geo: <tetrahedronGeometry args={[0.5, 0]} />, pos: [0.5, 4, -10], rot: [0.6, 0.3, 0.2], scale: 1, color: '#8f68ff', opacity: 0.40 },
        { geo: <tetrahedronGeometry args={[0.3, 0]} />, pos: [-5, 0, -7], rot: [0.2, 0.4, 0.6], scale: 1, color: '#c77dff', opacity: 0.42 },
        // Torus (rings)
        { geo: <torusGeometry args={[0.5, 0.08, 12, 32]} />, pos: [2, -3, -11], rot: [0.5, 0.1, 0.3], scale: 1.2, color: '#9c63ff', opacity: 0.40 },
        { geo: <torusGeometry args={[0.35, 0.06, 12, 32]} />, pos: [-2, 1.5, -8], rot: [0.3, 0.6, 0.2], scale: 1, color: '#ba93ff', opacity: 0.45 },
        // Boxes
        { geo: <boxGeometry args={[0.5, 0.5, 0.5]} />, pos: [5, 1, -9], rot: [0.4, 0.4, 0.4], scale: 0.8, color: '#6f4dd6', opacity: 0.42 },
        { geo: <boxGeometry args={[0.3, 0.3, 0.3]} />, pos: [-4.5, 3, -10], rot: [0.2, 0.5, 0.1], scale: 1, color: '#b28eff', opacity: 0.48 },
    ], []);

    return (
        <>
            <ambientLight intensity={0.4} color="#b68cff" />
            <directionalLight position={[5, 5, 3]} intensity={0.6} color="#c77dff" />
            <directionalLight position={[-3, -2, 5]} intensity={0.4} color="#7e5dff" />

            <SceneRig>
                <SubtleGrid />
                {shapes.map((s, i) => (
                    <Shape
                        key={i}
                        geo={s.geo}
                        position={s.pos}
                        rotationSpeed={s.rot}
                        scale={s.scale}
                        color={s.color}
                        opacity={s.opacity}
                        wireframe={i % 2 === 0}
                    />
                ))}
            </SceneRig>
        </>
    );
};

// ─── Export ────────────────────────────────────────────────────────────────────
const GeometricBackground = ({ style = {}, showBackdrop = true }) => (
    <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        background: showBackdrop
            ? 'radial-gradient(circle at 50% 0%, rgba(164,90,255,0.16), transparent 45%), var(--bg-color)'
            : 'transparent',
        pointerEvents: 'none',
        ...style,
    }}>
        <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 1.5]}
            style={{ width: '100%', height: '100%' }}
        >
            <Scene />
        </Canvas>
    </div>
);

export default GeometricBackground;

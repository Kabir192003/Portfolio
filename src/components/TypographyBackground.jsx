import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

// ─── Individual floating letter ───────────────────────────────────────────────
const FloatingLetter = ({ char, homePos, index, totalLetters }) => {
    const meshRef = useRef();
    const targetPos = useRef(new THREE.Vector3(...homePos));
    const currentPos = useRef(new THREE.Vector3(...homePos));

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.elapsedTime;

        // Cycle: 0-8s assembled, 8-12s float apart, 12-20s drifting, 20-24s reassemble
        const cycle = 24;
        const phase = (t % cycle);

        let tx, ty, tz;

        if (phase < 8) {
            // Assembled in word form — gentle breathing
            tx = homePos[0] + Math.sin(t * 0.3 + index * 0.4) * 0.03;
            ty = homePos[1] + Math.cos(t * 0.25 + index * 0.6) * 0.03;
            tz = homePos[2] + Math.sin(t * 0.2 + index * 0.3) * 0.02;
        } else if (phase < 12) {
            // Dissolving outward
            const p = (phase - 8) / 4;
            const ease = p * p;
            const angle = (index / totalLetters) * Math.PI * 2 + index;
            const drift = ease * 2.5;
            tx = homePos[0] + Math.cos(angle) * drift;
            ty = homePos[1] + Math.sin(angle * 0.7) * drift * 0.6;
            tz = homePos[2] + Math.sin(angle * 1.3) * drift * 0.4;
        } else if (phase < 20) {
            // Drifting freely as individual letters
            const angle = (index / totalLetters) * Math.PI * 2 + index;
            const drift = 2.5;
            const wobble = (phase - 12) * 0.15;
            tx = homePos[0] + Math.cos(angle + wobble) * drift + Math.sin(t * 0.12 + index) * 0.3;
            ty = homePos[1] + Math.sin(angle * 0.7 + wobble * 0.5) * drift * 0.6 + Math.cos(t * 0.15 + index) * 0.2;
            tz = homePos[2] + Math.sin(angle * 1.3) * drift * 0.4;
        } else {
            // Reassembling
            const p = (phase - 20) / 4;
            const ease = p * p * (3 - 2 * p); // smoothstep
            const angle = (index / totalLetters) * Math.PI * 2 + index;
            const drift = 2.5 * (1 - ease);
            const wobble = (20 - 12) * 0.15;
            tx = homePos[0] + Math.cos(angle + wobble) * drift * (1 - ease) + homePos[0] * ease;
            ty = homePos[1] + Math.sin(angle * 0.7 + wobble * 0.5) * drift * 0.6 * (1 - ease) + homePos[1] * ease;
            tz = homePos[2] + Math.sin(angle * 1.3) * drift * 0.4 * (1 - ease) + homePos[2] * ease;
            // Simplify: just interpolate from drift back to home
            tx = homePos[0] * ease + (homePos[0] + Math.cos(angle + wobble) * 2.5) * (1 - ease);
            ty = homePos[1] * ease + (homePos[1] + Math.sin(angle * 0.7 + wobble * 0.5) * 1.5) * (1 - ease);
            tz = homePos[2] * ease + (homePos[2] + Math.sin(angle * 1.3) * 1.0) * (1 - ease);
        }

        // Smooth follow
        currentPos.current.x = THREE.MathUtils.lerp(currentPos.current.x, tx, 0.035);
        currentPos.current.y = THREE.MathUtils.lerp(currentPos.current.y, ty, 0.035);
        currentPos.current.z = THREE.MathUtils.lerp(currentPos.current.z, tz, 0.035);

        meshRef.current.position.copy(currentPos.current);

        // Subtle rotation
        meshRef.current.rotation.y = Math.sin(t * 0.1 + index * 0.7) * 0.08;
        meshRef.current.rotation.x = Math.cos(t * 0.08 + index * 0.5) * 0.04;
    });

    return (
        <Text
            ref={meshRef}
            position={homePos}
            fontSize={0.65}
            font="https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmP1I4OD1.woff"
            letterSpacing={0}
            anchorX="center"
            anchorY="middle"
            material-toneMapped={false}
        >
            {char}
            <meshStandardMaterial
                color="#785a30"
                emissive="#3d2a10"
                emissiveIntensity={0.4}
                roughness={0.7}
                metalness={0.3}
                transparent
                opacity={0.5}
            />
        </Text>
    );
};

// ─── Build word from letters ──────────────────────────────────────────────────
const FloatingWord = ({ word, yOffset = 0 }) => {
    const letters = word.split('');
    const spacing = 0.45;
    const totalWidth = (letters.length - 1) * spacing;
    const startX = -totalWidth / 2;

    return (
        <>
            {letters.map((char, i) => (
                <FloatingLetter
                    key={`${word}-${i}`}
                    char={char}
                    homePos={[startX + i * spacing, yOffset, 0]}
                    index={i}
                    totalLetters={letters.length}
                />
            ))}
        </>
    );
};

// ─── Scene ────────────────────────────────────────────────────────────────────
const Scene = () => (
    <>
        <ambientLight intensity={0.15} />
        <directionalLight position={[3, 6, 4]} intensity={0.4} color="#d4bc8a" />
        <directionalLight position={[-4, -2, 3]} intensity={0.2} color="#6a5030" />

        {/* Two words stacked */}
        <FloatingWord word="DESIGN" yOffset={0.5} />
        <FloatingWord word="CREATE" yOffset={-0.5} />
    </>
);

// ─── Export ────────────────────────────────────────────────────────────────────
const TypographyBackground = () => (
    <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        background: 'var(--bg-color)',
        pointerEvents: 'none',
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

export default TypographyBackground;

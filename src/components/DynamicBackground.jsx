import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// ─── Vertex shader with mouse interaction ─────────────────────────────────────
const vertexShader = `
  uniform float uTime;
  uniform vec2  uMouse;
  varying vec2  vUv;
  varying float vElevation;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Base ocean swell — layered sines
    float wave =
      sin(pos.x * 0.80 + uTime) * 0.55 +
      sin(pos.x * 0.40 - uTime * 0.7) * 0.40 +
      sin(pos.y * 0.35 + pos.x * 0.25 + uTime * 0.5) * 0.30 +
      cos(pos.x * 0.60 + pos.y * 0.40 - uTime * 0.35) * 0.22;

    // Mouse ripple — radiates outward from cursor position
    vec2 mouseWorld = uMouse * 10.0;
    float dist = distance(pos.xy, mouseWorld);
    float ripple = exp(-dist * 0.3) * sin(dist * 3.0 - uTime * 3.5) * 0.35;
    wave += ripple;

    pos.z += wave;
    vElevation = wave;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

// ─── Fragment shader ──────────────────────────────────────────────────────────
const fragmentShader = `
  varying vec2  vUv;
  varying float vElevation;

  void main() {
    // Dot grid
    float dotFreq = 80.0;
    vec2 grid = fract(vUv * dotFreq);
    float d = distance(grid, vec2(0.5));
    float dot = 1.0 - smoothstep(0.18, 0.26, d);
    if (dot < 0.01) discard;

    // Elevation colour mapping
    float t = clamp((vElevation + 1.2) / 2.4, 0.0, 1.0);

    vec3 shadow = vec3(0.05, 0.03, 0.10);
    vec3 mid    = vec3(0.24, 0.15, 0.45);
    vec3 bright = vec3(0.67, 0.50, 0.90);

    vec3 col = mix(shadow, mid, smoothstep(0.0, 0.5, t));
    col = mix(col, bright, smoothstep(0.55, 1.0, t));

    // Crest specular
    float spec = smoothstep(0.80, 1.0, t);
    col += spec * vec3(0.90, 0.84, 1.0) * 0.32;

    gl_FragColor = vec4(col * dot, 1.0);
  }
`;

// ─── DotWave mesh ─────────────────────────────────────────────────────────────
const DotWave = () => {
    const matRef = useRef();
    const { viewport, pointer } = useThree();
    const smoothMouse = useRef(new THREE.Vector2(0, 0));

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
    }), []);

    useFrame((_, delta) => {
        if (!matRef.current) return;
        matRef.current.uniforms.uTime.value += delta * 0.6;

        // Lazy mouse follow for smooth ripple
        smoothMouse.current.x = THREE.MathUtils.lerp(smoothMouse.current.x, pointer.x, 0.05);
        smoothMouse.current.y = THREE.MathUtils.lerp(smoothMouse.current.y, pointer.y, 0.05);
        matRef.current.uniforms.uMouse.value.set(smoothMouse.current.x, smoothMouse.current.y);
    });

    return (
        <mesh
            rotation={[-Math.PI * 0.32, 0, 0.05]}
            position={[0, 1.5, -3.5]}
        >
            <planeGeometry args={[viewport.width * 2.5, viewport.height * 2.5, 200, 200]} />
            <shaderMaterial
                ref={matRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                side={THREE.DoubleSide}
                transparent
            />
        </mesh>
    );
};

// ─── Scene ─────────────────────────────────────────────────────────────────────
const Scene = () => (
    <>
        <ambientLight intensity={0.0} />
        <DotWave />
    </>
);

// ─── Export ────────────────────────────────────────────────────────────────────
const DynamicBackground = () => (
    <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        background: '#090612',
    }}>
        <Canvas
            camera={{ position: [0, 0, 7], fov: 55 }}
            gl={{ antialias: true, alpha: false }}
            dpr={[1, 2]}
            style={{ width: '100%', height: '100%' }}
        >
            <Scene />
        </Canvas>

        {/* Fade into page content */}
        <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '45vh',
            background: 'linear-gradient(to bottom, transparent, var(--bg-color))',
            pointerEvents: 'none',
        }} />
    </div>
);

export default DynamicBackground;

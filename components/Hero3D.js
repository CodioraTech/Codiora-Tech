import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, Trail, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function NeonGrid() {
    return (
        <group position={[0, -2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <gridHelper args={[60, 60, 0x6C63FF, 0x222222]} />
            <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[60, 60]} />
                <meshBasicMaterial color="#050505" opacity={0.8} transparent />
            </mesh>
        </group>
    )
}

function FloatingShape({ position, color, speed = 1 }) {
    const mesh = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed;
        mesh.current.rotation.z += 0.01;
        mesh.current.rotation.x = Math.sin(t) * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={mesh} position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color={color}
                    wireframe
                    emissive={color}
                    emissiveIntensity={2}
                    toneMapped={false}
                />
            </mesh>
        </Float>
    );
}

// Particle field offering depth and mouse interaction
function Particles({ count = 1000 }) {
    const mesh = useRef();
    const { mouse } = useThree();

    // Generate random positions
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;

        // Subtle sway based on mouse
        mesh.current.rotation.x = -mouse.y * 0.1;
        mesh.current.rotation.z = mouse.x * 0.1;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.08} color="#00E5FF" transparent opacity={0.6} sizeAttenuation />
        </points>
    )
}

// The "Octopus" - A Cyber Entity that follows the cursor with trailing arms
function CyberOctopus() {
    const { mouse, viewport } = useThree();
    const coreRef = useRef();

    // Create multiple trails ("arms")
    const numArms = 8;
    const [arms] = useState(() => new Array(numArms).fill(0).map(() => ({
        offset: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.5,
        radius: 0.5 + Math.random() * 0.5
    })));

    useFrame((state) => {
        // Map mouse (0..1) to viewport coordinates
        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;

        // Smoothly move the core to mouse position
        if (coreRef.current) {
            coreRef.current.position.x = THREE.MathUtils.lerp(coreRef.current.position.x, x, 0.1);
            coreRef.current.position.y = THREE.MathUtils.lerp(coreRef.current.position.y, y, 0.1);
            coreRef.current.rotation.z += 0.02;
        }
    });

    return (
        <group ref={coreRef} position={[0, 0, 2]}>
            {/* Core */}
            <mesh>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshStandardMaterial color="#ffffff" emissive="#00E5FF" emissiveIntensity={5} />
            </mesh>

            {/* Spotlight that shines from the entity */}
            <pointLight distance={10} intensity={2} color="#00E5FF" />

            {/* Tentacles / Arms */}
            {arms.map((arm, i) => (
                <TentacleArm key={i} armProps={arm} />
            ))}
        </group>
    );
}



function TentacleArm({ armProps }) {
    // Correcting the component definition to avoid duplicate variable name 'i' issue since it wasn't passed 
    // and using a robust trail implementation
    const meshRef = useRef();
    const color = Math.random() > 0.5 ? '#6C63FF' : '#00E5FF';

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * (armProps.speed || 1);
        meshRef.current.position.x = Math.cos(t + armProps.offset) * (armProps.radius || 1);
        meshRef.current.position.y = Math.sin(t + armProps.offset) * (armProps.radius || 1);
        meshRef.current.position.z = Math.sin(t * 3) * 0.5;
    });

    return (
        <Trail
            width={2}
            length={6}
            color={new THREE.Color(color)}
            attenuation={(t) => t * t}
        >
            <mesh ref={meshRef}>
                <sphereGeometry args={[0.05]} />
                <meshBasicMaterial color="white" />
            </mesh>
        </Trail>
    )
}

function Rig() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()

    useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, 10), 0.05)
        camera.lookAt(0, 0, 0)
    })
}

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
            <Canvas
                eventSource={typeof document !== 'undefined' ? document.body : undefined}
                eventPrefix="client"
                style={{ pointerEvents: 'none' }}
            >
                {/* Rig replaces default controls for subtle parallax */}
                <Rig />
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                {/* <color attach="background" args={['#050505']} /> Removed for transparency */}

                {/* Lighting */}
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00E5FF" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#FF2E63" />

                {/* Elements */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <NeonGrid />
                <Particles />

                <FloatingShape position={[-4, 2, -5]} color="#00E5FF" />
                <FloatingShape position={[4, -2, -2]} color="#6C63FF" />

                {/* The "Octopus" Follower */}
                <CyberOctopus />

                {/* Add fog for depth - disabled for transparent bg */}
                {/* <fog attach="fog" args={['#050505', 5, 20]} /> */}
            </Canvas>
            {/* Gradient overlay to blend canvas with content */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent pointer-events-none" />
        </div>
    );
};

export default Hero3D;

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Earth() {
    const earthRef = useRef();
    const cloudsRef = useRef();

    // Load Textures directly from stable public sources
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(THREE.TextureLoader, [
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
    ]);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        // Earth Rotation
        earthRef.current.rotation.y = elapsedTime / 6;
        // Clouds Rotation (slightly faster)
        cloudsRef.current.rotation.y = elapsedTime / 5;
    });

    return (
        <group>
            {/* Earth Sphere */}
            <mesh ref={earthRef} scale={[2.5, 2.5, 2.5]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshPhongMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    specularMap={specularMap}
                    specular={new THREE.Color('grey')}
                    shininess={10}
                />
            </mesh>

            {/* Cloud Layer */}
            <mesh ref={cloudsRef} scale={[2.53, 2.53, 2.53]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    map={cloudsMap}
                    transparent={true}
                    opacity={0.8}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* Atmosphere Glow */}
            <mesh scale={[2.7, 2.7, 2.7]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshBasicMaterial
                    color="#4db2ff"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </mesh>
        </group>
    );
}

const Globe3D = () => {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                <ambientLight intensity={3.5} />
                <pointLight position={[10, 20, 10]} intensity={3} />
                <pointLight position={[-10, -5, -10]} intensity={2.5} color="#4db2ff" />

                {/* Suspense is needed for loading textures */}
                <React.Suspense fallback={null}>
                    <Earth />
                </React.Suspense>

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}

import React from 'react'; // Ensure React is imported for Suspense
export default Globe3D;

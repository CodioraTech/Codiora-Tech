import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';
import React from 'react';

// Helper to convert Lat/Lon to 3D Position
function calcPosFromLatLonRad(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));

    return [x, y, z];
}

function OfficeMarker({ lat, lon, label, radius }) {
    const position = useMemo(() => calcPosFromLatLonRad(lat, lon, radius), [lat, lon, radius]);

    return (
        <group position={position}>
            {/* Location Pin Icon */}
            <Html>
                <div style={{ transform: 'translate(-50%, -100%)', pointerEvents: 'none' }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,1)] animate-bounce"
                    >
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    {/* Ripple Effect at the base */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400/50 rounded-full animate-ping" />
                </div>
            </Html>


        </group>
    );
}

function Earth() {
    const earthRef = useRef();
    const cloudsRef = useRef();

    // Load Textures
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(THREE.TextureLoader, [
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
    ]);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        earthRef.current.rotation.y = elapsedTime / 15; // Slower rotation
        cloudsRef.current.rotation.y = elapsedTime / 12;
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

                {/* 
                   Add Office Markers Here
                   Radius needs to be 1.0 (Unit sphere) + tiny offset to sit on surface
                   Dhaka: 23.8103° N, 90.4125° E
                */}
                <OfficeMarker lat={23.8103} lon={90.4125} label="Dhaka HQ" radius={1.01} />

                {/* Example: New York (Future Office) - Uncomment to test
                <OfficeMarker lat={40.7128} lon={-74.0060} label="USA Office" radius={1.01} /> 
                */}
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
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={3.5} />
                <pointLight position={[10, 20, 10]} intensity={3} />
                <pointLight position={[-10, -5, -10]} intensity={2.5} color="#4db2ff" />

                <React.Suspense fallback={null}>
                    <Earth />
                </React.Suspense>

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <OrbitControls
                    enableZoom={true}
                    minDistance={3}
                    maxDistance={15}
                    enablePan={false}
                    enableRotate={true}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
}

export default Globe3D;

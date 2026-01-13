import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function BoxIcon(props) {
    const mesh = useRef();
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.5;
        mesh.current.rotation.y += delta * 0.2;
        if (hovered) {
            mesh.current.rotation.x += delta * 2;
            mesh.current.rotation.y += delta;
        }
    });

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? '#FF6F00' : '#00BFA5'} />
        </mesh>
    );
}

export default BoxIcon;

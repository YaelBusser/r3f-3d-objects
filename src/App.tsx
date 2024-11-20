import './App.css'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {BackSide, DoubleSide, FrontSide} from "three";

function App() {
    return (
        <Canvas camera={{
            position: [3, 3, 3]
        }}>
            {
                /*
                   mesh Normal/Basic ne réagissent pas à la lumière
                */
            }
            <OrbitControls/>
            <mesh position={[-4, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 1, 32]}/>
                <meshNormalMaterial/>
            </mesh>
            <mesh position={[-2, 0, 0]}>
                <planeGeometry args={[1, 1]}/>
                <meshBasicMaterial color={0x530FFA} side={DoubleSide}/>
            </mesh>
            <mesh position={[2, 0, 0]}>
                <sphereGeometry args={[0.5, 64, 32]}/>
                <meshNormalMaterial/>
            </mesh>
            <mesh>
                <boxGeometry args={[1, 1, 1]}/>
                <meshBasicMaterial color={0x00ff00}/>
            </mesh>
            {
                /*
                    meshStandardMaterial réagit à la lumière (si pas de lumière alors noir)
                    Il faut donc ajouter une lumière (ex : ambientLight avec directionalLight)
                 */
            }
            <mesh position={[4, 0, 0]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[4, 2, -2]} intensity={0.7}/>
                <directionalLight position={[6, 1, 2]} intensity={0.6}/>
            </mesh>
            <mesh position={[6, 0, 0]}>
                <torusKnotGeometry args={[0.3, 0.1, 120, 20]}/>
                <meshToonMaterial color={"pink"}/>
            </mesh>
            {
                /*
                    Side material
                 */
            }
            <mesh position={[-6, 0, 0]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={"pink"} side={FrontSide}/>
            </mesh>
            <mesh position={[-6, 2, 0]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={"pink"} side={BackSide} />
            </mesh>
            <mesh position={[-6, 4, 0]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={"pink"} side={DoubleSide} />
            </mesh>
        </Canvas>
    )
}

export default App

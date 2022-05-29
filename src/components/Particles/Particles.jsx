import { useCallback } from "react";
import { loadFull } from "tsparticles";
import particlesOptions from './particles.json';
import Particles from "react-tsparticles";
import './Particles.css';

const ParticlesComponent = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    
    return (
        <Particles id="particles" options={particlesOptions} init={particlesInit} />
    )
}

export default ParticlesComponent;
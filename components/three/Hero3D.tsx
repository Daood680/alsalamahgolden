'use client';
import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';
function Block({ position }: { position: [number, number, number] }) { return (<mesh position={position} castShadow receiveShadow><boxGeometry args={[1,1.5,1]} /><meshStandardMaterial color="#D4AF37" roughness={0.4} metalness={0.6} /></mesh>); }
export default function Hero3D() { return (<div className="absolute inset-0"><Canvas camera={{ position:[4,4,7], fov:35 }} shadows><ambientLight intensity={0.4} /><directionalLight position={[5,10,5]} intensity={1.2} castShadow /><Suspense fallback={null}><Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>{[...Array(12)].map((_, i) => { const x = (i % 4) - 2; const z = Math.floor(i / 4) - 1; const y = Math.random() * 0.5; return <Block key={i} position={[x * 1.3, y, z * 1.3]} />; })}</Float><Environment preset="city" /></Suspense></Canvas></div>); }
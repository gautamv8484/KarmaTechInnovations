import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Environment, Sphere, TorusKnot } from '@react-three/drei';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-light-bg pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <Environment preset="city" />
          
          <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
            <TorusKnot args={[1.5, 0.4, 200, 32]} position={[0, 0, -2]} scale={1.2}>
              <MeshDistortMaterial
                color="#6C63FF"
                attach="material"
                distort={0.2}
                speed={1.5}
                roughness={0.1}
                metalness={0.8}
                clearcoat={1}
                clearcoatRoughness={0.1}
                envMapIntensity={2}
              />
            </TorusKnot>
          </Float>

          <Float speed={3} rotationIntensity={2} floatIntensity={2}>
            <Sphere args={[0.8, 64, 64]} position={[-4, 2, -4]}>
              <MeshDistortMaterial color="#00D9FF" roughness={0.1} metalness={0.6} distort={0.3} speed={2} />
            </Sphere>
          </Float>

          <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere args={[1, 64, 64]} position={[4, -2, -3]}>
              <MeshDistortMaterial color="#FF6B6B" roughness={0.1} metalness={0.6} distort={0.4} speed={1.5} />
            </Sphere>
          </Float>

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-10 md:p-16 max-w-4xl mx-auto backdrop-blur-xl bg-white/60 shadow-elegant"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-white shadow-soft rounded-full px-6 py-2 mb-6"
          >
            <span className="text-slate-text font-bold text-sm tracking-wide">👋 Welcome to KARMA </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-7xl font-display font-extrabold mb-6 tracking-tight leading-tight text-slate-text">
            We Build <br />
            <span className="bg-clip-text text-transparent bg-brand-gradient drop-shadow-sm">Digital Experiences</span><br />
            That Matter
          </h1>
          
          <p className="text-lg md:text-xl text-slate-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            We craft stunning websites, powerful mobile apps & beautiful designs that grow your business. From idea to launch — we handle everything.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['🌐 Web Development', '📱 App Development', '🎨 Graphic Design'].map((tag, idx) => (
              <span key={idx} className="px-5 py-2.5 bg-white border border-gray-100 shadow-sm rounded-xl text-sm font-bold text-electric-purple hover:-translate-y-1 transition-transform cursor-default">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#work" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-electric-purple text-white font-bold hover:shadow-purple-glow hover:-translate-y-1 transition-all duration-300 text-center">
              View Our Work 🚀
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-text border border-gray-200 font-bold hover:shadow-soft hover:-translate-y-1 transition-all duration-300 text-center">
              Let's Talk 💬
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

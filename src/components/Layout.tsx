import { useCallback } from 'react';

import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import { Engine } from 'tsparticles-engine';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';

import { particlesOptions } from 'particles/hexagon.particles';
// import { particlesOptions } from 'particles/bg-mask.particles';

import 'styles/globals.scss';
// import Header from './components/header/Header';
import { useWindowSize } from 'usehooks-ts';
import Header from './header/Header';
import { styles } from 'styles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { width, height } = useWindowSize();
  const numParticles = width && height ? Math.round(Math.sqrt(width * height) / 6) : 100;

  if (particlesOptions?.particles?.number?.value) {
    particlesOptions.particles.number.value = numParticles;
  }

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  return (
    <div>
      <Particles options={particlesOptions} init={particlesInit} />
      <Header />
      <main className={`${styles.innerWidth} flex flex-col`}>{children}</main>
    </div>
  );
}

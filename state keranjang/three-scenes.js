const ThreeScenes = {
  scenes: {},

  // 1. 3D Background pada Halaman Login / Sign Up
  initAuthScene() {
    const container = document.getElementById('auth-canvas-container');
    if (!container || this.scenes.auth) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Wireframe TorusKnot + Floating Particles
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.45, 120, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0xbef264,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.004 + mouseY * 0.01;
      mesh.rotation.y += 0.006 + mouseX * 0.01;
      renderer.render(scene, camera);
    };
    animate();

    this.scenes.auth = { container, camera, renderer };
  },

  // 2. 3D Showcase pada Hero Dashboard
  initHeroScene() {
    const container = document.getElementById('hero-canvas-container');
    if (!container) return;

    if (this.scenes.hero) {
      this.resizeScene('hero');
      return;
    }

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 5.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const keyLight = new THREE.DirectionalLight(0xbef264, 1.5);
    keyLight.position.set(4, 6, 4);
    const rimLight = new THREE.PointLight(0x34d399, 1.2);
    rimLight.position.set(-4, -2, 3);
    scene.add(ambientLight, keyLight, rimLight);

    // Group Sculpted Fashion Emblem
    const group = new THREE.Group();

    const coreGeo = new THREE.IcosahedronGeometry(1.25, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.85,
      roughness: 0.2
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);

    const ringGeo = new THREE.TorusGeometry(1.85, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xbef264 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 3;

    group.add(coreMesh, ring1, ring2);
    scene.add(group);

    // Drag interaction
    let isDragging = false, prevX = 0;
    container.addEventListener('mousedown', (e) => { isDragging = true; prevX = e.clientX; });
    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      group.rotation.y += (e.clientX - prevX) * 0.01;
      prevX = e.clientX;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      if (!isDragging) group.rotation.y += 0.008;
      ring1.rotation.z += 0.01;
      ring2.rotation.x -= 0.01;
      renderer.render(scene, camera);
    };
    animate();

    this.scenes.hero = { container, camera, renderer };
  },

  // 3. 3D Product Customizer pada Halaman Detail Item
  initDetailScene(modelType, initialHex) {
    const container = document.getElementById('detail-canvas-container');
    if (!container) return;

    container.innerHTML = ''; // Reset canvas sebelumnya
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.75);
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.3);
    dirLight1.position.set(5, 8, 6);
    const dirLight2 = new THREE.DirectionalLight(0xbef264, 0.6);
    dirLight2.position.set(-5, -3, -4);
    scene.add(ambient, dirLight1, dirLight2);

    // Garment Material (bisa diubah warnanya secara real-time)
    const garmentMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(initialHex),
      roughness: 0.45,
      metalness: 0.15
    });

    const accentMat = new THREE.MeshStandardMaterial({
      color: 0xbef264,
      roughness: 0.3,
      metalness: 0.7
    });

    const modelGroup = this.buildGarmentMesh(modelType, garmentMat, accentMat);
    scene.add(modelGroup);

    // Floor Grid Ring
    const baseRing = new THREE.Mesh(
      new THREE.RingGeometry(1.4, 1.48, 64),
      new THREE.MeshBasicMaterial({ color: 0xbef264, side: THREE.DoubleSide, transparent: true, opacity: 0.4 })
    );
    baseRing.rotation.x = -Math.PI / 2;
    baseRing.position.y = -1.65;
    scene.add(baseRing);

    // 360 Drag Control
    let isDragging = false, prevX = 0, prevY = 0;
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    });
    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      modelGroup.rotation.y += (e.clientX - prevX) * 0.012;
      modelGroup.rotation.x = Math.max(-0.5, Math.min(0.5, modelGroup.rotation.x + (e.clientY - prevY) * 0.008));
      prevX = e.clientX;
      prevY = e.clientY;
    });

    // Touch Support untuk Mobile
    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      prevX = e.touches[0].clientX;
    });
    container.addEventListener('touchend', () => { isDragging = false; });
    container.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      modelGroup.rotation.y += (e.touches[0].clientX - prevX) * 0.015;
      prevX = e.touches[0].clientX;
    });

    document.getElementById('btn-reset-3d').onclick = () => {
      modelGroup.rotation.set(0, 0, 0);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (!isDragging) modelGroup.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    this.scenes.detail = { container, camera, renderer, garmentMat };
  },

  // Membangun Siluet 3D berdasarkan kategori pakaian
  buildGarmentMesh(type, mainMat, accentMat) {
    const group = new THREE.Group();

    if (type === 'jacket' || type === 'hoodie' || type === 'tee') {
      // Torso
      const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 2.1, 24), mainMat);
      torso.scale.set(1.15, 1, 0.65);
      group.add(torso);

      // Collar / Hood
      const collar = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.12, 16, 32), accentMat);
      collar.rotation.x = Math.PI / 2;
      collar.position.y = 1.08;
      group.add(collar);

      // Left & Right Sleeves
      const sleeveLen = type === 'tee' ? 0.85 : 1.55;
      const sleeveGeo = new THREE.CylinderGeometry(0.26, 0.22, sleeveLen, 16);

      const leftSleeve = new THREE.Mesh(sleeveGeo, mainMat);
      leftSleeve.position.set(-1.05, type === 'tee' ? 0.55 : 0.25, 0);
      leftSleeve.rotation.z = 0.42;

      const rightSleeve = new THREE.Mesh(sleeveGeo, mainMat);
      rightSleeve.position.set(1.05, type === 'tee' ? 0.55 : 0.25, 0);
      rightSleeve.rotation.z = -0.42;

      group.add(leftSleeve, rightSleeve);
    } else if (type === 'pants') {
      // Waistband
      const waist = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.75, 0.45, 24), accentMat);
      waist.scale.set(1.15, 1, 0.65);
      waist.position.y = 0.85;
      group.add(waist);

      // Left & Right Legs
      const legGeo = new THREE.CylinderGeometry(0.34, 0.28, 2.0, 18);
      const leftLeg = new THREE.Mesh(legGeo, mainMat);
      leftLeg.position.set(-0.4, -0.35, 0);

      const rightLeg = new THREE.Mesh(legGeo, mainMat);
      rightLeg.position.set(0.4, -0.35, 0);

      group.add(leftLeg, rightLeg);
    } else if (type === 'footwear') {
      // Sole
      const sole = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.35, 2.4), accentMat);
      sole.position.y = -0.6;

      // Upper Shoe Body
      const upper = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.85, 2.1), mainMat);
      upper.position.set(0, -0.05, -0.1);

      // Ankle Collar
      const ankle = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.48, 0.7, 20), mainMat);
      ankle.position.set(0, 0.55, -0.55);

      group.add(sole, upper, ankle);
    }

    return group;
  },

  // Update warna material 3D secara real-time
  updateDetailColor(hex) {
    if (this.scenes.detail && this.scenes.detail.garmentMat) {
      this.scenes.detail.garmentMat.color.set(hex);
    }
  },

  resizeScene(key) {
    const s = this.scenes[key];
    if (!s || !s.container.clientWidth) return;
    s.camera.aspect = s.container.clientWidth / s.container.clientHeight;
    s.camera.updateProjectionMatrix();
    s.renderer.setSize(s.container.clientWidth, s.container.clientHeight);
  }
};

window.addEventListener('resize', () => {
  Object.keys(ThreeScenes.scenes).forEach((key) => ThreeScenes.resizeScene(key));
});
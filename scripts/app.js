// Add to initThreeJS():
document.addEventListener('mousemove', (e) => {
    particles.forEach(p => {
        p.rotation.x += (e.clientX - window.innerWidth/2) * 0.00001;
        p.rotation.y += (e.clientY - window.innerHeight/2) * 0.00001;
    });
});

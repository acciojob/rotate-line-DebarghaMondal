const line = document.getElementById('line');
    let angle = 0;

    function rotateLine() {
      angle += 2;
      line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      requestAnimationFrame(rotateLine);
    }

    // Start rotating the line
    rotateLine();
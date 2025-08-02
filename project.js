
    function rippleEffect(e, link) {
      const button = e.currentTarget;
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const rect = button.getBoundingClientRect();

      circle.classList.add("ripple");
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
      circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;

      button.appendChild(circle);

      setTimeout(() => {
        circle.remove();
        window.open(link, "_blank");
      }, 700);
    }
  

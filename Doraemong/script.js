const main = function(selector) {
    const eye = document.querySelector(selector);
    const pupil = eye.querySelector('.pupil');
    const eyesRange = eye.getBoundingClientRect();

    const rolingEyes = function(mouseX, mouseY) {
        const radian = Math.atan2(mouseY - (eyesRange.y + eyesRange.height * 0.5),
                       mouseX - (eyesRange.x + eyesRange.width * 0.5));
        pupil.style.transform = 'rotate(' + (180 * radian / Math.PI - 90) + 'deg)';
    };

    return {
        rolingEyes: rolingEyes
    };
};

const eye1 = main('#eye1');
const eye2 = main('#eye2');

// 마우스가 움직일 때마다 마우스 포인터의 x좌표와 y좌표를 전달
window.addEventListener('mousemove', function(e) {
    eye1.rolingEyes(e.pageX, e.pageY);
    eye2.rolingEyes(e.pageX, e.pageY)
});
'use strict';

const squareBody = document.querySelector('.square-body');
const btnReset = document.querySelector('.btn-reset');

const changePosition = (block, direction) => {
    const numA = block.querySelector('.block-number').textContent;
    const coordinates = block.getBoundingClientRect();
    const height = coordinates.height;
    const width = coordinates.width;
    const x = coordinates.x + (width / 2);
    const y = coordinates.y + (height / 2);

    let targetElem;

    switch (direction) {
        case 'top':
            targetElem = document.elementFromPoint(x, y - height) || document.elementFromPoint(x - width, 650);
            if (targetElem.closest('.square-body')) {
                const numB = targetElem.textContent;
                targetElem.textContent = numA;
                block.querySelector('.block-number').textContent = numB;
            }
            break;
        case 'left':
            targetElem = document.elementFromPoint(x - width, y);
            if (!targetElem.closest('.square-body')) {
                targetElem = document.elementFromPoint(1200, y - height);
            }
            if (targetElem && targetElem.closest('.square-body')) {
                const numB = targetElem.textContent;
                targetElem.textContent = numA;
                block.querySelector('.block-number').textContent = numB;
            }
            break;
        case 'right':
            targetElem = document.elementFromPoint(x + width, y);
            if (!targetElem.closest('.square-body')) {
                targetElem = document.elementFromPoint(650, y + height);
            }
            if (targetElem && targetElem.closest('.square-body')) {
                const numB = targetElem.textContent;
                targetElem.textContent = numA;
                block.querySelector('.block-number').textContent = numB;
            }
            break;
        case 'bottom':
            targetElem = document.elementFromPoint(x, y + height);
            if (!targetElem.closest('.square-body')) {
                targetElem = document.elementFromPoint(x + width, 15);
            }
            if (targetElem && targetElem.closest('.square-body')) {
                const numB = targetElem.textContent;
                targetElem.textContent = numA;
                block.querySelector('.block-number').textContent = numB;
            }
            break;
    }
};

const resetField = () => {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block, index) => {
        block.querySelector('.block-number').textContent = index + 1;
    });
};

squareBody.addEventListener('click', e => {
    if (e.target.closest('.arrow')) {
        const block = e.target.closest('.block');
        const direction = e.target.closest('.arrow').classList[1];
        changePosition(block, direction);
    }
});

btnReset.addEventListener('click', resetField);
//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', function() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Check if blockId is valid
    if (blockId >= 1 && blockId <= 9) {
        const block = document.getElementById(blockId);
        block.style.backgroundColor = color;
    } else {
        alert('Please enter a valid block ID between 1 and 9.');
    }
});

document.getElementById('reset').addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    
    // Reset all blocks to transparent
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
});
'use strict'
// html references
const jjkVideo = document.querySelector('#myVideo')
const jjkAudio = document.querySelector('#jjkAudio')
const moonVideo = document.querySelector('#moonVideo')
const moonAudio = document.querySelector('#moonAudio')
const box = document.querySelector('#main')
const myAudio = document.querySelector('#myAudio')
const container = document.querySelector('.container')
const blackImage = document.querySelector('#blackImage')
document.addEventListener('keydown', keyBoardMovements )
///
//background jjk Track
const jjkTrack = []
//background moon Track
const moonTrack = []
// an array in order to save the last Background color and keep track of it
const bgcHistory = ['#ff7221']
// music control by tracking it
const musicTrack = []
// moving left and right basics(x) stores in positionTrackerX
// moving up and down basics(y) stores in positionTrackerY
let positionTrackerX = 0
let positionTrackerY = 0
// keyboard function based on moves
function keyBoardMovements(keyboardEvent) {
    // show the pressed keys
    console.log(keyboardEvent.key);

    switch (keyboardEvent.key) { 
        // bgc section begins
        case '1':  
            box.style.backgroundColor = 'red';
            bgcHistory.push('red');
            break;
        case '2':  
            box.style.backgroundColor = 'green'
            bgcHistory.push('green');
            break;
                
        case '3':
            box.style.backgroundColor = 'blue'
            bgcHistory.push('blue');
            break; 
        // bgc section ends
        // movement section begins
        case 'ArrowLeft':
        case 'A':
        case 'a':
        case 'ش': 
            // (container.style.width / 2)-100) > (box.style.transform.translate.x) :
            if (positionTrackerX > -500) {
                positionTrackerX -= 10;
            } else {
                console.log('cant go more than width(leftside)');
            }
            break;
        case 'ArrowRight':
        case 'D':
        case 'd':
        case 'ی':
            // (container.style.width / 2)-100) > (box.style.transform.translate.x) :
            if (positionTrackerX < +500) {
                positionTrackerX += 10;
            } else {
                console.log('cant go more than width(rightside)');
            }
            break;
        case 'ArrowUp':
        case 'W':
        case 'w':
        case 'ص':
            // (container.style.height / 2)-100) > (box.style.transform.translate.y) :
            if (positionTrackerY > -300) {
                positionTrackerY -= 10;
            } else {
                console.log('cant go more than height(upside)');
            }
            break;
        case 'ArrowDown':
        case 'S':
        case 's':
        case 'س':
            // (container.style.height / 2)-100) > (box.style.transform.translate.y) :
            if (positionTrackerY < +300) {
                positionTrackerY += 10;
            } else {
                console.log('cant go more than height(upside)');
            }
            break; 
        // movement section ends
        case ' ':
            // keep track of space key press
            musicTrack.push('spaceUsed')
            // if the number is even, play it
            if (musicTrack.length % 2 != 0) {
                // HTMLMediaElement: play()
                myAudio.play()
                console.log('play music track');
            // if the number is odd, pause it
            } else {
                // HTMLMediaElement: pause()
                myAudio.pause()
                console.log('pause music track');
            }
            break
        case 'M':
        case 'm':
        case 'ئ':
            jjkTrack.push('m')
            if (jjkTrack.length % 2 != 0) {
                // HTMLMediaElement: play()
                moonAudio.pause()
                moonVideo.pause()
                document.body.style.backgroundColor = '#1e1d1d'
                container.style.opacity = '1'
                moonVideo.style.opacity = '0'
                //then
                jjkAudio.play()
                jjkVideo.play()
                document.body.style.backgroundColor = 'black'
                container.style.opacity = '0'
                jjkVideo.style.opacity = '1'
                console.log('play music track');
                // if the number is odd, pause it
            } else {
                // HTMLMediaElement: pause()
                jjkAudio.pause()
                jjkVideo.pause()
                document.body.style.backgroundColor = '#1e1d1d'
                container.style.opacity = '1'
                jjkVideo.style.opacity = '0'
                console.log('jjk not happeining anymore');
                //
                moonAudio.pause()
                moonVideo.pause()
                document.body.style.backgroundColor = '#1e1d1d'
                container.style.opacity = '1'
                moonVideo.style.opacity = '0'
                console.log('moon not happeining');
            }
            break
        case 'N':
        case 'n':
        case 'د':
            moonTrack.push('m')
            if (moonTrack.length % 2 != 0) {
                // HTMLMediaElement: play()
                jjkAudio.pause()
                jjkVideo.pause()
                document.body.style.backgroundColor = '#1e1d1d'
                container.style.opacity = '1'
                jjkVideo.style.opacity = '0'
                //then
                moonAudio.play()
                moonVideo.play()
                document.body.style.backgroundColor = 'black'
                container.style.opacity = '0'
                moonVideo.style.opacity = '1'
                console.log('play music track');
                // if the number is odd, pause it
            } else {
                // HTMLMediaElement: pause()
                moonAudio.pause()
                moonVideo.pause()
                document.body.style.backgroundColor = '#1e1d1d'
                container.style.opacity = '1'
                moonVideo.style.opacity = '0'
                console.log('going to moon not happeining anymore');
                //
                jjkAudio.pause()
                jjkVideo.pause()
                document.body.style.backgroundColor = '#1e1d1d'
                container.style.opacity = '1'
                jjkVideo.style.opacity = '0'
            }
            break
        case 'Escape':
            // in order to close the current tab
            window.close()
            break
        default:
            // if the pressed key is not defined show this in clg
            console.log('Pressed key not defined');
            break;
    }
    // calls updateTransform function in order update the changes in css Transform property, without this, changes in positionTrackerY or positionTrackerX wont be updated to css transform property
    updateTransform()
}
// keyboard function ends here
// funtion to update transform property of box
function updateTransform() {
    // translate(x, y) transform property to store current data, here we used template literals to create the transform string
    box.style.transform = `translate(${positionTrackerX}px , ${positionTrackerY}px)`;
    // clg in order to show us current position of box - translate(x, y)
    console.log(box.style.transform);
}
//hover in function
box.addEventListener('mouseover', mouseMovementIn )
function mouseMovementIn(mouseEvent) {
    box.style.backgroundColor = 'black'
    blackImage.style.opacity = '1'
}
//
//hover out function
box.addEventListener('mouseout', mouseMovementOut )
function mouseMovementOut(mouseEvent) {
    // we used bgcHistory.length - 1 ==> because index begins with 0 but length begins with 1..
    box.style.backgroundColor = bgcHistory[bgcHistory.length - 1]
    blackImage.style.opacity = '0'
}

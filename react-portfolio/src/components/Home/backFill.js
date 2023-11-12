export const backFill = () =>{

    setTimeout(() => {
        const upperPath = document.querySelector('.upper-path');
        upperPath.style =`
        background-color : #fff;
        `
    }, 4500);

    setTimeout(() => {
        const leftLower = document.querySelector('.left-lower');
        const leftUpper = document.querySelector('.left-upper');
        leftLower.style =`
        background-color : #fff;
        `
        leftUpper.style =`
        background-color : #fff;
        `
    }, 5000);

    setTimeout(() => {
        const rightSide = document.querySelector('.right-side');
        rightSide.style =`
        background-color : #fff;
        `
    }, 6000);
}
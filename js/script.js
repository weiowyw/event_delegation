

const value = document.querySelector("#value");

let count = 0;

const container = document.querySelector(".container_button");

const handleContainerClick = (e) => {
    const event = e.target.dataset.action;

    switch(event){
        case 'decrease':
            count -= 100;
            break;
        case 'reset':
            count = 0;
            break;
        case 'increase':
            count += 100;
            break;
        default:
            return;
    }
    value.innerHTML = count;

}

container.addEventListener('click', handleContainerClick);


